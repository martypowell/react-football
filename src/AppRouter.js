import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Home from './pages/Home';
import TeamsHome from './templates/Team/TeamsHome';
import TeamForm from './templates/Team/TeamForm';

const AppRouter = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/teams" exact component={TeamsHome}/>
        <Route path="/teams/edit" component={TeamForm}/>
      </Switch>
    </BrowserRouter>
  )
  export default AppRouter