import React, { useEffect, useState } from 'react';

function DisplayDescriptions(props) {
  const
    [title, updateTitle] = useState(''),
    [click, updateClick] = useState(false);

  useEffect(() => {
    document.title = `UNSD SDG ${title}`;
  }, [title]);

  const showDescription = () => {
    if (click) {
      updateClick(false)
      updateTitle(``)

    }
    else {
      updateClick(true)
      updateTitle(`- ${props.title}`)
    }
  }
  return (
    <article>
      <div className="content">
        <h2 onClick={showDescription} className="content-title">{props.title}</h2>
        {click &&
          <div className="content-description">
            {props.displayDescriptions}
          </div>
        }
      </div>
    </article>
  )
}

export default DisplayDescriptions;