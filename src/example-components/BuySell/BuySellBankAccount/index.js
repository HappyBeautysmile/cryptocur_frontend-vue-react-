import React from 'react';

import { Card, Button } from '@material-ui/core';

import {
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="p-5 mb-5 bg-premium-dark">
        <div className="bg-composed-wrapper--content d-block text-center text-xl-left d-xl-flex justify-content-between align-items-center">
          <div className="text-white">
            <h5 className="display-4 font-weight-bold mb-3">
              Link your bank account to your bamburgh profile.
            </h5>
            <p className="font-size-lg opacity-7 mb-4">
              In order for you to be able to execute transactions, deposit or
              withdraw fiat you need to bank account you will need to link a
              valid bank account.
            </p>
            <Button className="btn-success">Link Bank Account</Button>
            <Button
              className="ml-3 shadow-none btn-outline-secondary"
              variant="text">
              Do it later
            </Button>
          </div>
          <div className="ml-0 ml-xl-3 mt-5 mt-xl-0">
            <div>
              <CircularProgressbarWithChildren
                circleRatio={0.75}
                styles={buildStyles({
                  textColor: 'rgba(255,255,255,.95)',
                  pathColor: 'rgba(255,255,255,.95)',
                  trailColor: 'rgba(255,255,255,.1)',
                  rotation: 1 / 2 + 1 / 8
                })}
                value={63}
                strokeWidth={10}
                className="circular-progress-xl"></CircularProgressbarWithChildren>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
