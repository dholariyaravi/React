import React, { Component } from 'react'
import Footer from '../../New/Footer';
import Header from '../../New/Header';




const MyHoc = (Component) => () => (
    <div>
       
       <Header/><br/>

      
        <div>
            <Component/>
        </div>

        {/* <Footer/> */}
        
    </div>
);

export default MyHoc;

