import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CourseList from './components/CourseList';
import Course from './components/Course';
import CreateCourse from './components/CreateCourse';
import CreateTalk from './components/CreateTalk';

class Roster extends React.Component {
  render(){
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/courseList" component={CourseList}/>
        <Route exact path="/course/:courseId" component={Course}/>
        <Route exact path="/createCourse" component={CreateCourse}/>
        <Route exact path="/createTalk" component={CreateTalk}/>
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
  } 
}

export default Roster;