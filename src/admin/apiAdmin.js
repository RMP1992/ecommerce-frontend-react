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
export const updateCategory = (categoryId, userId, token, category) => {
    return fetch(`${API}/category/${categoryId}/${userId}`, {
        method: 'PUT',
        headers: {
            // content type?
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

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
export const getCategory = categoryId => {
    return fetch(`${API}/category/${categoryId}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method:'GET',
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const listOrders = (userId, token) => {
    return fetch(`${API}/order/list/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}` //we need to provide the token
        },
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const getStatusValues = (userId, token) => {
    return fetch(`${API}/order/status-values/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}` //we need to provide the token
        },
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const updateOrderStatus = (userId, token, orderId, status) => {
    return fetch(`${API}/order/${orderId}/status/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
            Authorization: `Bearer ${token}` //we need to provide the token
        },
        body: JSON.stringify({status, orderId})
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const getProducts = () => {
    return fetch(`${API}/products?limit=undefined`, {
        method:'GET',
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const deleteProduct = (productId, userId, token) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
            Authorization: `Bearer ${token}` //we need to provide the token
        }
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const getProduct = (productId) => {
    return fetch(`${API}/product/${productId}`, {
        method:'GET',
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const updateProduct = (productId, userId, token, product) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}` //we need to provide the token
        },
        body: product
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}