import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FireIcon} from '../assets/Icons/Fire';

export const Train = () => {
  return (
    <View style={styles.container}>
      <View style={styles.nameAvatarContainer}>
        <View style={styles.avatar} />
        <View>
          <Text>Бицепс</Text>
          <Text>15 минут</Text>
        </View>
        <View style={styles.difficult}>
          <FireIcon />
          <FireIcon />
          <FireIcon />
        </View>
      </View>
      <View style={styles.date}>
        <Text>Сегодня</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderColor: '#CAC4D0',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  nameAvatarContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: '#FFE2C8',
    marginRight: 16,
  },

  date: {
    marginTop: 21,
  },

  difficult: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
});
