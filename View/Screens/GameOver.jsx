import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ButtonPressable from '../Components/ButtonPressable'
import Colors from '../Components/colors'

export default function GameOver({ roundsNumber, userNumber, onStartNewGame}) {
  return (
    <View style={styles.container}>
      <Text style={styles.inputContainerText}>GameOver</Text>
        <View >
          <Image source={require('../Assets/img/Success.jpg')} style={styles.img}  />
        </View>
      <Text style={styles.gameOverText}>Your Phone Needed <Text style={styles.gameOverTextHighlight}>{roundsNumber}</Text> Rounds to guess the number <Text style={styles.gameOverTextHighlight}>{userNumber}</Text>.</Text>
      <ButtonPressable  title="Start New Game" handler={onStartNewGame} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin:2,
    padding:10,
  },
  img: {
    width: 250,
    height: 250,
    borderRadius: 200,
    alignSelf: 'center',
    borderWidth: 10,
    borderColor: Colors.primary,
  },
  inputContainerText: {
    fontSize: 30,
    color: Colors.secondary,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical:30
  },
  gameOverText: {
    fontSize:24,
    textAlign:'center',
    color: Colors.flatWhite,
    paddingVertical:20,

  },
  gameOverTextHighlight: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.flatRoyal,
  },

 
})