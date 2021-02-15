import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse, Container, Button, List, ListItem } from '@material-ui/core';

import projectLogo from '../../../assets/images/react.svg';
import { NavLink } from 'react-router-dom';

import { FlagIcon } from 'react-flag-kit';

export default function LivePreviewExample() {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <>
      <div className="header-top-section py-3">
        <Container className="d-flex header-nav-menu justify-content-between align-items-center navbar-dark">
          <ul className="d-flex">
            <li>
              <Button
                variant="text"
                className="rounded-sm d-30 p-0 btn-icon btn-transition-none"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon
                    icon={['far', 'bell']}
                    className="font-size-sm"
                  />
                </span>
              </Button>
            </li>
            <li>
              <a
                className="rounded-sm py-1 px-3 font-size-xs text-uppercase"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                Languages
                <span className="opacity-5 dropdown-arrow">
                  <FontAwesomeIcon icon={['fas', 'angle-down']} />
                </span>
              </a>
              <div className="submenu-dropdown submenu-dropdown--sm">
                <div className="shadow-sm-dark bg-white rounded-sm">
                  <List
                    component="div"
                    className="nav-pills nav-neutral-primary flex-column p-2">
                    <ListItem
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-3 d-flex align-items-center">
                      <span className="mr-3">
                        <FlagIcon code="US" size={28} />
                      </span>
                      <span>English</span>
                    </ListItem>
                    <ListItem
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-3 d-flex align-items-center">
                      <span className="mr-3">
                        <FlagIcon code="ES" size={28} />
                      </span>
                      <span>Spanish</span>
                    </ListItem>
                    <ListItem
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-3 d-flex align-items-center">
                      <span className="mr-3">
                        <FlagIcon code="DE" size={28} />
                      </span>
                      <span>German</span>
                    </ListItem>
                  </List>
                </div>
              </div>
            </li>
          </ul>
          <ul className="d-flex">
            <li className="mr-0">
              <NavLink
                className="rounded-sm py-1 px-3 font-size-xs text-uppercase"
                to="/login">
                Members Login
              </NavLink>
            </li>
          </ul>
        </Container>
      </div>
      <Container>
        <div className="bg-white-10 p-2 header-nav-wrapper header-nav-wrapper-xl rounded px-4 navbar-dark">
          <div className="app-nav-logo">
            <NavLink
              to="/Homepage"
              title="Bamburgh React Crypto Application with Material-UI PRO"
              className="app-nav-logo app-nav-logo--light">
              <div className="app-nav-logo--icon shadow-second-sm bg-secondary border-0">
                <img
                  alt="Bamburgh React Crypto Application with Material-UI PRO"
                  src={projectLogo}
                />
              </div>
              <div className="app-nav-logo--text">
                <span>Crypto</span>

                <b>bamburgh</b>
              </div>
            </NavLink>
          </div>
          <div className="header-nav-menu d-none d-lg-block">
            <ul className="d-flex nav nav-neutral-first justify-content-center">
              <li>
                <NavLink
                  to="/Overview"
                  className="font-weight-bold rounded-sm text-white px-3">
                  Overview
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/BuySell"
                  className="font-weight-bold rounded-sm text-white px-3">
                  Buy/Sell
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Settings"
                  className="font-weight-bold rounded-sm text-white px-3">
                  Settings
                </NavLink>
              </li>
              <li>
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="font-weight-bold rounded-sm text-white px-3">
                  Apps
                  <span className="opacity-5 dropdown-arrow">
                    <FontAwesomeIcon icon={['fas', 'angle-down']} />
                  </span>
                </a>
                <div className="submenu-dropdown submenu-dropdown--md">
                  <div className="shadow-sm-dark w-100 bg-primary p-4 rounded">
                    <div className="px-4 text-uppercase pb-2 text-white font-weight-bold font-size-sm">
                      Individual Apps
                    </div>
                    <List
                      component="div"
                      className="nav-pills nav-transparent nav-pills-rounded flex-column">
                      <ListItem
                        component="a"
                        button
                        href="https://demo.uifort.com/bamburgh-react-admin-dashboard-material-ui-pro-demo"
                        target="_blank"
                        className="px-4 text-white-50 d-flex align-items-center">
                        <span>General</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        selected
                        className="px-4 d-flex text-white-50 align-items-center">
                        <span>Crypto</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="https://demo.uifort.com/bamburgh-react-messenger-application-material-ui-pro-demo"
                        target="_blank"
                        className="px-4 d-flex text-white-50 align-items-center">
                        <span>Messenger</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="https://demo.uifort.com/bamburgh-react-commerce-application-material-ui-pro-demo"
                        target="_blank"
                        className="px-4 d-flex text-white-50 align-items-center">
                        <span>Commerce</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex text-white-50 align-items-center"
                        disabled>
                        <span>Learning</span>
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex text-white-50 align-items-center"
                        disabled>
                        <span>Monitoring</span>
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex text-white-50 align-items-center"
                        disabled>
                        <span>Fleet Manager</span>
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex text-white-50 align-items-center"
                        disabled>
                        <span>Banking</span>
                      </ListItem>
                    </List>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
            <span className="d-none d-lg-block">
              <Button
                component={NavLink}
                to="/PageRegisterCover"
                className="rounded-sm text-nowrap font-size-xs font-weight-bold text-uppercase shadow-second-sm btn-warning">
                Register
              </Button>
            </span>
            <span className="d-block d-lg-none">
              <button
                onClick={toggle}
                className={clsx('navbar-toggler hamburger hamburger--elastic', {
                  'is-active': collapse
                })}>
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </span>
          </div>
          <div className="d-flex d-lg-none">
            <Collapse
              in={collapse}
              className="nav-collapsed-wrapper shadow-sm-dark navbar-collapse">
              <div className="nav-inner-wrapper">
                <Button
                  onClick={toggle}
                  className="btn-danger btn-icon d-40 shadow-sm hover-scale-lg btn-animated-icon-sm nav-toggle-inner-btn p-0">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'times']} />
                  </span>
                </Button>

                <div className="p-3">
                  <div className="px-4 text-uppercase py-2 text-second font-weight-bold font-size-sm">
                    Navigation Menu
                  </div>
                  <List
                    component="div"
                    className="nav-pills nav-neutral-primary nav-pills-rounded flex-column">
                    <ListItem
                      button
                      component={NavLink}
                      to="/Overview"
                      className="px-4 d-flex align-items-center">
                      <span>Overview</span>
                      <FontAwesomeIcon
                        icon={['fas', 'angle-right']}
                        className="opacity-6 ml-auto"
                      />
                    </ListItem>
                    <ListItem
                      button
                      component={NavLink}
                      to="/BuySell"
                      className="px-4 d-flex align-items-center">
                      <span>Buy/Sell</span>
                      <FontAwesomeIcon
                        icon={['fas', 'angle-right']}
                        className="opacity-6 ml-auto"
                      />
                    </ListItem>
                    <ListItem
                      button
                      component={NavLink}
                      to="/Settings"
                      className="px-4 d-flex align-items-center">
                      <span>Settings</span>
                      <FontAwesomeIcon
                        icon={['fas', 'angle-right']}
                        className="opacity-6 ml-auto"
                      />
                    </ListItem>
                  </List>
                </div>
                <div className="divider" />
                <div className="m-3">
                  <div className="bg-deep-sky px-3 py-4 rounded">
                    <div className="px-4 text-uppercase pb-2 text-white font-weight-bold font-size-sm">
                      Individual Apps
                    </div>
                    <List
                      component="div"
                      className="nav-pills nav-transparent nav-pills-rounded flex-column">
                      <ListItem
                        component="a"
                        button
                        href="https://demo.uifort.com/bamburgh-react-admin-dashboard-material-ui-pro-demo"
                        target="_blank"
                        className="px-4 text-white-50 d-flex align-items-center">
                        <span>General</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        selected
                        className="px-4 d-flex text-white-50 align-items-center">
                        <span>Crypto</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="https://demo.uifort.com/bamburgh-react-messenger-application-material-ui-pro-demo"
                        target="_blank"
                        className="px-4 d-flex text-white-50 align-items-center">
                        <span>Messenger</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="https://demo.uifort.com/bamburgh-react-commerce-application-material-ui-pro-demo"
                        target="_blank"
                        className="px-4 d-flex text-white-50 align-items-center">
                        <span>Commerce</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex text-white-50 align-items-center"
                        disabled>
                        <span>Learning</span>
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex text-white-50 align-items-center"
                        disabled>
                        <span>Monitoring</span>
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex text-white-50 align-items-center"
                        disabled>
                        <span>Fleet Manager</span>
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex text-white-50 align-items-center"
                        disabled>
                        <span>Banking</span>
                      </ListItem>
                    </List>
                  </div>
                </div>
                <div className="divider" />
                <div className="card-footer bg-secondary text-center p-3">
                  <Button
                    component="a"
                    href="https://uifort.com/template/bamburgh-react-crypto-application-material-ui-pro"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="font-weight-bold text-nowrap font-size-sm btn-success">
                    Buy Now
                  </Button>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </Container>
      <div
        className={clsx('collapse-page-trigger', { 'is-active': collapse })}
        onClick={toggle}
      />
    </>
  );
}
