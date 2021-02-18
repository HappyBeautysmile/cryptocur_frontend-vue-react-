import React from 'react';

import { PageTitle } from '../../layout-components';
import { Grid } from '@material-ui/core';

import OverviewPortfolio from '../../components/Overview/OverviewPortfolio';
import OverviewActivity from '../../components/Overview/OverviewActivity';
import OverviewNews from '../../components/Overview/OverviewNews';
import OverviewVerification from '../../components/Overview/OverviewVerification';
import OverviewWatchlist from '../../components/Overview/OverviewWatchlist';
import OverviewPriceWatch from '../../components/Overview/OverviewPriceWatch';
import OverviewWallets from '../../components/Overview/OverviewWallets';
import OverviewPageTitleActions from '../../components/Overview/OverviewPageTitleActions';
export default function Overview() {
  return (
    <>
      <PageTitle
        titleHeading="Welcome back, Satoshi"
        titleDescription="This page shows an overview for your account summary.">
        <OverviewPageTitleActions />
      </PageTitle>

      <Grid container spacing={6}>
        <Grid item xl={5} className="d-flex">
          <OverviewPortfolio />
        </Grid>
        <Grid item xl={7}>
          <OverviewPriceWatch />
          <OverviewWallets />
        </Grid>
        <Grid item xl={6}>
          <OverviewActivity />
        </Grid>
        <Grid item xl={6}>
          <OverviewNews />
        </Grid>
      </Grid>
      <OverviewWatchlist />
      <OverviewVerification />
    </>
  );
}
