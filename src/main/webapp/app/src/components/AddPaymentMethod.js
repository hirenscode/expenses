import React, {Component} from "react";
import {addPaymentMethod} from "../services/PaymentMethodService";

export default class AddPaymentMethod extends Component {

    addPaymentMethod(event) {
        event.preventDefault();

        let paymentMethod = {
            bankName: this.refs.bankName.value,
            userIdentifiedName: this.refs.userIdentifiedName.value,
            accountNumber: this.refs.accountNumber.value
        }

        let addedResponse = addPaymentMethod(paymentMethod);
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

    }

    render() {
        return (
            <div className="row">
                <div className="input-field col s12">
                    <div className="card-panel teal lighten-2 z-depth-5 hide" id="message"/>
                </div>
                <form className="col s12" onSubmit={this.addPaymentMethod.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input ref="bankName" type="text" className="validate"/>
                            <label htmlFor="bankName"> Bank Name </label>
                        </div>
                        <div className="input-field col s6">
                            <input ref="userIdentifiedName" type="text" className="validate"/>
                            <label htmlFor="userIdentifiedName"> What do you want to call it? </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea ref="accountNumber" className="materialize-textarea"/>
                            <label htmlFor="accountNumber"> Account Number </label>
                        </div>
                    </div>
                    <div className="row">
                        <button className="waves-effect waves-light btn" type="submit" name="action"><i
                            className="material-icons left">add_box</i> Add New Payment Method
                        </button>
                    </div>
                </form>
            </div>
        );
    }

}
