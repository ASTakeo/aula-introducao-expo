import { useState } from 'react';

import { View,Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './style';

function Exemplo4 () {
  
  // State
  const [txtInserido, setTxtInserido] = useState('');
  const [txtExibir, setTxtExibir] = useState('');
  
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Exemplo 4</Text>
        <Text style={styles.texto}>{txtInserido}</Text>
        <TextInput 
            style={styles.input}
            onChangeText={(valor) => setTxtInserido(valor)}/>

        <Text style={styles.titulo}>
            Exemplo envio dados click do botão
        </Text>
        
        < Text style={styles.texto}>{txtExibir}</Text>
        <TouchableOpacity 
            style={styles.botao}
            onPress={() => setTxtExibir(txtInserido)}>

            <Text style={styles.txtBotao}>
                Exibir texto digitado
                
            </Text>
        </TouchableOpacity>
    </View>
  );
}

export default Exemplo4;