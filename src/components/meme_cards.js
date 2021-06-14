import React from 'react'
import '../components/meme_cards'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
const MemeCards=(props)=> {
    
    
    return (
        <Link
        to={{
            pathname: "/edit_page",
            state: {
              props
            },
          }}
        
        >
          <div className='meme-img-container' >
            <img className='meme-img' src={props.image} />
        </div>
        </Link>
    )
}

export default MemeCards
