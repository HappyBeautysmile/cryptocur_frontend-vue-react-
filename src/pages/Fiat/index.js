import React from 'react';
import { Grid } from '@material-ui/core';
import { Card, Button} from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';

// import { PageTitle } from '../../layout-components';
// import { Container } from '@material-ui/core';

// import BuySellExchange from '../../components/BuySell/BuySellExchange';
// import BuySellBankAccount from '../../components/BuySell/BuySellBankAccount';
import FiatList from '../../components/Fiat/FiatList';
import FiatAdd from "../../components/Fiat/FiatAdd";
export default function Fiat() {
  return (
    <>
          <Card className="card-box mb-spacing-6-x2"   style={{width:"100%",margin:"auto"}}>
            <div className="card-header d-flex align-items-center justify-content-between card-header-alt p-4">
              <div>
                <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                  FiatList
                </h6>
                <p className="text-black-50 mb-0">Here is all FiatList.</p>
              </div>
              <div className="card-header--actions">
                <div className="d-flex align-items-right justify-content-right flex-wrap">
                  <FiatAdd/>
                </div>
              </div>
            </div>
            <div className="scroll-area-lm shadow-overflow">
              <div style={{ height: 700}}>
                <PerfectScrollbar>
                  <FiatList />
                </PerfectScrollbar>
              </div>
            </div>
          </Card>
    </>
  );
}
