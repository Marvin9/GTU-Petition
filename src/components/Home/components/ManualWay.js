import React from 'react';
import {
  EuiFieldText,
  EuiCopy,
  EuiButton,
  EuiSpacer,
  EuiText,
  EuiToolTip
} from '@elastic/eui';
import PropTypes from 'prop-types';

import {
  extractMainCC,
  subjectUtil,
  bodyUtil,
} from '../helpers';

const Common = ({ title, mainContent }) => (
  <EuiToolTip position="top" content={mainContent}>
    <EuiFieldText
      placeholder={mainContent}
      value={mainContent}
      prepend={title}
      append={(
        <EuiCopy textToCopy={mainContent}>
          {(copy) => (
            <EuiButton onClick={copy} size="s">
              Copy
              {' '}
              {title}
            </EuiButton>
          )}
        </EuiCopy>
      )}
      readOnly
      compressed
    />
  </EuiToolTip>
);

export const ManualWay = ({ zone }) => {
  const CCs = extractMainCC(zone).join(', ');
  const subject = subjectUtil().replace(/%20/g, ' ');
  const body = bodyUtil()
    .replace(/%20/g, ' ')
    .replace(/%0D/g, '\n')
    .replace(/%0A/g, '')
    .replace(/%2F/g, '/')
    .replace(/%2C/g, ',');

  return (
    <>
      <Common
        title="To"
        mainContent={CCs}
      />
      <EuiSpacer />
      <Common
        title="Subject"
        mainContent={subject}
      />
      <EuiSpacer />
      <Common
        title="Body"
        mainContent={body}
      />
      <EuiSpacer />
      <EuiText>
        <b>
          Send above formatted email using your college email.
        </b>
      </EuiText>
    </>
  );
};

ManualWay.propTypes = {
  zone: PropTypes.string.isRequired
};

Common.propTypes = {
  title: PropTypes.string.isRequired,
  mainContent: PropTypes.string.isRequired
};
