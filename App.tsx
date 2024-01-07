import React from 'react';

import {NavigationTabs} from './Navigation/Tabs';
import {NavigationContainer} from '@react-navigation/native';

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
