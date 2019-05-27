import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';

export default class AntdParagraph extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: null,
  }

  render() {
    const { children, ...rest } = this.props;
    return (
      <Button {...rest}>{children}</Button>
    );
  }
}
