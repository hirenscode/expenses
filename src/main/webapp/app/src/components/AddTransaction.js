import React, {Component} from "react";
import PaymentMethodsDropDown from "./PaymentMethodsDropDown";
import {addTransaction} from "../services/TransactionService";
import {getAllPaymentMethods} from "../services/PaymentMethodService";

export default class AddTransaction extends Component {

    addTransaction(event) {
        event.preventDefault();

        let selectedPaymentMethod = Object.assign(
            {},
            this._paymentMethodDD.getData()
        );

        console.log(`Add Transaction Selected Payment Method: ${selectedPaymentMethod}`)

        let transaction = {
            date: new Date(this.refs.date.value),
            amount: this.refs.amount.value,
            description: this.refs.description.value,
            paymentMethod: selectedPaymentMethod,
            category: this.refs.category.value,
            expenseBy: this.refs.expenseBy.value
        }

        let addedResponse = addTransaction(transaction);
        addedResponse.then(
            res => {
                let message = "[empty]";
                if (res.status >= 200) {
                    message = "Record Added Successfully!"

                } else {
                    message = `There was a problem adding record with status ${res.status}`;
                }
                document.getElementById("message").innerText = message;
                document.getElementById("message").classList.remove("hide");
            }
        );
        // window.location.reload();
    }

    hideMessage() {
        if (!document.getElementById("message").classList.contains("hide")) {
            document.getElementById("message").classList.add("hide");
        }
    }

    render() {
        return (
            <div className="row">
                <div className="input-field col s12">
                    <div className="card-panel teal lighten-2 z-depth-5 hide" id="message" onClick={this.hideMessage}/>
                </div>
                <form className="col s12" onSubmit={this.addTransaction.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">date_range</i>
                            <input ref="date" type="text" className="datepicker"/>
                            <label htmlFor="date"> Date </label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">attach_money</i>
                            <input ref="amount" type="text" className="validate"/>
                            <label htmlFor="amount"> Amount </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">attach_money</i>
                            <textarea ref="description" className="materialize-textarea"/>
                            <label htmlFor="description"> Description </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s1">
                            <label> <i className="material-icons prefix">credit_card</i> </label>
                        </div>
                        <div className="input-field col s11">
                            <PaymentMethodsDropDown ref={(ref) => this._paymentMethodDD = ref}
                                                    paymentMethods={getAllPaymentMethods}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">library_add</i>
                            <input ref="category" type="text" className="validate"/>
                            <label htmlFor="category"> Category </label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">library_add</i>
                            <input ref="expenseBy" type="text" className="validate"/>
                            <label htmlFor="expenseBy"> Expense By </label>
                        </div>
                    </div>
                    <div className="row">
                        <button className="waves-effect waves-light btn" type="submit" name="action"><i
                            className="material-icons left">add_box</i> Add New Transaction
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
