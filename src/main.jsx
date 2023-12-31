import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ArticleProvider } from './contexts/ArticleContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ArticleProvider>
        <div className="wrapper">
          <Header />
          <App />
          <Footer />
        </div>
      </ArticleProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
