import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopNews = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9d2a62c4f79c43268504c5e41f5a3d34';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setArticles(data.articles);
        })
    }, [])
    return (
        <div>
            <h1>Articles length: {articles.length}</h1>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopNews;