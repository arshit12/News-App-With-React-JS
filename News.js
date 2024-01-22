

import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import "./News.css";
import ThemeChanger from './Darkmode'; 

export default function News() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isDarkMode, setDarkMode] = useState(false); 

  const fetchData = async () => {
    const data = await fetch(`https://newsapi.org/v2/everything?q=${search}&from=2023-12-22&sortBy=publishedAt&apiKey=fd639d58700843a59225a0c6ffcedab1`);
    const response = await data.json();
    setData(response.articles);
  }

  useEffect(() => {
    fetchData();
  }, [search, fetchData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  }

  return (
    <div className={`main ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <ThemeChanger setDarkMode={setDarkMode} isDarkMode={isDarkMode} />
      <form className='form' onSubmit={handleSubmit}>
        <input placeholder='Enter search query' className='input' type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button className='btnn'>Search</button>
      </form>
      {data ? (
        <ul className='container'>
          {data.map((item, index) => (
            <Newsitem key={index} title={item.title} description={item.description} img={item.urlToImage} url={item.url} />
          ))}
        </ul>
      ) : (
        <div>
          <h1 style={{fontFamily:"italic"}}>Please enter a query to make a search</h1>
        </div>
      )}
    </div>
  );
}
