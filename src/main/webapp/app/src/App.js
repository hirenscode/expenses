import React, {Component} from 'react';
import './App.css';
import Header from "./containers/Header";
import {BACKEND_API_PATH} from "./resources/properties";

export default class App extends Component {

    constructor(props) {
        super(props);
        console.log(BACKEND_API_PATH);
    }

    render() {
        return (
            <Header/>
        );
    }
}
