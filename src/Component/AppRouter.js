import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginForm from './LoginForm';
import Home from './Home';
import Product from './Product';
import Header from './Header';
import Profile from './Profile';
import Account from './Account';
import ProductDetail from './ProductDetail';




class AppRouter extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      route: window.location.hash.substr(1)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      });
    });
  }
  render() {
    return (
      <div>
        <Header key={1} />
        <Router>
          <Switch>
            <Route key={1} exact path="/" component={Home}/>
            <Route key={2} path="/login" component={LoginForm}/>
            <Route key={3} path="/product" component={Product}/>
            <Route key={4} path="/profile" component={Profile}/>
            <Route key={5} path="/account" component={Account}/>
            <Route key={6} path="/productdetail" component={ProductDetail}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default AppRouter;

