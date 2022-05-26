import React from "react";

const ExpenseItem=(props)=>{
    return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <div>
                <span className="py-1">
                    Tsh.{props.cost}
                </span>
               <button className="box-shadow-0 m-1 btn btn-primary">Delete</button>
            </div>
        </li>
    )
}

export default ExpenseItem;