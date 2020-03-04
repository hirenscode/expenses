import React, {Component} from "react";
import Transaction from './Transaction'
import {Link} from "react-router-dom";
import {deleteTransactionById, getAllTransactions} from "../services/TransactionService";

let self = undefined;

export default class ViewAllTransactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: []
        }
        self = this;
    }

    componentDidMount() {
        this.fetchAllTransactions();
    }

    fetchAllTransactions() {
        getAllTransactions()
            .then(response => response.json())
            .then(data => this.setState({transactions: data}))
            .catch(reason => {
                console.log(reason);
                this.state.transactions = [];
            })
    }

    deleteTransaction(event) {
        console.log(event.target.dataset.id);
        let id = event.target.dataset.id;
        deleteTransactionById(id).then(
            res => {
                if (res.status >= 200) {
                    self.fetchAllTransactions();
                }
            }
        )
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.transactions === undefined || this.state.transactions.length === 0 ? (
                        <div className="row">
                            <span className="card-panel teal lighten-2 z-depth-5 hide"> No Transactions to display currently </span>
                            <span className="card-panel"> {process.env.ENDPOINT} </span>
                        </div>
                    ) : this.state.transactions.map((transaction) => (
                        // <ul className="collection">
                        <div className="row">
                            <Transaction key={transaction.id} item={transaction}/>
                            <div className="card-action">
                                <a className="waves-effect waves-light btn" data-id={transaction.id}
                                   onClick={this.deleteTransaction}><i className="material-icons left">delete</i>Delete</a>
                            </div>
                        </div>
                        // </ul>

                    ))
                }
                <Link className="btn-floating btn-large waves-effect waves-light red" to="/add-transaction">
                    <i className="material-icons"> add </i>
                </Link>
            </div>
        );
    }
}
