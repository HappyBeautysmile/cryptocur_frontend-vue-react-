import React from 'react';

import { Grid } from '@material-ui/core';

import TrendingUpTwoToneIcon from '@material-ui/icons/TrendingUpTwoTone';
import TrendingDownTwoToneIcon from '@material-ui/icons/TrendingDownTwoTone';

const HeaderMenu = () => {
  return (
    <>
      <div className="app-header-widget pb-1">
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <div className="d-flex align-items-center pr-4">
              <div className="font-size-lg text-danger mr-2">
                <TrendingDownTwoToneIcon />
              </div>
              <div className="px-2">
                <span className="opacity-6 text-uppercase font-size-sm">
                  <small>Current losses</small>
                </span>
                <div className="d-flex align-items-center justify-content-center pt-1">
                  <span className="font-weight-bold font-size-lg line-height-1">
                    <small className="opacity-6 pr-1">$</small>
                    46,362
                  </span>
                  <div className="badge badge-neutral-danger ml-2 text-danger">
                    -8%
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="d-flex align-items-center">
              <div className="font-size-lg text-success mr-2">
                <TrendingUpTwoToneIcon />
              </div>
              <div className="px-2">
                <span className="opacity-6 text-uppercase font-size-sm">
                  <small>Lifetime profits</small>
                </span>
                <div className="d-flex align-items-center justify-content-center pt-1">
                  <span className="font-weight-bold font-size-lg line-height-1">
                    <small className="opacity-6 pr-1">$</small>
                    34,546
                  </span>
                  <div className="badge badge-neutral-success text-success ml-2">
                    +13%
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default HeaderMenu;
