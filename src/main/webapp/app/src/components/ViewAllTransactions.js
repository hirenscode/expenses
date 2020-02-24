import React, {Component} from "react";
import Transaction from './Transaction'
import {Link} from "react-router-dom";

export default class ViewAllTransactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/v1/transaction/all")
            .then(response => response.json())
            .then(data => this.setState({transactions: data}))
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.transactions.map((transaction) => (
                        // <ul className="collection">
                        <Transaction key={transaction.id} item={transaction}/>
                        // </ul>
                    ))
                }
                <Link className="btn-floating btn-large waves-effect waves-light red" to="/add-transaction">
                    <i className="material-icons"> add </i>
                </Link>
            </div>

        )
            ;
    }
}
