import React from 'react';
import {StyleSheet, View} from 'react-native';
import {UserAvatar} from '../Components/UserAvatar';
import {CurrentDate} from '../Components/CurrentDate';

export const Home = () => {
  return (
    <View>
      <View style={styles.header}>
        <UserAvatar />
        <CurrentDate />
      </View>
      <View style={styles.notifications} />
    </View>
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
    width: '100%',
  },
});
