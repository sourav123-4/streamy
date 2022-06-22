import {  receiveFetchData } from "../redux/Action";
import {takeLatest, call, put } from 'redux-saga/effects';

import { handleClick } from "../api/api";
function* fetchData(action){
    try{
        const data = yield call(handleClick,action.payload);
        yield put(receiveFetchData(data?.data?.items));
    }catch(e){
        console.log("err",e);
    }
}

export default function* mySaga(){
    yield takeLatest("GET_FETCH_DATA",fetchData)
}