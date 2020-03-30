import { LOAD, STORE, SHOW_ERROR, HIDE_ERROR } from "./actionTypes";

export const loadSymbol = (symbol) => ({
    type: LOAD,
    dataType: symbol
});

export const storeSymbol = (symbol, data) => ({
    type: STORE,
    dataType: symbol,
    data: data
});

export const showError = (error, info) => ({
    type: SHOW_ERROR,
    data: {
        showError: true,
        error: error,
        info: info
    }
});

export const hideError = () => ({
    type: HIDE_ERROR,
    data: {
        showError: false,
        error: null,
        info: null
    }
});