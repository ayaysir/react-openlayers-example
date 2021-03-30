import { createAction } from "redux-actions"
import { createReducer } from "typesafe-actions"

const START_LOADING = "loading/START_LOADING"
const END_LOADING = "loading/END_LOADING"

export const startLoading = createAction(START_LOADING, (actionType: string) => actionType)

export const endLoading = createAction(END_LOADING, (actionType: string) => actionType)

const initialState = {}

const loading = createReducer(initialState, {
    [START_LOADING]: (state, action) => ({
        ...state,
        [action.payload]: true,
    }),
    [END_LOADING]: (state, action) => ({
        ...state,
        [action.payload]: true,
    }),
})

export default loading