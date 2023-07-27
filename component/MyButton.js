import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const MyButton = ({ buttonTitle, buttonColor }) => {
    const [title, setTitle] = useState('ボタン');

    console.log("レンダー");

    return (
        <TouchableOpacity
            onPress={() => setTitle('タップされました')}
            style={[styles.button, { backgroundColor: buttonColor }]}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )

}

export default MyButton

const styles = StyleSheet.create({})