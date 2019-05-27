import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import _map from 'lodash/map';

import Icon from '../../atoms/Icon';
import SOCIAL_CONFIG from './socialSection.config';
import './socialSection.scss';

export default class SocialSection extends PureComponent {
  static propTypes = {
    config: PropTypes.array,
  }

  static defaultProps = {
    config: SOCIAL_CONFIG,
  }

  renderSocialBlock = socialAccount => (

    <a className="social-wrapper__link" target="_blank" href={socialAccount.link}>
      <Icon size={36} key={socialAccount.id} type={socialAccount.icon} />
    </a>

  )

  render() {
    const { config } = this.props;
    return (
      <div className="social-wrapper">
        {_map(config, this.renderSocialBlock)}
      </div>
    );
  }
}
