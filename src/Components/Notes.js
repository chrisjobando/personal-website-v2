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
                  <a href="http://mailchi.mp/137a24a7d65d/chris-sixth-note"
                    target="_blank" rel="noopener noreferrer">Sixth Note
                  </a>
                </li>
                <li>
                  <a href="https://mailchi.mp/7bf84851c89a/chris-seventh-note"
                    target="_blank" rel="noopener noreferrer">Seventh Note
                  </a>
                </li>
                <li>
                  <a href="http://mailchi.mp/8bdf81296391/chris-eighth-note"
                    target="_blank" rel="noopener noreferrer">Eighth Note
                  </a>
                </li>
                <li>
                  <a href="https://mailchi.mp/097cb20420b4/chris-ninth-note"
                    target="_blank" rel="noopener noreferrer">Ninth Note
                  </a>
                </li>
              </ul>
              {/* {Second Row} */}
              <ul>
                <li>
                  <a href="https://mailchi.mp/09ac7e1d9a93/chris-tenth-note"
                    target="_blank" rel="noopener noreferrer">Tenth Note
                  </a>
                </li>
                <li>
                  <a href="https://mailchi.mp/b342b881ef2f/chris-eleventh-note"
                    target="_blank" rel="noopener noreferrer">Eleventh Note
                  </a>
                </li>
                <li>
                  <a href="https://mailchi.mp/e03f839783a5/chris-twelfth-note"
                    target="_blank" rel="noopener noreferrer">Twelth Note
                  </a>
                </li>
                <li>
                  <a href="https://mailchi.mp/b50433e1bac7/chris-thirteenth-note"
                    target="_blank" rel="noopener noreferrer">Thirteenth Note
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
