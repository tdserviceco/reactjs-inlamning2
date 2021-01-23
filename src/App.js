import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import DisplayLayout from './components/DisplayLayout';
import loadingGifImage from '../src/img/preview.gif';
function App() {
  const
    endpoint = process.env.APIENDPOINT,
    [sdgData, updateDataFromSdgData] = useState([]),
    [loading, updateLoading] = useState(true),

    GetGoal = async () => {
      return await Axios.get(endpoint);
    },
    SdgData = () => {
      return sdgData.map((data, key) => <DisplayLayout title={data.title} key={key} displayDescriptions={data.targets} />);
    };
  useEffect(() => {
    document.title = "UNSD SDG";
    GetGoal().then(res => {
      console.log(res)
      updateLoading(false)
      updateDataFromSdgData(res.data)
    })
  }, []);

  return (

    <main>


      <div className="list-of-titles">
        <div className="head-title">
          <h1>Titles for FN articles</h1>
        </div>
        {loading &&
          <img className="preview" src={loadingGifImage} alt="bouncing loading animation" />
        }
        {!loading &&
          <div className="articles">
            {SdgData()}
          </div>
        }
      </div>
    </main>
  )
}

export default App;