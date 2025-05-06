import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';

function Exemplo5 (){
    // State
    const [n1, setN1] = useState('0');
    const [n2, setN2] = useState('0');
    const [total, setTotal] = useState('0');

    return(
        <View style={styles.container}>
            <Text style={styles.paragraph}>Exemplo 5</Text>

            <Text style={styles.txtSaida}>Calculadora Básica</Text>
            
            <Text style={styles.textLabel}>1º número</Text>
            <TextInput 
                style={styles.txtEntrada} 
                onChangeText={ (entrada) => setN1(entrada) }
                value={n1}
            />

            {/* <Text style={styles.txtSaida}> + </Text> */}

            <Text style={styles.textLabel}>2º número</Text>
            <TextInput 
                style={styles.txtEntrada} 
                onChangeText={ (entrada) => setN2(entrada) }
                value={n2}
            />

            <Text style={[styles.txtSaida, {margin: 0}]}> = </Text>
            
            <Text style={styles.textLabel}>Total </Text>
            <TextInput 
                style={styles.txtEntrada} 
                editable={false}
                value={total}
            />

            <TouchableOpacity style={ styles.button}>
                <Text style={styles.textButton}> + </Text>
            </TouchableOpacity>

        </View>
    );
}

export default Exemplo5;