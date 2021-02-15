import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Dialog, Card, Button } from '@material-ui/core';

import TrendingUpTwoToneIcon from '@material-ui/icons/TrendingUpTwoTone';
import TrendingDownTwoToneIcon from '@material-ui/icons/TrendingDownTwoTone';

export default function LivePreviewExample() {
  const [modalConfirmDelete, setConfirmDelete] = useState(false);
  const toggleConfirmDelete = () => setConfirmDelete(!modalConfirmDelete);

  return (
    <>
      <Card className="mb-5">
        <div className="card-header d-flex align-items-center justify-content-between card-header-alt p-4">
          <div>
            <h6 className="font-weight-bold font-size-lg mb-1">
              Deactivated accounts
            </h6>
            <p className="text-danger opacity-6 mb-0">
              These accounts are old and cannot be used anymore.
            </p>
          </div>
        </div>
        <div className="divider" />
        <div className="divider" />
        <div className="p-2">
          <Grid container spacing={0}>
            <Grid item md={6}>
              <Card className="card-box shadow-none bg-secondary m-3">
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="p-4 card-img-wrapper rounded">
                  <div className="img-wrapper-overlay">
                    <div className="overlay-btn-wrapper">
                      <Button
                        className="btn-danger"
                        onClick={toggleConfirmDelete}>
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['far', 'trash-alt']} />
                        </span>
                        <span className="btn-wrapper--label text-uppercase">
                          <small className="font-weight-bold">Delete</small>
                        </span>
                      </Button>
                    </div>
                  </div>
                  <div className="card-badges card-badges-bottom">
                    <div className="badge-pill badge badge-danger">OLD</div>
                  </div>
                  <div className="d-flex align-items-center mr-4 text-black">
                    <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-dark">
                      <FontAwesomeIcon
                        icon={['fab', 'bitcoin']}
                        className="font-size-xl"
                      />
                    </div>
                    <div className="font-weight-bold font-size-lg">
                      Horia's Wallet
                    </div>
                  </div>
                  <div className="d-flex mt-4 text-black">
                    <div className="d-30 text-success mr-2">
                      <TrendingUpTwoToneIcon className="d-30" />
                    </div>
                    <div className="text-left">
                      <div className="font-size-xxl line-height-1">
                        0.8598 BTC
                      </div>
                      <div className="opacity-5 font-size-lg">$2,586</div>
                    </div>
                  </div>
                </a>
              </Card>
            </Grid>
            <Grid item md={6}>
              <Card className="card-box shadow-none bg-secondary m-3">
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="p-4 card-img-wrapper rounded">
                  <div className="img-wrapper-overlay">
                    <div className="overlay-btn-wrapper">
                      <Button
                        className="btn-danger"
                        onClick={toggleConfirmDelete}>
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['far', 'trash-alt']} />
                        </span>
                        <span className="btn-wrapper--label text-uppercase">
                          <small className="font-weight-bold">Delete</small>
                        </span>
                      </Button>
                    </div>
                  </div>
                  <div className="card-badges card-badges-bottom">
                    <div className="badge-pill badge badge-danger">OLD</div>
                  </div>
                  <div className="d-flex align-items-center mr-4 text-black">
                    <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-dark">
                      <FontAwesomeIcon
                        icon={['fab', 'ethereum']}
                        className="font-size-xl"
                      />
                    </div>
                    <div className="font-weight-bold font-size-lg">
                      My ETH Stash
                    </div>
                  </div>
                  <div className="d-flex mt-4 text-black">
                    <div className="d-30 text-danger mr-2">
                      <TrendingDownTwoToneIcon className="d-30" />
                    </div>
                    <div className="text-left">
                      <div className="font-size-xxl line-height-1">
                        12.3563 ETH
                      </div>
                      <div className="opacity-5 font-size-lg">$4,273</div>
                    </div>
                  </div>
                </a>
              </Card>
            </Grid>
            <Grid item md={6}>
              <Card className="card-box shadow-none bg-secondary m-3">
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="p-4 card-img-wrapper rounded">
                  <div className="img-wrapper-overlay">
                    <div className="overlay-btn-wrapper">
                      <Button
                        className="btn-danger"
                        onClick={toggleConfirmDelete}>
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['far', 'trash-alt']} />
                        </span>
                        <span className="btn-wrapper--label text-uppercase">
                          <small className="font-weight-bold">Delete</small>
                        </span>
                      </Button>
                    </div>
                  </div>
                  <div className="card-badges card-badges-bottom">
                    <div className="badge-pill badge badge-danger">OLD</div>
                  </div>
                  <div className="d-flex align-items-center mr-4 text-black">
                    <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-dark">
                      <FontAwesomeIcon
                        icon={['fab', 'ethereum']}
                        className="font-size-xl"
                      />
                    </div>
                    <div className="font-weight-bold font-size-lg">
                      ETH Wallet 5
                    </div>
                  </div>
                  <div className="d-flex mt-4 text-black">
                    <div className="d-30 text-danger mr-2">
                      <TrendingDownTwoToneIcon className="d-30" />
                    </div>
                    <div className="text-left">
                      <div className="font-size-xxl line-height-1">
                        0.426 ETH
                      </div>
                      <div className="opacity-5 font-size-lg">$347</div>
                    </div>
                  </div>
                </a>
              </Card>
            </Grid>
            <Grid item md={6}>
              <Card className="card-box shadow-none bg-secondary m-3">
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="p-4 card-img-wrapper rounded">
                  <div className="img-wrapper-overlay">
                    <div className="overlay-btn-wrapper">
                      <Button
                        className="btn-danger"
                        onClick={toggleConfirmDelete}>
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['far', 'trash-alt']} />
                        </span>
                        <span className="btn-wrapper--label text-uppercase">
                          <small className="font-weight-bold">Delete</small>
                        </span>
                      </Button>
                    </div>
                  </div>
                  <div className="card-badges card-badges-bottom">
                    <div className="badge-pill badge badge-danger">OLD</div>
                  </div>
                  <div className="d-flex align-items-center mr-4 text-black">
                    <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-dark">
                      <FontAwesomeIcon
                        icon={['fab', 'bitcoin']}
                        className="font-size-xl"
                      />
                    </div>
                    <div className="font-weight-bold font-size-lg">
                      First Wallet
                    </div>
                  </div>
                  <div className="d-flex mt-4 text-black">
                    <div className="d-30 text-success mr-2">
                      <TrendingUpTwoToneIcon className="d-30" />
                    </div>
                    <div className="text-left">
                      <div className="font-size-xxl line-height-1">
                        65.4589 BTC
                      </div>
                      <div className="opacity-5 font-size-lg">$457,921</div>
                    </div>
                  </div>
                </a>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Card>
      <Dialog open={modalConfirmDelete} onClose={toggleConfirmDelete}>
        <div className="text-center p-5">
          <div className="avatar-icon-wrapper rounded-circle m-0">
            <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-danger text-danger m-0 d-130">
              <FontAwesomeIcon
                icon={['fas', 'times']}
                className="d-flex align-self-center display-3"
              />
            </div>
          </div>
          <h4 className="font-weight-bold line-height-sm mt-4">
            Are you sure you want to permanently delete this account?
          </h4>
          <p className="mb-0 font-size-lg text-muted">
            You cannot undo this operation.
          </p>
          <div className="pt-4">
            <Button
              onClick={toggleConfirmDelete}
              className="btn-neutral-secondary btn-pill mx-1">
              <span className="btn-wrapper--label">Cancel</span>
            </Button>
            <Button
              onClick={toggleConfirmDelete}
              className="btn-danger btn-pill mx-1">
              <span className="btn-wrapper--label">Delete</span>
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
