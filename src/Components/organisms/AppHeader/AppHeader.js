/* eslint-disable react/prefer-stateless-function */
import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import Menu from '../Menu';

import './header.scss';

export default class Header extends PureComponent {
  // static propTypes = {
  // }

  // static defaultProps = {
  //   config: {},
  // }

  render() {
    return (
      <div className="header-wrapper full-width">
        <div className="header-wrapper-left">

        </div>
        <div className="header-wrapper-right">
          <Menu />
        </div>
      </div>
    );
  }
}
