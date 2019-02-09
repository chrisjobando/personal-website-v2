// Initial Imports
import React, { Component } from 'react';

// Section Background
import Background from '../img/notes-bg.jpg';

// Styling
import '../SASS/notes.sass';

// Creates Section Styling
const myStyles = {
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center bottom',
};

// Main HTML
class Notes extends Component {
  render() {
    return (
      <div className="notes" style={ myStyles }>
        <div className='rect'>
          <h1>{ this.props.title }</h1>
          <a href="https://mailchi.mp/450dd1397947/chris-notes-subscribe"
            target="_blank" rel="noopener noreferrer">
              <button>
              Subscribe Here!
            </button>
          </a>
          <p />
          <div className="col-1">
            <p>Chris' Notes are short weekly emails that include a topic I was interested in that week,
               recommendations for cool media I enjoy, and progress on my projects!</p>
          </div>
          <div className="col-2">
            <div>
              <p>Here is an archive to previous Notes that I have released:</p>
              <ul>
                <li>
                  <a href="https://us7.campaign-archive.com/?u=93526193f4277ff64a96284e0&id=ec6712d2c6"
                    target="_blank" rel="noopener noreferrer">First Note
                  </a>
                </li>
                <li>
                  <a href="https://mailchi.mp/7a12828d7734/k6q8ettyhq-2260421"
                    target="_blank" rel="noopener noreferrer">Second Note
                  </a>
                </li>
                <li>
                  <a href="https://mailchi.mp/28d9b0a98edd/k6q8ettyhq-2265173"
                    target="_blank" rel="noopener noreferrer">Third Note
                  </a>
                </li>
                <li>
                  <a href="https://mailchi.mp/9cea98cd793d/k6q8ettyhq-2278305"
                    target="_blank" rel="noopener noreferrer">Fourth Note
                  </a>
                </li>
                <li>
                  <a href="https://mailchi.mp/4879858953a7/k6q8ettyhq-2285557"
                    target="_blank" rel="noopener noreferrer">Fifth Note
                  </a>
                </li>
                <li>
                  <a href="https://mailchi.mp/137a24a7d65d/k6q8ettyhq-2291997"
                    target="_blank" rel="noopener noreferrer">Sixth Note
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Notes;
