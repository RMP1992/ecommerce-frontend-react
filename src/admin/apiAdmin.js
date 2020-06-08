import {API} from '../config';

export const createCategory = (userId, token, category) => {
    //userId identifies if the user is admin or not
    return fetch(`${API}/category/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}` //we need to provide the token
        },
        body: JSON.stringify(category)//we are sending the category to the backend
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err)
    })
}

export const createProduct = (userId, token, product) => {
    //userId identifies if the user is admin or not
    return fetch(`${API}/product/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}` //we need to provide the token
        },
        body: product //we are sending the category to the backend, in form data
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err)
    })
}

export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method:'GET',
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}