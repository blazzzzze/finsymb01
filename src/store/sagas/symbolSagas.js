import { call, put } from "redux-saga/effects";
import { storeSymbol } from "../";
import SymbolWebService from "../../svc/symbolWebService";
import apiRoutes from "../../routes/apiRoutes";

const symbolSvc = new SymbolWebService(apiRoutes.currencySvc);

export function* fetchSymbol(action) {
        //try {
            const currencyData = yield call([symbolSvc, symbolSvc.GetCurrentSymbol], action.dataType); // выполняем загрузку данных из веб-сервиса
            yield put(storeSymbol(action.dataType, currencyData)); // сохранить данные через reducer
        //}
        //catch (e) {
        //    console.log(e)
        //    yield put({type: "ERROR"});
        //}
}