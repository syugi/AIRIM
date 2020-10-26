import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'components/Home';
import CourseFilterList from 'components/CourseFilterList';
import CourseInfo from 'components/CourseInfo';
import Instructor from 'components/Instructor';
import CreateCourse from 'components/CreateCourse';
import EditCourse from 'components/EditCourse';
import EditTalk from 'components/EditTalk';

const Main = (props) => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      
      <Route exact path="/course" component={CourseFilterList} />
      <Route path="/course/:courseId" component={CourseInfo} />
      
      <Route exact path="/instructor" component={Instructor} />
      <Route path="/instructor/create" component={CreateCourse} />
      <Route path="/instructor/course" component={EditCourse} />
      <Route path="/instructor/talk" component={EditTalk} />
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

export default Main;