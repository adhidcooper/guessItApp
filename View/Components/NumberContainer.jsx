import { StyleSheet, Text, View } from 'react-native'
import Colors from './colors'

export default function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.secondary,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.flatWhite,
        fontSize: 36,
        fontWeight: 'bold',
    }
})