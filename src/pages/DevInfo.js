import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function DevInfo() {
  return (
    <View style={styles.container}>
      <Text>
        <Text style={{ fontWeight: 'bold' }}>Dados do desenvolvedor</Text> {"\n"}
        Nome: Felipe Vargas da Silva {'\n'}
        Email: 1119283@imed.edu.br {'\n'}
        RA: 1119283
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      padding: 10,
      borderRadius: 10,
      margin: 5,
      backgroundColor: '#dbdbdb',
      justifyContent: 'center'
  }
});