import React, { useEffect, useState } from 'react';
import { useSelector, connect, useDispatch } from 'react-redux';

import { withRouter } from 'react-router';
import { withCookies } from 'react-cookie';
import { getProfile, setProfile } from '../../actions/ProfileActions';
import packetWhite from '../../images/expenso_white.svg';
import packetBlack from '../../images/expenso_black.svg';

import { Profile } from '../Types/GeneralTypes';
import { receiveMessage, sendMessage } from '../../events/MessageService';
import './Header.scss';
import Logo from '../Logo';
import { MenuOpen } from '@material-ui/icons';

const Header = () => {
  const authorization = useSelector(state => state.authorization);

  const profile = useSelector(state => state.profile);

  const dispatch = useDispatch();

  const toggleSidebar = () => {
    dispatch(setProfile({ ...profile, sidebar: !profile.sidebar }));
  };

  return (
    <div className="header">
      <MenuOpen className="mobile-only" onClick={toggleSidebar} />
      <Logo />
    </div>
  );
};

export default Header;
