// Initial import
import React, { Component } from 'react';

// Styling
import '../SASS/social.sass';

// Main HTML
class Social extends Component {

  render() {
    return (
      <div className="social" >
        <h3>social media</h3>
        <h2>Follow me on other platforms!</h2>
        <div className="row">
          <div>
            <span className="github">
              <a href="https://github.com/chrisjobando" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" />
              </a>
            </span>
            <h4>Github</h4>
          </div>
          <div>
            <span className="linkedin">
                <a href="https://linkedin.com/in/chrisjobando" target="_blank"
                  rel="noopener noreferrer">
                  <i className="fab fa-linkedin" />
                </a>
            </span>
            <h4>LinkedIn</h4>
          </div>
          <div>
            <span className="dribbble">
              <a href="https://dribbble.com/chrisjobando" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-dribbble" />
              </a>
            </span>
            <h4>Dribbble</h4>
          </div>
          <div>
            <span className="instagram">
              <a href="https://instagram.com/chris.obando" target="_blank"
                rel="noopener noreferrer">
                <i className="fab fa-instagram" />
              </a>
            </span>
            <h4>Instagram</h4>
          </div>
          <div>
            <span className="spotify">
              <a href="https://open.spotify.com/user/chrisjobando" target="_blank"
                rel="noopener noreferrer">
                <i className="fab fa-spotify" />
              </a>
          </span>
            <h4>Spotify</h4>
          </div>
          <div>
            <span className="letterboxd">
              <a href="https://letterboxd.com/chrisjobando/"
                target="_blank" rel="noopener noreferrer">
                <i className="fas fa-film" />
              </a>
          </span>
            <h4>Letterboxd</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Social;
