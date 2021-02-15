import React from 'react';

import { Card, Button } from '@material-ui/core';

import svgImage5 from '../../../assets/images/illustrations/pack4/powerful.svg';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="card-box bg-neutral-warning p-4">
        <div className="d-block text-center text-lg-left d-lg-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div
              className="d-none d-xl-flex align-items-center"
              style={{ width: '160px' }}>
              <img alt="..." className="d-block img-fluid" src={svgImage5} />
            </div>
            <div className="px-3">
              <h4 className="font-size-xl font-weight-bold mb-2">
                Complete your profile verification
              </h4>
              <p className="opacity-6 font-size-md mb-0">
                Each member of our platform needs to go through the identity
                verification process in order to prevent suspect activities.
              </p>
            </div>
          </div>
          <Button
            size="small"
            className="py-2 px-4 mr-lg-2 mt-3 mt-lg-0 text-nowrap btn-warning">
            <span className="btn-wrapper--label text-uppercase font-weight-bold">
              Upload documents
            </span>
          </Button>
        </div>
      </Card>
    </>
  );
}
