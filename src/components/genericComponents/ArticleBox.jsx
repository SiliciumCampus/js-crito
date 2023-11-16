import React from 'react'
import DateConverter from './DateConverter'

const ArticleDisplay = ({ date, title, img, category, content }) => {


  return (
    <div className="article-box">
      <div className="img-border">
        <div className="img-div">
          <img className="article-img" src={img} />
          <div className="date">
            <DateConverter date={date} />
          </div>
        </div>
      </div>
      <div className="text-div">
        <div className="text-box">
          <p className="category">{category}</p>
          <h3 className="title">{title}</h3>
          <p className="content-text">{content}</p>
        </div>
      </div>
    </div>
  )
}

export default ArticleDisplay