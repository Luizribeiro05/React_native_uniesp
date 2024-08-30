import {View , StyleSheet } from 'react-native'
import React, { Component } from 'react'

export class Exercicio03 extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={[style.box, {width: 50, backgroundColor: 'powderblue'}]}/>
        <View style= {[style.flexbox, {backgroundColor: 'skyblue'}]}/>
        <View style={[style.box, {width: 50, backgroundColor: 'steelblue'}]}/>
      </View>
    )
  }
}

const style = StyleSheet.create({
    container : {
        flexDirection : 'row',
        height : 100
    },
    box : {
        height: '100%'
    },
    flexbox : {
        flex : 1
    }
})

export default Exercicio03