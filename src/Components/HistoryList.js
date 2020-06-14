import React, {useContext} from 'react';
import {GlobalContext} from '../App'

function HistoryList() {

  const {mainState, setMainState} = useContext(GlobalContext)

  return (
    <>
    {mainState.map((i, index) => {
      return( 
              <div key={index} className={`d-flex border border-${i.amount < 0 ? 'danger' : 'success'} alert alert-light alert-dismissible fade show`}role="alert">
              <div className="mr-auto"><strong>{i.text}</strong></div>
              <div className="">{`${i.amount < 0 ? '-' : '+'}$${Math.abs(i.amount)}`}</div>
              <button onClick={() => setMainState({type: 'Del_Transcation', i: index})} type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
              {/* <span className='d-flex justify-content-end'></span> */}
              
              </div>
      )
    })
    }
      {/* <div className="border border-success alert alert-light alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div className="border border-danger alert alert-light alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>*/}
    </> 
  )
}

export default HistoryList
