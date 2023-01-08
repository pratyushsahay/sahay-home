import React from 'react';
import { Button } from './Button';
import './MainPage.css'
import '../App.css'

function MainPage() {
    return (
        <div className='main-container'>
            <video src='/video-2.mp4' autoPlay loop muted/>
             <h1>MAIN PAGE</h1>
             <p>SOME TEXT</p>

             <div className='main-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                        Get Started
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                        WATCH TRAILER <i className='far fa-play-circle'/>
                </Button>
             </div>
        </div>
    )
}

export default MainPage;