import React from 'react';
import Home from './Component/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import NoMatch from './Component/NoMatch/NoMatch';
import Admin from './Component/Admin/Admin';
import AddProduct from './Component/AddProduct/AddProduct';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/admin'>
          <Admin></Admin>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='*'>
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;