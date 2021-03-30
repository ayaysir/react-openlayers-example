import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import location, { locationSaga } from "./location";

const rootReducer = combineReducers({
    loading,
    location
})

export function* rootSaga() {
    yield all([
        locationSaga(),
    ])
}

export default rootReducer