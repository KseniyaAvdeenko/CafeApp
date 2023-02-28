import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Menu from "./components/Menu";
import MealsByCategoriesList from "./components/MealsByCategoriesList";
import Meal from "./components/Meal";
import Top3 from "./components/Top3";
import Header from "./components/Header";
import Analytics from "./components/Analytics";
import AdminMeals from "./components/AdminMeals";
import AdminMealDetail from "./components/AdminMealDetail";
import AddMeal from "./components/AddMeal";
import Registration from "./components/Registration";
import './index.css'
import {AuthProvider} from "./hook/useAuth";
import SignIn from "./components/SignIn";

// import {RequireAuth} from "./hook/RequireAuth";


function BaseLayout() {
    return (
        <div className='wrapper'>
            <Header/>
            <section className='main'>
                <Routes>
                    <Route path='/' element={<Menu/>}/>
                    <Route path='/:category/' element={<MealsByCategoriesList/>}/>
                    <Route path='/:category/:meal_id' element={<Meal/>}/>
                    <Route path='/top3' element={<Top3/>}/>
                    <Route path='/analytics' element={<Analytics/>}/>
                    <Route path='/admin-panel' element={<AdminMeals/>}/>
                    <Route path='/admin-panel/:meal_id' element={<AdminMealDetail/>}/>
                    <Route path='/admin-panel/add_meal' element={<AddMeal/>}/>
                    <Route path='/signin' element={<SignIn/>}/>
                    <Route path='/registration' element={<Registration/>}/>
                </Routes>
            </section>
            <footer className="copy block_theme">
                <div className="flex">
                    <div className="copy__item">© Copyrights, 2023</div>
                </div>
            </footer>
        </div>

    )
};

function App() {

    return (
        // <AuthProvider>
        <BrowserRouter>
            <BaseLayout/>
        </BrowserRouter>
        // </AuthProvider>

    );
}

export default App;
