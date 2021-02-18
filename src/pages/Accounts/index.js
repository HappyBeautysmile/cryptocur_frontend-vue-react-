import React from 'react';

import { PageTitle } from '../../layout-components';

import AccountsList from '../../components/Accounts/AccountsList';
import AccountsListDeactivated from '../../components/Accounts/AccountsListDeactivated';
import AccountsTransactions from '../../components/Accounts/AccountsTransactions';
import AccountsPageTitleActions from '../../components/Accounts/AccountsPageTitleActions';
export default function Accounts() {
  return (
    <>
      <PageTitle
        titleHeading="Accounts"
        titleDescription="Manage your cryptocurrency accounts with ease.">
        <AccountsPageTitleActions />
      </PageTitle>

      <AccountsList />
      <AccountsListDeactivated />
      <AccountsTransactions />
    </>
  );
}
