import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Instructor from 'components/Instructor';
import CreateCourse from 'components/CreateCourse';
import EditCourse from 'components/EditCourse';
import EditTalk from 'components/EditTalk';

const Main  = () => (
    <Switch>
      <Route exact path="/instructor" component={Instructor} />
      <Route path="/instructor/create" component={CreateCourse} />
      <Route path="/instructor/course" component={EditCourse} />
      <Route path="/instructor/talk" component={EditTalk} />
    </Switch>
)

export default Main;
