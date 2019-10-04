// Initial Imports
import React, { Component } from 'react';

// Section Background
// import Background from '../img/notes-bg.jpg';

// Styling
import '../SASS/notes.sass';

// Creates Section Styling
// const myStyles = {
//   backgroundImage: `url(${Background})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center bottom',
// };

// Main HTML
class Notes extends Component {
  render() {
    return (
      <div className="notes">
        <div className='rect'>
          <div className="textNotes">
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
                    <a href="https://mailchi.mp/b342b881ef2f/chris-eleventh-note"
                      target="_blank" rel="noopener noreferrer">Eleventh Note
                    </a>
                  </li>
                  <li>
                    <a href="https://mailchi.mp/e03f839783a5/chris-twelfth-note"
                      target="_blank" rel="noopener noreferrer">Twelfth Note
                    </a>
                  </li>
                  <li>
                    <a href="https://mailchi.mp/b50433e1bac7/chris-thirteenth-note"
                      target="_blank" rel="noopener noreferrer">Thirteenth Note
                    </a>
                  </li>
                  <li>
                    <a href="https://mailchi.mp/225297b1bcec/chris-fourteeth-note"
                      target="_blank" rel="noopener noreferrer">Fourteenth Note
                    </a>
                  </li>
                </ul>
                {/* {Second Row} */}
                <ul>
                  <li>
                    <a href="https://mailchi.mp/63d3f3b92119/chris-fifteenth-note"
                      target="_blank" rel="noopener noreferrer">Fifteenth Note
                    </a>
                  </li>
                  <li>
                    <a href="https://mailchi.mp/a89322f68b4c/chris-sixteenth-note"
                      target="_blank" rel="noopener noreferrer">Sixteenth Note
                    </a>
                  </li>
                  <li>
                    <a href="https://mailchi.mp/25cdacd5c6e3/chris-seventeenth-note"
                      target="_blank" rel="noopener noreferrer">Seventeenth Note
                    </a>
                  </li>
                  <li>
                    <a href="https://mailchi.mp/9927bba23792/chris-seventeenth-note-2353809"
                      target="_blank" rel="noopener noreferrer">Eighteenth Note
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Notes;
