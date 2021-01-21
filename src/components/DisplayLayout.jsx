import React, { useEffect, useState } from 'react';

function DisplayLayout(props) {
  const
    [title, updateTitle] = useState(''),
    [click, updateClick] = useState(false);

  useEffect(() => {
    document.title = `UNSD SDG ${title}`;
  }, [title]);

  const showDescription = (e) => {
   
    if (click) {
      updateClick(false)
      updateTitle('')
    }
    else {
      updateClick(true)
      updateTitle(`- ${props.title}`)
    }
  }

  const displayDescriptions = () => {
    return props.displayDescriptions.map((value, key) => <h3 className={'content-description'} key={key}>{value.description}</h3>)
  }

  return (
    <article>
      <div className="content">
        <h2 onClick={showDescription} className="content-title">{props.title}</h2>
        {click &&
          <div className="content-description">
            {displayDescriptions()}
          </div>
        }
      </div>
    </article>
  )
}

export default DisplayLayout;