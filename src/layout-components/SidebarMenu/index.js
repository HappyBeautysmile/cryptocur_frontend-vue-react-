import React, { useState } from 'react';

import clsx from 'clsx';

import { Collapse } from '@material-ui/core';

import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { setSidebarToggleMobile } from '../../reduxs/actions/sidebar';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ChevronRightTwoToneIcon from '@material-ui/icons/ChevronRightTwoTone';
import EcoIcon from '@material-ui/icons/Eco';
import EmojiEventsTwoToneIcon from '@material-ui/icons/EmojiEventsTwoTone';
import AccountBalanceTwoToneIcon from '@material-ui/icons/AccountBalanceTwoTone';
import AttachMoneyTwoToneIcon from '@material-ui/icons/AttachMoneyTwoTone';
import FilterListTwoToneIcon from '@material-ui/icons/FilterListTwoTone';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import VerifiedUserTwoToneIcon from '@material-ui/icons/VerifiedUserTwoTone';
import BusinessCenterTwoToneIcon from '@material-ui/icons/BusinessCenterTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
// import ViewColumnTwoToneIcon from '@material-ui/icons/ViewColumnTwoTone';
// import SaveAltIcon from '@material-ui/icons/SaveAlt';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
// import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
// import BackupIcon from '@material-ui/icons/Backup';
// import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
// import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
// import { SidebarWidget } from '../../layout-components';
// import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const SidebarMenu = (props) => {
  const { setSidebarToggleMobile } = props;

  const toggleSidebarMobile = () => setSidebarToggleMobile(false);

  const [cryptoPageOpen, setCryptoPageOpen] = useState(false);
  const [fiatPageOpen, setFiatPageOpen] = useState(false);
  
  const togglePages = (event) => {
    setFiatPageOpen(!fiatPageOpen);
    event.preventDefault();
  };
  const toggleCryptoPages = (event) => {
    setCryptoPageOpen(!cryptoPageOpen);
    event.preventDefault();
  };
  // console.log("cryptoPageOpen : " + cryptoPageOpen);
  return (
    <>
      <PerfectScrollbar>
        <div className="sidebar-navigation">
          {/* <SidebarWidget /> */}
          <div className="sidebar-header">
            <span>Navigation</span>
          </div>
          <ul >
            <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Homepage">
                <span className="sidebar-icon">
                  <EmojiEventsTwoToneIcon />
                </span>
                Home
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Fund">
                <span className="sidebar-icon">
                  <AttachMoneyIcon/>
                </span>
                Fund
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Transactions">
                <span className="sidebar-icon">
                  <FilterListTwoToneIcon />
                </span>
                Transactions
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
          
            <li>
              <NavLink
                to="/Buy"
                activeClassName="active"
                onClick={toggleSidebarMobile}
                className="nav-link-simple"
                >
                <span className="sidebar-icon">
                  <EcoIcon />
                </span>
                <span className="sidebar-item-label">Crypto Buy/Sell</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
            <ul>
              <li>
                <a
                  href="/"
                  onClick={togglePages}
                  className={clsx({ active: fiatPageOpen })}>
                  <span className="sidebar-icon">
                    <AccountBalanceIcon />
                  </span>
                  <span className="sidebar-item-label">Fiat</span>
                  <span className="sidebar-icon-indicator">
                    <ChevronRightTwoToneIcon />
                  </span>
                </a>
                <Collapse in={fiatPageOpen}>
                  <ul>
                    <li>
                      <NavLink
                        onClick={toggleSidebarMobile}
                        activeClassName="active"
                        className="nav-link-simple"
                        to="/Deposit">
                        {/* <span className="sidebar-icon">
                        <CloudDownloadIcon/>
                        </span> */}
                        Deposit
                        <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                          <ChevronRightTwoToneIcon />
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleSidebarMobile}
                        activeClassName="active"
                        className="nav-link-simple"
                        to="/Withdraw">
                        {/* <span className="sidebar-icon">
                          <BackupIcon />
                        </span> */}
                        Withdraw
                        <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                          <ChevronRightTwoToneIcon />
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                </Collapse>
              </li>
            </ul>
            {/* <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Overview">
                <span className="sidebar-icon">
                  <AccountBalanceTwoToneIcon />
                </span>
                Overview
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/BuySell">
                <span className="sidebar-icon">
                  <AttachMoneyTwoToneIcon />
                </span>
                Buy / Sell
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Wallets">
                <span className="sidebar-icon">
                  <BusinessCenterTwoToneIcon />
                </span>
                Wallets
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
           
            <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Accounts">
                <span className="sidebar-icon">
                  <PeopleAltTwoToneIcon />
                </span>
                Accounts
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
             */}
           
            {/* <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Profile">
                <span className="sidebar-icon">
                  <VerifiedUserTwoToneIcon />
                </span>
                Profile
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Settings">
                <span className="sidebar-icon">
                  <SettingsTwoToneIcon />
                </span>
                Settings
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li> */}
          </ul>
          <div className="sidebar-header">
            <span>Others</span>
          </div>
          {/* <ul>
            <li>
              <a
                href="#/"
                onClick={togglePages}
                className={clsx({ active: pagesOpen })}>
                <span className="sidebar-icon">
                  <ViewColumnTwoToneIcon />
                </span>
                <span className="sidebar-item-label">User Pages</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={pagesOpen}>
                <ul>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={toggleSidebarMobile}
                      to="/Register">
                      Register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={toggleSidebarMobile}
                      to="/Register">
                      Recover Password
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/PageError404">
                      Error 404
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </li>
          </ul> */}
        </div>
      </PerfectScrollbar>
    </>
  );
};

const mapStateToProps = (state) => ({
  sidebarToggleMobile: state.sidebar.sidebarToggleMobile
});

const mapDispatchToProps = () => ({
  setSidebarToggleMobile 
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarMenu);
