import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Button, Tooltip } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="mb-5">
        <div className="card-header d-flex align-items-center justify-content-between card-header-alt p-4">
          <div>
            <h6 className="font-weight-bold font-size-lg mb-1 text-black">
              My Wallets
            </h6>
            <p className="text-black-50 mb-0">Latest created wallets list.</p>
          </div>
          <div className="d-flex align-items-center">
            <small>
              <i>Updated on 17 May 2020</i>
            </small>
          </div>
        </div>
        <div className="divider" />
        <div className="divider" />
        <div className="p-4 d-flex justify-content-center flex-wrap">
          <div className="p-3">
            <Button
              fullWidth
              className="btn-outline-dark text-left rounded shadow-none py-3 px-3 px-xl-5">
              <div className="d-flex">
                <div className="d-30 text-white d-flex align-items-center btn-pill justify-content-center rounded-pill mr-3 bg-first">
                  <FontAwesomeIcon icon={['fab', 'ethereum']} />
                </div>
                <div>
                  <div className="font-size-lg font-weight-bold">
                    31.1278 ETH
                  </div>
                  <div className="opacity-8">
                    <span className="opacity-8">4,875</span> USD
                  </div>
                </div>
              </div>
            </Button>
          </div>
          <div className="p-3 d-flex align-items-center justify-content-center">
            <Tooltip title="Create new wallet" arrow>
              <Button className="btn-neutral-primary d-60 d-flex align-items-center justify-content-center p-0 rounded-pill mx-4">
                <FontAwesomeIcon
                  icon={['fas', 'plus']}
                  className="font-size-lg"
                />
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="divider" />
        <div className="divider" />
        <div className="card-footer bg-secondary p-3 text-center">
          <Button size="small" className="py-2 px-4 btn-primary">
            <span className="btn-wrapper--label text-uppercase font-weight-bold">
              View all wallets
            </span>
          </Button>
        </div>
      </Card>
    </>
  );
}
