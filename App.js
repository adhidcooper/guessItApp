import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import LinearGradiant from 'react-native-linear-gradient'
import { useState } from 'react'
import StartGame from './View/Screens/StartGame'
import GamePlay from './View/Screens/GamePlay'
import GameOver from './View/Screens/GameOver'



export default function App() {
  const [userNumber, setUserNumber ] = useState()
  let screen = <StartGame onConfirmNumber={pickedNumberHandler}/>
 
  const [gameIsOver, setGameIsOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)


  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true)
    setGuessRounds(numberOfRounds)
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);

  }

  if(userNumber) {
    screen = <GamePlay userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if(gameIsOver && userNumber) {
    screen = <GameOver roundsNumber={guessRounds} userNumber={userNumber} onStartNewGame={startNewGameHandler}/>
  }

  return (
  <LinearGradiant colors={['#2C3E50','#E74C3C']} style={styles.container}>
    <ImageBackground 
      source={require('./View/Assets/img/bulb.jpg')} 
      resizeMode="stretch" 
      style={styles.imgContainer} 
      imageStyle={styles.backgroundImg}>
        <SafeAreaView>
            {screen}
        </SafeAreaView>
    </ImageBackground>
 </LinearGradiant>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
imgContainer: {
    flex: 1,
   
},
backgroundImg: {
    opacity: 0.15,
},
 btn_Container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
  
},
})