import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

import PilotsListHeader from './PilotsListHeader';
import PilotsListRow from './PilotsListRow';

const PilotsList = ({ pilots }) => {
  const pilotRows = pilots.map(pilot => (
    <PilotsListRow pilot={pilot} key={pilot.name} />
  ));

  return (
    <Table celled>
      <PilotsListHeader />
      <Table.Body>{pilotRows}</Table.Body>
    </Table>
  );
};

export default PilotsList;
