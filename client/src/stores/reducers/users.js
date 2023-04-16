import { FetchingTotalItems, FetchingUser, FetchingUsers } from "../action/actionType"

const initialState = {
    users: [],
    user: {},
    totalItems: 0
}

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FetchingUsers:
            return { ...state, users: action.payload }
        case FetchingUser:
            return {...state, user: action.payload}
        case FetchingTotalItems:
            return {...state, totalItems: action.payload}
        default:
            return state
    }
}

export default usersReducer