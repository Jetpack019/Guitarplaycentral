// src/youtube.js

import axios from 'axios';

const KEY = 'AIzaSyBokpbc2LPEWXqmjl8ITmll23m7vYLuhBs';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: KEY,
    part: 'snippet',
    type: 'video',
    maxResults: 1, // You can adjust this value as per your requirement
  },
});
