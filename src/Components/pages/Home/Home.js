import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

import SocialSection from '../../organisms/SocialSection';
import Profile from '../../organisms/Profile';

// eslint-disable-next-line react/prefer-stateless-function
export default class Home extends PureComponent {
  render() {
    return (
      <div className="home-wrapper">
        <Profile />
        <SocialSection />
      </div>
    );
  }
}
