import React, { useState } from 'react';
import {
  EuiPageContent,
  EuiSpacer,
  EuiButton,
  EuiText,
  EuiTabbedContent
} from '@elastic/eui';
import PropTypes from 'prop-types';

import {
  Heading,
  Tagline,
  Petetion,
  Process,
  ZoneSelection,
  ManualWay
} from './components';

import { mailLinkGenerator } from './helpers';

import emailCC from '../../../emaiCC';

const hrStyle = {
  height: '2px',
  background: 'rgba(0, 0, 0, 0.2)',
  border: 'none',
  margin: '20px 0'
};

const MarginWrapper = ({ children }) => (
  <div style={{ marginTop: '20px' }}>
    {children}
  </div>
);

export const Home = () => {
  const [petetion, changePetetion] = useState(false);
  const [zone, changeZone] = useState((emailCC.findIndex((email) => email.scope !== 'all')).toString());

  const togglePetetion = () => changePetetion(!petetion);

  const proceedTowardsGood = () => {
    if (!zone) {
      alert('Select zone.');
      return;
    }
    window.open(mailLinkGenerator(zone));
  };

  const processTabs = [
    {
      id: 'automatic_send',
      name: 'Simple way',
      content: (
        <MarginWrapper>
          <Process proceedTowardsGood={proceedTowardsGood} />
        </MarginWrapper>
      )
    },
    {
      id: 'manual_send',
      name: 'Manual way',
      content: (
        <MarginWrapper>
          <ManualWay zone={zone} />
        </MarginWrapper>
      )
    }
  ];

  return (
    <EuiPageContent horizontalPosition="center" style={{ boxShadow: '2px 4px 16px -1px rgba(0,0,0,0.49)' }}>
      <Heading />

      <EuiSpacer size="m" />

      <Tagline />

      <EuiSpacer size="m" />

      <EuiButton
        size="m"
        onClick={togglePetetion}
      >
        Read Petition First
      </EuiButton>

      {petetion && <Petetion close={togglePetetion} />}

      <EuiSpacer size="m" />

      <EuiText>
        <b>
          Proceed further only if you agree petition.
        </b>
      </EuiText>

      <hr style={hrStyle} />

      <ZoneSelection zone={zone} changeZone={changeZone} />

      <EuiSpacer size="m" />

      <EuiTabbedContent
        tabs={processTabs}
        initialSelectedTab={processTabs[0]}
      />
    </EuiPageContent>
  );
};

MarginWrapper.propTypes = {
  children: PropTypes.node.isRequired
};
