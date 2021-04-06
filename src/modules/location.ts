import { createAction } from 'redux-actions'
import { takeLatest, put } from 'redux-saga/effects'
import { createReducer } from 'typesafe-actions'
// import { fetchLocationListApi } from '../lib/api'

import { startLoading, endLoading } from './loading'

// 액션 타입 (목록)
const FETCH_LIST_SUCCESS = 'location/FETCH_LIST_SUCCESS'
const FETCH_LIST_FAILURE = 'location/FETCH_LIST_FAILURE'

// 목록 조회 액션 타입
export const FETCH_LOCATION_LIST = 'item/FETCH_LOCATION_LIST'

// 액션 타입 지정
export const typeOfAction = () => {
  return { type: FETCH_LOCATION_LIST }
}

export type ListAction = | ReturnType<typeof typeOfAction>

// 액션 생성 함수 (목록)
export const fetchListSuccess = createAction(FETCH_LIST_SUCCESS, (data: any) => data)
export const fetchListFailure = createAction(FETCH_LIST_FAILURE, (err: any) => err)

// 목록 조회 액션 생성 함수
export const fetchLocationList = createAction(FETCH_LOCATION_LIST)

/*
'redux-saga/effects'
- put: 새로운 액션을 dispatch(전파)
- takeLatest: 특정 액션 타입에 대하여 디스패치된 가장 마지막 액션만을 모니터링하는 함수
- call: 보통 Promise 등의 실행에 쓰이며 Promise 가 resolve 될 때까지 대기한다.
*/

// 상품 목록을 조회하는 태스크
function * fetchLocationListSaga (action: ListAction): IterableIterator<ListAction> {
  yield put(startLoading(FETCH_LOCATION_LIST))
  try {
    // const response: any = yield call(fetchLocationListApi)
    const mockData = {
      locations: [
        [
          37.56755685,
          126.97328373
        ],
        [
          37.56722338,
          126.98351298
        ],
        [
          37.56269872,
          126.97860143
        ]
      ]
    }
    // yield put(fetchListSuccess(response.data))
    yield put(fetchListSuccess(mockData))
  } catch (e) {
    yield put(fetchListFailure(e))
  }
  yield put(endLoading(FETCH_LOCATION_LIST))
}

// 상품 saga 함수 작성
export function * locationSaga (): IterableIterator<any> {
  // 목록 조회 태스크 수행
  yield takeLatest(FETCH_LOCATION_LIST, fetchLocationListSaga)
}

// 모듈의 초기 상태
const initialState = {
  coords: [], // 좌표 목록
  error: null // 응답에러 정보
}

// 리듀서(상태변화 유발) 함수 정의
const location = createReducer(initialState,
  {
    // 목록 조회 상태 변경
    [FETCH_LIST_SUCCESS]: (state, action) => ({
      ...state,
      coords: action.payload.locations
    }),
    [FETCH_LIST_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload
    })
  }
)

export default location
