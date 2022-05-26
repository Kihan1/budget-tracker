import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import Budget from "./components/Budget"
import Remain from "./components/Remain";
import Expense from "./components/Expense";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";

const App =()=>{
  return(
   <div className="container">
   <h1 className="mt-3"> Budget Tracker</h1>
   <div className="row mt-3">
     <div className="col-sm">
       <Budget />
     </div>
     <div className="col-sm">
       <Remain />
     </div>
     <div className="col-sm">
       <Expense />
    </div>
   </div>
   <h3 className="mt-3">Expenses</h3>
   <div className="row mt-3">
     <div className="col-sm">
       <ExpenseList />
     </div>
   </div>
   <h3 className="mt-3">Add Expenses</h3>
     <div className="row mt-3">
       <div className="col-sm">
         <AddExpense />
       </div>

     </div>
   </div>
  );
}

export default App;

















