import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ButtonPressable(props) {
  return (
  
      <TouchableOpacity style={styles.btn} onPress={props.handler}>
        <Text style={styles.btn_text}>{props.title}</Text>
      </TouchableOpacity>
  
  )
}

const styles = StyleSheet.create({
 
btn: {
    padding: 15,
    backgroundColor: '#E74C3C',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    paddingHorizontal: 40,
    marginHorizontal: 10,
    
},
btn_text: {
    color: '#ECF0F1',
    fontWeight: 'bold',
    fontSize: 15,
}
})