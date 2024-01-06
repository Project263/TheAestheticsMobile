import React from 'react';
import {Text, View} from 'react-native';

export const CurrentDate = () => {
  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return date + '-' + month + '-' + year; //format: d-m-y;
  };

  return (
    <View>
      <Text>{getCurrentDate()}</Text>
    </View>
  );
};
