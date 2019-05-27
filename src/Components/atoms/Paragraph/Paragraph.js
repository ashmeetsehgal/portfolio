import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Typography } from 'antd';

const { Paragraph } = Typography;

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
      <Paragraph {...rest}>{children}</Paragraph>
    );
  }
}
