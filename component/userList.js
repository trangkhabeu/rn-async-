import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';
import FetchApi from '../api/FetchApi';

const UserList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = async () => {
    try {
      setLoading(true);
      setError(false);
      const data = await FetchApi();
      setUsers(data);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.company}>Company: {item.company.name}</Text>
      </View>
    );
  };

  if (error) {
    return <Text style={styles.error}>Error!!!</Text>;
  }

  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={styles.list}
          data={users}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loading: {
    marginVertical: 20,
  },
  error: {
    fontSize: 18,
    color: 'red',
    marginVertical: 20,
  },
  item: {
    fontSize: 16,
    color: 'black',
  },
  name: {
    color: 'black',
    fontSize: 25,
  },
  company: {
    color: 'black',
  },
});

export default UserList;
