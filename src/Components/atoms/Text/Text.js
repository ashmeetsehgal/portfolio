import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Typography } from 'antd';

const { Text } = Typography;

export default class AntdText extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    type: PropTypes.string,
  }

  static defaultProps = {
    type: '',
    children: null,
  }

  render() {
    const { children, type, ...rest } = this.props;
    return (
      <Text type={type} {...rest}>{children}</Text>
    );
  }
}
