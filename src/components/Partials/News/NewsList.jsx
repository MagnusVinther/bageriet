import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import style from './NewsList.module.scss'

export const NewsList = () => {
    const [ news, setNews ] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const url = 'https://api.mediehuset.net/bakeonline/news';
            const result = await axios.get(url);
            setNews(result.data.items); 
        }
        getData();
    }, [setNews]);

    console.log(news);

    return (
        <>
        <section className={style.news}>
            {news && news.map(newsItem => {
                return (
                    <figure>
                        <img src={newsItem.image} alt="newsImage" />
                        <figcaption>
                            <h3 key={newsItem.id}>
                                <Link to={newsItem.id}>{newsItem.title}</Link>
                            </h3>
                            <p>{newsItem.teaser}</p>
                        </figcaption>
                    </figure>
                )
            })}
        </section>
        </>
    )
}