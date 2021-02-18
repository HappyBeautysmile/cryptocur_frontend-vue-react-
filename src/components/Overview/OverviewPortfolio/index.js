import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Button, List, ListItem, Tooltip } from '@material-ui/core';

import CountUp from 'react-countup';
import PerfectScrollbar from 'react-perfect-scrollbar';

import TrendingUpTwoToneIcon from '@material-ui/icons/TrendingUpTwoTone';
import TrendingDownTwoToneIcon from '@material-ui/icons/TrendingDownTwoTone';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="w-100 mb-5">
        <div className="card-header d-flex align-items-center justify-content-between card-header-alt p-4">
          <div>
            <h6 className="font-weight-bold font-size-lg mb-1 text-black">
              My Portfolio
            </h6>
            <p className="text-black-50 mb-0">Status of your crypto assets.</p>
          </div>
          <div className="d-flex align-items-center">
            <Tooltip title="View stats for last week" arrow placement="top">
              <Button className="btn-link mx-1 px-1 py-2 font-weight-bold text-primary">
                <span>1W</span>
              </Button>
            </Tooltip>
            <Tooltip title="View stats for last month" arrow placement="top">
              <Button className="btn-link mx-1 px-1 py-2 font-weight-bold text-dark opacity-5">
                <span>1M</span>
              </Button>
            </Tooltip>
            <Tooltip title="View stats for last year" arrow placement="top">
              <Button className="btn-link ml-1 px-1 py-2 font-weight-bold text-dark opacity-5">
                <span>1Y</span>
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="divider" />
        <div className="divider" />
        <h3 className="display-3 mt-5 mb-0 text-center font-weight-bold">
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
        </h3>
        <small className="text-center d-block font-weight-bold text-muted text-uppercase">
          Total balance
        </small>
        <div className="divider mt-5" />
        <div className="divider" />
        <div className="scroll-area-sm shadow-overflow">
          <PerfectScrollbar>
            <List component="div" className="list-group-flush">
              <ListItem className="d-flex justify-content-between align-items-center py-3">
                <div className="d-flex align-items-center mr-4">
                  <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-warning">
                    <FontAwesomeIcon
                      icon={['fab', 'bitcoin']}
                      className="font-size-lg"
                    />
                  </div>
                  <div>
                    <div className="font-weight-bold">BTC</div>
                    <span className="text-warning d-block">Bitcoin</span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="text-right mr-3">
                    <div className="font-weight-bold font-size-lg">
                      2.4895 BTC
                    </div>
                    <div className="font-weight-bold text-black opacity-4">
                      $16,497
                    </div>
                  </div>
                  <div className="font-size-lg text-success">
                    <TrendingUpTwoToneIcon />
                  </div>
                </div>
              </ListItem>
              <ListItem className="d-flex justify-content-between align-items-center py-3">
                <div className="d-flex align-items-center mr-4">
                  <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-first">
                    <FontAwesomeIcon
                      icon={['fab', 'ethereum']}
                      className="font-size-lg"
                    />
                  </div>
                  <div>
                    <div className="font-weight-bold">ETH</div>
                    <span className="text-first d-block">Ethereum</span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="text-right mr-3">
                    <div className="font-weight-bold font-size-lg">
                      54.12387 ETH
                    </div>
                    <div className="font-weight-bold text-black opacity-4">
                      $6,398
                    </div>
                  </div>
                  <div className="font-size-lg text-success">
                    <TrendingUpTwoToneIcon />
                  </div>
                </div>
              </ListItem>
              <ListItem className="d-flex justify-content-between align-items-center py-3">
                <div className="d-flex align-items-center mr-4">
                  <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-success">
                    <FontAwesomeIcon
                      icon={['fas', 'dollar-sign']}
                      className="font-size-lg"
                    />
                  </div>
                  <div>
                    <div className="font-weight-bold">USD</div>
                    <span className="text-success d-block">Dollar</span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="text-right mr-3">
                    <div className="font-weight-bold font-size-lg">
                      76,358 USD
                    </div>
                  </div>
                  <div className="font-size-lg text-danger">
                    <TrendingDownTwoToneIcon />
                  </div>
                </div>
              </ListItem>
            </List>
          </PerfectScrollbar>
        </div>
        <div className="card-footer p-3 text-center">
          <Button size="small" className="py-2 px-4 btn-primary">
            <span className="btn-wrapper--label text-uppercase font-weight-bold">
              View all accounts
            </span>
          </Button>
        </div>
      </Card>
    </>
  );
}
