
import React, { useState ,useEffect} from 'react';

import { PageTitle } from '../../layout-components';

import WalletsList from '../../components/Wallets/WalletsList';
import WalletsListDeactivated from '../../components/Wallets/WalletsListDeactivated';
import BuySellTransactions from '../../components/Transactions/BuySellTransactions';
import EditWalletAction from '../../components/Wallets/EditWalletAction';
import {UserWalletList} from "../../reduxs/actions/wallets/wallets"
import { useSelector, useDispatch } from 'react-redux'
import {BuySellTransaction} from "../../reduxs/actions/transactions/buyselltransactions"
import PerfectScrollbar from 'react-perfect-scrollbar';
 

export default function Wallets() {
  const dispatch = useDispatch();
  const authprops = useSelector(state => state.auth.user);
  const [newWallet, setNewWallet] = useState({})
  useEffect(() => {
    // AddCurrencylWalletAndRate()
    if(authprops)
      dispatch(UserWalletList({owner:authprops.email}));
  }, [authprops])
  useEffect(() => {
    if(authprops)
      dispatch(BuySellTransaction({owner:authprops.email}));
  }, [authprops])
  return (
    <>
      <PageTitle
        titleHeading="Wallets"
        titleDescription="Manage your cryptocurrency wallets">
        <EditWalletAction curwallet ={newWallet}  setDetailPartAction = {null}  actionType="ADD" />
      </PageTitle>

      <WalletsList parentPosition="Wallets"/>
      <WalletsListDeactivated />
      <div className="card-header d-flex align-items-center justify-content-between card-header-alt p-4">
          <div>
            <h6 className="font-weight-bold font-size-lg mb-0 text-black">
              Recent Transactions
            </h6>
          </div>
        </div>
        <div className="divider" />
      <div className="scroll-area-lm shadow-overflow">
        <div style={{ height: 400}}>
          <PerfectScrollbar>
            <BuySellTransactions  transactionListType="usedWalletTransactionList"/>
          </PerfectScrollbar>
        </div>
      </div>
    </>
  );
}
