import React, { useRef } from 'react'
import Audio from './audio/a1.mp3';
import './Style.css';


export default function Au111() {

    const mybutton = useRef();
    const myAudio  = useRef();

    const mydata = () => {
        if(!mybutton.current.classList.contains('slide')){

            mybutton.current.classList.add('slide');
            myAudio.current.play();
        } else{
           mybutton.current.classList.remove('slide');
           myAudio.current.pause();
        }
    }



  return (

   <header>
    <audio ref={myAudio } className="video-container"> 
        <source src={Audio} type=' audio/mp3' />
    </audio>

     <h1><Audio/></h1>

    <button class='switch-btn' ref={mybutton} onClick={mydata}>
    <span>
     play
    </span>
    <span>
      pause
    </span>
    <span class="switch"></span>
    </button>
      
  </header>
 );
};