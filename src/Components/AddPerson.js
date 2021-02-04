import React, { Component } from "react";

// utils
import Person from "../utils/Person";

// Material ui componenets
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';


class AddPerson extends Component{
	state = {
		name : null,
	}

	handleSubmit = (event)=>{
		event.preventDefault();
		console.log(event);
		if(this.state.name){
			let x = new Person(this.state.name, this.props.numberOfPeople + 1);
			(this.props.addPerson)(x);
		}

		this.state.name = null;
		console.log(this.props.personList);
	}

	handleChange = (e)=>{
		this.setState({
			name : e.target.value,
		})
	}

	displayPeopleName = ()=>{
		const { personList } = this.props;
		const renderedList = (
			personList.map(
				(person)=>{
					return(
						<Grid item md = {4}>
							<Card style = {{minWidth : 50, maxWidth: 300, }}>
								<CardContent>
									<Typography variant = "h5" component = "h2">
										{person.name}
									</Typography>
									<Button variant="contained" color="secondary" size = "small" disableElevation
											style = {{ width: '20px', marginTop: '10px',}}
											onClick = {()=> this.props.deletePerson(person.name)}
									>
										Remove
									</Button>
								</CardContent>
							</Card>
						</Grid>
					)
				}
			)
		);
		
		return renderedList;
	}

    render(){
		return(
			<div className = "addPerson">
				<form onSubmit = {this.handleSubmit}>
					<FormControl style = {{ spacing : "2", minWidth : 400,}}>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="Name"
							type="name"
							fullWidth
							onChange = {this.handleChange}
							onSubmit = {this.handleSubmit}
							value = {this.state.name}
						/>
					</FormControl>

					<Button autoFocus variant = "contained" onClick={this.handleSubmit} color="primary"
							style = {{ marginTop : 12 }} disableElevation>
						Add
					</Button>
				</form>

				<Grid container spacing={3}>
					{this.displayPeopleName()}
				</Grid>
			</div>
		);
	}
}

export default AddPerson;
