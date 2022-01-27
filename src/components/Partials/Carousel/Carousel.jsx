import React from "react";

import Slide1 from '../../../assets/Images/slide1.jpg'
import Slide2 from '../../../assets/Images/slide2.jpg'
import Slide3 from '../../../assets/Images/slide3.jpg'
import Carousel from "react-material-ui-carousel";
import Style from './Carousel.module.scss'

export function Slider() {
    
    const carouselItems = [
        {
            url: Slide1,
            desc: "Vi elsker at lave brød!",
            alt: 'vi_elsker_broed'
        },
        {
            url: Slide2,
            desc: "Brød er håndværk",
            alt: 'Broed_er_haandvaerk'
        },
        {
            url: Slide3,
            desc: "Brød bagt med sjæl",
            alt: 'Broed_bagt_med_sjael'
        }
    ];

    function Item(props) {
        return (
            <div className={Style.slide}>
                    <img alt={props.item.alt} src={props.item.url} />

                    <figcaption>
                        <h3>{props.item.desc}</h3>
                    </figcaption>

            </div>
        )
    }

    return (
        <>
            <Carousel animation="fade" interval="5000">
                {
                    carouselItems.map((item, index) => {
                        return (
                            <Item key={index} item={item} />
                        )
                    })
                }
            </Carousel>
        </>
    )

}
