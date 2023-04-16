import { FetchingAccount, FetchingAccounts, FetchingCategories, FetchingCategory } from "./actionType"
const baseUrl = 'http://localhost:3001'

export const fetchAccounts = (payload) => {
    return { type: FetchingAccounts, payload }
}

export const fetchCategories = (payload) => {
    return { type: FetchingCategories, payload }
}

export const fetchAccount = (payload) => {
    return { type: FetchingAccount, payload }
}

export const fetchCategory = (payload) => {
    return { type: FetchingCategory, payload }
}

export const getAccounts = (query = '') => {
    return (dispatch) => {
        fetch(baseUrl + '/products' + query, {
            method: "get",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(resp => resp.json())
            .then(data => dispatch(fetchAccounts(data)))
            .catch(error => console.log(error))
    }
}

export const addAccounts = (formAdd) => {
    return (dispatch) => {
        return fetch(baseUrl + '/products', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                access_token: localStorage.access_token
            },
            body: JSON.stringify(formAdd)
        })
        .then(resp => {
            if (resp.ok) {
                return resp.json()
            } else {
                return resp.json().then((error) => {
                    throw new Error(error.message);
                })
            }
        })
        .then(() => dispatch(getAccounts()))
    }
}

export const getDetail = (accountId) => {
    return (dispatch) => {
        fetch(baseUrl + `/products/${accountId}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(resp => resp.json())
            .then(data => dispatch(fetchAccount(data)))
            .catch(error => console.log(error))
    }
}

export const editAccounts = (formEdit, accountId) => {
    return (dispatch) => {
        return fetch(baseUrl + '/products/' + accountId, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                access_token: localStorage.access_token
            },
            body: JSON.stringify(formEdit)
        })
        .then(resp => {
            if (resp.ok) {
                return resp.json()
            } else {
                return resp.json().then((error) => {
                    throw new Error(error.message);
                })
            }
        })
        .then(data => dispatch(getAccounts()))
    }
}

export const deleteAccount = (accountId) => {
    return (dispatch) => {
        fetch(baseUrl + '/products/' + accountId, {
            method: "delete",
            headers: {
                'Content-Type': 'application/json',
                access_token: localStorage.access_token
            }
        })
            .then(() => dispatch(getAccounts()))
            .catch(error => console.log(error))
    }
}
