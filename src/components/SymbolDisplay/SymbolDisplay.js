import React, { Component } from 'react';
import SymbolChart from "../SymbolChart";

export default class SymbolDisplay extends Component {

    componentDidMount(){
        this.props.onLoad();
    }
    
    render() {
        return (
            <div>
                <div>
                    <SymbolChart/>
                </div>
            </div>
        )
    }
}
