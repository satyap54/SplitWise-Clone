import React, {Component} from 'react';
import AddPaymentForm from "./AddPaymentForm";
import PaymentInfoCard from "./PaymentInfoCard";

class Transactions extends Component{
    render(){
        return(
            <div className = "transactions">
                <AddPaymentForm addPayment = {this.props.addPayment} personList = {this.props.personList}/>
                <PaymentInfoCard paymentList = {this.props.paymentList}/>
            </div>
        );
    }
}

export default Transactions;