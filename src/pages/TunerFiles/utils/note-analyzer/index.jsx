
import store from "../../store"; // Update the import path to the correct location of the store file


// Register the audio worklet processor
async function initAudioWorklet() {
  try {
    // Request user permission to access the microphone
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    // Load the audio worklet module
    await audioContext.audioWorklet.addModule("../note-analyzer/audio-processor.js");
    const workletNode = new AudioWorkletNode(audioContext, "my-audio-worklet-processor");

    // Connect the AudioWorkletNode to the audio graph
    workletNode.connect(audioContext.destination);

    // Start the audio graph
    workletNode.port.onmessage = (event) => {
      const { freq, cents, noteName, octave } = event.data;
      // Dispatch an action to update the currentNote in the store
      store.dispatch({
        type: "CHANGE_CURRENT_NOTE",
        currentNote: { freq, cents, noteName, octave },
      });
    };
    audioContext.resume();
  } catch (error) {
    // Handle the case where the user denies microphone access
    console.error("Error accessing the microphone:", error);
    // Display a message to the user explaining the need for microphone access
    // For example: Show a UI element that informs the user about the need for microphone access
  }
}

const audioContext = new AudioContext();
initAudioWorklet();
<button onClick={initAudioWorklet}>Start Microphone</button>