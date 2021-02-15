import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Card } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item md={6}>
          <Card className="mb-5 p-4 text-center bg-primary">
            <h6 className="d-flex align-items-center align-self-center font-weight-bold font-size-xl mb-3 text-white">
              <div className="d-30 text-white d-flex align-items-center justify-content-center rounded-pill mr-2 bg-warning">
                <FontAwesomeIcon
                  icon={['fab', 'bitcoin']}
                  className="font-size-md"
                />
              </div>
              <div>Bitcoin</div>
            </h6>
            <div className="display-4 text-white mb-3 font-weight-bold">
              <small className="opacity-8">$</small>
              7,562
            </div>
            <div className="text-white opacity-8">
              <b>+ $574</b> since last week
            </div>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card className="mb-5 p-4 text-center bg-second">
            <h6 className="d-flex align-items-center align-self-center font-weight-bold font-size-xl mb-3 text-white">
              <div className="d-30 text-white d-flex align-items-center btn-pill justify-content-center rounded-pill mr-2 bg-first">
                <FontAwesomeIcon
                  icon={['fab', 'ethereum']}
                  className="font-size-md"
                />
              </div>
              <div>Ethereum</div>
            </h6>
            <div className="display-4 text-white mb-3 font-weight-bold">
              <small className="opacity-8">$</small>
              485
            </div>
            <div className="text-white opacity-8">
              <b>- $67</b> since last month
            </div>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
