import React, { useState, useEffect } from 'react';
import './App.css';
import Uploader from './components/uploader.js';
import Downloader from './components/downloader.js';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Uploader />
      </div>
        <Downloader />
    </div>
  );
}

export default App;
