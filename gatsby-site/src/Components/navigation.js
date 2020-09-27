import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'

export default function Navigation() {
    const [navState, setNavDisplay]= useState({top:'0px'});
    const [menuState, setShowMenu] = useState({display: 'none'})
    let previousYPos = window.pageYOffset; 
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            let currentYPos = window.pageYOffset;
            if(previousYPos> currentYPos){
                setNavDisplay({
                    top: '0px',
                });
            }else{
                setNavDisplay({
                    top: '-50px',
                });
            }
            previousYPos = currentYPos;
        })
    },[])

    const displayMenu = ()=>{
        setShowMenu({
            display: (menuState.display ==='none')? 'grid' : 'none',
            width:  (menuState.display ==='none')? '100%' : '0%',
        })
    }

        return (
            <>
        <nav style={{top: navState.top}}>
            
            <div className="buttons">
                <Link to="/about">About</Link>
                <Link to="/">Home</Link>
                <Link to='/posts'>Posts</Link> 
                <Link to='/'>Portfolio</Link>
                <Link to='/'>Github</Link>  
            </div>
            <p className="menu" style={{"color":"rgb(19,17,39)",'margin': '0',
    'font-size': 'large'}}>Blog</p>
            <button className="menu" onClick={displayMenu} title="menu">
                <div></div>
                <div></div>
                <div></div>
            </button>
        </nav>
        <div id="overlay" style={{display: menuState.display, width:menuState.width}}>
            <div id="closeMenu" onClick={displayMenu}>&times;</div>
        <Link to="/about">About</Link>
                <Link to="/">Home</Link>
                <Link to='/posts'>Posts</Link> 
                <Link to='/'>Portfolio</Link>
                <Link to='/'>Github</Link>  
        </div>
        </>
    )
}
