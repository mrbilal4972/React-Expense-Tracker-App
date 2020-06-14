import React, { useContext } from 'react'
import {Table} from 'react-bootstrap';
import {GlobalContext} from '../App';


function IncomeExpense() {

  const {mainState} = useContext(GlobalContext)

  return (
    <>
    <Table className='text-center mt-3 bg-light' striped bordered hover>
  <thead>
    <tr>
      <th>Income
        <br />
        <b className="text-success">$ {mainState
        .reduce((totol, i) => {
            return (i.amount > 0 ? totol + Number(i.amount) : totol + 0)
        }, 0).toFixed(2)
                }
        </b>
      </th>
      <th>Expense
        <br />
        <b className="text-danger">$ {mainState
        .reduce((totol, i) => {
                    return (i.amount < 0 ? totol + Number(Math.abs(i.amount)) : totol + 0)
                }, 0).toFixed(2)
                }
              </b>
            </th>
          </tr>
        </thead>
      </Table>
          </>
  )
}

export default IncomeExpense
