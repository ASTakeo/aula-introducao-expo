import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'; 

import styles from './styles'; 

function Atividade4 () { 

    const [nomeCompleto, setNomeCompleto] = useState('Aqui será apresentado o nome'); 
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState(''); 

    function xhandleExibeNome() {
        setNomeCompleto(`${nome} ${sobrenome}`);
        setNome('');
        setSobrenome('');
    }

    const handleExibeNome = () => {
        setNomeCompleto(`${nome} ${sobrenome}`);
        setNome('');
        setSobrenome('');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>
            <Text style={styles.texto}>{nomeCompleto}</Text> 
            <Text style={styles.label}>Nome</Text>
            <TextInput 
                // placeholder='Nome' 
                style={styles.input} 
                onChangeText={(v) => setNome(v)} 
                value={nome}
            />
            <Text style={styles.label}>Sobrenome</Text>
            <TextInput 
                // placeholder='Sobrenome' 
                style={styles.input} 
                onChangeText={(v) => setSobrenome(v)} 
                value={sobrenome}
            />
            

            <TouchableOpacity 
                style={styles.botao} 
                onPress={handleExibeNome}
            >
                <Text style={styles.txtBotao}>
                    Exibir nome completo
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Atividade4;

