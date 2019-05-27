import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import _map from 'lodash/map';
import { Route } from 'react-router-dom';

import MENU_CONFIG from '../Menu/menu.config';
import './appBody.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class AppBody extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    return (
      <div className="body-wrapper">
        {_map(MENU_CONFIG, menu => <Route exact path={menu.route} component={menu.routeComponent} />)}
      </div>
    );
  }
}
