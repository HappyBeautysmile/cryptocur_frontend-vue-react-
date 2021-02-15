import React from 'react';

import { Grid, Container, Card, Button } from '@material-ui/core';

import GaugeChart from 'react-gauge-chart';

import { NavLink } from 'react-router-dom';

import crypto from '../../../assets/images/apps/crypto-app-material-ui-pro.jpg';
import messenger from '../../../assets/images/apps/messenger-app-material-ui-pro.jpg';
import commerce from '../../../assets/images/apps/commerce-app-material-ui-pro.jpg';
import general from '../../../assets/images/apps/admin-dashboard-material-ui-pro.jpg';

import hero1 from '../../../assets/images/hero-bg/hero-2.jpg';
import NotificationsActiveTwoToneIcon from '@material-ui/icons/NotificationsActiveTwoTone';

export default function LivePreviewExample() {
  return (
    <>
      <div className="hero-wrapper bg-arielle-smile bg-composed-wrapper">
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image opacity-4"
            style={{ backgroundImage: 'url(' + hero1 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-second opacity-7" />
          <div className="bg-composed-wrapper--content align-self-center p-4 p-xl-5">
            <Container className="pb-5 py-lg-5 text-center">
              <div className="mb-4">
                <div className="badge badge-success mb-3 h-auto py-2 px-4 font-size-xs badge-pill font-weight-normal">
                  Included
                </div>
                <h4 className="font-weight-bold text-white display-3">
                  Individual Applications
                </h4>
                <Grid item md={11} lg={10} className="mx-auto">
                  <p className="text-white opacity-6 mt-3 mb-4 font-size-xxl">
                    This template comes with included individual applications,
                    making it easy to start with something closer to your
                    project requirements
                  </p>
                </Grid>
              </div>
              <Grid container spacing={6}>
                <Grid item md={6}>
                  <a
                    href="https://demo.uifort.com/bamburgh-react-admin-dashboard-material-ui-pro-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card modal-content card-box-hover-rise rounded-lg bg-transparent">
                    <img
                      src={general}
                      className="rounded-lg img-fluid"
                      alt="..."
                    />
                  </a>
                  <p className="text-white font-weight-bold font-size-xxl pt-3">
                    General
                  </p>
                </Grid>
                <Grid item md={6}>
                  <div className="card shadow-sm-dark rounded-lg bg-transparent">
                    <div className="card-img-wrapper">
                      <div className="card-badges card-badges-bottom">
                        <div className="badge badge-pill h-auto py-1 px-3 badge-success shadow-xxl">
                          Active
                        </div>
                      </div>
                      <img
                        src={crypto}
                        className="rounded-lg img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                  <p className="text-white font-weight-bold font-size-xxl pt-3">
                    Crypto
                  </p>
                </Grid>
                <Grid item md={6}>
                  <a
                    href="https://demo.uifort.com/bamburgh-react-messenger-application-material-ui-pro-demo"
                    className="card modal-content card-box-hover-rise rounded-lg bg-transparent">
                    <img
                      src={messenger}
                      className="rounded-lg img-fluid"
                      alt="..."
                    />
                  </a>
                  <p className="text-white font-weight-bold font-size-xxl pt-3">
                    Messenger
                  </p>
                </Grid>
                <Grid item md={6}>
                  <a
                    href="https://demo.uifort.com/bamburgh-react-commerce-application-material-ui-pro-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card modal-content card-box-hover-rise rounded-lg bg-transparent">
                    <img
                      src={commerce}
                      className="rounded-lg img-fluid"
                      alt="..."
                    />
                  </a>
                  <p className="text-white font-weight-bold font-size-xxl pt-3">
                    Commerce
                  </p>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </div>

      <div className="py-4 feature-box">
        <Container className="py-5">
          <div className="mb-4 text-center">
            <div className="badge badge-neutral-success text-success mb-3 h-auto py-2 px-4 font-size-xs badge-pill font-weight-normal">
              Unlimited Options
            </div>
            <h4 className="font-weight-bold text-second display-3">
              Build anything you want
            </h4>
            <Grid item md={11} lg={10} className="mx-auto">
              <p className="text-second opacity-6 mt-3 mb-5 font-size-xxl">
                We've got you covered with over 500 custom components ready to
                use
              </p>
            </Grid>
          </div>
          <Grid container spacing={6} className="mt-5">
            <Grid item xl={4} className="d-flex align-items-center">
              <Grid container spacing={0} className="w-100 mb-3 mb-xl-0">
                <Grid item lg={4} xl={12}>
                  <div className="feature-box pr-4">
                    <h3 className="font-size-xl font-weight-bold my-3 text-primary">
                      Marketing Sections
                    </h3>
                    <p className="text-black-50 mb-3">
                      These can be used to build presentation websites in the
                      same consistent style like your application.
                    </p>
                  </div>
                </Grid>
                <Grid item lg={4} xl={12}>
                  <div className="feature-box pr-4">
                    <h3 className="font-size-xl font-weight-bold my-3 text-primary">
                      Data Display
                    </h3>
                    <p className="text-black-50 mb-3">
                      We've built a plethora of component blocks that can be
                      composed to form new elements or sections.
                    </p>
                  </div>
                </Grid>
                <Grid item lg={4} xl={12}>
                  <div className="feature-box pr-4">
                    <h3 className="font-size-xl font-weight-bold my-3 text-primary">
                      UI Widgets
                    </h3>
                    <p className="text-black-50 mb-3">
                      Interaction is important in all apps, this being the
                      reason we've built over 200 examples with the 80+
                      integrated widgets.
                    </p>
                  </div>
                </Grid>
                <Grid item lg={4} xl={12}>
                  <div className="feature-box pr-4">
                    <h3 className="font-size-xl font-weight-bold my-3 text-primary">
                      Forms Plugins
                    </h3>
                    <p className="text-black-50 mb-3">
                      Custom upload forms, multiple style sliders, tabs,
                      accordions - you'll get them all with this template.
                    </p>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={8} xl={5} className="d-flex align-items-center">
              <Card className="bg-second shadow-xxl card-box card-box-hover-rise card-box-hover rounded-lg text-center p-3 p-xl-4 mb-4 mb-md-0 d-block">
                <div className="d-100 object-skew hover-scale-sm icon-blob btn-icon text-warning mx-auto">
                  <svg
                    className="blob-wrapper opacity-2"
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(300,300)">
                      <path
                        d="M155,-128.8C192.2,-77,207.7,-13,197.7,50.9C187.7,114.8,152.2,178.6,96.7,208.2C41.1,237.9,-34.6,233.4,-102.6,204C-170.6,174.7,-231.1,120.6,-246.7,55.4C-262.4,-9.9,-233.2,-86.3,-184.6,-140.7C-136,-195.2,-68,-227.6,-4.6,-223.9C58.9,-220.3,117.8,-180.6,155,-128.8Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                  <div className="blob-icon-wrapper">
                    <NotificationsActiveTwoToneIcon />
                  </div>
                </div>
                <h5 className="font-weight-bold font-size-lg text-white mb-2">
                  Berlin Data Center
                </h5>
                <p className="mb-4 text-white-50">
                  All components from the General dashboard template can be used
                  in the individual applications pages, without modifications.
                </p>
                <GaugeChart
                  id="chartsGauges1B"
                  nrOfLevels={24}
                  colors={['rgba(0,2,255,0.6)', 'rgba(255,11,244,0.8)']}
                  arcWidth={0.3}
                  percent={0.72}
                />
                <Button
                  component={NavLink}
                  to="/DashboardMonitoring"
                  className="btn-first badge-wrapper transition-base rounded-pill py-2 px-4 text-capitalize font-size-sm mt-3 d-inline-flex">
                  <span>View Dashboard</span>
                  <div
                    className="badge badge-warning badge-position badge-position--top-right shadow-none badge-circle"
                    id="NewNotificationsTooltip1">
                    New notifications
                  </div>
                </Button>
              </Card>
            </Grid>
            <Grid item md={4} xl={3} className="d-flex align-items-center">
              <div className="py-2 py-xl-4">
                <div className="d-flex align-items-end flex-column">
                  <div className="feature-box">
                    <h3 className="font-size-lg font-weight-bold my-3">
                      <div className="display-4 text-primary font-weight-bold">
                        Gauges, maybe?
                      </div>
                    </h3>
                    <p className="text-black-50 font-size-lg mb-0">
                      This is just one example of what comes packed in this
                      template.
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
