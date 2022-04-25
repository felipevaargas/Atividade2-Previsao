import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Menu from './src/pages/Menu'
import DevInfo from './src/pages/DevInfo'
import PrevPage from './src/pages/PrevPage'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Menu'
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#c4c4c4',
          }
        }}>
        <Stack.Screen name="Menu" component={Menu} options={{ title: 'Menu - App Previsão do Tempo' }} />
        <Stack.Screen name="PrevPage" component={PrevPage}options={{ title: 'Previsão do Tempo Para Hoje' }}/>
        <Stack.Screen name="DevInfo" component={DevInfo} options={{ title: 'Sobre o Desenvolvedor' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;