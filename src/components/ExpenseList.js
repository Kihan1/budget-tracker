import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList=()=>{
    const expenses=[
        {id:12,name:"Shopping",cost: 500},
        {id:13,name:"Transport",cost: 500},
        {id:14,name:"Internet",cost: 500},
        {id:15,name:"Food",cost: 500}
    ]
    return(
        <ul className="list-group">
            {expenses.map((expense)=>(
            <ExpenseItem
            id={expense.id}
            name={expense.name}
            cost={expense.cost} 
            />
            ))}
        </ul>
    )
}

export default ExpenseList;