import React, { Component } from 'react'

export default class Timer extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            timer : null
        }
    }

    componentDidMount(){
        this.setState( {
            timer: setInterval(
            this.props.onTimer || (() => {}), this.props.numSec || 60*1000)
            });
    }

    componentWillUnmount(){
        if (this.state.timer) 
            clearInterval();
    }


    render() {
        return (
            <></>
        )
    }
}
