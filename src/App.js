// src/App.js
import React from 'react';
import './App.css';
import LeftMenu from './components/LeftMenu';
import PlaylistMainPage from './components/PlaylistMainPage';
import Slider from './components/Slider';

function App() {
    return (
        <div className="app">
            <LeftMenu />
            <div className="main-content">
                <PlaylistMainPage />
                <Slider />
            </div>
        </div>
    );
}

export default App;
