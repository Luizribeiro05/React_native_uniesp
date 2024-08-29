import { View, Text, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { StyleSheet } from 'react-native';  

const Exercicio02 = () => {

    const [contador, setContador] = useState(0)

    const incrementar = () => {
        setContador(contador+1)
    }

    const decrementar = () => {
        setContador(contador-1)
    }

  return (
    <View style={styles.container}>
      <Button title='incrementar' onPress={incrementar} />
      <Text>O contador está em: {contador}</Text>
      <Button title='decrementar' onPress={decrementar} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 100

    }
})
export default Exercicio02