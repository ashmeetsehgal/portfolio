import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

export default class AntdIcon extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    spin: PropTypes.bool,
    theme: PropTypes.string,
    size: PropTypes.number,
    style: PropTypes.object,
  }

  static defaultProps = {
    name: '',
    spin: false,
    theme: 'outlined',
    size: 24,
    style: {},
  }

  getSize = size => ({
    fontSize: size,
  })

  render() {
    const {
      name, spin, theme, size, style, ...rest
    } = this.props;

    return (
      <Icon type={name} style={{ ...this.getSize(size), ...style }} spin={spin} theme={theme} {...rest} />
    );
  }
}
