import React from 'react'

export default function GoToTopBot() {
    const style = {
        position: 'fixed',
        bottom: '0%',
        right: '0%',
    };
    const arrow ={
        border: 'solid black',
        'border-width': '0 3px 3px 0',
        'display': 'inline-block',
        padding: '3px',
          
    }
    
    const up = {
        'transform': 'rotate(-135deg)',
        '-webkit-transform': 'rotate(-135deg)',
    }
  
    const down ={
        'transform': 'rotate(45deg)',
        '-webkit-transform': 'rotate(45deg)',
    }
    const scrollTop =()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior: 'smooth',
        })
    }

    const scrollBot =()=>{
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            left: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div style={style}>
            <button id="top" onClick={scrollTop} >Top</button>
            <button id="bottom" onClick={scrollBot} >Bottom</button>
        </div>
    )
}
