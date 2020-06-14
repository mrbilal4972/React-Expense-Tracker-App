import React, { useState, useContext } from 'react';
import {GlobalContext} from '../App';

function AddTranscation() {
  const {setMainState} = useContext(GlobalContext);

    const [val, setVal] = useState({text:'', amount:''});

    function inputHandler(e){
        setVal({
            ...val,
            [e.target.name]: e.target.value
        })
    }

    function submitHandler(e){
      e.preventDefault();
      setMainState({type: 'Add_Transcation', values: {val}})
      setVal({text:'', amount:''})
    }

  return (
    <div className='my-5'>
        <h4>Add Transcation</h4>
        <hr className='new'/>
      <form onSubmit={submitHandler}>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1"><strong>Text</strong></label>
            <input onChange={inputHandler} name='text' value={val.text} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Text..." />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1"><strong>Amount</strong></label>
            <small id="emailHelp" className="form-text text-muted"><b>(negetive-expense positive-income)</b></small>
            <input onChange={inputHandler} name='amount' value={val.amount} type="number" className="form-control" id="exampleInputPassword1" placeholder="0.00" />
        </div>
        <button type="submit" className="btn btn-primary btn-lg btn-block">Add Transcation</button>
      </form>
    </div>
  )
}

export default AddTranscation
