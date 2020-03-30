import { Component } from 'react'

export default class ExceptionHandler extends Component {

    componentDidCatch = (error, info) => 
        this.props.onException(error, info);

    render() {
        return this.props.children;
    }
}
