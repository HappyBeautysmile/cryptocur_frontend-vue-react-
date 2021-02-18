import React from 'react';

import { PageTitle } from '../../layout-components';
import { Container } from '@material-ui/core';

import ProfileUserActions from '../../components/Profile/ProfileUserActions';
import ProfileUserDetails from '../../components/Profile/ProfileUserDetails';
import ProfilePageTitleActions from '../../components/Profile/ProfilePageTitleActions';
export default function Profile() {
  return (
    <>
      <PageTitle
        titleHeading="My Profile"
        titleDescription="Manage all aspects of your profile data using this example page.">
        <ProfilePageTitleActions />
      </PageTitle>
      <Container>
        <ProfileUserActions />
        <ProfileUserDetails />
      </Container>
    </>
  );
}
