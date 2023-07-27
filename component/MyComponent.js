import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import axios from 'axios';

const MyComponent = () => {
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

      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/usesrs',
      );
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(true);
      setLoading(false);
    }
  };

  const renderUsers = () => {
    if (loading) {
      return <ActivityIndicator size="large" style={styles.loading} />;
    } else if (error) {
      return <Text style={styles.error}>Đã xảy ra lỗi</Text>;
    } else {
      return users.map(user => (
        <View key={user.id} style={styles.user}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userCompany}>{user.company.name}</Text>
        </View>
      ));
    }
  };

  return <View style={styles.container}>{renderUsers()}</View>;
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
  user: {
    marginVertical: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userCompany: {
    fontSize: 16,
    color: 'gray',
  },
});

export default MyComponent;
