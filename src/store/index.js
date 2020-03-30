import { createStore, applyMiddleware } from "redux";
import modelReducer from "./modelReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export default createStore(modelReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export { LOAD, STORE, SHOW_ERROR, HIDE_ERROR } from "./actionTypes";
export { loadSymbol, storeSymbol, showError, hideError } from "./actionCreators";
export {EURUSD, EURRUB} from "./dataTypes";