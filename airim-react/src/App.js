import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Home from './components/Home';
import HistorySample from './components/HistorySample';
import CourseList from './components/CourseList';
import Course from './components/Course';
import CreateCourse from './components/CreateCourse';
import CreateTalk from './components/CreateTalk';
import './App.css';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/CourseList" component={CourseList}/>
        <Route path="/Course" component={Course}/>
        <Route path="/CreateCourse" component={CreateCourse}/>
        <Route path="/CreateTalk" component={CreateTalk}/>
        <Route path="/history" component={HistorySample} />
        <Route
          // path를 따로 정의하지 않으면 모든 상황에 렌더링됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
      
      
    </div>
  
  );
};

export default App;
