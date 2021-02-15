import React from 'react';

import { PageTitle } from '../../layout-components';
import { Grid } from '@material-ui/core';

import OverviewPortfolio from '../../example-components/Overview/OverviewPortfolio';
import OverviewActivity from '../../example-components/Overview/OverviewActivity';
import OverviewNews from '../../example-components/Overview/OverviewNews';
import OverviewVerification from '../../example-components/Overview/OverviewVerification';
import OverviewWatchlist from '../../example-components/Overview/OverviewWatchlist';
import OverviewPriceWatch from '../../example-components/Overview/OverviewPriceWatch';
import OverviewWallets from '../../example-components/Overview/OverviewWallets';
import OverviewPageTitleActions from '../../example-components/Overview/OverviewPageTitleActions';
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
