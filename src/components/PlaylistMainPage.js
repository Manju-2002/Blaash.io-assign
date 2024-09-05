// src/components/PlaylistMainPage.js
import React from 'react';
import Playlist from './Playlist'; // Correct path if Playlist.js is in the same directory
import './PlaylistMainPage.css';

const PlaylistMainPage = () => {
    const playlists = [
        { id: 1, name: 'Product Playlists Name', videoCount: 5 },
        // Add more playlists here with unique IDs
    ];

    return (
        <div className="playlist-main-page">
            {playlists.length > 0 ? (
                playlists.map((playlist) => (
                    <Playlist
                        key={playlist.id}
                        name={playlist.name}
                        videoCount={playlist.videoCount}
                        className="interactive-element"  // Apply class here if needed
                    />
                ))
            ) : (
                <p>No playlists available.</p>
            )}
        </div>
    );
};

export default PlaylistMainPage;
