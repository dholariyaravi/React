import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import './Demo.css';

// import Demo from './Demo.js';
import reportWebVitals from './reportWebVitals';
// import Name from './Footer';
// import { Container } from './Container';
// import Garage, { Cars } from './Info';
// import Event from './Event';
// import Goal from './Conditional';
// import Liston from './Lists';

// import {  Routes, Route, BrowserRouter } from "react-router-dom";
// import Layout from './Pages/Layout';
// import Home from './Pages/Home';
// import Contact from './Pages/Contact';
// import Blogs from './Pages/Blogs';
// import Styling from './Styling';
// import Nopage from './Pages/Nopage';
// import UState from './Reack Hooks/Uses';
// import Timer from './Reack Hooks/Ueffect';
// import Componet1 from './Reack Hooks/Context';
import './Practice/Styles.css'; 
import "bootstrap/dist/css/bootstrap.css";

import Use from './Practice/Use';
import Fullname from './Practice/Fullname';
import Test from './Practice/Test';
import Data from './Practice/Data';
import Ujs from './Ujs';
import Newdata from './Practice/Newdata';
import Newdata1 from './Practice/NewData1';

import './Practice/Data12.css';







// export default function Router(){
//   return(
//    <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout/>}>
//           <Route index  element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<Nopage
//            />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    {/* <App />
    <Router/>
    <Styling/>
    <UState/>
    <Timer/>
   <Componet1/> */}
   {/* <Use/>
   <Fullname/>*/}
    {/* <Test/>  */}
    {/* <Ujs/>  */}
   {/* <Data/> */}
   <Newdata/>
   <Newdata1/>

   
    {/* <Demo Name="my"/>
    <Name Favc="black car"/>
    <br/>
    <Container/>
    <Garage/>
    <Event/>
    <Goal isGame={true}/> 
    <Liston/> */}
    
  </React.StrictMode>

);

reportWebVitals();
