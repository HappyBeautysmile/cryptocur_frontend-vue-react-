import React from 'react';

import { PageTitle } from '../../layout-components';

import SettingsProfileForms from '../../example-components/Settings/SettingsProfileForms';
import SettingsPageTitleActions from '../../example-components/Settings/SettingsPageTitleActions';
export default function Settings() {
  return (
    <>
      <PageTitle
        titleHeading="Settings"
        titleDescription="Manage your profile settings from this example page.">
        <SettingsPageTitleActions />
      </PageTitle>
      <SettingsProfileForms />
    </>
  );
}
