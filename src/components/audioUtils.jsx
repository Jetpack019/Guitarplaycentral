export const getMediaStream = async () => {
    try {
      const constraints = { audio: true };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      return stream;
    } catch (error) {
      console.error("Error accessing microphone:", error);
      throw error;
    }
  };
  
  export const stopMediaStream = (stream) => {
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
  };
  