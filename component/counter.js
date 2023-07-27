import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(1);

    return (
        <TouchableOpacity onPress={() => setCount(count + 1)} style={styles.button}>
            <Text>{count}</Text>
        </TouchableOpacity>
    );
};

export default Counter
const styles = StyleSheet.create({
    button: {
        padding: 12,
        borderRadius: 4,
        backgroundColor: 'gold',
    },
});
