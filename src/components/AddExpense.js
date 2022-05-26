import React from "react";

const AddExpense=()=>{
    return(
        <form>
            <div className="row">
              <div className="col-sm">
                  <label htmlFor="name">Name of Expense</label>
                  <input 
                  type="text"
                   className="form-control"
                   id="name"
                   required="required"
                   />
              </div>
              <div className="col-sm">
                  <label htmlFor="cost">Cost</label>
                  <input
                  type="number"
                  className="form-control"
                  id="number"
                  required="required"
                  />
              </div>
              <div className="col-sm mt-4">
                  <button type="submit" className="btn btn-primary">Add Expense</button>
              </div>
            </div>
        </form>
    )
}

export default AddExpense;