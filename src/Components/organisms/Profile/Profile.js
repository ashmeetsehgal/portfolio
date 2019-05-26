import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

import Avatar from '../../atoms/Avatar';
import Heading from '../../atoms/Heading';

import './profile.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class Profile extends PureComponent {
  render() {
    return (
      <div className="profile-wrapper">
        <Avatar size={236} src="https://i.ibb.co/KbyV43Z/as.png" />
        <Heading className="intro">hi, I&apos;m Ashmeet</Heading>
      </div>
    );
  }
}
