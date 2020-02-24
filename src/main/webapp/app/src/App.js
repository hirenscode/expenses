import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import './App.css';
import ViewAllTransactions from './components/ViewAllTransactions'
import AddTransaction from "./components/AddTransaction";
import AddPaymentMethod from "./components/AddPaymentMethod";

function App() {
    return (
        <div className="container">
            <Router>
                <nav>
                    <div className="nav-wrapper">
                        <Link to="/"> expenses </Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/"> Home </Link></li>
                            <li><Link to="/add-transaction"> Add New Transaction </Link></li>
                            <li><Link to="/add-payment"> Add New Payment Method </Link></li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <ViewAllTransactions/>
                    </Route>
                    <Route path="/add-transaction">
                        <AddTransaction/>
                    </Route>
                    <Route path="/add-payment">
                        <AddPaymentMethod/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
