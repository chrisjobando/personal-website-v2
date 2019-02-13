import React, { Component } from 'react';

// Section Background
import Background from '../img/header-bg.jpg';

// Styling
import '../SASS/spotifyApp-pg.sass';

// Creates Section Styling
const myStyles = {
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

class SpotifyApp extends Component {
  render() {
    return (
      <div className="spotify-app" style={ myStyles }>
        <div className="rect">
          <title>spotify app</title>
          <h1>This is <span>My Spotify App</span>.</h1>
          <div className="head">
            <a href="http://obando-spotify-stats.herokuapp.com/"
                target="_blank" rel="noopener noreferrer">See the Web App</a>
            <br/>
            <a href="https://developer.spotify.com/documentation/web-api/"
                target="_blank" rel="noopener noreferrer">See the Spotify Web API Documentation</a>
            <br/>
            <a href="https://github.com/chrisjobando/spotify-app"
              target="_blank" rel="noopener noreferrer">See the Source Code</a>

            <p>This Web Application was created using the ReactJS framework,
                the Spotify Web API, SASS, and a lot of JavaScript</p>
            <p>I chose to make this develop this application because I wanted
                to challenge myself to learn more about open-source APIs, and Spotify
                is a service I use daily that I was interested in learning
                more about.</p>
            <p>This application is still under development, and my goals for it are to
                integrate personal stats, playlist customization, generate personalized playlists,
                see information about your favorite artists/tracks, and eventually have a built-in
                web player.</p>
            <p>I was able to familiarize myself with backend servers too in order to implement the OAuth
                service to generate access tokens to get a user's account information to work with the app.
                I created it in a way for me to be able to securely get a user's information without leaking
                it publically or keeping it for security purposes. Through its development, I hope to improve
                my User Interface Design skills that I have been learning in my Design of Interactive Systems
                class this semester as well. All updates to the app are available on my Github as well.</p>
          </div>
          <p></p>
        </div>
      </div>
    );
  }
}

export default SpotifyApp;
