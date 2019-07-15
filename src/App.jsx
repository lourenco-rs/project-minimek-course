import React, { Component } from 'react';
import { Header, Container, Menu } from 'semantic-ui-react';

import './App.css';
import TabBarContainer from './features/tabs/TabBarContainer';

const UnitInfo = () => <div>Unit Info content</div>;
const Pilots = () => <div>Pilots content</div>;
const Mechs = () => <div>Mechs content</div>;
const UnitOrganization = () => <div>Unit Organization content</div>;

class App extends Component {
  componentDidMount() {}

  render() {
    const tabs = [
      { name: 'unitInfo', label: 'Unit Info', component: UnitInfo },
      { name: 'pilots', label: 'Pilots', component: Pilots },
      { name: 'mechs', label: 'Mechs', component: Mechs },
      {
        name: 'unitOrganization',
        label: 'Unit Organization',
        component: UnitOrganization,
      },
    ];

    return (
      <div className="App">
        <div className="App-header">
          <Header inverted as="h1">
            Project Mini-Mek
          </Header>
        </div>
        <Container>
          <TabBarContainer tabs={tabs} size="massive" />
        </Container>
      </div>
    );
  }
}

export default App;
