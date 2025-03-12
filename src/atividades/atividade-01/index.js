import { View, Text} from 'react-native';

import styles from './style';

function Atividade1 (){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 1</Text>
            <Text style={styles.texto}>Desenvolvendo Atividade 1</Text>
            <Text style={styles.texto}>react-native com Expo</Text>
            {/* <Text style={styles.texto}>Teste</Text> */}
            <View>
                <Text style={styles.titulo}>TEXTO</Text>
                <Text style={styles.texto1}>Complemento</Text>
            </View>
        </View>
    );
}

export default Atividade1;