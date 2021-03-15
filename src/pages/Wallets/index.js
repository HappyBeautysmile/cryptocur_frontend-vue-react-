
import React, { useState ,useEffect} from 'react';

import { PageTitle } from '../../layout-components';

import WalletsList from '../../components/Wallets/WalletsList';
import WalletsListDeactivated from '../../components/Wallets/WalletsListDeactivated';
import WalletsTransactions from '../../components/Wallets/WalletsTransactions';
import WalletsPageTitleActions from '../../components/Wallets/WalletsPageTitleActions';
import {UserWalletList} from "../../reduxs/actions/wallets/wallets"
import { useSelector, useDispatch } from 'react-redux'

export default function Wallets() {
  const dispatch = useDispatch();
  const authprops = useSelector(state => state.auth.user);

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
        <WalletsPageTitleActions />
      </PageTitle>

      <WalletsList />
      <WalletsListDeactivated />
      <WalletsTransactions />
    </>
  );
}
