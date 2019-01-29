// Initial Imports
import React, { Component } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

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

// Mailchimp Form Component
const CustomForm = ({ status, message, onValidated }) => {
    let email;
    let name;
    const submit = () =>
    email &&
    name &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value,
    });

    // Mailchimp form Styling
    return (
    <div
      style={{
        background: '#efefef',
        borderRadius: 2,
        padding: 10,
        display: 'inline-block',
      }}
    >
      {status === 'sending' && <div style={{ color: 'blue' }}>Sending...</div>}
      {status === 'error' && (
        <div
          style={{ color: 'red' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          style={{ color: 'green' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        style={{ fontSize: '2em', padding: 5 }}
        ref={node => (name = node)}
        type="text"
        placeholder="First Name"
      />
      <br />
      <input
        style={{ fontSize: '2em', padding: 5 }}
        ref={node => (email = node)}
        type="email"
        placeholder="Email Address"
      />
      <br />
      <button style={{ fontSize: '2em', padding: 5 }} onClick={submit}>
        Submit
      </button>
    </div>
    );
  };

// Main HTML
class Notes extends Component {
  render() {
    const url =
    'https://github.us7.list-manage.com/subscribe/post?u=93526193f4277ff64a96284e0&amp;id=29966d00de';
    return (
      <header style={ myStyles }>
        <div className='rect'>
          <h1>{ this.props.title }</h1>

          <div>
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <CustomForm
                  status={status}
                  message={message}
                  onValidated={formData => subscribe(formData)}
                  />
              )}
            />
          </div>
          <div className="col-1">
            <p>Chris Notes are short weekly emails that include a topic I was interested in that week,
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
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
};

export default Notes;
