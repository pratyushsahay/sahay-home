import React from 'react';
import Button from './Button';
import './MainPage.css'
import '../App.css'
import ButtonRoute from './ButtonRoute';

function MainPage() {
    return (
        <div className='main-container'>
            <video src='/video-2.mp4' autoPlay loop muted playsInline />
             <h1>sahay-home</h1>
             <p>i am a software engineer</p>

             <div className='main-btns'>
                <ButtonRoute
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                        About Me
                </ButtonRoute>
                <Button
                    className='btns--external'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick='https://github.com/pratyushsahay/'
                    type='button'>
                        GITHUB <i className="fa-brands fa-github"></i>
                </Button>
             </div>
        </div>
    )
}

export default MainPage;