import axios from "axios";

const BASE_API_URL = 'http://127.0.0.1:8000'

class CafeService {
    getMenu() {
        const url = `${BASE_API_URL}/cafe_app/menu/`;
        return axios.get(url).then(response => response.data)
    };

    getCategory(category) {
        const url = `${BASE_API_URL}/cafe_app/${category}/`;
        return axios.get(url).then(response => response.data)
    };

    getMeal(category, pk){
        const url = `${BASE_API_URL}/cafe_app/${category}/${pk}/`;
        // return access
        //     ? axios.get(url, {headers: {"Authorization": `Token ${access}`}}).then(response => response.data).catch(
        //         (error) => this.errorHandler(error))
        return axios.get(url).then(response => response.data);
    };

    getTopMeals(){
        const url = `${BASE_API_URL}/cafe_app/top3/`;
        return axios.get(url).then(response => response.data)
    };

    getAnalytics() {
        const url = `${BASE_API_URL}/cafe_app/analytics/`;
        return axios.get(url).then(response => response.data)
    };

    getMealAnalytics(pk, period, num) {
        const url = period ? `${BASE_API_URL}/cafe_app/analytics/${pk}/?period=${period}&num=${num}`
            : `${BASE_API_URL}/cafe_app/analytics/${pk}/`;
        return axios.get(url).then(response => response.data)
    };

    getAdminMeals() {
        const url = `${BASE_API_URL}/cafe_app/admin/meals/`;
        return axios.get(url).then(response => response.data)
    };

    getAdminMeal(pk) {
        const url = `${BASE_API_URL}/cafe_app/admin/meals/${pk}`;
        return axios.get(url).then(response => response.data)
    };

    editAdminMeal(pk, meal) {
        const url = `${BASE_API_URL}/cafe_app/admin/meals/${pk}`;
        return axios.put(url, meal)
    };

    getToken(username, password) {
        const url = `${BASE_API_URL}/auth/token/login`;
        return axios.post(url, {username: username, password: password}).then(response => response.data);
    }

    createUser(newUser) {
    	const url = `${BASE_API_URL}/auth/users/`;
    	return axios.post(url, newUser);
    }

    errorHandler(err) {
        return (
            err.response.data.detail === "Given token not valid for any token type"
                ? this.getToken(localStorage.getItem('getToken')).then((r) => r).catch(
                    (error) => error.response.data.detail === "Token is invalid"
                        ? localStorage.removeItem('user')
                        : alert("Произошла ошибка"))
                : alert(err))
    }

    getUser(access) {
        const url = `${BASE_API_URL}/auth/users/me`;
        return axios.get(url, {headers: {"Authorization": `Token ${access}`}}).then(response => response.data).catch((error) => this.errorHandler(error));
    }

    // deleteAdminMeal(pk) {
    //     const url = `${BASE_API_URL}/cafe_app/admin/meals/${pk}`;
    //     return axios.delete(url)
    // };

    // getAdminImages() {
    //     const url = `${BASE_API_URL}/cafe_core/admin/images/`;
    //     return axios.get(url).then(response => response.data)
    // };

    // getAdminImage(pk) {
    //     const url = `${BASE_API_URL}/cafe_core/admin/images/${pk}`;
    //     return axios.get(url).then(response => response.data)
    // };

    // addAdminImage(image) {
    //     const url = `${BASE_API_URL}/cafe_core/admin/images/`;
    //     return axios.post(url, image)
    // };
    //
    // editAdminImage(pk, image) {
    //     const url = `${BASE_API_URL}/cafe_core/admin/images/${pk}`;
    //     return axios.put(url, image)
    // };
    //
    // deleteAdminImage(pk) {
    //     const url = `${BASE_API_URL}/cafe_core/admin/images/${pk}`;
    //     return axios.delete(url)
    // };



};


export default CafeService;

