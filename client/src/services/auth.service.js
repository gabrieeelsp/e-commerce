import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth/';

const register = (name, email, password) => {
    return axios.post(API_URL + 'signup', {
        name, email, password
    })
}

const login = (email, password) => {
    return axios.post(API_URL + 'signin', {
        email, password
    })
    .then((resposnse) => {
        if (Response.data.name) {
            localStorage.setItem('user', JSON.stringify(resposnse.data));
        }
        return resposnse.data;
    })
}