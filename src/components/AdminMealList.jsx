import React from "react";
import MyButton from "./UI/MyButton";


const AdminMealList = (props) => {

    return (
        <div className="meal__item meals-for-category_size margin-right-for-elems if-wrap_margin-bottom">
            <img
                src={props.admin_meal.images[0].image}
                alt=""
                className="meal__img meal-img-for-category_size"
                width="235" height="200"/>
            <div className="meal__name position_center meal-name_size">{props.admin_meal.name}</div>
            <div className="meal__name position_center">{props.admin_meal.price} BYN</div>
            <a href={`/admin-panel/${props.admin_meal.id}`}
               className="watch-details button button_style bottom_color nav__item__link">Посмотреть</a>
            <div className="delete delete_position">
                <MyButton onClick={() => props.deleteMeal(props.admin_meal)}>Удалить</MyButton>
            </div>

        </div>
    );
};

export default AdminMealList;

