import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Alert} from 'react-native'
import Title from '../Components/Title'
import { useState } from 'react' 
import ButtonPressable from '../Components/ButtonPressable'
import Colors from '../Components/colors'
import Card from '../Components/Card'


export default function StartGame({onConfirmNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('')
    const numberInputHandler = (text) => {
        setEnteredNumber(text)
    }
    const resetInputHandler = () => {
        setEnteredNumber('')
    }
    

    const confirmInputHandler = () => {
       const chosenNumber = parseInt(enteredNumber);
       if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            //show Alert
            Alert.alert('Invalid Number!', 'Number has to be a number between 1 and 99.', [{text: 'Okay',style: 'destructive', onPress: resetInputHandler}])
       }
       onConfirmNumber(chosenNumber)
    }

  return (
    <View style={styles.rootContainer}>
        <Title heading="Guess My Number" />
        <View style={styles.container}>
            <Card>
                <Text style={styles.inputContainerText}>Enter A Number</Text>
                <View style={styles.inputTextInput}>
                    <TextInput style={styles.numberInputBox} 
                        keyboardType="number-pad" 
                        maxLength={2} 
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(text) => numberInputHandler(text)}
                        value={enteredNumber}
                    />
                </View>
                <View style={styles.btn_Container}>
                    <ButtonPressable title="Reset" handler={resetInputHandler} />
                    <ButtonPressable title="Confirm" handler={confirmInputHandler} />
                    
                </View>

            </Card>
        </View>
    </View>
   
  )
}

const styles = StyleSheet.create({
    rootContainer: {
      
       paddingTop: 60,
       margin: 25,
    },
    container: {
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputTextInput: {
        alignItems:'center',
    },
   
    inputContainerText: {
        fontSize: 24,
        color: Colors.secondary,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    numberInputBox: {
  
        height: 60,
        width: 60,
        fontSize: 32,
        borderBottomColor: "#ffff",
        borderBottomWidth: 2,
        color: "#ffff",
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btn_Container: {

        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 15,
        
    },

})