import React from 'react';
import {
  EuiButton,
  EuiSpacer,
  EuiText,
} from '@elastic/eui';
import PropTypes from 'prop-types';

export const Process = ({ proceedTowardsGood }) => (
  <>
    <EuiButton onClick={proceedTowardsGood}>
      Send Petetion to Officials
    </EuiButton>

    <EuiSpacer size="s" />

    <EuiText size="s">
      Use college email.
    </EuiText>
  </>
);

Process.propTypes = {
  proceedTowardsGood: PropTypes.func.isRequired
};
