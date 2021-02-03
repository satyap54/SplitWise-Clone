import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Summary extends Component{
    state = {
        operationList : [],
    }

    componentDidMount(){
        this.calculateTransactions();
    }

    calculateTransactions = ()=>{
        const {personList, paymentList, numberOfPeople} = this.props;
        let paid = {}, n = numberOfPeople, willGet = {}, transactions = [];
        personList.forEach(person => {
            paid[person.name] = 0;
            willGet[person.name] = 0;
        });

        paymentList.forEach(payment => {
            paid[payment.paidBy] += parseInt(payment.amount);
        });


        for(let i = 0, id = 0; i < n; i++){
            let curr = personList[i];
            for(let j = i + 1; j < n; j++){
                let other = personList[j];
                if(paid[curr.name] === paid[other.name])
                    continue;

                let transaction = Math.abs(paid[curr.name] - paid[other.name]);
                transaction /= (n * 1.0);

                if(paid[curr.name] >= paid[other.name])
                    transactions.push([other, curr, transaction, id])
                else
                    transactions.push([curr, other, transaction, id])
                ++id;
            }
        }

        this.setState({
            operationList : [...transactions],
        });

        console.log("constructor call ", transactions, this.state.operationList);
    }

    getSteps = ()=>{
        console.log("Inside get steps", this.state.operationList);
        return(
            this.state.operationList.map(
                (edge)=>{
                    return(
                        <ListItem>
                            <ListItemText primary= {edge[0].name + " -> " + edge[1].name} secondary={"Rs. "+edge[2]} />
                        </ListItem>
                    )
                }
            )
        )
    }

    render() {
        return (
            <div>
            <Typography variant="h3" gutterBottom>
                Summary
            </Typography>
            <List style = {{
                width: '100%',
                maxWidth: 360,
              }}
            >
                { this.getSteps() }
            </List>
            </div>
        )
    }
}

export default Summary;