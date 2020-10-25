import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'components/Home';
import Header from 'components/Header';
import CourseRoute from 'components/CourseRoute';
import InstructorRoute from 'components/InstructorRoute';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/course" component={CourseRoute} />
    <Route path="/instructor" component={InstructorRoute} />
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
);

export default Main;
