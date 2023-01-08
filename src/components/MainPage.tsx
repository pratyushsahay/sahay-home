import React from 'react';
import Button from './Button';
import './MainPage.css'
import '../App.css'

function MainPage() {
    return (
        <div className='main-container'>
            <video src='/video-2.mp4' autoPlay loop muted playsInline />
             <h1>sahay-home</h1>
             <p>i am a software engineer</p>

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
                        GITHUB <i className="fa-brands fa-github"></i>
                </Button>
             </div>
        </div>
    )
}

export default MainPage;