// import logo from './logo.svg';
import './App.css';
import Child1 from './Leval2oll/useContext1/Child1';
import { useState } from 'react'; 
import Header from './Leval2oll/useContext1/Header';
import Contex from './Leval2oll/useContext1/Contex';

function App() {
  const [lan, setlan] = useState('en');

  return (
   <div>
    {/* <Contex.Provider value={{lan,setlan}}>
   
      <Header/>
      <Child1/>
    </Contex.Provider> */}
   </div>
  );
}

export default App;
