import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// {/* Заменить на картинку */}
export const UserAvatar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avarar} />
      <View>
        <Text>Руслан Л.</Text>
        <Text>начинающий</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avarar: {
    width: 45,
    height: 45,
    backgroundColor: '#D9D9D9',
  },
});
