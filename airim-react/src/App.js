import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styles/reset.scss';
// import utils from 'styles/utils.scss';
import Home from 'containers/Home';
import CourseContainer from 'containers/CourseContainer';
import ChatContainer from 'containers/ChatContainer';
import InstructorContainer from 'containers/InstructorContainer';
import EditCourseContainer from 'containers/EditCourseContainer';

import CounterContainer from 'containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
import Users from './containers/Users';


const GlobalStyle = createGlobalStyle`
  body {
     //background:  #011627,
      min-height:800px;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/course/:courseId" component={CourseContainer} />
        <Route path="/chat/:courseId" component={ChatContainer} />

        <Route exact path="/instructor" component={InstructorContainer} />
        <Route path="/editcourse/:courseId" component={EditCourseContainer} />
      
        <Route path="/counter" component={CounterContainer} />
        <Route path="/todos" component={TodosContainer} />
      <Route path="/users" component={Users} />
        
      
        <Route
          // path를 따로 정의하지 않으면 모든 상황에 렌더링됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다: </h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </>
  );
};

export default App;
