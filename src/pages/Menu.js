import { View, StyleSheet } from 'react-native'
import React from 'react'
import Button from '../components/Button'

export default function Menu() {
  return (
    <View style={styles.container}>
      <Button geoCode='4314100' buttonText='Passo Fundo' screenName="PrevPage" />
      <Button geoCode='4311809' buttonText='Marau' screenName="PrevPage" />
      <Button geoCode='4304705' buttonText='Carazinho' screenName="PrevPage" />
      <Button geoCode='4320800' buttonText='Soledade' screenName="PrevPage" />
      <Button geoCode='4307005' buttonText='Erechim' screenName="PrevPage" />
      <Button buttonText='Sobre' screenName="DevInfo" />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});