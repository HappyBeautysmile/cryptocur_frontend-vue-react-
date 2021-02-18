import React from 'react';

import { PageTitle } from '../../layout-components';

import TransactionsHistory from '../../components/Transactions/TransactionsHistory';
import TransactionsOrders from '../../components/Transactions/TransactionsOrders';
import TransactionsPageTitleActions from '../../components/Transactions/TransactionsPageTitleActions';
export default function Transactions() {
  return (
    <>
      <PageTitle
        titleHeading="Transactions"
        titleDescription="Your account history is available in this page.">
        <TransactionsPageTitleActions />
      </PageTitle>
      <TransactionsOrders />
      <TransactionsHistory />
    </>
  );
}
