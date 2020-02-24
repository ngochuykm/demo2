import { all } from 'redux-saga/effects'
import {IndexSaga} from './IndexSaga'
function* rootSaga() {
    yield all([
        ...IndexSaga
    ]);
}
export default rootSaga;