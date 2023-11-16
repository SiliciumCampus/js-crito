import React from 'react'

import SectionTitle from '../genericComponents/SectionTitle'
import Buttons from '../genericComponents/Buttons'
import ArticleBox from '../genericComponents/ArticleBox'
import { useArticles } from '../../contexts/ArticleContext'

const ArticleAndNews = () => {

  const { articles }  = useArticles()
  const slicedArticles = articles.slice(0, 3);
  return (
    <section className="article-and-news-section">
      <div className='article-and-news-div'>
        <SectionTitle section="Article & News" title="Get Every Single Articles & News" />
        <Buttons theme="gray" text="Browse Articles" url="/"  />
      </div>
      
      {
        slicedArticles.map(article => (
          <ArticleBox key={article.id} title={article.title} img={article.imageUrl} category={article.category} content= {article.content} date={article.published} />
          
        ))
      }
    </section>
  )
}

export default ArticleAndNews