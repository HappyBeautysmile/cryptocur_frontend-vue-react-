import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Card,
  Menu,
  Button,
  List,
  ListItem,
  Tooltip
} from '@material-ui/core';

import AttachMoneyTwoToneIcon from '@material-ui/icons/AttachMoneyTwoTone';
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone';

import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import TrendingDownTwoToneIcon from '@material-ui/icons/TrendingDownTwoTone';
import TrendingUpTwoToneIcon from '@material-ui/icons/TrendingUpTwoTone';

export default function LivePreviewExample() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <h3 className="font-size-xl font-weight-bold mb-4">Active accounts</h3>
      <Grid container spacing={6}>
        <Grid item md={6}>
          <Card className="card-box card-box-hover-rise p-4 card-box-border-bottom bg-primary text-white border-primary mb-5">
            <div className="card-tr-actions">
              <div>
                <Button
                  onClick={handleClick}
                  className="btn-link d-30 border-0 p-0 text-left d-flex text-white justify-content-center align-items-center">
                  <FontAwesomeIcon
                    icon={['fas', 'ellipsis-h']}
                    className="font-size-lg"
                  />
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  getContentAnchorEl={null}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={Boolean(anchorEl)}
                  classes={{ list: 'p-0' }}
                  onClose={handleClose}>
                  <div className="dropdown-menu-lg overflow-hidden p-0">
                    <List className="nav-neutral-first nav-pills-rounded flex-column p-3">
                      <ListItem
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}>
                        <div className="mr-2">
                          <SearchTwoToneIcon />
                        </div>
                        <span className="font-size-md">View details</span>
                      </ListItem>
                      <ListItem
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}>
                        <div className="mr-2">
                          <EditTwoToneIcon />
                        </div>
                        <span className="font-size-md">Edit</span>
                      </ListItem>
                      <ListItem
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}>
                        <div className="mr-2">
                          <StarTwoToneIcon />
                        </div>
                        <span className="font-size-md">Make primary</span>
                      </ListItem>
                    </List>
                    <div className="divider" />
                    <List className="nav-neutral-danger nav-pills-rounded flex-column p-3">
                      <ListItem
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}>
                        <div className="mr-2">
                          <DeleteTwoToneIcon />
                        </div>
                        <span>Delete</span>
                      </ListItem>
                    </List>
                  </div>
                </Menu>
              </div>
            </div>
            <div className="d-flex align-items-center mr-4">
              <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-warning">
                <FontAwesomeIcon
                  icon={['fab', 'bitcoin']}
                  className="font-size-xl"
                />
              </div>
              <div className="font-weight-bold font-size-lg">My Bitcoins</div>
            </div>
            <div className="d-flex my-4">
              <div className="d-30 text-success mr-2">
                <TrendingUpTwoToneIcon className="d-30" />
              </div>
              <div className="text-left">
                <div className="font-size-xxl line-height-1">1.354 BTC</div>
                <div className="text-white opacity-5 font-size-lg">$7,384</div>
              </div>
            </div>
            <div>
              <Button
                className="mr-3 shadow-none btn-outline-secondary"
                size="small">
                Send
              </Button>
              <Button
                className="mr-3 shadow-none btn-outline-secondary"
                size="small">
                Receive
              </Button>
              <Tooltip title="Withdraw funds" arrow placement="top">
                <Button className="shadow-none btn-secondary" size="small">
                  <AttachMoneyTwoToneIcon className="max-w-70" />
                </Button>
              </Tooltip>
            </div>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card className="card-box card-box-hover-rise p-4 card-box-border-bottom border-warning mb-5">
            <div className="card-tr-actions">
              <div>
                <Button className="btn-neutral-primary d-30 border-0 p-0 text-left d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                </Button>
              </div>
            </div>
            <div className="d-flex align-items-center mr-4">
              <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-warning">
                <FontAwesomeIcon
                  icon={['fab', 'bitcoin']}
                  className="font-size-xl"
                />
              </div>
              <div className="font-weight-bold font-size-lg">
                Bitcoin Wallet 2
              </div>
            </div>
            <div className="d-flex my-4">
              <div className="d-30 text-success mr-2">
                <TrendingUpTwoToneIcon className="d-30" />
              </div>
              <div className="text-left">
                <div className="font-size-xxl line-height-1">0.2642 BTC</div>
                <div className="text-success opacity-5 font-size-lg">
                  $1,395
                </div>
              </div>
            </div>
            <div>
              <Button className="mr-3 btn-outline-primary" size="small">
                Send
              </Button>
              <Button className="mr-3 btn-outline-primary" size="small">
                Receive
              </Button>
              <Tooltip title="Withdraw funds" arrow placement="top">
                <Button className="btn-primary" size="small">
                  <AttachMoneyTwoToneIcon className="max-w-70" />
                </Button>
              </Tooltip>
            </div>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card className="card-box card-box-hover-rise p-4 card-box-border-bottom border-first mb-5">
            <div className="card-tr-actions">
              <div>
                <Button className="btn-neutral-primary d-30 border-0 p-0 text-left d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                </Button>
              </div>
            </div>
            <div className="d-flex align-items-center mr-4">
              <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-first">
                <FontAwesomeIcon
                  icon={['fab', 'ethereum']}
                  className="font-size-xl"
                />
              </div>
              <div className="font-weight-bold font-size-lg">Ethereum v2</div>
            </div>
            <div className="d-flex my-4">
              <div className="d-30 text-danger mr-2">
                <TrendingDownTwoToneIcon className="d-30" />
              </div>
              <div className="text-left">
                <div className="font-size-xxl line-height-1">0.8598 BTC</div>
                <div className="text-danger opacity-5 font-size-lg">$2,586</div>
              </div>
            </div>
            <div>
              <Button className="mr-3 btn-outline-primary" size="small">
                Send
              </Button>
              <Button className="mr-3 btn-outline-primary" size="small">
                Receive
              </Button>
              <Tooltip title="Withdraw funds" arrow placement="top">
                <Button className="btn-primary" size="small">
                  <AttachMoneyTwoToneIcon className="max-w-70" />
                </Button>
              </Tooltip>
            </div>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card className="card-box card-box-hover-rise p-4 card-box-border-bottom border-warning mb-5">
            <div className="card-tr-actions">
              <div>
                <Button className="btn-neutral-primary d-30 border-0 p-0 text-left d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                </Button>
              </div>
            </div>
            <div className="d-flex align-items-center mr-4">
              <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-warning">
                <FontAwesomeIcon
                  icon={['fab', 'bitcoin']}
                  className="font-size-xl"
                />
              </div>
              <div className="font-weight-bold font-size-lg">
                Satoshi's Stash
              </div>
            </div>
            <div className="d-flex my-4">
              <div className="d-30 text-success mr-2">
                <TrendingUpTwoToneIcon className="d-30" />
              </div>
              <div className="text-left">
                <div className="font-size-xxl line-height-1">65.4589 BTC</div>
                <div className="text-success opacity-5 font-size-lg">
                  $457,921
                </div>
              </div>
            </div>
            <div>
              <Button className="mr-3 btn-outline-primary" size="small">
                Send
              </Button>
              <Button className="mr-3 btn-outline-primary" size="small">
                Receive
              </Button>
              <Tooltip title="Withdraw funds" arrow placement="top">
                <Button className="btn-primary" size="small">
                  <AttachMoneyTwoToneIcon className="max-w-70" />
                </Button>
              </Tooltip>
            </div>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
