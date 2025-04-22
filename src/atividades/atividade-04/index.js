import { useState } from 'react';

import { View,Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './style';

function Atividade4 () {
  
  // State
  const [txtNome, settxtNome] = useState('');
  const [txtSobrenome, settxtSobrenome] = useState('');
  const [txtExibir, setTxtExibir] = useState('Inserir o Nome e Sobrenome');
  
  // let txtTexto = 'Inserir o Nome e Sobrenome';
  
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Exemplo 4</Text>
        <Text style={styles.texto}>{txtExibir}</Text>
  
        <Text style={styles.texto}>{}</Text>
        <TextInput 
            style={styles.input}
            placeholder='Nome'
            value={txtNome} // Adicionado para controlar o valor do input
            onChangeText={(valor) => settxtNome(valor)}/>

        <Text style={styles.texto}>{}</Text>
        <TextInput 
            style={styles.input}
            placeholder='Sobrenome'
            value={txtSobrenome}     // Adicionado para controlar o valor do input
            onChangeText={(valor) => settxtSobrenome(valor)}/>    

        <TouchableOpacity 
            style={styles.botao}
            onPress={() => {
                setTxtExibir(`${txtNome} ${txtSobrenome}`);
                settxtNome('');      // Limpa o campo de nome
                settxtSobrenome(''); // Limpa o campo de sobrenome
            }}>
            
            <Text style={styles.txtBotao}>Exibir texto</Text>
        </TouchableOpacity> 
    </View>
  );
}

export default Atividade4;