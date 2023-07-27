import {StyleSheet, View} from 'react-native';
import React from 'react';
import UserList from '../component/userList';

const App = () => {
  return (
    <View style={styles.centeredView}>
      <UserList />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    marginTop: 20,
    padding: 'auto',
    width: '90%',
  },
});
