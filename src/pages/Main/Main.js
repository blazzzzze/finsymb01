import React, { Component } from 'react';
import SymbolDisplay from "../../components/SymbolDisplay";
import { Provider } from "react-redux";
import store from "../../store";
import Timer from "../../components/Timer";
import { REFRESH_SEC } from "../../config/consts";
import ExceptionHandler from "../../components/ExceptionHandler";
import ErrorMessage from "../../components/ErrorMessage";

export default class Main extends Component {
    render() {
        return (
            <>
                <Provider store={store}>
                    <ExceptionHandler>
                        <ErrorMessage/>
                        <Timer numSec={REFRESH_SEC*1000} symbol="EURUSD"/>
                        <Timer numSec={REFRESH_SEC*1000} symbol="EURRUB"/>
                        <SymbolDisplay/>
                    </ExceptionHandler>
                </Provider>
            </>
        )
    }
}
