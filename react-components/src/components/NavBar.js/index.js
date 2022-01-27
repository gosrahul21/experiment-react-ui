import React, { useState, useEffect } from 'react';
import './index.css'
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Link } from 'react-router-dom';

export default function Navigation() {

  const [ showNav , setShowNav] = useState(false);


    const onClickEventHandler = ()=>{
        setShowNav(false);
    }


    useEffect(()=>{
        window.addEventListener('click',onClickEventHandler);


        return ()=>{
            window.removeEventListener('click',onClickEventHandler);
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
            <Link to = "/cup"><p>Cup</p></Link>
            <Link to="/scroll"><p>Scroll Page </p></Link>
            <Link to='scroll-indicator'><p>Scroll Indicator</p></Link>
           {/* { 
            <Link to='scroll-indicator'><p>Scroll Indicator</p></Link>
            <Link><p>Falna</p></Link>
            <Link><p>Falna</p></Link>
            <Link><p>Falna</p></Link>
            <Link><p>Falna</p></Link>} */}
        </div>
    </div>}

  </div>;
}
