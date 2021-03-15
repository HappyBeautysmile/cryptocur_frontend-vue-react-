import React from 'react';

import { PageTitle } from '../../layout-components';
import { Container } from '@material-ui/core';

import WalletsChart from '../../components/Wallets_/WalletsChart';
import WalletsPageTitleActions from '../../components/Wallets_/WalletsPageTitleActions';
export default function Wallets() {
  return (
    <>
      <PageTitle
        titleHeading="Wallets"
        titleDescription="This is your wallets overview last updated today.">
        <WalletsPageTitleActions />
      </PageTitle>
      <Container>
        <WalletsChart />
      </Container>
    </>
  );
}
