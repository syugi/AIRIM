import React from 'react';
import Home from './components/Home';
import CourseIntro from './components/CourseIntro';
import CreateTalk from './components/CreateTalk';
import './App.css';

const App = () => {
  
  return (
      <div>
        <Home />
        <CourseIntro />
        <CreateTalk />
      </div>
  );
}

export default App;
