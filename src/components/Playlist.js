// src/components/Playlist.js
import React from 'react';
import './Playlist.css';

const Playlist = ({ name, videoCount, className }) => {
    return (
        <div className={`playlist ${className}`}>
            <div className="playlist-thumbnail">
                {/* Placeholder for Thumbnail Image */}
                {/* Example: <img src={thumbnailUrl} alt={`${name} thumbnail`} /> */}
            </div>
            <div className="playlist-info">
                <h3>{name}</h3>
                <p>{videoCount} Videos</p>
            </div>
        </div>
    );
};

export default Playlist;
