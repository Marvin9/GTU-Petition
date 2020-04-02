import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  EuiOverlayMask,
  EuiLoadingSpinner,
  EuiModal,
  EuiModalHeader,
  EuiModalBody,
  EuiText,
  EuiTitle,
  EuiCopy,
  EuiModalFooter,
  EuiButton
} from '@elastic/eui';
import PropTypes from 'prop-types';

import petetionUrl from '../../../../petetionURL';

export const Petetion = ({ close }) => {
  const [petetion, updatePetetion] = useState('');
  const [loading, changeLoading] = useState(true);

  useEffect(() => {
    axios.get(petetionUrl)
      .then((data) => {
        updatePetetion(data.data.split('\n'));
      })
      .catch(() => {
        updatePetetion(`Sorry couldn't get that petetion.\nRead manualy here ${petetionUrl}`);
      })
      .finally(() => {
        changeLoading(false);
      });
  }, []);

  const petetionModal = () => (
    <EuiModal onClose={close}>
      <EuiModalHeader>
        <EuiTitle size="m">
          <h1>
            Petetion
          </h1>
        </EuiTitle>
      </EuiModalHeader>
      <EuiModalBody>
        <EuiText>
          <p>
            {petetion.map((line, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <span key={`line.slice(0, 9)_${index}`}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </EuiText>
      </EuiModalBody>
      <EuiModalFooter>
        <EuiCopy textToCopy={petetion.join('\n')}>
          {(copy) => (
            <EuiButton onClick={copy}>
              Copy Petetion
            </EuiButton>
          )}
        </EuiCopy>
        <EuiButton onClick={close}>
          Close
        </EuiButton>
      </EuiModalFooter>
    </EuiModal>
  );

  return (
    <EuiOverlayMask>
      {loading && <EuiLoadingSpinner size="xl" />}
      {!loading && petetionModal()}
    </EuiOverlayMask>
  );
};

Petetion.propTypes = {
  close: PropTypes.func.isRequired
};
