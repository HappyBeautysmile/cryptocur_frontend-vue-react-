import React from 'react';
import { Grid } from '@material-ui/core';
import { Card, Button} from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';

// import { PageTitle } from '../../layout-components';
// import { Container } from '@material-ui/core';

// import BuySellExchange from '../../components/BuySell/BuySellExchange';
// import BuySellBankAccount from '../../components/BuySell/BuySellBankAccount';
import WDTransactionList from '../../../components/Transactions/WDTransactionList';
export default function WDTransactions() {
  return (
    <>
          <Card className="card-box mb-spacing-6-x2"  >
            <div className="card-header d-flex align-items-center justify-content-between card-header-alt p-4">
              <div>
                <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                  <span className="text-first">Withdraw</span>/<span className="text-success">Deposite</span> Transactions
                </h6>
                <p className="text-black-50 mb-0">Here is all W/D Transactions.</p>
              </div>
            </div>
            <div className="scroll-area-lm shadow-overflow">
              <div style={{ height: 700}}>
                <PerfectScrollbar>
                  <WDTransactionList/>
                </PerfectScrollbar>
              </div>
            </div>
          </Card>
    </>
  );
}
