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
          <div className="notes-signup-box">

            <div id="mc_embed_signup">
              <form action="https://github.us7.list-manage.com/subscribe/post?u=93526193f4277ff64a96284e0&amp;id=29966d00de"
                method="post" id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">

                  <div className="form-display">
                    <div className="mc-field-group">
                    	<label for="mce-FNAME">First Name </label>
                    	<input type="text" value="" name="FNAME" class="" id="mce-FNAME" />
                    </div>

                    <div className="mc-field-group">
                    	<label for="mce-EMAIL">Email Address </label>
                    	<input type="email" value="" name="EMAIL" class="required email"
                        id="mce-EMAIL" />
                    </div>

                    <div className="clear"><input type="submit" value="Subscribe" name="subscribe"
                      id="mc-embedded-subscribe" class="button" /></div>
                  </div>

                  <div id="mce-responses" class="clear">
                  	<div className="response" id="mce-error-response"></div>
                  	<div className="response" id="mce-success-response"></div>
                  </div>
                </div>
            </form>
            </div>

          </div>
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
