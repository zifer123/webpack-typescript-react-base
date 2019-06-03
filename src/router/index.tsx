import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from '@/App';
import About from '@components/About';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};
export default AppRouter;
