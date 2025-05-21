import { useState } from 'react';
import { View, Text } from 'react-native';

import Input from './input';
import Botao from './botao';

import styles from './style';

export default function Atividade6() {

    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [imc, setImc] = useState(0.00);
    const [valida, setValida] = useState('');
    const mensErro = 'Valores inseridos de forma incorreta!';

    function calculaImc() {
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);

        if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum <= 0) {
            setImc(0);
            setValida(mensErro);
            return;
        }

        const tmpImc = pesoNum / (alturaNum * alturaNum);
        setImc(tmpImc);
        resultadoimc(tmpImc);
    }
    
    function resultadoimc(imc) {
        if (imc <= 18.5) {
            setValida('Abaixo do Peso');
        } else if (imc > 18.5 && imc <= 24.9) {
            setValida('Peso Normal');
        } else if (imc >= 25 && imc <= 29.9) {
            setValida('Sobrepeso');
        } else if (imc >= 30 && imc <= 34.9) {
            setValida('Obesidade Grau 1');
        } else if (imc >= 35 && imc <= 39.9) {
            setValida('Obesidade Grau 2');   É
        } else if (imc >= 40) {
            setValida('Obesidade Grau 3');       
        } else {
            setValida(mensErro);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 6</Text>
            <View style={styles.ladoalado}>
                <Input placeholder='Peso' valor={peso} atualizaValor={setPeso} />
                <Input placeholder='Altura' valor={altura} atualizaValor={setAltura} />
            </View>

            <Text style={styles.imc}>{isNaN(imc) || imc === 0 ? mensErro : imc.toFixed(2)}</Text>

            <Text style={[styles.imc, styles.txtMensagem]}>{valida}</Text>

            <Botao calcular={calculaImc}>Calcular</Botao>
        </View>
    );
}