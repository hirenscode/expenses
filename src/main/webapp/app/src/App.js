import React from 'react';
import './App.css';
import ViewAllTransactions from './components/ViewAllTransactions'

function App() {
    return (
        <div className="container">
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo"> expenses </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#"> Add New Transaction </a></li>
                        <li><a href="#"> Add New Payment Method </a></li>
                        <li><a href="#"> Something more... </a></li>
                    </ul>
                </div>
            </nav>
            <div className="row">
                <ViewAllTransactions/>
            </div>
        </div>
    );
}

export default App;
