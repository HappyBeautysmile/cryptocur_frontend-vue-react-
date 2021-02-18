import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Card, Button } from '@material-ui/core';

import Chart from 'react-apexcharts';

import TrendingUpTwoToneIcon from '@material-ui/icons/TrendingUpTwoTone';
import TrendingDownTwoToneIcon from '@material-ui/icons/TrendingDownTwoTone';
import GridOnTwoToneIcon from '@material-ui/icons/GridOnTwoTone';
import ListAltTwoToneIcon from '@material-ui/icons/ListAltTwoTone';

export default function LivePreviewExample() {
  const ethChartOptions = {
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
    colors: ['#4191ff'],
    stroke: {
      color: '#4191ff',
      width: 2,
      curve: 'smooth'
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
    },
    legend: {
      show: false
    }
  };
  const ethChartData = [
    {
      name: 'USD Price:',
      data: [47, 38, 56, 24, 45, 65, 32, 52, 45, 32, 54, 56]
    }
  ];

  const btcChartOptions = {
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
    colors: ['#f4772e'],
    stroke: {
      color: '#f4772e',
      width: 2,
      curve: 'smooth'
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
    },
    legend: {
      show: false
    }
  };
  const btcChartData = [
    {
      name: 'USD Price:',
      data: [47, 45, 52, 56, 24, 65, 32, 38, 54, 56, 45, 32]
    }
  ];

  const tetherChartOptions = {
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
    colors: ['#070919'],
    stroke: {
      color: '#070919',
      width: 2,
      curve: 'smooth'
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
    },
    legend: {
      show: false
    }
  };
  const tetherChartData = [
    {
      name: 'USD Price:',
      data: [46, 25, 54, 39, 53, 44, 52, 65, 45, 32, 35, 56]
    }
  ];

  return (
    <>
      <Card className="mb-5">
        <div className="card-header d-flex align-items-center justify-content-between card-header-alt p-4">
          <div>
            <h6 className="font-weight-bold font-size-lg mb-1 text-black">
              Crypto Watchlist
            </h6>
            <p className="text-black-50 mb-0">
              List of all crypto assets you are following.
            </p>
          </div>
          <div className="d-flex align-items-center">
            <Button className="btn-neutral-dark d-flex align-items-center justify-content-center d-40 active mr-2 border-0 p-0 rounded-pill">
              <GridOnTwoToneIcon className="w-50" />
            </Button>
            <Button className="btn-neutral-dark d-flex align-items-center justify-content-center d-40 border-0 p-0 rounded-pill">
              <ListAltTwoToneIcon className="w-50" />
            </Button>
          </div>
        </div>
        <div className="divider" />
        <div className="divider" />
        <div className="grid-menu grid-menu-3col">
          <Grid container spacing={0}>
            <Grid item lg={4}>
              <div className="px-4 pt-4">
                <div className="d-flex align align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="d-30 text-white d-flex align-items-center btn-pill justify-content-center rounded-pill mr-2 bg-first">
                      <FontAwesomeIcon icon={['fab', 'ethereum']} />
                    </div>
                    <div className="font-weight-bold font-size-lg">
                      Ethereum
                    </div>
                  </div>
                  <div>
                    <div className="badge badge-neutral-dark">12M</div>
                  </div>
                </div>
                <div className="d-flex my-3 justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="font-weight-bold font-size-xl">
                      <small>$</small> 195
                    </div>
                    <div className="font-size-lg text-success pl-2">+18%</div>
                  </div>
                  <div className="text-success">
                    <TrendingUpTwoToneIcon className="font-size-xxl" />
                  </div>
                </div>
                <div>
                  <Chart
                    options={ethChartOptions}
                    series={ethChartData}
                    type="line"
                    height={100}
                  />
                </div>
              </div>
            </Grid>
            <Grid item lg={4}>
              <div className="px-4 pt-4">
                <div className="d-flex align align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="d-30 text-white d-flex align-items-center btn-pill justify-content-center rounded-pill mr-2 bg-warning">
                      <FontAwesomeIcon icon={['fab', 'bitcoin']} />
                    </div>
                    <div className="font-weight-bold font-size-lg">Bitcoin</div>
                  </div>
                  <div>
                    <div className="badge badge-neutral-dark">12M</div>
                  </div>
                </div>
                <div className="d-flex my-3 justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="font-weight-bold font-size-xl">
                      <small>$</small> 6,587
                    </div>
                    <div className="font-size-lg text-danger pl-2">-5%</div>
                  </div>
                  <div className="text-danger">
                    <TrendingDownTwoToneIcon className="font-size-xxl" />
                  </div>
                </div>
                <div>
                  <Chart
                    options={btcChartOptions}
                    series={btcChartData}
                    type="line"
                    height={100}
                  />
                </div>
              </div>
            </Grid>
            <Grid item lg={4}>
              <div className="px-4 pt-4">
                <div className="d-flex align align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="d-30 text-white d-flex align-items-center btn-pill justify-content-center rounded-pill mr-2 bg-second">
                      <FontAwesomeIcon icon={['fas', 'dollar-sign']} />
                    </div>
                    <div className="font-weight-bold font-size-lg">Tether</div>
                  </div>
                  <div>
                    <div className="badge badge-neutral-dark">12M</div>
                  </div>
                </div>
                <div className="d-flex my-3 justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="font-weight-bold font-size-xl">
                      <small>$</small> 1,23
                    </div>
                    <div className="font-size-lg text-success pl-2">+7%</div>
                  </div>
                  <div className="text-success">
                    <TrendingUpTwoToneIcon className="font-size-xxl" />
                  </div>
                </div>
                <div>
                  <Chart
                    options={tetherChartOptions}
                    series={tetherChartData}
                    type="line"
                    height={100}
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="divider" />
        <div className="divider" />
        <div className="card-footer p-3 text-center">
          <Button size="small" className="py-2 px-4 btn-primary">
            <span className="btn-wrapper--label text-uppercase font-weight-bold">
              Discover more assets
            </span>
          </Button>
        </div>
      </Card>
    </>
  );
}
