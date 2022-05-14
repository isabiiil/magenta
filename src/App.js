import React from 'react';
import sad from './assets/naruto-sad.jpg';
import happy from './assets/fmab-happy.jpg';
import extra from './assets/silent voice.jpg';
import { mangaText } from './assets/text';

export default function App() {

  // const mvae = require('@magenta/music/node/music_vae');
  // const core = require('@magenta/music/node/core');

  // // Your code:
  // const model = new mvae.MusicVAE('/path/to/checkpoint');
  // const player = new core.Player();
  // model
  //   .initialize()
  //   .then(() => model.sample(1))
  //   .then(samples => {
  //     player.resumeContext();
  //     player.start(samples[0])
  //   });

  let moodSA = "";
  function startSentiment(mood) {
    if (mood === 'happy') {
      console.log("start sentiment analysis for happy");
      moodSA = "happy";
      console.log(mangaText.happy); // replace with a call to the sentiment analysis
    }
    else if (mood === 'sad') {
      console.log("start sentiment analysis for sad");
      moodSA = "sad";
      console.log(mangaText.sad); // replace with a call to the sentiment analysis
    }
    else {
      console.log("cannot start sentiment analysis")
      console.log(mangaText.extra); // replace with a call to the sentiment analysis
    }
  }

  const styles = {
    container: {
      padding: '2vw',
    },
    image: {
      padding: '2vw 1vw 0 0',
      height: '50vh',
      cursor: 'pointer',
    },
  }

  return (
    <>
      <div style={styles.container}>
        <p>users choose a manga chapter from a dropdown</p>
        <p>we simulate the taking in of the dialogue, but each choice is actually hardcoded with the text that we want to analyze</p>
        <p>we get the result of that sentiment analysis</p>
        <p>and use it to determine what genre of music will be fed into the ML model</p>
        <p>a new song will be created</p>
        <p>the manga will be displayed and the song will play</p>
      </div>
      {/* choose manga scene */}
      <div style={{padding: '1vw', display: 'flex'}}>
        <p>Choose a manga to examine.</p>
        <div>
          <img src={sad} style={styles.image} onClick={() => startSentiment("sad")} />
          <p>Naruto</p>
        </div>
        <div>
          <img src={happy} style={styles.image} onClick={() => startSentiment("happy")} />
          <p>Fullmetal Alchemist</p>
        </div>
        <div>
          <img src={extra} style={styles.image} onClick={() => startSentiment("extra")} />
          <p>A Silent Voice</p>
        </div>
      </div>
      {/* sentiment analysis loading bar */}
      <p>Performing sentiment analysis...</p>
      <p>This is a {moodSA} scene.</p>
      {/* create a new song */}

    </>
  )
}
