import React, {Component} from "react";

let self = undefined;

export default class PaymentMethodsDropDown extends Component {

    constructor(props) {
        super(props);
        self = this;
        this.state = {
            paymentMethods: [],
            selectedPaymentMethod: {}
        };
    }

    componentDidMount() {
        this.props.paymentMethods().then(
            data => this.setState({paymentMethods: data})
        );
    }

    getData() {
        return this.state.selectedPaymentMethod;
    }

    // addNewHandler = (event) => {
    //     console.log(this.props.history);
    //     console.log("I am called with value {" + event.target.value + "}");
    //     if (event.target.value === "addNew") {
    //         this.props.history.push("add-payment");
    //     }
    // }
    selectPayment = (e) => {
        let id = e.target.value;
        let selectedPaymentMethod = this.state.paymentMethods.find(pm => pm.id = id);
        this.setState({selectedPaymentMethod: selectedPaymentMethod});

    }

    render() {
        const displaySelect = {display: "block"}


        return (
            // <option> Something </option>
            <select ref="paymentMethod" style={displaySelect} defaultValue={"paymentType"}
                    onChange={this.selectPayment}>
                {/*onChange={this.addNewHandler}>*/}
                <option value="paymentType" disabled> Choose a Payment Method</option>
                {
                    this.state.paymentMethods.map((paymentMethod) => (
                        <option key={paymentMethod.id}
                                value={paymentMethod.id}>
                            {paymentMethod.userIdentifiedName}
                        </option>))
                }
                {/*<option value="addNew"> Add New </option>*/}
            </select>
        )
    }
}
