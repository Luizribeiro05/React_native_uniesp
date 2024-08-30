import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

const Exercicio02 = () => {
  return (
    <View style = {style.container}>
      <View style = {style.box}/>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'ce',
        alignItems : 'center'
        
    },
    box : {
        height: 50,
        width : 50,
        backgroundColor : 'tomato'
    }
})
export default Exercicio02