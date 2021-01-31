import React, { useEffect, useState } from 'react';
import './Nav.css';



function Nav(){
    const [show,handleshow]=useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>100){
                handleshow(true);
            }
            else{
                handleshow(false);
            }
        });
        return ()=>{
            window.removeEventListener('scroll');
        };
    },[]);

    return (
        <>
        {/* <div className={`nav ${show && 'nav__black'}`}> */}
        <div className={show ? 'nav__black':'nav'}>



        <h1>  NETFLIX </h1>
        <h2>  Join us  </h2>




        </div>





        </>
    )


}

export default Nav;