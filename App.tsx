import React from 'react';

import SQLite from 'react-native-sqlite-storage';
import {Text, View} from 'react-native';

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
      <View>
        <Text>test</Text>
      </View>
    </>
  );
}

export default App;
