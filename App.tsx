import React from 'react';

import {NavigationTabs} from './Navigation/Tabs';
import {NavigationContainer} from '@react-navigation/native';

import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'Main',
    location: 'default',
  },
  () => {},
  error => console.log(error),
);

function App(): React.JSX.Element {
  return (
    <>
      <NavigationContainer>
        <NavigationTabs />
      </NavigationContainer>
    </>
  );
}

export default App;
