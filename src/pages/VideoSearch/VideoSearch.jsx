
import React, { useState, useEffect } from 'react';
import youtube from './youtube';
import { Container, Form, InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import './VideoSearch.css';
import CustomNavbar from '../../components/navbar';

const VideoSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [videos, setVideos] = useState([]);
  const [filterType, setFilterType] = useState(''); // New state variable to track filter type

  useEffect(() => {
    // Fetch videos based on the filter whenever the filterType changes
    const fetchVideosByFilter = async () => {
      try {
        let response;
        if (filterType === 'Latest') {
          response = await youtube.get('/search', {
            params: { q: `guitar ${searchTerm}`, order: 'date' },
          });
        } else if (filterType === 'Popular') {
          response = await youtube.get('/search', {
            params: { q: `guitar ${searchTerm}`, order: 'viewCount' },
          });
        } else if (filterType === 'Trending') {
          // You can implement trending logic based on your requirements
          // For now, we'll use the same query as 'Popular'
          response = await youtube.get('/search', {
            params: { q: `guitar ${searchTerm}`, order: 'viewCount' },
          });
        } else if (filterType === 'Random') {
          // You can implement random logic based on your requirements
          // For now, we'll use the same query as 'Latest'
          response = await youtube.get('/search', {
            params: { q: `guitar ${searchTerm}`, order: 'date' },
          });
        }

        setVideos(response.data.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideosByFilter();
  }, [filterType]); // Run this effect whenever the filterType changes

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await youtube.get('/search', {
        params: { q: `guitar ${searchTerm}` },
      });
      setVideos(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilterClick = (filterType) => {
    // Set the selected filter type
    setFilterType(filterType);
  };
  const h1Styles = {
    color: 'white',
    fontSize: '3rem',
    marginTop: '50px'
  };

  const pstyles = {
    color: 'white',
    fontSize: '1rem',
    FontFace: 'Open Sans'
  };

  const [selectedVideo, setSelectedVideo] = useState(null);


  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
   <div style={{backgroundColor:'black'}}>
    <CustomNavbar/>
  <Container className="video-play" style={{marginTop:'40px'}}>
        {selectedVideo ? (
      <Container className="selected-video">
      <h2 className="video-title">{selectedVideo.snippet.title}</h2>
      <div className="embed-responsive embed-responsive-16by9">
      <Container>
      <iframe
          title={selectedVideo.snippet.title}
          src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
          
          className="embed-responsive-item"
          
        ></iframe>
      </Container>
      </div>
    </Container>
        ) : (
          <Container>
            <iframe width="600" height="400"
            src="https://www.youtube.com/embed/BBz-Jyr23M4">
            </iframe>
          </Container>
        )}
           <Container className='text-video' >
          <h1 style={h1Styles}>Inspiring Guitar Performances & Expert Tutorials</h1>
          <p style={pstyles} >
          Welcome to GuitarPlay Central's captivating video collection, where you'll find remarkable guitar performances from talented musicians and comprehensive tutorials to enhance your playing skills. Unleash your passion for music and explore a world of fretboard magic with our diverse range of guitar-centric videos.
          </p>
        </Container>
      </Container>
    <Container className="video-search" style={{ marginLeft: 'auto', marginRight: 'auto' }}>

      <Form onSubmit={handleSearch} className="search-form">
        <InputGroup className="mb-3">
          <FormControl
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for guitar videos..."
            aria-label="Search for guitar videos..."
            aria-describedby="search-button"
          />
          <Button type="submit" id="search-button" style={{backgroundColor: '#FFE500', color: 'black'}}>
            Search
          </Button>
        </InputGroup>
      </Form>
      <Container style={{ marginLeft: '40px', marginRight: '40px' }}>
      <Row className="d-flex justify-content-center align-items-center"> {/* Center align the filter buttons */}
          <Col >
            <div className="filter-list">
            <button
                variant={filterType === 'Latest' ? 'primary' : 'outline-primary'}
                className={`filter-button ${filterType === 'Latest' ? 'active' : ''}`}
                onClick={() => handleFilterClick('Latest')}
                block
              >
                Latest Videos
              </button>
              <button
                variant={filterType === 'Popular' ? 'primary' : 'outline-primary'}
                className={`filter-button ${filterType === 'Popular' ? 'active' : ''}`}
                onClick={() => handleFilterClick('Popular')}
                block
              >
                Popular Videos
              </button>
              <button
                variant={filterType === 'Trending' ? 'primary' : 'outline-primary'}
                className={`filter-button ${filterType === 'Trending' ? 'active' : ''}`}
                onClick={() => handleFilterClick('Trending')}
                block
              >
                Trending Videos
              </button>
              <button
                variant={filterType === 'Random' ? 'primary' : 'outline-primary'}
                className={`filter-button ${filterType === 'Random' ? 'active' : ''}`}
                onClick={() => handleFilterClick('Random')}
                block
              >
                Random Videos
              </button>
            </div>
          </Col>
          <Col xs={12} style={{marginTop: '20px'}}>
            <Row className="video-list">
            {videos.map((video) => (
              <Col
                key={video.id.videoId}
                xs={12}
                sm={6}
                md={3}
                className={`video-item ${selectedVideo === video ? 'active' : ''}`}
                onClick={() => handleVideoClick(video)}
              >
                <h2 className="video-title">{video.snippet.title}</h2>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title={video.snippet.title}
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    frameBorder="0"
                    allowFullScreen 
                    className="embed-responsive-item"
                  ></iframe>
                </div>
              </Col>
            ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
   
   </div>
  );
};

export default VideoSearch;
