import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Exercicio03 = () => {
    
    const [text, setText] = useState('')


  return (
    <View style={styles.container}> 
      <Text>Exercicio03</Text>
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

export default Exercicio03