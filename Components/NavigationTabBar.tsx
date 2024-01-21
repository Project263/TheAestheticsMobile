import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export function NavigationTabBar({state, descriptors, navigation}: any) {
  return (
    <View style={styles.bar}>
      {state?.routes?.map((route: any, index: number) => {
        const {options} = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.btn}>
            <View
              style={{
                ...styles.icon,
                backgroundColor: isFocused ? '#FFCBA9' : 'transparent',
              }}>
              {options.tabBarIcon()}
            </View>
            <Text>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 12,
  },
  icon: {
    borderRadius: 16,
    height: 32,
    width: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    borderRadius: 16,
    height: 32,
    width: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: '#CAC4D0',
    borderTopWidth: 1,
  },
});
