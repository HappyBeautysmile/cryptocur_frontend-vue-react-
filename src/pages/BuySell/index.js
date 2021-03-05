import React from 'react';
import { Card, Button, Tooltip } from '@material-ui/core';
import CoinList from "../../components/BuySell/CoinList"

export default function BuySell() {
  

  return (
    <>
     <Card className="w-100 mb-5" >
        <div className="card-header d-flex align-items-center justify-content-between card-header-alt p-4">
          <div>
            <h6 className="font-weight-bold font-size-lg mb-1 text-black">
              CryptoCoinList
            </h6>
            <p className="text-black-50 mb-0">Status of My crypto assets.</p>
          </div>
          <div className="d-flex align-items-center">
            <Tooltip title="View stats for last week" arrow placement="top">
              <Button className="btn-link mx-1 px-1 py-2 font-weight-bold text-primary">
                <span>1W</span>
              </Button>
            </Tooltip>
            <Tooltip title="View stats for last month" arrow placement="top">
              <Button className="btn-link mx-1 px-1 py-2 font-weight-bold text-dark opacity-5">
                <span>1M</span>
              </Button>
            </Tooltip>
            <Tooltip title="View stats for last year" arrow placement="top">
              <Button className="btn-link ml-1 px-1 py-2 font-weight-bold text-dark opacity-5">
                <span>1Y</span>
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="scroll-area-lm shadow-overflow">
          <div style={{ height: 400}}>
            <CoinList/>
          </div>
        </div>
        
    </Card>
    </>
  );
}
