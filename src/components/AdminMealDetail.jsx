import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import CafeService from './CafeService';


const cafeService = new CafeService();


export default function Meal() {
    const [adminMeal, setAdminMeal] = useState([])
    const {meal_id} = useParams();


    useEffect(() => {
        cafeService.getAdminMeal(meal_id).then(function (result) {
            setAdminMeal(result);
        })
    }, [meal_id]);


    return (
        <section className="main">
            <div className="flex">
                <div className="menu position_center">
                    <h2 className="menu__title title_size menu__item_style">Админ панель Блюдо:{adminMeal['name']}</h2>
                    <div className="menu__items admin-meal__items">
                        <div className="admin__meal admin-meal__images">
                            {
                                adminMeal['meal_image'] && adminMeal['meal_image'].map(images =>
                                    <img src={images.image} alt="" className="meal__img meal-img_size" key={images.id}/>)
                            }
                        </div>
                        <div className="admin__meal admin-meal__item">
                            <div className="admin-meal__name title_size meal__name__item">{adminMeal['name']}</div>
                            <div className="admin-meal__name meal__name__item">Описание: {adminMeal['description']}</div>
                            <div className="admin-meal__name meal__name__item">Размер: {adminMeal['size']} гр.</div>
                            <div className="admin-meal__name meal__name__item">Цена:{adminMeal['price']} BYN</div>
                        </div>
                        <div className="admin__meal admin-meal-buttons">
                            <a
                                href={`/admin-panel/${adminMeal.id}/edit`}
                                className="update button button_style bottom_color nav__item__link">Update</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

