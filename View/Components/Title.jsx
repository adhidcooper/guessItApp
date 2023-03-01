import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Title(props) {
  return (
    <View>
      <Text style={styles.title}>{props.heading}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    title : {
        padding: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3498DB',
        textAlign: 'center',
        borderWidth:2,
        borderColor: '#3498DB',
        borderRadius: 30,
    }
})