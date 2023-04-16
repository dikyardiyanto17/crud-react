import { FetchingAccount, FetchingAccounts } from "../action/actionType"

const initialState = {
    accounts: [],
    account: {}
}

function accountsReducer(state = initialState, action) {
    switch (action.type) {
        case FetchingAccounts:
            return { ...state, accounts: action.payload }
        case FetchingAccount:
            return {...state, account: action.payload}
        default:
            return state
    }
}

export default accountsReducer