import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  InputAdornment,
  Card,
  Menu,
  Button,
  List,
  ListItem,
  FormControl
} from '@material-ui/core';

import OutlinedInput from '@material-ui/core/OutlinedInput';

export default function LivePreviewExample() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <div className="text-center my-4">
        <h6 className="font-weight-bold display-3 font-size-lg mb-1 text-black">
          Crypto Exchange
        </h6>
        <p className="font-size-lg text-black-50 mb-0">
          Use the form below to exchange favourite crypto currencies
        </p>
      </div>
      <Card className="mb-5">
        <div className="card-header d-flex align-items-center justify-content-between card-header-alt p-0">
          <List
            component="div"
            className="w-100 nav-line justify-content-center d-flex nav-line-alt nav-tabs-primary">
            <ListItem
              button
              disableRipple
              className="px-5 py-4"
              selected={activeTab === '1'}
              onClick={() => {
                toggle('1');
              }}>
              <span className="font-weight-bold text-uppercase">
                Buy Crypto
              </span>
              <div className="divider" />
            </ListItem>
            <ListItem
              button
              disableRipple
              className="px-5 py-4"
              selected={activeTab === '2'}
              onClick={() => {
                toggle('2');
              }}>
              <span className="font-weight-bold text-uppercase">
                Sell Crypto
              </span>
              <div className="divider" />
            </ListItem>
          </List>
        </div>
        <div className="p-4">
          <div
            className={clsx('tab-item-wrapper overflow-visible', {
              active: activeTab === '1'
            })}
            index={1}>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="font-weight-bold font-size-xl text-primary">
                Currency
              </div>
              <div>
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="text-dark opacity-6"
                  title="More info">
                  More info
                </a>
              </div>
            </div>
            <div className="divider mb-4" />
            <div className="d-flex justify-content-center">
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="active mr-3 mb-3 btn-input-select">
                <div className="selected-icon">
                  <FontAwesomeIcon icon={['fas', 'check']} />
                </div>
                <div className="d-30 text-white d-flex align-items-center justify-content-center rounded-pill bg-warning">
                  <FontAwesomeIcon icon={['fab', 'bitcoin']} />
                </div>
                <div className="font-weight-bold mt-2">Bitcoin</div>
                <div className="opacity-6">$7856.44</div>
              </a>
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="mr-3 mb-3 btn-input-select">
                <div className="selected-icon">
                  <FontAwesomeIcon icon={['fas', 'check']} />
                </div>
                <div className="d-30 text-white d-flex align-items-center justify-content-center rounded-pill bg-first">
                  <FontAwesomeIcon icon={['fab', 'ethereum']} />
                </div>
                <div className="font-weight-bold mt-2">Ethereum</div>
                <div className="opacity-6">$273.28</div>
              </a>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2 mt-4">
              <div className="font-weight-bold font-size-xl text-primary">
                Payment Method
              </div>
              <div>
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="text-dark opacity-6"
                  title="Buy limits">
                  Buy limits
                </a>
              </div>
            </div>
            <div className="divider mb-4" />
            <div className="d-flex justify-content-center">
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="mr-3 mb-3 btn-input-select">
                <div className="selected-icon">
                  <FontAwesomeIcon icon={['fas', 'check']} />
                </div>
                <div className="d-30 text-white d-flex align-items-center justify-content-center rounded-pill bg-second">
                  <FontAwesomeIcon icon={['fas', 'dollar-sign']} />
                </div>
                <div className="font-weight-bold mt-2">USD Wallet</div>
                <div className="opacity-6">$1589.29</div>
              </a>
              {/* console.log("") */}
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="active mr-3 mb-3 btn-input-select">
                <div className="selected-icon">
                  <FontAwesomeIcon icon={['fas', 'check']} />
                </div>
                <div className="d-30 text-dark d-flex align-items-center justify-content-center rounded-pill bg-light">
                  <FontAwesomeIcon icon={['fas', 'university']} />
                </div>
                <div className="font-weight-bold mt-2">Bank IBAN</div>
                <div className="opacity-6">***1111</div>
              </a>
              <a
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="mx-3 mb-3 btn-input-select">
                <div className="d-30 d-flex align-items-center justify-content-center rounded-pill bg-secondary text-primary">
                  <FontAwesomeIcon icon={['fas', 'plus']} />
                </div>
                <div className="font-weight-bold text-primary opacity-6 mt-2">
                  Add new
                </div>
              </a>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2 mt-4">
              <div className="font-weight-bold font-size-xl text-primary">
                Amount
              </div>
            </div>
            <div className="divider mb-4" />
            <div className="d-block d-md-flex align-items-center justify-content-center">
              <FormControl variant="outlined" fullWidth>
                <OutlinedInput
                  value="567.34"
                  classes={{
                    input: 'font-size-lg font-weight-bold p-4 h-auto',
                    notchedOutline: 'border-2'
                  }}
                  endAdornment={
                    <InputAdornment position="end">
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
                          vertical: 'center',
                          horizontal: 'center'
                        }}
                        transformOrigin={{
                          vertical: 'center',
                          horizontal: 'center'
                        }}
                        open={Boolean(anchorEl)}
                        classes={{ list: 'p-0' }}
                        onClose={handleClose}>
                        <div className="p-2">
                          <List
                            component="div"
                            className="nav-pills p-0 m-0 nav-neutral-dark flex-column">
                            <ListItem
                              button
                              href="#/"
                              onClick={(e) => e.preventDefault()}
                              selected
                              className="px-3 mx-2">
                              <span>USD</span>
                            </ListItem>
                            <ListItem
                              button
                              href="#/"
                              onClick={(e) => e.preventDefault()}
                              className="px-3 mx-2">
                              <span>Euro</span>
                            </ListItem>
                            <ListItem
                              button
                              href="#/"
                              onClick={(e) => e.preventDefault()}
                              className="px-3 mx-2">
                              <span>Yen</span>
                            </ListItem>
                          </List>
                        </div>
                      </Menu>
                    </InputAdornment>
                  }
                  labelWidth={0}
                />
              </FormControl>
              <div className="my-3 mx-auto my-md-0 d-60 d-flex align-items-center justify-content-center px-4">
                <FontAwesomeIcon
                  icon={['fas', 'exchange-alt']}
                  className="opacity-8 font-size-xl"
                />
              </div>

              <FormControl variant="outlined" fullWidth>
                <OutlinedInput
                  value="0.549"
                  classes={{
                    input: 'font-size-lg font-weight-bold p-4 h-auto',
                    notchedOutline: 'border-2'
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <Button
                        onClick={handleClick}
                        size="small"
                        className="btn-neutral-dark d-flex align-items-center">
                        <span className="btn-wrapper--label">BTC</span>
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
                          vertical: 'center',
                          horizontal: 'center'
                        }}
                        transformOrigin={{
                          vertical: 'center',
                          horizontal: 'center'
                        }}
                        open={Boolean(anchorEl)}
                        classes={{ list: 'p-0' }}
                        onClose={handleClose}>
                        <div className="p-2">
                          <List
                            component="div"
                            className="nav-pills p-0 m-0 nav-neutral-dark flex-column">
                            <ListItem
                              button
                              href="#/"
                              onClick={(e) => e.preventDefault()}
                              selected
                              className="px-3 mx-2">
                              <span>ETH</span>
                            </ListItem>
                            <ListItem
                              button
                              href="#/"
                              onClick={(e) => e.preventDefault()}
                              className="px-3 mx-2">
                              <span>LTC</span>
                            </ListItem>
                            <ListItem
                              button
                              href="#/"
                              onClick={(e) => e.preventDefault()}
                              className="px-3 mx-2">
                              <span>XRP</span>
                            </ListItem>
                          </List>
                        </div>
                      </Menu>
                    </InputAdornment>
                  }
                  labelWidth={0}
                />
              </FormControl>
            </div>

            <Button
              className="btn-primary py-4 mt-5 px-5 font-weight-bold font-size-lg"
              fullWidth>
              Buy Bitcoin - $785.34
            </Button>
          </div>
          <div
            className={clsx('tab-item-wrapper', { active: activeTab === '2' })}
            index={2}>
            <div className="text-center p-3 p-lg-5">
              <div className="avatar-icon-wrapper rounded-circle m-0">
                <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-warning text-warning m-0 d-130">
                  <FontAwesomeIcon
                    icon={['fas', 'exclamation-triangle']}
                    className="d-flex align-self-center display-3"
                  />
                </div>
              </div>
              <h4 className="font-weight-bold text-warning line-height-sm px-4 mt-5">
                You will need to link a bank account in order to start selling
                crypto!
              </h4>
              <p className="mb-0 font-size-lg">
                Follow the profile verification steps to continue.
              </p>
              <div className="pt-5">
                <Button className="btn-primary">
                  <span className="btn-wrapper--label">Link Bank Account</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
