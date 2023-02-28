import React, {useEffect, useState} from 'react'
import CafeService from "./CafeService";


const cafeService = new CafeService()
export default function Analytics() {

    const [analytics, setAnalytics] = useState([]);

    useEffect(() => {
        cafeService.getAnalytics().then(function (result) {
            setAnalytics(result);
        })
    },)


    return (
        <section className="main">
            <div className="flex">
                <div className="menu position_center">
                    <h2 className="category-title title_size menu__item_style">Аналитика по блюдам</h2>
                    <div className="category__items">
                        {analytics.map(a_meal =>
                            <a href={`/${a_meal.id}`}
                               className="meal__item meals-for-category_size margin-right-for-elems" key={a_meal.id}>
                                {/*{*/}
                                {/*    a_meal['images'] && a_meal['images'].map(img =>*/}
                                {/*       <img*/}
                                {/*            src={img.image}*/}
                                {/*            alt=""*/}
                                {/*            className="meal__img meal-img-for-category_size"*/}
                                {/*             width="235" height="200"*/}
                                {/*            key={img.id}/>*/}
                                {/*    )*/}
                                {/*}*/}
                                <img
                                    src={a_meal.images[0].image}
                                    alt=""
                                    className="meal__img meal-img-for-category_size"/>
                                <div className="meal__name position_center meal-name_size">{a_meal.name}</div>
                            </a>
                        )}


                    </div>
                </div>
            </div>
        </section>
    );
};