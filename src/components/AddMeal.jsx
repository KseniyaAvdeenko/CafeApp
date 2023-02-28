import React, {useState} from "react";
import MyInput from "./UI/MyInput";
import MyButton from "./UI/MyButton";

const AddMeal = ({createMeal}) => {
    const [meal, setMeal] = useState({name: '', description: '', size: 0, price: 0})
    const [modal, setModal] = useState(false)

    const addNewMeal = e => {
        e.preventDefault()
        const newMeal = {
            ...meal, id: Date.now()
        }
        createMeal(newMeal)
        setMeal({name: '', description: '', size: 0, price: 0, meal_type: 0})
    }

    return (
        <div className="form">
            <h3 className="form__title form-heading_color title_size">Добавить блюдо</h3>
            <form className="form__items">
                <div className="form__item">
                    <MyInput type="text"
                             value={meal.name}
                             onChange={e => setMeal({...meal, name: e.target.value})}
                             placeholder='Название'/>
                </div>
                <div className="form__item">
                    <MyInput type="text"
                             value={meal.description}
                             onChange={e => setMeal({...meal, description: e.target.value})}
                             placeholder='Описание'/>
                </div>
                <div className="form__item form__item_size">
                    <MyInput type="number"
                             value={meal.size}
                             onChange={e => setMeal({...meal, size: e.target.value})}
                             placeholder='Размер'/>
                </div>
                <div className="form__item form__item_size">
                    <MyInput type="number"
                             value={meal.price}
                             onChange={e => setMeal({...meal, price: e.target.value})}
                             placeholder='Цена'/>
                </div>
                <div className="form__item form__item_size">
                      <MyInput type="number"
                               value={meal.meal_type}
                               onChange={e => setMeal({...meal, meal_type: e.target.value})}
                               placeholder='Категория'/>
                </div>
                <div className="form__btn__for-two-btns">
                    <MyButton onClick={addNewMeal} >Добавить</MyButton>
                    <MyButton onClick={() => setModal(true)} >Отмена</MyButton>
                </div>
            </form>
        </div>
    )
}

export default AddMeal;






