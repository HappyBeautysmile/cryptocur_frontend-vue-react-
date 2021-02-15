import React from 'react';

import { Button, Tooltip } from '@material-ui/core';

import NotificationsActiveTwoToneIcon from '@material-ui/icons/NotificationsActiveTwoTone';
import { NavLink } from 'react-router-dom';

const SidebarFooter = () => {
  return (
    <>
      <div className="app-sidebar--footer">
        <ul>
          <li>
            <Tooltip title="Overview Dashboard" arrow placement="top">
              <Button
                component={NavLink}
                to="/Overview"
                variant="text"
                className="btn-transition-none mx-2 d-40 p-0">
                <NotificationsActiveTwoToneIcon />
              </Button>
            </Tooltip>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SidebarFooter;
