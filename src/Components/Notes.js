// Initial Imports
import React, { Component } from 'react';

// Section Background
import Background from '../img/notes-bg.jpg';

// Styling
import '../SASS/notes.sass';

// Creates Section Styling
const myStyles = {
  backgroundImage: `url(${Background})`,
  height: '80vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center bottom',
};

// Main HTML
class Notes extends Component {
  render() {
    return (
      <header style={ myStyles }>
        <div className='rect'>
          <h1>{ this.props.title }</h1>
          <div className="col-1">
            <p>Chris Notes are short weekly emails that include a topic I was interested in that week,
               recommendations for cool media I enjoy, and progress on my projects!</p>
          </div>
          <div className="col-2">
            <div>
              <p>Here is an archive to previous Notes that I have released:</p>
              <ul>
                <li>First Note</li>
                <li>Second Note</li>
                <li>Third Note</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
};

export default Notes;
