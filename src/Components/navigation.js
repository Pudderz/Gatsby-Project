import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'

export default function Navigation() {
    const [navState, setNavDisplay]= useState({top:'0px'});
    const [menuState, setShowMenu] = useState({display: 'none'})


    const onScroll=(previousYPos)=>{

        const currentYPos = window.pageYOffset;
        if(previousYPos> currentYPos){
            setNavDisplay({
                top: '0px',
            });
            }else{
            setNavDisplay({
                top: '-50px',
            });
        }
        return currentYPos;
    }

    useEffect(()=>{
        let previousYPos = window.pageYOffset; 
        window.addEventListener('scroll', ()=>{
            previousYPos= onScroll(previousYPos);  
        })
        return ()=> {
            window.removeEventListener('scroll', ()=>{
            previousYPos= onScroll(previousYPos);  
        
        })
        }
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
                <Link to="/">Home</Link>
                <Link to='/posts'>Posts</Link> 
                <Link to="/about">About</Link>
                <Link to='/'>Portfolio</Link>
                <Link to='/'>Github</Link>  
            </div>
            <Link to='/' className="menu" style={{"color":"rgb(19,17,39)",'margin': '0',
    'fontSize': 'large'}}>Blog</Link>
            <button className="menu" onClick={displayMenu} onKeyDown={displayMenu} title="menu">
                <div></div>
                <div></div>
                <div></div>
            </button>
        </nav>
        <div id="overlay" style={{display: menuState.display, width:menuState.width}}>
            <button id="closeMenu" onClick={displayMenu} onKeyDown={displayMenu} >&times;</button>
                <Link to="/">Home</Link>
                <Link to='/posts'>Posts</Link> 
                <Link to="/about">About</Link>
                <Link to='/'>Portfolio</Link>
                <Link to='/'>Github</Link>   
        </div>
        </>
    )
}


