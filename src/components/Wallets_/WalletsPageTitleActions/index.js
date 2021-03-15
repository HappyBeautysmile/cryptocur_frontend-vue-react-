import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Tooltip } from '@material-ui/core';

const WalletsPageTitleActions = () => {
  return (
    <>
      <Tooltip title="Send funds" arrow>
        <Button size="small" className="btn-success p-0 d-60">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['far', 'paper-plane']}
              className="font-size-lg"
            />
          </span>
        </Button>
      </Tooltip>
      <Tooltip title="Withdraw to bank account" arrow>
        <Button size="small" className="btn-danger p-0 mx-3 d-60">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['fas', 'dollar-sign']}
              className="font-size-lg"
            />
          </span>
        </Button>
      </Tooltip>
      <Tooltip title="Deposit funds" arrow>
        <Button size="small" className="btn-warning p-0 d-60">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon icon={['fas', 'plus']} className="font-size-lg" />
          </span>
        </Button>
      </Tooltip>
    </>
  );
};

export default WalletsPageTitleActions;
