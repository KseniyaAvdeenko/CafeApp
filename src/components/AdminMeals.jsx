import React, {useEffect, useMemo, useState} from 'react'
import CafeService from "./CafeService";
import AdminMealList from "./AdminMealList";
import axios from "axios";
import AddMeal from "./AddMeal";
import MealFilter from "./MealFilter";
import MyModal from "./UI/MyModal/MyModal";
import MyButton from "./UI/MyButton";


const cafeService = new CafeService()
const BASE_API_URL = 'http://127.0.0.1:8000/cafe_app/admin/meals/'

export default function AdminMeals() {

    const [adminMeals, setAdminMeals] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)


    useEffect(() => {
        cafeService.getAdminMeals().then(function (result) {
            setAdminMeals(result);
        })
    },)
    console.log(adminMeals)
    const createMeal = (newMeal) => {
        setAdminMeals([...adminMeals, newMeal])
        axios.post(BASE_API_URL, newMeal)
        setModal(false)
    }

    const deleteMeal = (meal) => {
        setAdminMeals(adminMeals.filter(m => m.id !== meal.id))
        axios.delete(BASE_API_URL + meal.id.toString() + '/')
    };


    //
    const sortedMeals = useMemo(() => {
        if (filter.sort) {
            function Sorting(meals) {
                if (adminMeals.find(x => typeof x[filter.sort] !== 'number'))
                    return [...adminMeals].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
                else
                    return [...adminMeals].sort((a, b) => a[filter.sort] - b[filter.sort])
            };
            return Sorting(adminMeals)
        }
        return adminMeals
    }, [filter.sort, adminMeals])

    const sortedAndSearchedMeals = useMemo(() => {
        return sortedMeals.filter(adminMeal => adminMeal.name.toLowerCase().includes(filter.query))
    }, [filter.query, sortedMeals])


    return (
        <section className="main">
            <div className="flex">
                <div className="menu position_center">
                    <h2 className="category-title title_size menu__item_style">Админ панель</h2>
                    <div className="adding adding-meal__container">
                        <MealFilter filter={filter} setFilter={setFilter}/>
                        <MyButton onClick={() => setModal(true)}>+ Add meal</MyButton>
                        <MyModal visible={modal} setVisible={setModal}>
                            <AddMeal createMeal={createMeal}/>
                        </MyModal>
                    </div>
                    {sortedAndSearchedMeals.length > 0
                        ? <div className="category__items">
                            {sortedAndSearchedMeals.map(admin_meal => <AdminMealList
                                key={admin_meal.id}
                                deleteMeal={deleteMeal}
                                admin_meal={admin_meal}/>)}
                        </div>

                        : <h2 className="category-title title_size ">Блюда не найдены</h2>
                    }
                </div>
            </div>
        </section>
    );
};


