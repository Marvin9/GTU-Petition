import React from 'react';
import { EuiRadioGroup } from '@elastic/eui';
import PropTypes from 'prop-types';

import emailCC from '../../../../emaiCC';

export const ZoneSelection = ({ zone, changeZone }) => {
  const zoneRadios = emailCC.map((chunk, id) => {
    if (chunk.scope !== 'all') {
      return {
        id: id.toString(),
        label: chunk.scope
      };
    }
    return false;
  }).filter(Boolean);

  const updateZone = (zoneId) => changeZone(zoneId);

  return (
    <EuiRadioGroup
      options={zoneRadios}
      idSelected={zone}
      onChange={updateZone}
      name="Zones"
      legend={{
        children: <b>Select zone: </b>
      }}
      compressed
    />
  );
};

ZoneSelection.propTypes = {
  zone: PropTypes.string.isRequired,
  changeZone: PropTypes.func.isRequired
};
