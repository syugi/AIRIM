import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CourseFilterList from 'components/CourseFilterList';
import CourseInfo from 'components/CourseInfo';

const Main  = () => (
    <Switch>
      <Route exact path="/course" component={CourseFilterList} />
      <Route path="/course/:courseId" component={CourseInfo} />
    </Switch>
)

export default Main;
