import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import PaymentInfoDialog from "./PaymentInfoDialog";
import Payment from "../utils/Payment";

class AddPaymentForm extends Component{
	state = {
		open : false,
	}

	handleClose = ({amount, paidAt, paidBy, paidOn, description}) =>{
		this.setState({
			open : false,
		});

		if(amount === null || paidBy === null)
			return;

		console.log(amount, paidAt, paidBy);
		let ob = new Payment(amount, paidAt, paidBy, paidOn, description, this.props.availableId);
		this.props.addPayment(ob);
	}

	handleClickOpen = () =>{
		this.setState({
			open : true,
		});
	}

	render(){
		return(
		   <div className = "paymentForm">
				<Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
					Add New Payment
				</Button>
				  <PaymentInfoDialog personList = {this.props.personList} 
				  		open={this.state.open} onClose={this.handleClose} />
		   </div>
		);
	}
}

export default AddPaymentForm;
