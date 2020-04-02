import React from 'react';
import {
  EuiPage,
  EuiPageBody
} from '@elastic/eui';

// import '@elastic/eui/dist/eui_theme_amsterdam_dark.css';
import '@elastic/eui/dist/eui_theme_amsterdam_light.css';

import {
  Home,
} from './components';

export default () => (
  <EuiPage>
    <EuiPageBody>
      <Home />
    </EuiPageBody>
  </EuiPage>
);
