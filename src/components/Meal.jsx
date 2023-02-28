import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import CafeService from './CafeService';


const cafeService = new CafeService();

export default function Meal() {

    const [meal, setMeal] = useState([])
    const {category, meal_id} = useParams();
    // const [access, setAccess] = useState(localStorage.getItem('accessToken'));
    // const navigate = useNavigate();
    // const location = useLocation();

    useEffect(() => {
        cafeService.getMeal(category, meal_id).then(function (result) {
            setMeal(result);
            // if (result) {
            //     if (result.access) {
            //         localStorage.setItem('accessToken', result.access);
            //         setAccess(result.access);
            //         localStorage.setItem('refreshToken', result.refresh);
            //     } else {
            //         setMeal(result);
            //     }
            // } else {
            //     navigate('/login', {replace: true, state: {from: location}});
            // }
        })
    }, [meal_id]);

    console.log(meal)
    return (
        <section className="main">
            <div className="flex">
                <div className="menu position_center">
                    <h2 className="menu__title title_size menu__item_style">{meal['name']}</h2>
                    <div className="menu__items">
                        <div className="category__items">
                            <div className="meal__item meal_size">
                                {
                                    meal['images'] && meal['images'].map(images =>
                                        <img src={images.image} alt="" className="meal__img meal-img_size"
                                             key={images.id}/>)
                                }
                                <div className="meal__name">
                                    <div className="meal__name__item">Описание: {meal['description']}</div>
                                    <div className="meal__name__item">Размер: {meal['size']} гр.</div>
                                    <div className="meal__name__item">Цена: {meal['price']} BYN</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

