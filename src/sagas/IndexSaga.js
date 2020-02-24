import {put,takeEvery} from 'redux-saga/effects'
import getItem from '../fetchAPI/getItem'
import * as types from '../constant'

function* getPageItem(){
    try {
        const res = yield getItem()
        yield put(
            {
                type: types.GET_ITEM_SUCCESS,
                payload: res
            }
        )
    } catch (error) {
        yield put(
            {
                type: types.GET_ITEM_FAILURE,
                payload: {
                    errorMessage: error.message
                }
            }
        )
    }
}

export const IndexSaga = [
    takeEvery(types.GET_ITEM_REQUEST, getPageItem)
];