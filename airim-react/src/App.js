import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CourseIntro from './components/CourseIntro';
import CreateTalk from './components/CreateTalk';
import HistorySample from './components/HistorySample';

import './App.css';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/intro" component={CourseIntro} />
        <Route path="/talk" component={CreateTalk} />
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
