import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import Title from '../Components/Title'
import NumberContainer from '../Components/NumberContainer';
import ButtonPressable from '../Components/ButtonPressable';
import GuessLogItem from '../Components/GuessLogItem';
import Card from '../Components/Card';
import Colors from '../Components/colors';
import Icon from 'react-native-vector-icons/FontAwesome';



const generateRandomNumber = ( min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomNumber(min, max, exclude)
    }else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GamePlay({userNumber, onGameOver}) {
    const initialGuess = generateRandomNumber(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess])

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, onGameOver, userNumber])


    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])
    const nextGuessHandler = (direction) => {
        if((direction === 'lower' && currentGuess < userNumber) ||
         (direction === 'higher' && currentGuess > userNumber )) {
            Alert.alert("Don't Lie!" , "You know that this is Wrong!!...", [{text: 'Sorry!', style: 'cancel' }] )
            return;
        }
        if(direction ==='lower') {
            maxBoundary = currentGuess;
            
        } else {
            minBoundary = currentGuess + 1;
            
        }
        console.log(minBoundary, maxBoundary)
        const newRndNumber = generateRandomNumber(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNumber)
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds])
    }

    const guessRoundsListLength = guessRounds.length;

  return (

    <View style={styles.container}>
      <Title heading="Opponent's Guess" />
      <NumberContainer>{currentGuess}</NumberContainer>
    
      <Card>
        <Text style={styles.inputContainerText}>Higher or Lower?</Text>
        <View style={styles.btn_Container}>
            <ButtonPressable title={<Icon name="plus" size={25} color="#900" />} handler={nextGuessHandler.bind(this, 'higher')} />
            <ButtonPressable title={<Icon name="minus" size={25} color="#900" />} handler={nextGuessHandler.bind(this, 'lower')} />
        </View>
      </Card>
     
        <View style={styles.listContainer}>
            {/* {guessRounds.map(round => <GuessLogItem key={round}>{round}/>)} */}
            
            <FlatList 
                data={guessRounds} 
                renderItem={
                    (itemData) => 
                    <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item}/>
                }
                keyExtractor={(item) => item} />
        </View>
    </View>

  )
}

const styles = StyleSheet.create({
    container: { 
       
        padding: 24,
    },
    btn_Container: {
       
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 15,
        
    },
    listContainer: {
      
        maxHeight:800,
        padding: 16,
    },
    inputContainerText: {
     
        fontSize: 24,
        color: Colors.secondary,
        fontWeight: 'bold',
        textAlign: 'center'
    },
   
})