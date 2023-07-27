import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import axios from 'axios';

const FetchApi = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default FetchApi

const styles = StyleSheet.create({})