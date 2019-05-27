import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _map from 'lodash/map';

import MENU_CONFIG from './menu.config';
import './menu.scss';

export default class Menu extends PureComponent {
  static propTypes = {
    config: PropTypes.array,
  }

  static defaultProps = {
    config: MENU_CONFIG,
  }

  renderMenu = (menu) => {
    const Component = menu.renderer;
    return (
      <Fragment key={menu.id}>
        <Link to={menu.route}>
          <Component {...menu.rendererProps}>{menu.label}</Component>
        </Link>
      </Fragment>
    );
  }

  render() {
    const { config } = this.props;
    return (
      <div className="menu-wrapper">
        {_map(config, this.renderMenu)}
      </div>
    );
  }
}
