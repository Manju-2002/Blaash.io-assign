// src/components/LeftMenu.js
import React from 'react';
import './LeftMenu.css';

const LeftMenu = () => {
    return (
        <div className="left-menu">
            <h2 className="logo">blaash</h2>
            <ul>
                <li>Revenue</li>
                <li>Shoppable Video</li>
                <li>Story</li>
                <li>Live Commerce</li>
                <li className="active">Playlist Manager
                    <ul>
                        <li>Product Playlist</li>
                    </ul>
                </li>
                <li>One Click Post</li>
                <li>Calendar</li>
                <li>Hire Influencer</li>
            </ul>
        </div>
    );
};

export default LeftMenu;
