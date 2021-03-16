
import React, { useState ,useEffect} from 'react';

import { PageTitle } from '../../layout-components';

import WalletsList from '../../components/Wallets/WalletsList';
import WalletsListDeactivated from '../../components/Wallets/WalletsListDeactivated';
import WalletsTransactions from '../../components/Wallets/WalletsTransactions';
import EditWalletAction from '../../components/Wallets/EditWalletAction';
import {UserWalletList} from "../../reduxs/actions/wallets/wallets"
import { useSelector, useDispatch } from 'react-redux'

export default function Wallets() {
  const dispatch = useDispatch();
  const authprops = useSelector(state => state.auth.user);
  const [newWallet, setNewWallet] = useState({})
  useEffect(() => {
    // AddCurrencylWalletAndRate()
    if(authprops)
      dispatch(UserWalletList({owner:authprops.email}));
  }, [authprops])
  return (
    <>
      <PageTitle
        titleHeading="Wallets"
        titleDescription="Manage your cryptocurrency wallets">
        <EditWalletAction curwallet ={newWallet}  setDetailPartAction = {null}  actionType="ADD" />
      </PageTitle>

      <WalletsList />
      <WalletsListDeactivated />
      <WalletsTransactions />
    </>
  );
}
