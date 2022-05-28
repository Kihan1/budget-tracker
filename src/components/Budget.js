import React,{useContext} from 'react';
import { AppContext } from './context/AppContext';

const Budget=()=>{
  const {budget} =useContext(AppContext);
  return (
    <div className='alert alert-secondary'>
      <span>Budget: Tsh{budget}
      <button className="m-3 btn btn-primary">Edit</button>
      </span>
    </div>
  )
}

export default Budget