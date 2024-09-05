// src/components/Slider.js
import React from 'react';
import './Slider.css';

const Slider = () => {
    const videos = [
        { title: 'Video Title Name', duration: '4:05', productsAttached: 5 },
        // Add more videos here
    ];

    return (
        <div className="slider">
            <h2>Product List</h2>
            {videos.map((video, index) => (
                <div className="slider-item" key={index}>
                    <h3>{video.title}</h3>
                    <p>Duration: {video.duration}</p>
                    <p>Products Attached: {video.productsAttached}</p>
                </div>
            ))}
            <button className="update-button">Update Playlist</button>
        </div>
    );
};

export default Slider;
