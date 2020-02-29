import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import ViewAllTransactions from "../components/ViewAllTransactions";
import AddTransaction from "../components/AddTransaction";
import AddPaymentMethod from "../components/AddPaymentMethod";
import M from "materialize-css";

class Header extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            let elems = document.querySelectorAll('.sidenav');
            let instances = M.Sidenav.init(elems, {});
        });
    }

    render() {
        return (
            <div className="container">
                {/*<h1 className="display-4"> expenses </h1>*/}
                <Router>
                    <nav>
                        <div className="nav-wrapper">
                            <Link to="/" className="brand-logo"> expenses </Link>
                            <a href="#" data-target="responsive-menu" className="sidenav-trigger"><i
                                className="material-icons">menu</i></a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><Link to="/"> Home </Link></li>
                                <li><Link to="/add-transaction"> Add New Transaction </Link></li>
                                <li><Link to="/add-payment"> Add New Payment Method </Link></li>
                            </ul>
                        </div>
                    </nav>
                    <ul className="sidenav" id="responsive-menu">
                        <li><Link to="/"> Home </Link></li>
                        <li><Link to="/add-transaction"> Add New Transaction </Link></li>
                        <li><Link to="/add-payment"> Add New Payment Method </Link></li>
                    </ul>
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
}

export default Header;
