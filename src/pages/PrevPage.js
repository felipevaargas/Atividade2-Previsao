import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState, useLayoutEffect } from 'react'
import axios from 'axios';
import PrevInfo from '../components/PrevInfo';

export default function App({ route }) {

  const [dados, setDados] = useState([])
  const [date, setDate] = useState("")
  const [geoCode, setGeoCode] = useState([route.params.paramKeyGeoCode])

  useLayoutEffect(() => {

    getCurrentDate();

    axios.get(`https://apiprevmet3.inmet.gov.br/previsao/${geoCode}`)
      .then((response) => {
        setDados([response.data])
      })
      .catch((erro) => {
        console.log('There has been a problem with your fetch operation: ' + erro.message);
      })
  }, [])

  const getCurrentDate = () => {
    const day = new Date().getDate();
    const month = ("0" + ((new Date()).getMonth() + 1)).slice(-2)
    const year = new Date().getFullYear();

    setDate(day + '/' + month + '/' + year);
  }

  return (
    <View>

      <FlatList
        data={dados}
        renderItem={({ item }) =>
          <PrevInfo
            geoCode={geoCode}
            dados={item}
            date={date}
            horario={['manha']}
          />

        }
        keyExtractor={item => item[geoCode][date].manha.entidade}
      />

      <FlatList
        data={dados}
        renderItem={({ item }) =>
          <PrevInfo
            geoCode={geoCode}
            dados={item}
            date={date}
            horario={['tarde']}
          />
        }
        keyExtractor={item => item[geoCode][date].manha.entidade}
      />

      <FlatList
        data={dados}
        renderItem={({ item }) =>
          <PrevInfo
            geoCode={geoCode}
            dados={item}
            date={date}
            horario={['noite']}
          />
        }
        keyExtractor={item => item[geoCode][date].manha.entidade}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});