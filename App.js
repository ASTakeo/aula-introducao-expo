import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants';

// Exemplos
import Exemplo1 from './src/exemplos/ex-01';
import Exemplo2 from './src/exemplos/ex-02';
import Exemplo3 from './src/exemplos/ex-03';
import Exemplo4 from './src/exemplos/ex-04';
import Exemplo5 from './src/exemplos/ex-05';
import Exemplo6 from './src/exemplos/ex-06';
import Exemplo7 from './src/exemplos/ex-07';

// Atividades
import Atividade1 from './src/atividades/atividade-01';
import Atividade2 from './src/atividades/atividade-02';
import Atividade4 from './src/atividades/atividade-04';
import Atividade6 from './src/atividades/atividade-06';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <Atividade6/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#56d7f7',
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderRadius: 20,
    padding: 8,
    paddingTop: Constants.statusBarHeight || 8,
  },
});
