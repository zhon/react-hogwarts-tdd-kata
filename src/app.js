import React from 'react';
import ReactDOM from 'react-dom';

import CatalogPage from './components/catalog-page';
import Schedule from './components/schedule';
import Sorting from './components/sorting';

import { Link, Router, Route, IndexRoute, hashHistory } from "react-router";

const app = document.getElementById('app');

class App extends React.Component {

  render() {
    return (
      <div style={{'padding': '10px'}}>
        <nav className="navbar navbar-inverse">
          <div className="navbar-header navbar-brand" style={{'color': 'white'}}>
            Hogwarts
          </div>
          <ul className="nav navbar-nav">
            <li>
            <Link to="/sorting">
              sorting
            </Link>
            </li>
            <li>
            <Link to="/catalog">
              catalog
            </Link>
            </li>
            <li>
            <Link to="/schedule">
              schedule
            </Link>
            </li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    );
  }

}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Sorting} />
      <Route path="sorting"  component={Sorting}/>
      <Route path="catalog"  component={CatalogPage}/>
      <Route path="schedule" component={Schedule}/>
      <IndexRoute component={Sorting}/>
    </Route>
  </Router>,
app);
