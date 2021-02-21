import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse, Container, Button, List, ListItem ,TextField,Dialog,Grid} from '@material-ui/core';

import projectLogo from '../../../assets/images/react.svg';

import { NavLink } from 'react-router-dom';
import LoginModal from '../../Users/LoginModal';
import RegisterModal from '../../Users/RegisterModal';

export default function LivePreviewExample() {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);
  return (
    <>
      <div className="header-top-section py-3">
       
      </div>
      <Container>
        <div className="bg-white-10 p-2 header-nav-wrapper header-nav-wrapper-xl rounded px-4 navbar-dark">
          <div className="app-nav-logo">
            <NavLink
              to="/Homepage"
              title="Bamburgh React Crypto Application with Material-UI PR"
              className="app-nav-logo app-nav-logo--light">
              <div className="app-nav-logo--icon shadow-second-sm bg-secondary border-0" style={{borderRadius:"50%"}}>
                <img style ={{width:"40px",height:"40px" }}
                  alt="Bamburgh React Crypto Application with Material-UI PRO"
                  src={projectLogo }
                />
              </div>
              <div className="app-nav-logo--text">
                <span>Crypto</span>
                <b>Zedcoin</b>
              </div>
            </NavLink>
          </div>
        
          <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
            <span className="d-none d-lg-block" style={{paddingRight:"10px"}}>
              <LoginModal
               loginTitle="Login"
              />
            </span>
            <span className="d-none d-lg-block">              
              <RegisterModal
              registerTitle="Register"
              submitBtnName ="CREATE ACCOUNT"
               />
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
