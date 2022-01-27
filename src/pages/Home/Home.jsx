import React from "react";
import { Slider } from "../../components/Partials/Carousel/Carousel";
import Styles from "./Home.module.scss"
import { NewsList } from "../../components/Partials/News/NewsList";

export const Home = () => {

    return (
        <>
            <Slider/>
            <div className={Styles.container}>
                <h2>Vi skaber lækkert! brød</h2>
                <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud.</p>
            </div>
            <NewsList />
        </>
    )
}