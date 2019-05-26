import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Avatar } from 'antd';

export default class AntdAvatar extends PureComponent {
  static propTypes = {
    size: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
    icon: PropTypes.string,
    shape: PropTypes.oneOf(['circle', 'square']),
  }

  static defaultProps = {
    size: 'default',
    icon: '',
    shape: 'circle',
  }

  render() {
    const {
      size, icon, shape, ...rest
    } = this.props;
    return (
      <Avatar size={size} icon={icon} shape {...rest} />
    );
  }
}
