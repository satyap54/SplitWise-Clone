import React, {Component} from 'react';
import AddPaymentForm from "./AddPaymentForm";
import PaymentInfoCard from "./PaymentInfoCard";

class Transactions extends Component{
    render(){
        return(
            <div className = "transactions">
                <AddPaymentForm addPayment = {this.props.addPayment} personList = {this.props.personList}
                    availableId = {this.props.availableId}/>
                <PaymentInfoCard paymentList = {this.props.paymentList} deletePayment = {this.props.deletePayment}/>
            </div>
        );
    }
}

export default Transactions;
