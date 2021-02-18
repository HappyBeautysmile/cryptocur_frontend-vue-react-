import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Card, Menu, Button, List, ListItem } from '@material-ui/core';

import CountUp from 'react-countup';
import Chart from 'react-apexcharts';

export default function LivePreviewExample() {
  const chart6Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      strokeDashArray: '5',
      borderColor: 'rgba(125, 138, 156, 0.3)'
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    fill: {
      color: '#4191ff',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.3,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    colors: ['#4191ff'],
    legend: {
      show: false
    },
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  };
  const chart6Data = [
    {
      name: 'Net Profit',
      data: [3.3, 3.1, 4.0, 5.8, 2.1, 3.6, 3.2]
    },
    {
      name: 'Net Loss',
      data: [2.1, 2.1, 2.8, 2.8, 4.3, 2.7, 1.4]
    }
  ];

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Card className="p-4 p-lg-5">
        <div className="d-block d-lg-flex text-center text-lg-left align-items-center justify-content-between mb-4">
          <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
            <div className="display-4 line-height-1 font-weight-bold mr-3">
              Ethereum Balance
            </div>
            <div>
              <Button
                onClick={handleClick}
                size="small"
                className="btn-neutral-dark d-flex align-items-center">
                <span className="btn-wrapper--label">USD</span>
                <span className="btn-wrapper--icon d-flex">
                  <FontAwesomeIcon
                    icon={['fas', 'chevron-down']}
                    className="opacity-8 font-size-xs ml-1"
                  />
                </span>
              </Button>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center'
                }}
                open={Boolean(anchorEl)}
                classes={{ list: 'p-0' }}
                onClose={handleClose}>
                <div className="p-3">
                  <List
                    component="div"
                    className="nav-pills nav-neutral-dark flex-column">
                    <ListItem
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      selected>
                      <span>USD</span>
                    </ListItem>
                    <ListItem
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      <span>Euro</span>
                    </ListItem>
                    <ListItem
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      <span>Yen</span>
                    </ListItem>
                  </List>
                </div>
              </Menu>
            </div>
          </div>
          <Button
            className="mt-4 mt-lg-0 text-uppercase font-weight-bold px-4 btn-primary"
            size="small">
            Exchange
          </Button>
        </div>
        <div className="rounded p-4 bg-secondary text-center border-light mb-5 border-1">
          <Grid container spacing={6}>
            <Grid item md={4}>
              <div className="text-dark pb-1">Today's Earnings</div>
              <div className="font-size-lg d-flex align-items-center justify-content-center text-second">
                <span className="mr-2 badge badge-circle badge-dark">
                  Badge dark
                </span>
                <small className="opacity-6 pr-1">$</small>
                <span>
                  <CountUp
                    start={0}
                    end={8.49}
                    duration={4}
                    separator=""
                    decimals={3}
                    decimal=","
                    prefix=""
                    suffix=""
                  />
                </span>
              </div>
            </Grid>
            <Grid item md={4}>
              <div className="text-dark pb-1">Current Week</div>
              <div className="font-size-lg d-flex align-items-center justify-content-center text-second">
                <div className="badge badge-first mr-2 badge-circle">
                  Badge first
                </div>
                <small className="opacity-6 pr-1">$</small>
                <span>
                  <CountUp
                    start={0}
                    end={34.543}
                    duration={6}
                    deplay={2}
                    separator=""
                    decimals={3}
                    decimal=","
                  />
                </span>
              </div>
            </Grid>
            <Grid item md={4}>
              <div className="text-dark pb-1">Previous Week</div>
              <div className="font-size-lg d-flex align-items-center justify-content-center text-second">
                <span className="mr-2 badge badge-circle badge-warning">
                  Badge warning
                </span>
                <small className="opacity-6 pr-1">$</small>
                <span>
                  <CountUp
                    start={0}
                    end={76.645}
                    duration={6}
                    deplay={2}
                    separator=""
                    decimals={3}
                    decimal=","
                  />
                </span>
              </div>
            </Grid>
          </Grid>
        </div>

        <Grid container spacing={6}>
          <Grid item xl={4}>
            <Card className="card-box mb-4 p-3">
              <div className="display-3 text-black font-weight-bold">19</div>
              <div className="divider mt-2 mb-3 border-2 w-25 bg-first rounded border-first" />
              <div className="font-weight-bold opacity-7 text-uppercase">
                Failed transfers
              </div>
            </Card>
          </Grid>
          <Grid item xl={4}>
            <Card className="card-box mb-4 p-3">
              <div className="display-3 text-black font-weight-bold">35</div>
              <div className="divider mt-2 mb-3 border-2 w-25 bg-success rounded border-success" />
              <div className="font-weight-bold opacity-7 text-uppercase">
                Successful deposits
              </div>
            </Card>
          </Grid>
          <Grid item xl={4}>
            <Card className="card-box mb-4 p-3">
              <div className="display-3 text-black font-weight-bold">546</div>
              <div className="divider mt-2 mb-3 border-2 w-25 bg-warning rounded border-warning" />
              <div className="font-weight-bold opacity-7 text-uppercase">
                Transactions
              </div>
            </Card>
          </Grid>
        </Grid>

        <Chart
          options={chart6Options}
          series={chart6Data}
          type="area"
          height={311}
        />
      </Card>
    </>
  );
}
