import { FetchingUser, FetchingUsers } from "../action/actionType"

const initialState = {
    users: [],
    user: {}
}

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FetchingUsers:
            return { ...state, accounts: action.payload }
        case FetchingUser:
            return {...state, account: action.payload}
        default:
            return state
    }
}

export default usersReducer