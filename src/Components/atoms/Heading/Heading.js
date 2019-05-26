import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Typography } from 'antd';

const { Title } = Typography;

export default class Heading extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    size: PropTypes.number,
  }

  static defaultProps = {
    size: 2,
    children: null,
  }

  render() {
    const { children, size, ...rest } = this.props;
    return (
      <Title level={size} {...rest}>{children}</Title>
    );
  }
}
