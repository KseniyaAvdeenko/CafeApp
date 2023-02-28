import React, {useEffect, useState} from "react";
import CafeService from "./CafeService";
import slider_img_1 from "../img/гриль1.jpg";
import slider_img_2 from "../img/гриль2.jpg";
import slider_img_3 from "../img/гриль3.jpeg";
import slider_img_4 from "../img/гриль4.jpeg";
import slider_img_5 from "../img/гриль5.jpeg";
import slider_img_6 from "../img/гриль6.jpeg";
import slider_img_7 from "../img/гриль7.jpg";


const cafeService = new CafeService();
export default function Top3() {

    const [top, setTop] = useState([])
    useEffect(() => {
        cafeService.getTopMeals().then(function (result) {
            setTop(result);
        })
    },)


    return (
        <div className='wrapper'>
            <div className="slider">
                <div className="flex">
                    <div className="slider-box slider_xl-size">
                        <img src={slider_img_1} alt="" className="slider__img" height="500"/>
                        <img src={slider_img_2} alt="" className="slider__img" height="500"/>
                        <img src={slider_img_3} alt="" className="slider__img" height="500"/>
                        <img src={slider_img_4} alt="" className="slider__img" height="500"/>
                        <img src={slider_img_5} alt="" className="slider__img" height="500"/>
                        <img src={slider_img_6} alt="" className="slider__img" height="500"/>
                        <img src={slider_img_7} alt="" className="slider__img" height="500"/>
                    </div>
                </div>
            </div>
            <section className="main">
                <div className="flex">
                    <div className="menu position_center">
                        <h2 className="menu-title title_size menu__item_style">Топ-3 блюда</h2>
                        <div className="top3 menu__item_style">
                                { top.map((top_meal, index) =>
                                    <div className="top__meal" key={index}>
                                        <div className="top__meal__name">{top_meal.name}:</div>
                                        <div className="clicks">{top_meal.click_count} нажатий</div>
                                    </div>
                                    )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};