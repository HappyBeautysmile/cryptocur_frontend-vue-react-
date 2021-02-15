import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Dialog, Button, Tooltip } from '@material-ui/core';

import avatar7 from '../../../assets/images/avatars/avatar7.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

const OverviewPageTitleActions = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  return (
    <>
      <Button onClick={toggleModal} variant="contained" color="primary">
        <span className="btn-wrapper--icon">
          <FontAwesomeIcon icon={['fas', 'plus']} />
        </span>
        <span className="btn-wrapper--label">View Profile</span>
      </Button>

      <Dialog
        open={modal}
        scroll="body"
        maxWidth="md"
        onClose={toggleModal}
        classes={{ paper: 'border-0 bg-white' }}>
        <div className="p-4 text-center">
          <div className="avatar-icon-wrapper rounded-circle mx-auto">
            <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0 border-3 border-first">
              <div className="rounded-circle border-3 border-white overflow-hidden">
                <img alt="..." className="img-fluid" src={avatar5} />
              </div>
            </div>
          </div>
          <h4 className="font-size-lg font-weight-bold my-2">Marion Devine</h4>
          <div className="text-center my-4">
            <div className="badge-pill badge badge-neutral-first text-first mx-1">
              Web developer
            </div>
            <div className="badge-pill badge badge-neutral-warning text-warning mx-1">
              Javascript
            </div>
            <div className="badge-pill badge badge-neutral-danger text-danger mx-1">
              Angular
            </div>
          </div>

          <p className="text-muted mb-4">
            I should be incapable of drawing a single stroke at the present
            moment; and yet I feel that I never was a greater artist than now.
          </p>

          <div className="divider my-4" />

          <h4 className="font-size-lg font-weight-bold mt-2 mb-4">
            Trading Performance
          </h4>

          <Grid container spacing={6}>
            <Grid item lg={6}>
              <span className="opacity-6 pb-2">Current month</span>
              <div className="d-flex align-items-center justify-content-center">
                <span className="font-weight-bold font-size-lg">
                  <small className="opacity-6 pr-1">$</small>
                  46,362
                </span>
                <div className="badge badge-neutral-danger ml-2 text-danger">
                  -8%
                </div>
              </div>
            </Grid>
            <Grid item lg={6}>
              <span className="opacity-6 pb-2">Last year</span>
              <div className="d-flex align-items-center justify-content-center">
                <span className="font-weight-bold font-size-lg">
                  <small className="opacity-6 pr-1">$</small>
                  34,546
                </span>
                <div className="badge badge-neutral-success text-success ml-2">
                  +13%
                </div>
              </div>
            </Grid>
          </Grid>
          <div className="divider my-4" />
          <h4 className="font-size-lg font-weight-bold mt-2 mb-4">
            Team members
          </h4>
          <div className="avatar-wrapper-overlap d-flex justify-content-center mb-3">
            <Tooltip
              title="Chelsey Delaney"
              classes={{ tooltip: 'tooltip-danger' }}
              arrow
              placement="top">
              <div className="avatar-icon-wrapper" id="DelaneyTooltip1">
                <div className="avatar-icon">
                  <img alt="..." src={avatar1} />
                </div>
              </div>
            </Tooltip>
            <Tooltip
              title="Laibah Santos"
              classes={{ tooltip: 'tooltip-first' }}
              arrow
              placement="top">
              <div className="avatar-icon-wrapper" id="SantosTooltip1">
                <div className="avatar-icon">
                  <img alt="..." src={avatar7} />
                </div>
              </div>
            </Tooltip>
            <Tooltip
              title="Ksawery Weber"
              classes={{ tooltip: 'tooltip-second' }}
              arrow
              placement="top">
              <div className="avatar-icon-wrapper" id="WeberTooltip1">
                <div className="avatar-icon">
                  <img alt="..." src={avatar1} />
                </div>
              </div>
            </Tooltip>
            <Tooltip
              title="Killian Magana"
              classes={{ tooltip: 'tooltip-info' }}
              arrow
              placement="top">
              <div className="avatar-icon-wrapper" id="MaganaTooltip1">
                <div className="avatar-icon">
                  <img alt="..." src={avatar2} />
                </div>
              </div>
            </Tooltip>
            <Tooltip
              title="Kean Banks"
              classes={{ tooltip: 'tooltip-success' }}
              arrow
              placement="top">
              <div className="avatar-icon-wrapper" id="BanksTooltip1">
                <div className="avatar-icon">
                  <img alt="..." src={avatar6} />
                </div>
              </div>
            </Tooltip>
          </div>
          <div className="divider my-4" />
          <Button className="btn-outline-first mt-2">
            View complete profile
          </Button>
        </div>
      </Dialog>
    </>
  );
};

export default OverviewPageTitleActions;
