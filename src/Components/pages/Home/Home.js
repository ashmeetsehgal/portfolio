import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

import Avatar from '../../atoms/Avatar';
import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';

// eslint-disable-next-line react/prefer-stateless-function
export default class Home extends PureComponent {
  render() {
    return (
      <div className="home-wrapper">
        <Avatar size={236} src="https://i.ibb.co/KbyV43Z/as.png" />
        <Heading>hi, I&apos;m ashmeet</Heading>
        <Button type="primary">Primary</Button>
      </div>
    );
  }
}
