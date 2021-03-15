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
        </div>
        <div className="divider" />
        <Table className="table table-striped table-borderless text-nowrap mb-0">
          <thead className="bg-white font-size-sm text-uppercase">
            <tr>
              <th className="bg-white text-left px-4">Currency</th>
              <th className="bg-white text-center">Date</th>
              <th className="bg-white text-center">Type</th>
              <th className="bg-white text-center">Status</th>
              {/* <th className="bg-white text-center" style={{ width: '15%' }}>
                Trends
              </th> */}
              <th className="bg-white text-right px-4">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4">
                <div className="d-flex align-items-center">
                  {/* <div className="d-30 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-second">
                    <FontAwesomeIcon icon={['fab', 'bitcoin']} />
                  </div> */}
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
              {/* <td>
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
              </td> */}
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
                  {/* <div className="d-30 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-second">
                    <FontAwesomeIcon icon={['fab', 'ethereum']} />
                  </div> */}
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
              {/* <td>
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
              </td> */}
              <td className="text-right px-4">
                <div className="text-danger font-size-lg pr-2">- 23 ETH</div>
                <div className="text-black-50 pr-2">- 3,946 USD</div>
              </td>
            </tr>
            <tr>
              <td className="px-4">
                <div className="d-flex align-items-center">
                  {/* <div className="d-30 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-second">
                    <FontAwesomeIcon icon={['fas', 'dollar-sign']} />
                  </div> */}
                  <div>
                    <div className="font-weight-bold">Buy USD</div>
                    <div className="opacity-7">To Bank Account</div>
                  </div>
                </div>
              </td>
              <td className="text-center">
                <span>24 Feb 2020</span>
              </td>
              <td className="text-center">
                <span className="font-weight-bold">Buy</span>
              </td>
              <td className="text-center">
                <div className="px-4 py-1 h-auto text-danger border-1 border-danger badge badge-neutral-danger">
                  Rejected
                </div>
              </td>
              {/* <td>
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
              </td> */}
              <td className="text-right px-4">
                <div className="text-danger font-size-lg pr-2">
                  - 23,549 USD
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="divider" />
      </Card>
    </>
  );
}
