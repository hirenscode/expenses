import React, {Component} from "react";

export default class AddPaymentMethod extends Component {

    addPaymentMethod(event) {
        event.preventDefault();

        let paymentMethod = {
            date: this.refs.date.value,
            amount: this.refs.amount.value,
            description: this.refs.description.value,
            paymentMethod: this.refs.paymentMethod.value,
            category: this.refs.category.value,
            expenseBy: this.refs.expenseBy.value
        }

        fetch("http://localhost:8080/api/v1/payment-method", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(paymentMethod)
        }).then(response => response.json());

        window.location.reload();
    }

    render() {
        return (
            <div className="row">
                <form className="col s12" onSubmit={this.addPaymentMethod.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">date_range</i>
                            <input placeholder="Placeholder" ref="date" type="text" className="datepicker"/>
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
                            <textarea ref="description" className="materialize-textarea"></textarea>
                            <label htmlFor="description"> Description </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <select ref="paymentMethod">
                                <option value="" disabled selected> Choose a Payment Method</option>
                                <option value="1"> BofATravel</option>
                                <option value="2"> ChaseSapphire</option>
                                <option value="3"> Discover</option>
                            </select>
                            <label> <i className="material-icons prefix">credit_card</i> Payment Method </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">library_add</i>
                            <input id="" type="text" className="validate"/>
                            <label htmlFor="category"> Category </label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">library_add</i>
                            <input id="expenseBy" type="text" className="validate"/>
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
