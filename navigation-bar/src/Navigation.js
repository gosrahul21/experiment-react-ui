import React, { useState, useEffect } from 'react';
import './Navigation.css'
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export default function Navigation() {

  const [ showNav , setShowNav] = useState(false);


    const onClickEventHandler = ()=>{
        setShowNav(false);
    }


    useEffect(()=>{
        document.addEventListener('click',onClickEventHandler);


        return ()=>{
            document.removeEventListener('click',onClickEventHandler);
        }
    },[])

  return <div className='navigation__menu '>

       {/* {!showNav && <MenuIcon fontSize='large' className='menu__icon' onClick={()=>setShowNav(true)} />} */}
       
   {<div className={`navigation__core`}>

        <div onClick={(e)=>e.stopPropagation()} className='nav__icon'>
            {showNav&&<MenuOpenIcon color="white" fontSize="large" onClick={()=>setShowNav(false)} className='menu__open__icon' />}
            {!showNav&&<MenuIcon fontSize='large' className='menu__icon' onClick={()=>setShowNav(true)} />}
        </div>
        
        <div className={`navigation__list  ${showNav?"scale-up-hor-left":" scale-out-hor-left"}`}>
            <p>Falna</p>
            <p>Dikhana</p>
            <p>Falna</p>
            <p>Dikhana</p>
            <p>Falna</p>
            <p>Dikhana</p>
            <p>Falna</p>
            <p>Dikhana</p>
        </div>
    </div>}

  </div>;
}
