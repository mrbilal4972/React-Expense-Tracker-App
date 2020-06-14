import React, {useContext} from 'react';
import {GlobalContext} from '../App';

function Balance() {
  const {mainState} = useContext(GlobalContext);
  return (
      <div className="mt-4">
      <h6>Your Balance</h6>
      <h4>$
      {mainState
        .reduce((totol, i) => {
                  return (i.amount > 0 ? totol + Number(i.amount) : totol + Number(i.amount))
              }, 0)
        .toFixed(2)
      }
      </h4>
      </div>
  )
}

export default Balance
