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
        <div className="row1">
          <div>
            <span>
              <a href="https://github.com/chrisjobando" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github" />
              </a>
            </span>
            <h4>Github</h4>
          </div>
          <div>
            <span>
                <a href="https://linkedin.com/in/chrisjobando" target="_blank"
                  rel="noopener noreferrer">
                  <i class="fab fa-linkedin" />
                </a>
            </span>
            <h4>LinkedIn</h4>
          </div>
          <div>
            <span>
              <a href="https://dribbble.com/chrisjobando" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-dribbble" />
              </a>
            </span>
            <h4>Dribbble</h4>
          </div>
          <div>
            <span>
              <a href="https://instagram.com/chrisjobando" target="_blank"
                rel="noopener noreferrer">
                <i class="fab fa-instagram" />
              </a>
            </span>
            <h4>Instagram</h4>
          </div>
          <div>
            <span>
              <a href="https://open.spotify.com/user/chrisjobando" target="_blank"
                rel="noopener noreferrer">
                <i class="fab fa-spotify" />
              </a>
          </span>
            <h4>Spotify</h4>
          </div>
          <div>
            <span>
              <a href="https://letterboxd.com/chrisjobando/" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-film" />
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
