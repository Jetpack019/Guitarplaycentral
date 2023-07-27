// audio-processor.js (Create a new file)

import Pitchfinder from "pitchfinder";

const A = 440;
const SEMITONE = 69;
const noteStrings = [
  "C",
  "C♯",
  "D",
  "D♯",
  "E",
  "F",
  "F♯",
  "G",
  "G♯",
  "A",
  "A♯",
  "B"
];

const getNote = freq => {
  const note = 12 * (Math.log(freq / A) / Math.log(2));
  return Math.round(note) + SEMITONE;
};

const getStandardFrequency = note => {
  return A * Math.pow(2, (note - SEMITONE) / 12);
};
const getCents = (frequency, note) => {
  return Math.floor(
    (1200 * Math.log(frequency / getStandardFrequency(note))) / Math.log(2)
  );
};


class MyAudioWorkletProcessor extends AudioWorkletProcessor {
    process(inputs, outputs, parameters) {
        console.log('Processing audio data');
      const input = inputs[0];
      const detectPitch = new Pitchfinder.AMDF({
        maxFrequency: 800,
        minFrequency: 50
      });
      const pitch = detectPitch(input[0]);
      if (pitch) {
        const freq = pitch * 1.09;
      const note = getNote(freq);
      const cents = getCents(freq, note);
      const noteName = noteStrings[note % 12];
      const octave = parseInt(note / 12) - 1;

      // Send the data to the main thread
      this.port.postMessage({ freq, cents, noteName, octave });
      
      }
  
      return true;
    }
  }
  
  registerProcessor('my-audio-worklet-processor', MyAudioWorkletProcessor);


