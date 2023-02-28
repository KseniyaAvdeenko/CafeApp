import React from 'react';
// import {useNavigate} from 'react-router-dom';
// import {useAuth} from "../hook/useAuth";
import logo from '../img/logo_grill.png'
import {Link} from "react-router-dom";



export default function Header() {

    // const user = localStorage.getItem('user')
    // const {logout} = useAuth();
    // const navigate = useNavigate();


    return (
        <header className="header block_theme">
            <div className="flex">
                <a href="/" className="logo">
                    <img src={logo} alt="" className="logo-img"/>
                </a>
                <nav className="nav">
                    <ul className="nav__items">
                        <li className="nav__item"><Link to="/" className="nav__item__link">Меню</Link></li>
                        <li className="nav__item"><Link to="/top3" className="nav__item__link">ТОП 3</Link></li>
                        <li className="nav__item"><Link to="/analytics" className="nav__item__link">Аналитика</Link></li>
                        <li className="nav__item"><Link to="/admin-panel" className="nav__item__link">Админ панель</Link></li>
                        {/*{user*/}
                        {/*    ?*/}
                        {/*<div className="nav__items" >*/}
                        {/*         <li className="nav__item">*/}
                        {/*             /!*<a href="" className="nav__item__link">*!/*/}
                        {/*             /!*    Привет, {user}*!/*/}
                        {/*             /!*</a>*!/*/}
                        {/*         </li>*/}
                        {/*         <li className="nav__item">*/}
                        {/*            <button*/}
                        {/*               className="nav__item__link"*/}
                        {/*               onClick={() =>logout(() => navigate('/', {replace: true}))}>Выйти*/}
                        {/*            </button>*/}
                        {/*         </li>*/}
                        {/*    </div>*/}
                        {/*    :*/}
                        {/*<div className="nav__items" >*/}
                        {/*        <li className="nav__item"><a href="/registration" className="nav__item__link">Регистрация</a></li>*/}
                        {/*        <li className="nav__item"><a href="/signin" className="nav__item__link">Войти</a></li>*/}
                        {/*    </div>*/}
                        {/*}*/}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

