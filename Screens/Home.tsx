import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {UserAvatar} from '../Components/UserAvatar';
import {CurrentDate} from '../Components/CurrentDate';
import {Train} from '../Components/Train';

export const Home = () => {
  return (
    <>
      <View style={styles.header}>
        <UserAvatar />
        <CurrentDate />
      </View>
      <View style={styles.notifications} />
      <ScrollView style={styles.trains}>
        <Train />
        <Train />
        <Train />
        <Train />
        <Train />
        <Train />
        <Train />
        <Train />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  notifications: {
    borderRadius: 8,
    backgroundColor: '#fff',
    height: 85,
    marginTop: 20,
    width: '100%',
  },

  trains: {
    borderRadius: 8,
    backgroundColor: '#fff',
    height: '70%',
    marginTop: 20,
    width: '100%',
  },
});
