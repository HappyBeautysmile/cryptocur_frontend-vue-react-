import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Container, Card, Button } from '@material-ui/core';

import Chart from 'react-apexcharts';

import { NavLink } from 'react-router-dom';

import hero8 from '../../../assets/images/hero-bg/hero-8.jpg';
import illustration1 from '../../../assets/images/illustrations/pack2/graduation.svg';

import CryptoHeader from './CryptoHeader.js';
import LoginModal from '../../LoginModal';
import {is_session} from "../../../reduxs/actions"

export default function LivePreviewExample() {
  const chartHomepage1AOptions = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 2
    },
    colors: ['#4191ff'],
    fill: {
      color: '#4191ff',
      opacity: 0.1,
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.2,
        inverseColors: false,
        opacityFrom: 0.6,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chartHomepage1AData = [
    {
      name: 'USD Price:',
      data: [47, 38, 56, 24, 45, 65, 32, 52, 45, 32, 54, 56]
    }
  ];

  const chartHomepage1BOptions = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      color: '#f83245',
      curve: 'smooth',
      width: 2
    },
    colors: ['#f83245'],
    fill: {
      color: '#f83245',
      opacity: 0.1,
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.2,
        inverseColors: false,
        opacityFrom: 0.6,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chartHomepage1BData = [
    {
      name: 'USD Price:',
      data: [47, 45, 32, 38, 65, 54, 56, 52, 56, 24, 45, 32]
    }
  ];

  const chartHomepage1CData = [
    {
      name: 'USD Price:',
      data: [47, 45, 52, 56, 24, 65, 32, 38, 54, 56, 45, 32]
    }
  ];

  return (
    <>
    {/* bg-night-sky */}
      <div className="hero-wrapper bg-composed-wrapper bg-skim-blue" >
        <div className="header-top-section pb-2">
          <CryptoHeader />
        </div>
        <div className="hero-wrapper--content">
          <div
            className="bg-composed-wrapper--image bg-composed-filter-rm"
            style={{ backgroundImage: 'url(' + hero8 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-second opacity-5" />
          <div className="bg-composed-wrapper--content">
            <Container className="z-over shadow-container-content-5">
              <Grid container spacing={6} className="py-5">
                <Grid item lg={6}>
                  <div className="pt-3 text-white pt-xl-5 pr-0 pr-xl-5">
                    <h2 className="display-3 font-weight-bold">
                      Welcome to Zedcoin. <br/>We put the power in your hands to buy, sell and trade digital currency
                    </h2>
                    <p className="font-size-xl py-3 text-white-50">
                      Success is right before your eyes.  Don't miss the opportunity!.
                    </p>
                    <div className="pt-3">
                      { is_session() == false  && <LoginModal loginTitle="Get Started"/>}
                      { is_session() && <Button
                        component={NavLink}
                        to="/Overview"
                        size="large"
                        className="rounded-sm font-weight-bold shadow-second-sm btn-first">
                        <span className="btn-wrapper--label">
                          Get Started
                        </span>
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                        </span>
                      </Button>}
                    </div>
                  </div>
                </Grid>
                <Grid item lg={6} className="d-flex align-items-center">
                  <img
                    src={illustration1}
                    alt="..."
                    className="m-5 m-lg-0 img-fit-container"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={6}>
                <Grid item lg={4}>
                  <Card className="shadow-xxl card-box-hover-rise mb-5">
                    <div className="d-flex align-items-center p-4">
                      <div className="d-50 text-white d-flex align-items-center justify-content-center rounded-pill bg-warning shadow-xxl mr-3">
                        <FontAwesomeIcon
                          icon={['fab', 'bitcoin']}
                          className="font-size-xxl"
                        />
                      </div>
                      <div>
                        <div className="font-weight-bold text-black">
                          Bitcoin
                        </div>
                        <div className="text-dark opacity-7">
                          24h Vol.: $239.454
                        </div>
                      </div>
                    </div>
                    <div className="px-4">
                      <div className="text-black py-2 font-size-xxl d-flex align-items-center">
                        <div className="display-3 font-weight-bold">$9754</div>
                        <small className="text-success pt-1 font-weight-bold font-size-sm ml-2 align-self-start">
                          +12.54%
                        </small>
                      </div>
                      <div className="d-flex mt-1 align-items-center">
                        <div className="d-inline-flex font-weight-bold bg-neutral-success text-success font-size-sm px-3 py-1 rounded-sm">
                          $9807
                        </div>
                        <div className="font-size-sm font-weight-bold text-black-50 pl-2">
                          Last 24h
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Chart
                        options={chartHomepage1AOptions}
                        series={chartHomepage1AData}
                        type="area"
                        height={150}
                      />
                    </div>
                  </Card>
                </Grid>
                <Grid item lg={4}>
                  <Card className="shadow-xxl card-box-hover-rise mb-5">
                    <div className="d-flex align-items-center p-4">
                      <div className="d-50 text-white d-flex align-items-center justify-content-center rounded-pill bg-first shadow-xxl mr-3">
                        <FontAwesomeIcon
                          icon={['fab', 'ethereum']}
                          className="font-size-xxl"
                        />
                      </div>
                      <div>
                        <div className="font-weight-bold text-black">
                          Ethereum
                        </div>
                        <div className="text-dark opacity-7">
                          24h Vol.: $182.295
                        </div>
                      </div>
                    </div>
                    <div className="px-4">
                      <div className="text-black py-2 font-size-xxl d-flex align-items-center">
                        <div className="display-3 font-weight-bold">$342</div>
                        <small className="text-success pt-1 font-weight-bold font-size-sm ml-2 align-self-start">
                          +21.25%
                        </small>
                      </div>
                      <div className="d-flex mt-1 align-items-center">
                        <div className="d-inline-flex font-weight-bold bg-neutral-success text-success font-size-sm px-3 py-1 rounded-sm">
                          $327
                        </div>
                        <div className="font-size-sm font-weight-bold text-black-50 pl-2">
                          Last 24h
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Chart
                        options={chartHomepage1AOptions}
                        series={chartHomepage1CData}
                        type="area"
                        height={150}
                      />
                    </div>
                  </Card>
                </Grid>
                <Grid item lg={4}>
                  <Card className="shadow-xxl card-box-hover-rise mb-5">
                    <div className="d-flex align-items-center p-4">
                      <div className="d-50 text-white d-flex align-items-center justify-content-center rounded-pill bg-success shadow-xxl mr-3">
                        <FontAwesomeIcon
                          icon={['fas', 'dollar-sign']}
                          className="font-size-xxl"
                        />
                      </div>
                      <div>
                        <div className="font-weight-bold text-black">USDT</div>
                        <div className="text-dark opacity-7">
                          24h Vol.: $23.453
                        </div>
                      </div>
                    </div>
                    <div className="px-4">
                      <div className="text-black py-2 font-size-xxl d-flex align-items-center">
                        <div className="display-3 font-weight-bold">$65.34</div>
                        <small className="text-danger pt-1 font-weight-bold font-size-sm ml-2 align-self-start">
                          -5.54%
                        </small>
                      </div>
                      <div className="d-flex mt-1 align-items-center">
                        <div className="d-inline-flex font-weight-bold bg-neutral-danger text-danger font-size-sm px-3 py-1 rounded-sm">
                          $76.34
                        </div>
                        <div className="font-size-sm font-weight-bold text-black-50 pl-2">
                          Last 24h
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Chart
                        options={chartHomepage1BOptions}
                        series={chartHomepage1BData}
                        type="area"
                        height={150}
                      />
                    </div>
                  </Card>
                </Grid>
              </Grid>
            </Container>
            <div className="shadow-container-blocks-5 z-below">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="var(--white)"
                  fillOpacity="1"
                  d="M0,288L15,266.7C30,245,60,203,90,202.7C120,203,150,245,180,240C210,235,240,181,270,170.7C300,160,330,192,360,176C390,160,420,96,450,96C480,96,510,160,540,186.7C570,213,600,203,630,186.7C660,171,690,149,720,165.3C750,181,780,235,810,218.7C840,203,870,117,900,69.3C930,21,960,11,990,10.7C1020,11,1050,21,1080,42.7C1110,64,1140,96,1170,96C1200,96,1230,64,1260,48C1290,32,1320,32,1350,69.3C1380,107,1410,181,1425,218.7L1440,256L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
