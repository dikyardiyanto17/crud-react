import { FetchingUser, FetchingUsers } from "./actionType"
const baseUrl = 'https://dummyjson.com/users/'

export const fetchUsers = (payload) => {
    return { type: FetchingUsers, payload }
}

export const fetchUser = (payload) => {
    return { type: FetchingUser, payload }
}


export const getUsers = () => {
    return (dispatch) => {
        fetch(baseUrl, {
            method: "get",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(resp => resp.json())
            .then(data => dispatch(fetchUsers(data)))
            .catch(error => console.log(error))
    }
}

export const addUser = (formAdd) => {
    return (dispatch) => {
        return fetch(baseUrl, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
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
        .then(() => dispatch(getUsers()))
    }
}

export const getDetail = (userId) => {
    return (dispatch) => {
        fetch(baseUrl + userId, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(resp => resp.json())
            .then(data => dispatch(fetchUser(data)))
            .catch(error => console.log(error))
    }
}

export const editUser = (formEdit, userId) => {
    return (dispatch) => {
        return fetch(baseUrl + userId, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
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
        .then(data => dispatch(getUsers()))
    }
}

export const deleteUser = (userId) => {
    return (dispatch) => {
        fetch(baseUrl + userId, {
            method: "delete",
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(() => dispatch(getUsers()))
            .catch(error => console.log(error))
    }
}
