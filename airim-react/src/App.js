import React from "react";
import Home from "./components/Home";
import CourseIntro from "./components/CourseIntro";
import CreateTalk from "./components/CreateTalk";
import SassComponent from "./SassComponent";
import "./App.css";

const App = () => {
  return (
    <div>
      <SassComponent />
      <Home />
      <CourseIntro />
      <CreateTalk />
    </div>
  );
};

export default App;
