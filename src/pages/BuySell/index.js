import React from 'react';

import { PageTitle } from '../../layout-components';
import { Container } from '@material-ui/core';

import BuySellExchange from '../../components/BuySell/BuySellExchange';
import BuySellBankAccount from '../../components/BuySell/BuySellBankAccount';
import BuySellPageTitleActions from '../../components/BuySell/BuySellPageTitleActions';
export default function BuySell() {
  return (
    <>
      <PageTitle
        titleHeading="Buy &#x2F; Sell"
        titleDescription="Use these examples to create crypto exchanges pages.">
        <BuySellPageTitleActions />
      </PageTitle>
      <Container>
        <BuySellBankAccount />
        <BuySellExchange />
      </Container>
    </>
  );
}
