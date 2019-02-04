import React, { Component } from 'react';

// Section Background
import Background from '../img/header-bg.jpg';

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
      <div className="about" style={ myStyles }>
        <div className="rect">
          <title>about me</title>
          <h1>Hey! My name is <span>Christopher</span>.</h1>

          <p>I'm a second-year Computer Science major at Georgia Tech,
            with a minor in Film & Media Studies.</p>
          <p>Growing up as a first-generation Hispanic-American right outside of DC,
            I felt trapped within a community with few public resources and fewer means of growth
            for those who did not take risks. I looked to music and television as a means of escape
            from reality. The amazing production in the music videos I watched and films I saw
            inspired me to pursue a career in computer graphic design.</p>
          <p>The wonders of seeing the dinosaurs in Jurrasic Park or the pod-racing scene in The
            Phantom Menace or my favorite childhood hero, Spider-Man, swing across New York
            City through the use of CGI gave me a sense of wonder and joy that I needed during
            rough times. I aim to one day create that same feeling for others through my digital
            creations.</p>
          <p>I arrived at Georgia Tech with a strong passion for technology but was unsure what
            courses best fit my interests. When I found out about the Media and People threads for
            Computer Science, I made the switch halfway through my first semester to Computer
            Science to improve my basic programming skills. I wanted to learn how to turn code that
            I develop into an experience for users.</p>
          <p>In the upcoming semesters, I am taking high-level UI/UX CS courses as well as 3D
            design courses offered by the School of Industrial Design. This, combined with production
            skills from my Film Studies Minor, will aid me in a career in 3D Animation and/or Digital
            Media Production.</p>
          <p>In my free time, I enjoy listening to indie R&B music and playing guitar/singing at
            open-mic nights in the GT Student Center. I consider myself a film-buff and an amateur
            filmmaker. I am currently working on a new short film this year! I also am always
            sketching on my notepad, and am working towards publishing more of my illustrations
            online.</p>
        </div>
      </div>
    );
  }
}

export default AboutMe;
