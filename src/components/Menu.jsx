import React, {useEffect, useState} from "react";
import CafeService from "./CafeService";
import slider_img_1 from '../img/гриль1.jpg'
import slider_img_2 from '../img/гриль2.jpg'
import slider_img_3 from '../img/гриль3.jpeg'
import slider_img_4 from '../img/гриль4.jpeg'
import slider_img_5 from '../img/гриль5.jpeg'
import slider_img_6 from '../img/гриль6.jpeg'
import slider_img_7 from '../img/гриль7.jpg'
import {Link} from "react-router-dom";

const cafeService = new CafeService();
export default function Menu() {

    const [mealCategories, setMealCategories] = useState([])
    useEffect(() => {
        cafeService.getMenu().then(function (result) {
            setMealCategories(result);
        })
    },)


    return (
        <div className='wrapper'>
            <section className="slider">
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
            </section>
            <section className="main">
                <div className="flex">
                    <div className="menu position_left">
                        <h2 className="menu__title title_size menu__item_style">Меню</h2>
                        <div className="menu__items">
                            {
                               mealCategories.map(
                                   (category, index) =>
                                        <Link
                                            className="menu__item menu__item_style margin-right-for-elems nav__item__link"
                                            key={index}
                                            state={category[0]}
                                            to={`/${category[1]}/`}>{category[0]}</Link>
                                )
                            }
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};


