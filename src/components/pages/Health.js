import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../Card';
import './AllStyle.css'


function Health() {

  const [news, setNews] = useState([]);

  async function fetchNews() {
    const result = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=8761cd4159054dc5b4bf33853e83bd0d');
    setNews(result.data.articles)
  }

  useEffect(() => {
    fetchNews();
  }, []);

  console.log(news); 



  return (
    <div>
    <h3 className="header mb-5 mt-5">Health News</h3>
    <div className="row me-2 ms-2">

{ news.map((item) => (
<>
<Card item={item}/>
</>
))}
      
     
  
</div>
</div>  )
}

export default Health