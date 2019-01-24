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
              <i class="fab fa-github" />
            </span>
            <h4>Github</h4>
          </div>
          <div>
            <span>
              <i class="fab fa-linkedin" />
            </span>
            <h4>LinkedIn</h4>
          </div>
          <div>
            <span>
              <i class="fab fa-dribbble" />
            </span>
            <h4>Dribbble</h4>
          </div>
          <div>
            <span>
              <i class="fab fa-instagram" />
            </span>
            <h4>Instagram</h4>
          </div>
          <div>
            <span>
              <i class="fab fa-spotify" />
            </span>
            <h4>Spotify</h4>
          </div>
          <div>
            <span>
              <i class="fas fa-film" />
            </span>
            <h4>Letterboxd</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Social;
