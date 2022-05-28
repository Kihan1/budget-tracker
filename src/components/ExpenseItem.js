import React,{useContext} from "react";
import { AppContext } from "./context/AppContext";

const ExpenseItem=(props)=>{
    const {dispatch}=useContext(AppContext);

    const handleDeleteExpense =()=>{
        dispatch({
            type:"DELETE_EXPENSE",
            payload:props.id,
        })
    }

    return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <div>
                <span className="py-1">
                    Tsh.{props.cost}
                </span>
               <button className="box-shadow-0 m-1 btn btn-primary" onClick={handleDeleteExpense}>Delete</button>
            </div>
        </li>
    )
}

export default ExpenseItem;