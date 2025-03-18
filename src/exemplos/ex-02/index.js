import { View, Text, Image } from 'react-native';

import styles from './style';

import img from '../../../assets/002-1-react-native.png';

import Mensagem from './mensagem';

function Exemplo2 (){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 2</Text>
            <Image source={img} style={styles.image}/>
            <Mensagem titulo={'ERRO'}>'Você não clicou corretamente!'</Mensagem>
            <Mensagem titulo={'SUCESSO'} mensagem={'Acesso permitido!'}/>
        </View>
    );
}

export default Exemplo2;