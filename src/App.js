import React, { useReducer } from 'react';
import Title from './Components/Title'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Balance from './Components/Balance'
import IncomeExpense from './Components/IncomeExpense'
import History from './Components/History'
import AddTranscation from './Components/AddTranscation'
import {Reducer} from './Components/reducer'

const GlobalContext = React.createContext();
const GProvider = GlobalContext.Provider;

const initialState = [];

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <GProvider value={{mainState: state, setMainState: dispatch}}>
      <div className='col-lg-4 my-3 main container bg-dark text-light'>
        <Title />
          <Balance />
          <IncomeExpense />
          <History />
          <AddTranscation />
      </div>
        </GProvider>
  );
}

export default App;
export {GlobalContext};
