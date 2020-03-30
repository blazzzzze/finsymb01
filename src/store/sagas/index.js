import { takeEvery } from "redux-saga/effects";
import { fetchSymbol } from "./symbolSagas";
import { LOAD } from "../";

export default function* rootSaga() {
    yield takeEvery(LOAD, fetchSymbol); 
}