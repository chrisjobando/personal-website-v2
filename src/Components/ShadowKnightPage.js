import React, { Component } from 'react';

// Section Background
import Background from '../img/header-bg.jpg';

// Styling
import '../SASS/shadowKnight-pg.sass';

// Download
import GameROM from '../downloads/ShadowKnight.gba';

// Creates Section Styling
const myStyles = {
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

class GameBoy extends Component {
  render() {
    return (
      <div className="gba" style={ myStyles }>
        <div className="rect">
          <title>shadow knight</title>
          <h1>This is <span>Shadow Knight</span>.</h1>
          <div className="head">
            <a href="https://github.com/chrisjobando/MediaArchitectures/tree/master/Milestones/Final"
              target="_blank" rel="noopener noreferrer">See the Source Code</a>
            <p></p>
            <a href={ GameROM } download="ShadowKnight.gba">Download The Game!</a>
          </div>
          <p>Shadow Knight is a GameBoy Advance game written in C.</p>
          <p>It is programmed in Mode 0 and uses a combination of custom spritesheets and
            bitmapped image assets and borrowed background tilesheets from a DragonBall Z GBA
            game. I used Mega Man and Super Mario Bros. as inspiration for the sidescroller
            gameplay. The source code is available above on Github.</p>
          <p>Throughout its development, I was able to practice several C concepts for low-level
            programming and learned basic hardware limitations on Game Development.</p>
          <p>This game was originally submitted as a part of CS2261, which is a Media Device
            Architectures course based around C programming and creating several ROMs for the
            GameBoy Advance in Mode 0, 3, 4. My full CS2261 class folder is available on GitHub
            with several other GameBoy assignments, labs, and homeworks that I completed during
            the course.</p>
          <p>I was pleased with this simple game matching the mental image I had for it, but in the
            future I want to create another game in C++ or Java using similar concepts. My next
            game project will be either a Turn-Based Strategy game or a simple RPG. I really enjoyed
            making pixel art and want to work on another project that uses sprites.</p>
        </div>
      </div>
    );
  }
}

export default GameBoy;
