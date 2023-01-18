import React, { Component, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


import Use from './Practice/Use';
import Fullname from './Practice/Fullname';
import Test from './Practice/Test';
import Data from './Practice/Data';
import Ujs from './Ujs';
import Newdata from './Practice/Newdata';
import Newdata1 from './Practice/NewData1';
import Exam from './Practice/Exam';
import Prectis from './Practice/Prectis';
import JsxData from './Practice/JsxData';
import MYcowiddata from './Practice/MYcowiddata';
import Axiosdata from './Practice/Axiosdata';
import From2 from './Practice/FromData2';
import FromData2 from './Practice/FromData2';
import Myform from './Practice/Myform';
import LocalStoreg from './Practice/LocalStoreg';
import Datafetch from './Task/Datafetch';
import Dataaxios from './Task/Axiosdata';
import From123 from './Task/From123';
import Data432 from './Task/Data432';
import From444 from './Task/From444';
import Api from './Practice11/Api';
import Api1 from './Practice11/Api1';
import Api2 from './Practice11/Api2';
import Api3 from './Practice11/Api3';
import From222 from './Task/From222';
import Fromlo124 from './Task/Fromlo124';
import From555 from './Task/From555';
import Fromsi1 from './Fromsipal.js/Fromsi1';
import Fromfim2 from './Fromsipal.js/Fromfim2';
import Formiktest from './Fromsipal.js/Formiktest';
import Pro12 from './PropasTwo/Pro12';
import Prop1 from './PropasTwo/Prop1';
import Fromtest99 from './Fromsipal.js/Fromtest99';
import Item from './PropasTwo/Item';
import Deleteitem from './PropasTwo/Deleteitem';
import Grid1 from './Grid/Grid1';
// import Grid2img from './Grid/Grid2img';
import Classapi from './Class/Classapi';
import Form11 from './Class/Form11';
import Fomr12 from './Class/Form12';

import Formtest from './Testtt/Formtest';
import Datapass1 from './Testtt/Datapass1';

import Task33 from './Task/Task33';
import Form111 from './Task/Form111';
import Mymate from './material/Mymate';
import Memo1 from './Memo/Memo1';
import Usememo from './Memo/Usememo';



import {Provider} from  'react-redux';
// import store from './Total/Store/Store';
import Counter from './Total/Counter';
import Formsw1 from './Login/Formsw1';
import Loginsw2 from './Login/Loginsw2';
import Golbal11 from './Login/Golbal11'
import Useref1 from './Useref/Useref1';
import Au111 from './Useref/Au111';
import Header from './New/Header';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import App from './App';
import Error from './New/Error';
import Footer from './New/Footer';
import UseEfect1 from './Leval2oll/UseEfect1';
import DataUp from './Leval2oll/Counter';
import Reducer from './Leval2oll/Reducer';
import Css from './New/Css';
// import Colll from './Colll';
import Html11 from './New/Html11';
import Javascript from './New/Javascript';
import RequireAuth from './Login/RequireAuth';
import Header11 from './Login/Header11';
import Productlist from './Login/Productlist';
import Files1 from './Leval2oll/Files1';
import InquiryForm from './Testtt/InquiryForm';
import {ErrorBoundary} from 'react-error-boundary'
import BuggyCounter from './Leval2oll/Errorcalls/BuggyCounter ';
import Appihook from './Leval2oll/UseHook/Appihook';
import { ErrorFallback } from './Leval2oll/Errorcalls/ErrorFallback';
import MyHoc from './Leval2oll/HOC11/HOC';
import store from './Total/Store/Store';
import UserList from './Total/UserList';
import Countersaga1 from './Total/Countersaga1';
import MyposT from './Total/MyposT';
import Myfunt1 from './Total/MyFount/Myfunt1';
import MyfunR2 from './Total/MyFount/MyfunR2';
import MyfunR3 from './Total/MyFount/MyfunR3';
import Component11 from './Reduser11/Componet/Compo1';
import Store2 from './Reduser11/Store/Store2';
import Posts from './Reduser11/Post/Posts';
import Boostep from './Boostep';
import Posts1 from './Reduser11/PostDemo2/DataPo';
import Calsscomp from './Leval2oll/class/Calsscomp';
import Formc1 from './Leval2oll/class/Formc1';
import Input11 from './Leval2oll/class/Input11';
import Tipp from './Reduser11/PrecTiS1.js/Tipp';
import FormS1 from './Simpal/FormS1';
import Apppi2 from './Simpal/Apppi2';
import LForm99 from './Leval2oll/LForm9/LForm99';
import DForm22 from './Leval2oll/LForm9/DForm22';












const root = ReactDOM.createRoot(document.getElementById('root'));

// let ColllHOC1 = MyHoc(Colll)
// let CssHOC =  MyHoc(Css)


const ColllLazy = React.lazy (() => import('./Colll'));
const Grid2imglazy = React.lazy  (() => import('./Grid/Grid2img'));


root.render( 
  <React.StrictMode>
    <ToastContainer/>
     {/* <App/> */}
    
   {/* <Use/> */}
   {/* <Fullname/> */}
    {/* <Test/>  */}
    {/* <Ujs/>  */}
   {/* <Data/> */}
   {/* <Newdata/>
   <Newdata1/> */}
    {/* <Exam/> */}
  {/* <JsxData/> */}
  {/* <Prectis/> */}
  {/* <MYcowiddata/> */} 
  {/*  <Axiosdata/> */}
  {/* <Myform/>  */}
  {/* <FromData2/> */}
  {/* <LocalStoreg/> */}
  {/* <Datafetch/> */}
  {/* <Dataaxios/> */}
  {/* <From123/> */}
  {/* < Data432/> */}
   {/* <Api/>  */}
   {/* <Api1/> */}
   {/* <Api2/>  */}
   {/* <Api3/> */}
   {/* <From444/> */} 
   {/* <From222/> */}
   {/* <Fromlo124/> */}
   {/* <From555/> */}
    {/* <Fromsi1/> */}
  {/* <Fromfim2/> */}
  {/* <Formiktest/> */}
   {/* <Pro12/> */}
   {/* <Prop1/> */}
   {/* <Fromtest99/> */}
      {/* <Item/> */}
   {/* <Deleteitem/> */}
   {/* <Grid1/> */}
   {/* <Grid2img/> */}
   {/* <Classapi/> */}
    {/* <Fomr12/> 
    <Form11/> */}


  {/* <Formtest/>
  <Datapass1/> */}
  {/* <Task33/> */}
  {/* <Form111/>
  <Mymate/> */}
  {/* <Memo1/> */}
  {/* < Usememo text='my name is ravi dhlariya i am 20 year old i am pursuing Bcom from ms univarshiti'/> */}
  
   {/* <Provider store={store}> */}
       {/* <Counter/> */}
       {/* <UserList/> */}
       {/* <Countersaga1/> */}
       {/* <MyposT/> */}
       {/* <Myfunt1/> */}
       {/* <MyfunR2/>
       <MyfunR3/> */}   
  {/* </Provider> */}

  <Provider store={Store2}>
    {/* <Component11/> */}
    {/* <Posts/> */}

    {/* <Posts1/> */}
    {/* <Tipp/> */}

  </Provider>

  {/* <Formsw1/> */}
  {/* <Loginsw2/> */}
  {/* <Useref1/> */}
  {/* <Au111/> */}

         {/* leval 2222222222222  ====>>>> */}
  {/* <UseEfect1/>
  <DataUp /> */}
  {/* <Reducer/> */}
  {/* <Files1/> */}
  {/* <InquiryForm/> */}
  {/* <Boostep/> */}



  {/* <ErrorBoundary
    FallbackComponent={ErrorFallback}
  >
   <BuggyCounter/>
   <Appihook/>
    
  </ErrorBoundary> */}

 
{/* 
  <BrowserRouter> 
   <Suspense fallback={<div>Loading...</div>}>

   <Header/>
  <Routes>
        <Route path="/" element={<ColllLazy/>} />
         <Route path="/Loginsw2" element={<Loginsw2/>} />
         <Route path="/register" element={<Formsw1/>} />
          <Route path="/Formsw1" element={<RequireAuth><Productlist/></RequireAuth>} />
          <Route path="/Grid2img" element={<Grid2imglazy/>} />
          
        <Route path="/Css" element={<Css/>}>
          <Route path="Html11" element={<Html11/>} />
          <Route path="Javascript" element={<Javascript/>} />
        </Route>

          <Route path="*" element={<Error/>} />                 
  </Routes>
   <Footer/>

  </Suspense>
  </BrowserRouter>  
   
  */}

   {/* class componet .....................  */}

        {/* <Calsscomp/> */}
        {/* <Formc1/> */}
       {/* <Input11/> */}
       {/* <FormS1/> */}
       {/* <Apppi2/> */}

       {/* <LForm99/> */}
       <DForm22/>
  
   
  </React.StrictMode>

);

reportWebVitals(); 
