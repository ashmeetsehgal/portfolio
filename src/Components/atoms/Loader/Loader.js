import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Spin, Icon } from 'antd';

export default class Loader extends PureComponent {
  static propTypes = {
    size: PropTypes.number,
  }

  static defaultProps = {
    size: 16,
  }

  antIcon = size => <Icon type="loading" style={{ fontSize: size }} spin />;

  render() {
    const { size, ...rest } = this.props;
    return (
      <Spin indicator={this.antIcon(size)} {...rest} />
    );
  }
}
