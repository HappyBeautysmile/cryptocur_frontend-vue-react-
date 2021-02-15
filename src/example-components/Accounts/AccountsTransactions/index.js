import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  Grid,
  InputLabel,
  InputAdornment,
  Card,
  Menu,
  MenuItem,
  Button,
  List,
  ListItem,
  TextField,
  FormControl,
  Select
} from '@material-ui/core';

import Pagination from '@material-ui/lab/Pagination';

import Trend from 'react-trend';

import FilterListTwoToneIcon from '@material-ui/icons/FilterListTwoTone';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import SaveTwoToneIcon from '@material-ui/icons/SaveTwoTone';

import ArrowDownwardTwoToneIcon from '@material-ui/icons/ArrowDownwardTwoTone';
import ArrowUpwardTwoToneIcon from '@material-ui/icons/ArrowUpwardTwoTone';
import RadioButtonUncheckedTwoToneIcon from '@material-ui/icons/RadioButtonUncheckedTwoTone';

import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';

export default function LivePreviewExample() {
  const [anchorEl, setAnchorEl] = useState(null);

  const [anchorElFilter, setAnchorElFilter] = useState(null);

  const handleClickFilter = (event) => {
    setAnchorElFilter(event.currentTarget);
  };

  const handleCloseFilter = () => {
    setAnchorElFilter(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [status, setStatus] = useState('');

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  const [type, setType] = useState('');

  const handleType = (event) => {
    setType(event.target.value);
  };

  const [searchOpen, setSearchOpen] = useState(false);

  const openSearch = () => setSearchOpen(true);
  const closeSearch = () => setSearchOpen(false);

  return (
    <>
      <Card>
        <div className="card-header d-flex align-items-center justify-content-between card-header-alt p-4">
          <div>
            <h6 className="font-weight-bold font-size-lg mb-0 text-black">
              Recent Transactions
            </h6>
          </div>
          <div className="d-flex align-items-center">
            <div>
              <Button
                onClick={handleClickFilter}
                variant="text"
                className="btn-outline-primary d-flex align-items-center justify-content-center d-40 mr-2 p-0 rounded-pill">
                <FilterListTwoToneIcon className="w-50" />
              </Button>
              <Menu
                anchorEl={anchorElFilter}
                keepMounted
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorElFilter)}
                classes={{ list: 'p-0' }}
                onClose={handleCloseFilter}>
                <div className="dropdown-menu-xxl overflow-hidden p-0">
                  <div className="p-3">
                    <Grid container spacing={6}>
                      <Grid item md={6}>
                        <FormControl
                          variant="outlined"
                          size="small"
                          className="w-100">
                          <InputLabel id="type-select-label">Type</InputLabel>
                          <Select
                            labelId="type-select-label"
                            id="type-select-label-id"
                            fullWidth
                            label="Type"
                            value={type}
                            onChange={handleType}>
                            <MenuItem value={0}>All types</MenuItem>
                            <MenuItem value={1}>Deposit</MenuItem>
                            <MenuItem value={2}>Buy Crypto</MenuItem>
                            <MenuItem value={3}>Sell Crypto</MenuItem>
                            <MenuItem value={4}>Withdraw</MenuItem>
                            <MenuItem value={5}>Transfer Funds</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item md={6}>
                        <FormControl
                          variant="outlined"
                          size="small"
                          className="w-100">
                          <InputLabel id="status-select-label">
                            Status
                          </InputLabel>
                          <Select
                            labelId="status-select-label"
                            id="status-select-label-id"
                            fullWidth
                            label="Status"
                            value={status}
                            onChange={handleStatus}>
                            <MenuItem value={0}>All statuses</MenuItem>
                            <MenuItem value={1}>Pending</MenuItem>
                            <MenuItem value={2}>Completed</MenuItem>
                            <MenuItem value={3}>Rejected</MenuItem>
                            <MenuItem value={4}>Processing</MenuItem>
                            <MenuItem value={5}>Cancelled</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </div>
                  <div className="divider" />
                  <div className="p-3 text-center bg-secondary">
                    <Button className="btn-primary" size="small">
                      Filter results
                    </Button>
                  </div>
                  <div className="divider" />
                  <div className="p-3">
                    <Grid container spacing={6}>
                      <Grid item md={6}>
                        <List
                          component="div"
                          className="nav-neutral-danger flex-column p-0">
                          <ListItem
                            button
                            className="d-flex rounded-sm justify-content-center"
                            href="#/"
                            onClick={(e) => e.preventDefault()}>
                            <DeleteTwoToneIcon className="mr-2" />
                            <span>Cancel</span>
                          </ListItem>
                        </List>
                      </Grid>
                      <Grid item md={6}>
                        <List
                          component="div"
                          className="nav-neutral-success flex-column p-0">
                          <ListItem
                            button
                            className="d-flex rounded-sm justify-content-center"
                            href="#/"
                            onClick={(e) => e.preventDefault()}>
                            <SaveTwoToneIcon className="mr-2" />
                            <span>Save filter</span>
                          </ListItem>
                        </List>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Menu>
            </div>
            <div>
              <Button
                onClick={handleClick}
                variant="text"
                className="btn-outline-primary d-flex align-items-center justify-content-center d-40 p-0 rounded-pill">
                <SettingsTwoToneIcon className="w-50" />
              </Button>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: 'bottom',
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
                  <div className="font-weight-bold px-4 pt-3">Results</div>
                  <List
                    component="div"
                    className="nav-neutral-first nav-pills-rounded flex-column p-2">
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      <div className="mr-2">
                        <RadioButtonUncheckedTwoToneIcon />
                      </div>
                      <span className="font-size-md">
                        <b>10</b> results per page
                      </span>
                    </ListItem>
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      <div className="mr-2">
                        <RadioButtonUncheckedTwoToneIcon />
                      </div>
                      <span className="font-size-md">
                        <b>20</b> results per page
                      </span>
                    </ListItem>
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      <div className="mr-2">
                        <RadioButtonUncheckedTwoToneIcon />
                      </div>
                      <span className="font-size-md">
                        <b>30</b> results per page
                      </span>
                    </ListItem>
                  </List>
                  <div className="divider" />
                  <div className="font-weight-bold px-4 pt-4">Order</div>
                  <List
                    component="div"
                    className="nav-neutral-first nav-pills-rounded flex-column p-2">
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      <div className="mr-2">
                        <ArrowUpwardTwoToneIcon />
                      </div>
                      <span className="font-size-md">Ascending</span>
                    </ListItem>
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      <div className="mr-2">
                        <ArrowDownwardTwoToneIcon />
                      </div>
                      <span className="font-size-md">Descending</span>
                    </ListItem>
                  </List>
                </div>
              </Menu>
            </div>
          </div>
        </div>
        <div className="divider" />
        <div className="px-4 py-3">
          <div
            className={clsx(
              'search-wrapper search-wrapper--alternate search-wrapper--grow',
              { 'is-active': searchOpen }
            )}>
            <TextField
              variant="outlined"
              size="small"
              id="input-with-icon-textfield22-2"
              onFocus={openSearch}
              onBlur={closeSearch}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchTwoToneIcon />
                  </InputAdornment>
                )
              }}
            />
          </div>
        </div>
        <div className="divider" />
        <Table className="table table-striped table-borderless text-nowrap mb-0">
          <thead className="bg-white font-size-sm text-uppercase">
            <tr>
              <th className="bg-white text-left px-4">Currency</th>
              <th className="bg-white text-center">Date</th>
              <th className="bg-white text-center">Type</th>
              <th className="bg-white text-center">Status</th>
              <th className="bg-white text-center" style={{ width: '15%' }}>
                Trends
              </th>
              <th className="bg-white text-right px-4">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4">
                <div className="d-flex align-items-center">
                  <div className="d-30 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-second">
                    <FontAwesomeIcon icon={['fab', 'bitcoin']} />
                  </div>
                  <div>
                    <div className="font-weight-bold">Sell BTC</div>
                    <div className="opacity-7">Bitcoin</div>
                  </div>
                </div>
              </td>
              <td className="text-center">
                <span>22 Feb 2020</span>
              </td>
              <td className="text-center">
                <span className="font-weight-bold">Sell</span>
              </td>
              <td className="text-center">
                <div className="px-4 py-1 h-auto text-success border-1 border-success badge badge-neutral-success">
                  Completed
                </div>
              </td>
              <td>
                <Trend
                  data={[0, 10, 5, 22, 3.6, 11]}
                  autoDraw
                  autoDrawDuration={3000}
                  autoDrawEasing="ease-in"
                  radius={15}
                  smooth
                  stroke="var(--success)"
                  strokeLinecap="round"
                  strokeWidth={5}
                />
              </td>
              <td className="text-right px-4">
                <div className="text-success font-size-lg pr-2">
                  + 3.4854 BTC
                </div>
                <div className="text-black-50 pr-2">- 26,349 USD</div>
              </td>
            </tr>
            <tr>
              <td className="px-4">
                <div className="d-flex align-items-center">
                  <div className="d-30 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-second">
                    <FontAwesomeIcon icon={['fab', 'ethereum']} />
                  </div>
                  <div>
                    <div className="font-weight-bold">Buy ETH</div>
                    <div className="opacity-7">Ethereum</div>
                  </div>
                </div>
              </td>
              <td className="text-center">
                <span>23 Feb 2020</span>
              </td>
              <td className="text-center">
                <span className="font-weight-bold">Buy</span>
              </td>
              <td className="text-center">
                <div className="px-4 py-1 h-auto text-warning border-1 border-warning badge badge-neutral-warning">
                  Pending
                </div>
              </td>
              <td>
                <Trend
                  data={[3, 7, 5, 12, 4.9, 9]}
                  autoDraw
                  autoDrawDuration={3000}
                  autoDrawEasing="ease-in"
                  radius={15}
                  smooth
                  stroke="var(--danger)"
                  strokeLinecap="round"
                  strokeWidth={5}
                />
              </td>
              <td className="text-right px-4">
                <div className="text-danger font-size-lg pr-2">- 23 ETH</div>
                <div className="text-black-50 pr-2">- 3,946 USD</div>
              </td>
            </tr>
            <tr>
              <td className="px-4">
                <div className="d-flex align-items-center">
                  <div className="d-30 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-second">
                    <FontAwesomeIcon icon={['fab', 'ethereum']} />
                  </div>
                  <div>
                    <div className="font-weight-bold">Sell ETH</div>
                    <div className="opacity-7">Ethereum</div>
                  </div>
                </div>
              </td>
              <td className="text-center">
                <span>24 Feb 2020</span>
              </td>
              <td className="text-center">
                <span className="font-weight-bold">Sell</span>
              </td>
              <td className="text-center">
                <div className="px-4 py-1 h-auto text-warning border-1 border-warning badge badge-neutral-warning">
                  Pending
                </div>
              </td>
              <td>
                <Trend
                  data={[6, 4, 9, 4, 7.5, 11]}
                  autoDraw
                  autoDrawDuration={3000}
                  autoDrawEasing="ease-in"
                  radius={15}
                  smooth
                  stroke="var(--success)"
                  strokeLinecap="round"
                  strokeWidth={5}
                />
              </td>
              <td className="text-right px-4">
                <div className="text-success font-size-lg pr-2">
                  + 0.4870 BTC
                </div>
                <div className="text-black-50 pr-2">+ 1,497 USD</div>
              </td>
            </tr>
            <tr>
              <td className="px-4">
                <div className="d-flex align-items-center">
                  <div className="d-30 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-second">
                    <FontAwesomeIcon icon={['fas', 'dollar-sign']} />
                  </div>
                  <div>
                    <div className="font-weight-bold">Withdraw USD</div>
                    <div className="opacity-7">To Bank Account</div>
                  </div>
                </div>
              </td>
              <td className="text-center">
                <span>24 Feb 2020</span>
              </td>
              <td className="text-center">
                <span className="font-weight-bold">Withdraw</span>
              </td>
              <td className="text-center">
                <div className="px-4 py-1 h-auto text-danger border-1 border-danger badge badge-neutral-danger">
                  Rejected
                </div>
              </td>
              <td>
                <Trend
                  data={[2, 8, 5, 3, 7, 9]}
                  autoDraw
                  autoDrawDuration={3000}
                  autoDrawEasing="ease-in"
                  radius={15}
                  smooth
                  stroke="var(--warning)"
                  strokeLinecap="round"
                  strokeWidth={5}
                />
              </td>
              <td className="text-right px-4">
                <div className="text-danger font-size-lg pr-2">
                  - 23,549 USD
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="divider" />
        <div className="card-footer p-4 d-flex justify-content-center">
          <Pagination className="pagination-primary" count={10} />
        </div>
      </Card>
    </>
  );
}
