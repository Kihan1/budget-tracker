import React,{useContext} from "react";
import { AppContext } from "./context/AppContext";


const Remain =()=>{
    const {expenses, budget}=useContext(AppContext);

    const totalExpenses=expenses.reduce((total,item)=>{
        return(total=total + item.cost);
    }, 0);

    //i am trying to give a condiitional value to the remain if the remainder is below 0 it should display red colour
{/*const alertType = totalExpenses > budget ? 'alert-danger': 'alert-success';*/}

    return(
        <div className="alert alert-success">
            <span>Remaining: Tsh{budget - totalExpenses}</span>
        </div>
    )
}

export default Remain;