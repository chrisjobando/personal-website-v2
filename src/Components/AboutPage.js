import React, { Component } from 'react';

// Section Background
import Background from '../img/background1.jpg';

// Picture
import Picture from '../img/about-pg-pic.jpg';

// Styling
import '../SASS/about-pg.sass';

// Creates Section Styling
const myStyles = {
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

class AboutMe extends Component {
  render() {
    return (
      <div className="about" style={myStyles}>
        <div className="rect">
          <div className="col">
            <img src={ Picture }  alt=""/>
          </div>
          <div className="col">
            <title>about me</title>
            <h1>Hey! My name is <span>Christopher</span>.</h1>
            <p>I'm a third year Computer Science major at the Georgia Institute of Technology. I have experience working in React, Java, JavaScript, Angular, TypeScript, Python - and hopefully more in the future!</p>
            <p>I am currently interning at Elavon, Inc. where I work on backend Java development for payment processing software. I also do a lot of volunteer work for <a href="https://bitsofgood.org/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'rgb(236, 184, 7)' }}>GT Bits of Good</a> and <a href="https://www.codeforatlanta.org/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'rgb(236, 184, 7)' }}>Code for Atlanta</a> in React!</p>

            <p>When I am not coding, you can find me exercising, reading, editing short films, and advising freshman through Hispanic Recruitment Team at Georgia Tech.</p>

            <p>Follow me my social media, or reach me by email - <a href="mailto:chrisjobando@gatech.edu" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'rgb(236, 184, 7)' }}>chrisjobando@gatech.edu</a> </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
