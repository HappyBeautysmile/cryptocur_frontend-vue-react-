import React from 'react';

import { PageTitle } from '../../layout-components';

import AccountsList from '../../example-components/Accounts/AccountsList';
import AccountsListDeactivated from '../../example-components/Accounts/AccountsListDeactivated';
import AccountsTransactions from '../../example-components/Accounts/AccountsTransactions';
import AccountsPageTitleActions from '../../example-components/Accounts/AccountsPageTitleActions';
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
