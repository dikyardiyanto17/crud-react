import { combineReducers } from "redux";
import accountsReducer from "./accounts";

const rootReducer = combineReducers({
    accounts: accountsReducer,
})

export default rootReducer