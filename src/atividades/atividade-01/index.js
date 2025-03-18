import { View, Text} from 'react-native';

import styles from './style';

function Atividade1 (){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 1</Text>
            <Text style={styles.texto}>Desenvolvendo Atividade 1</Text>
            <Text style={styles.texto}>react-native com Expo</Text>
            {/* <Text style={styles.texto}>Teste</Text> */}
            {/* <View style={styles.container}>
                <Text style={styles.titulo}>Texto Exemplo</Text>
                <Text style={styles.texto1}>Complemento</Text>
            </View> */}
            <View style={styles.container}>
                <Text style={styles.titulo1}>Texto Exemplo</Text>
                <Text style={styles.texto}>Complemento</Text>
            </View>

        </View>
        
    );
}

export default Atividade1;