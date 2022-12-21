// import logo from './logo.svg';
import './App.css';
import Child1 from './Leval2oll/useContext1/Child1';
import { useState } from 'react'; 
import Header from './Leval2oll/useContext1/Header';
import Contex from './Leval2oll/useContext1/Contex';
import { useRoutes } from 'react-router-dom';
import Css from './New/Css';
import Html11 from './New/Html11';
import Javascript from './New/Javascript';
import Form11 from './Class/Form11';
import Grid2img from './Grid/Grid2img';
import Fromsi1 from './Fromsipal.js/Fromsi1';

function App() {

  let element = useRoutes([
    {
      path : 'Css',
      element : <Css/>,
      children: [
        {
          path : 'Html11',
          element : <Html11/>,
        },
        {path : 'Javascript',
        element : <Javascript/>},
      ],
    },
    {
      path : '/',
      element : <App/>,
    },
    {
      path : '/Form11',
      element : <Form11/>,
    },
    {         
      path : '/Grid2img',
      element : <Grid2img/>, 
    },
    {
      path : '/Fromsi1',
      element : <Fromsi1/>,
    }
   
  ])
  // const [lan, setlan] = useState('en');

  // return element ;

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
