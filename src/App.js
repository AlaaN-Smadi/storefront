import React from 'react';
import ToDo from './component/ToDo/ToDo';
import SettingProvider from './context';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  render() {
    return (
      <SettingProvider>
        <ToDo />
      </SettingProvider>
    );
  }
}