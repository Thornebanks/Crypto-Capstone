import { useEffect, useState } from "react";
import axios from "axios";


const key = process.env.REACT_APP_API_KEY2;

function NewsFeed(){

    const [newsArticel, setNewsArticel] = useState(null)

    useEffect(() => {

        const options = {
          method: 'GET',
          url: 'https://crypto-news-live.p.rapidapi.com/news/coindesk',
          headers: {
            'x-rapidapi-host': 'crypto-news-live.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_API_KEY2
          }
        };
        
        axios.request(options).then((response) => {
            console.log(response.data);
            setNewsArticel(response.data)

        }).catch((error) => {
            console.error(error);
        });
    }, [])

        console.log(newsArticel)

       const news = newsArticel?.slice(0,7)

    return(
        <div className="NewsFeed">
            <h2>News About Crypto</h2>
            {news.map((articles, i) => (
            <div key={i}>
               <a href={articles.url}>
                   <p>{articles.title}</p>
               </a>
                </div>))}
        </div>
    )
}

export default NewsFeed;