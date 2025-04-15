import { useState } from 'react';

import { View,Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './style';

function Atividade4 () {
  
  // State
  const [txtNome, setTxtNome] = useState('');
  const [txtSobrenome, setTxtSobrenome] = useState('');

  const [txtExibir, setTxtExibir] = useState('');
  
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Exemplo 4</Text>
        <Text style={styles.titulo}>Inserir o Nome e Sobrenome</Text>
  
        
        <Text style={styles.titulo}>{txtNome}</Text>
        <TextInput 
            style={styles.input}
            onChangeText={(valor) => setTxtNome(valor)}/>

        <Text style={styles.texto}>{txtSobrenome}</Text>
        <TextInput 
            style={styles.input}
            onChangeText={(valor) => setTxtSobrenome(valor)}/>    

        <Text style={styles.titulo}>
            Exemplo envio dados click do botão
        </Text>
        
             
        <TouchableOpacity 
            style={styles.botao}
            onPress={() => setTxtNome(TxtNome)}>

            <Text style={styles.txtBotao}>
                Exibir texto digitado
                
            </Text>
        </TouchableOpacity> 
        

    </View>
  );
}

export default Atividade4;