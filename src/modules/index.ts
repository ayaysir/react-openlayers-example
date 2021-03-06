import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import loading from './loading'
import location, { locationSaga } from './location'

const rootReducer = combineReducers({
  loading,
  location
})

export function * rootSaga () {
  yield all([
    locationSaga()
  ])
}

export default rootReducer

// 루트 리듀서의 반환값을 유추
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 내보내기
export type RootState = ReturnType<typeof rootReducer>
