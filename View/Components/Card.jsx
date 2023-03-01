import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card({children, style}) {
  return (
    <View style={[styles.card, style ]}>
      <View>{children}</View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
          
        alignItems: 'center',
        borderRadius: 20,
        padding: 20,
        backgroundColor: "#2C3E50",
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    }
})