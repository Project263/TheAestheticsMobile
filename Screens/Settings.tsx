import React from 'react';
import {
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';

import DocumentPicker from 'react-native-document-picker';

export default function Settings() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const uploadFile = async () => {
    console.log(await DocumentPicker.pick());
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.form}>
          <View>
            <Text>Фио</Text>
            <TextInput style={styles.input} />
          </View>
          <View>
            <Text>Часовой пояс</Text>
            <TextInput style={styles.input} />
          </View>
          <Pressable style={styles.btn}>
            <Text>Сохранить</Text>
          </Pressable>
        </View>

        <View style={styles.avatarContainer}>
          <View style={styles.avatar} />
          <Pressable style={styles.btn} onPress={uploadFile}>
            <Text>загрузить фото</Text>
          </Pressable>
          <Text>удалить фото</Text>
        </View>
      </View>

      <View style={styles.notifications}>
        <Text>Уведомления</Text>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  form: {
    width: '60%',
    paddingRight: 30,
  },

  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },

  notifications: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 14,
  },

  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#aaa',
  },

  avatar: {
    width: 130,
    height: 130,
    marginTop: 20,
    backgroundColor: '#aaa',
  },
});
