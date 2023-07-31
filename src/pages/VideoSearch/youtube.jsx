// src/youtube.js

import axios from 'axios';

const KEY = 'AIzaSyBCa87qVGzR1rieej6oXRgKiDZhbvmSdcE';
// AIzaSyBCa87qVGzR1rieej6oXRgKiDZhbvmSdcE - change
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: KEY,
    part: 'snippet',
    type: 'video',
    maxResults: 12, // You can adjust this value as per your requirement
  },
});
