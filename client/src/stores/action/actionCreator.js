import { FetchingTotalItems, FetchingUser, FetchingUsers } from "./actionType"
const baseUrl = 'https://dummyjson.com/users/'

export const fetchUsers = (payload) => {
    return { type: FetchingUsers, payload }
}

export const fetchUser = (payload) => {
    return { type: FetchingUser, payload }
}

export const fetchTotalUsers = (payload) => {
    return { type: FetchingTotalItems, payload }
}


export const getUsers = (skip = 0) => {
    return (dispatch) => {
        fetch(baseUrl + `?limit=10&skip=${skip}`, {
            method: "get",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(resp => resp.json())
            .then(data => {
                dispatch(fetchUsers(data.users))
                dispatch(fetchTotalUsers(data.total))
            })
            .catch(error => console.log(error))
    }
}

export const addUser = (formAdd) => {
    return (dispatch) => {
        return fetch(baseUrl + "add", {
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
                    console.log("Error")
                    throw new Error(error.message);
                })
            }
        })
        .then(data => {
            console.log(data)
        })
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
