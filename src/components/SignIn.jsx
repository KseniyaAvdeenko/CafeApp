import {useLocation, useNavigate} from 'react-router-dom'
import {useAuth} from "../hook/useAuth";
import CafeService from "./CafeService";
import {useState} from "react";

const cafeService = new CafeService();

const SignIn = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {login} = useAuth();
    const fromPage = location.state?.from?.pathname || '/';
    const [error, setError] = useState()

    const HandleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;
        const password = form.password.value;
        cafeService.getToken(user, password).then(function (result) {
            cafeService.getUser(result.access).then(function (res) {
                console.log(res);
                login(user, result.access, res.id, () =>
                    navigate(fromPage==='/registration' ? `/` : fromPage, {replace: true}))
                console.log(res.id)
            })
        }).catch((error) => {error.response.data.detail==="No active account found with the given credentials" &&
        setError("Профиль с такими учетными данными не существует")})
    }

    return (
        <div className="flex">
                <div className="form">
                    <h3 className="form__title form-heading_color title_size">Войти</h3>

                    <form onSubmit={HandleSubmit} className="form__items">
                        {error && <p className="error">{error}</p>}
                        <div className="form__item">
                            <label htmlFor="username" className="input__label">Логин</label>
                            <input type="text" className="input input_style" id="username" name='username'/>
                        </div>
                        <div className="form__item">
                            <label htmlFor="password" className="input__label">Пароль</label>
                            <input type="password" className="input input_style" id="password" autoComplete="new-password" name='password'/>
                        </div>

                        <div className="form__btn">
                            <button className="button bottom_color button_style" type="submit">Войти
                            </button>
                        </div>
                    </form>
                </div>
            </div>

    );
}

export default SignIn;


//
// const cafeService = new CafeService();
//
//
// const Login = () => {
//
//     const navigate = useNavigate();
//     const location = useLocation();
//     const {signIn} = useAuth();
//     const fromPage = location.state?.from?.pathname || '/';
//     const [error, setError] = useState()
//
//     const HandleSubmit = (event) => {
//         event.preventDefault();
//         const form = event.target;
//         const user = form.username.value;
//         const password = form.password.value;
//         cafeService.getTokens(user, password).then(function (result) {
//             console.log(result);
//             cafeService.getUser(result.access).then(function (res) {
//                 console.log(res);
//                 signIn(user, result.access, result.refresh, res.id, () =>
//                     navigate(fromPage==='/registration' ? `/` : fromPage, {replace: true}))
//                 console.log(res.id)
//             })
//         }).catch((error) => {error.response.data.detail==="No active account found with the given credentials" &&
//         setError("Профиль с такими учетными данными не существует")})
//     }
//
//     return (
//         <div>
//             <main className="form-signin m-auto">
//                 <form onSubmit={HandleSubmit}>
//                     <h2>Авторизуйтесь или <a href="/registration">зарегистрируйтесь</a></h2>
//                     {error && <p className="error">{error}</p>}
//                     <div className="form-floating">
//                         <input className="form-control" name='username' placeholder="Имя пользователя"/>
//                     </div>
//                     <div className="form-floating">
//                         <input type="password" className="form-control" autoComplete="new-password" name='password' placeholder="Пароль"/>
//                     </div>
//                     <button className="w-100 btn btn-success" type="submit">Войти</button>
//                 </form>
//             </main>
//         </div>
//     );
// }
//
// export {Login}