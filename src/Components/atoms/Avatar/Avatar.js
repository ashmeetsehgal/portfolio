import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Avatar } from 'antd';

export default class AntdAvatar extends PureComponent {
  static propTypes = {
    size: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
    icon: PropTypes.string,
    src: PropTypes.string,
    shape: PropTypes.oneOf(['circle', 'square']),
  }

  static defaultProps = {
    size: 'default',
    icon: '',
    shape: 'circle',
    src: 'circle',
  }

  render() {
    const {
      size, icon, shape, src, ...rest
    } = this.props;
    return (
      <Avatar src={src} size={size} icon={icon} shape={shape} {...rest} />
    );
  }
}
