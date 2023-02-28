import React, {useEffect, useState} from 'react'
import CafeService from "./CafeService";
import {useLocation, useParams} from "react-router-dom";
import slider_img_1 from '../img/гриль1.jpg'
import slider_img_2 from '../img/гриль2.jpg'
import slider_img_3 from '../img/гриль3.jpeg'
import slider_img_4 from '../img/гриль4.jpeg'
import slider_img_5 from '../img/гриль5.jpeg'
import slider_img_6 from '../img/гриль6.jpeg'
import slider_img_7 from '../img/гриль7.jpg'



const cafeService = new CafeService()
export default function MealsByCategoriesList() {

    const {category} = useParams();
    const {state} = useLocation();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        cafeService.getCategory(category).then(function (result) {
            setMeals(result);
            console.log(result)
        })
    }, [category]);

    console.log(meals)
    return (
        <div className="wrapper">
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
                    <div className="menu position_center">
                        <h2 className="category__title title_size menu__item_style">{state}</h2>
                        <div className="category__items">
                            {
                                meals.map(meal =>
                                        <a href={`/${category}/${meal.id}`}
                                           key={meal.id}
                                           className="meal__item meals-for-category_size margin-right-for-elems">
                                           <img src={meal.images[0].image} alt=""
                                                className="meal__img meal-img-for-category_size"/>
                                           <div className="meal__name position_center meal-name_size">{meal.name}</div>
                                        </a>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

