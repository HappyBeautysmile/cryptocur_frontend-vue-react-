import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, Menu, Button, List, ListItem } from '@material-ui/core';

import avatar3 from '../../assets/images/avatars/avatar3.jpg';
import CountUp from 'react-countup';

import BusinessCenterTwoToneIcon from '@material-ui/icons/BusinessCenterTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import VerifiedUserTwoToneIcon from '@material-ui/icons/VerifiedUserTwoTone';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';

import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles({
  badge: {
    backgroundColor: 'var(--success)',
    color: 'var(--success)',
    boxShadow: '0 0 0 2px #fff',
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""'
    }
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0
    }
  }
})(Badge);

const HeaderUserbox = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        variant="text"
        onClick={handleClick}
        className="btn-transition-none text-left ml-2 p-0 bg-transparent d-flex align-items-center"
        disableRipple>
        <div className="d-block p-0 avatar-icon-wrapper">
          <StyledBadge
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            badgeContent=" "
            classes={{ badge: 'bg-success badge-circle border-0' }}
            variant="dot">
            <div className="avatar-icon rounded">
              <img src={avatar3} alt="..." />
            </div>
          </StyledBadge>
        </div>
        <div className="d-none d-xl-block pl-2">
          <span className="text-success">
            <small>Account verified</small>
          </span>
          <div className="font-weight-bold">Satoshi Nakamoto</div>
        </div>
        <span className="pl-1 pl-xl-3">
          <FontAwesomeIcon icon={['fas', 'angle-down']} className="opacity-5" />
        </span>
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(anchorEl)}
        classes={{ list: 'p-0' }}
        onClose={handleClose}>
        <div className="dropdown-menu-xl overflow-hidden p-0">
          <div className="d-flex p-4">
            <div className="avatar-icon flex-shrink-0 rounded mr-3">
              <img src={avatar3} alt="..." />
            </div>
            <div>
              <h6 className="font-weight-bold mb-1 text-black">
                Satoshi Nakamoto
              </h6>
              <p className="text-black-50 mb-0">satoshi.na@example.com</p>
            </div>
          </div>
          <div className="divider" />
          <div className="divider" />
          <div className="bg-secondary d-flex align-items-center flex-column py-4">
            <div className="display-3 mb-0 text-center font-weight-bold">
              <small className="opacity-6">$</small>
              <span className="pl-1">
                <CountUp
                  start={0}
                  end={458.695}
                  duration={6}
                  separator=""
                  delay={1}
                  decimals={3}
                  decimal=","
                  prefix=""
                  suffix=""
                />
                <small>
                  <sup>.65</sup>
                </small>
              </span>
            </div>
            <small className="text-center font-weight-bold opacity-6 text-uppercase">
              Total balance
            </small>
          </div>
          <div className="divider" />
          <List
            component="div"
            className="nav-neutral-first nav-pills-rounded flex-column p-3">
            <ListItem
              component="a"
              button
              href="#/"
              onClick={(e) => e.preventDefault()}>
              <div className="mr-2">
                <SettingsTwoToneIcon />
              </div>
              <span className="font-size-md">Settings</span>
            </ListItem>
            <ListItem
              component="a"
              button
              href="#/"
              onClick={(e) => e.preventDefault()}>
              <div className="mr-2">
                <VerifiedUserTwoToneIcon />
              </div>
              <span className="font-size-md">Profile</span>
            </ListItem>
            <ListItem
              component="a"
              button
              href="#/"
              onClick={(e) => e.preventDefault()}>
              <div className="mr-2">
                <BusinessCenterTwoToneIcon />
              </div>
              <span className="font-size-md">Wallets</span>
            </ListItem>
          </List>
          <div className="divider" />
          <List
            component="div"
            className="nav-neutral-danger nav-pills-rounded flex-column p-3">
            <ListItem
              component="a"
              button
              href="#/"
              onClick={(e) => e.preventDefault()}>
              <div className="mr-2">
                <ExitToAppTwoToneIcon />
              </div>
              <span>Log out</span>
            </ListItem>
          </List>
        </div>
      </Menu>
    </>
  );
};

export default HeaderUserbox;
