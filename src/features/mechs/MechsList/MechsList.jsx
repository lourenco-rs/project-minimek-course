import React from 'react';
import { Table } from 'semantic-ui-react';

import MechsListHeader from './MechsListHeader';
import MechsListRow from './MechsListRow';

const MechsList = ({ mechs = [], onMechClicked, currentMech }) => {
  const mechRows = mechs.map(mech => (
    <MechsListRow
      mech={mech}
      key={mech.id}
      onMechClicked={onMechClicked}
      selected={mech.id === currentMech}
    />
  ));

  return (
    <Table celled>
      <MechsListHeader />

      <Table.Body>{mechRows}</Table.Body>
    </Table>
  );
};

export default MechsList;
