import { View , StyleSheet } from 'react-native';
import React, { Component } from 'react';

export class Exercicio04 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {backgroundColor: 'coral'}]}/>
        <View style={[styles.box, {backgroundColor: 'orchid'}]}/>
        <View style={[styles.box, {backgroundColor: 'lightseagreen'}]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flex: 1,
    width: 200,
    height: 200
  },
});

export default Exercicio04;