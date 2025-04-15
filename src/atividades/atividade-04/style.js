import { StyleSheet } from 'react-native'; 
import { RFPercentage } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', 
        padding: 8,
        flex: 1,
        alignItems: 'center',
    
    },
    titulo: {
        fontSize: RFPercentage(2.5),
        fontWeight: 'bold',
        //borderWidth: 2,
        borderColor: 'deepskyblue',
        color: 'deepskyblue',
        marginTop: 10,
        marginBottom: 10,
        padding: 8,
        width: '100%',
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        //borderRadius: RFPercentage(1),
 
    },
    texto: {
        fontSize: RFPercentage(2.2),
        color: 'deepskyblue',

    },
    input: {
        borderWidth: RFPercentage(0.2),
        width: '100%',
        fontSize: RFPercentage(2),
        margin: RFPercentage(2),
        borderRadius: RFPercentage(1),
        borderColor: 'deepskyblue',
    },
    botao: {
        backgroundColor: 'deepskyblue', 
        width: '70%', 
        // height: RFPercentage(4), 
        borderRadius: RFPercentage(1), 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: RFPercentage(1),
    },
    txtBotao: {
        fontSize: RFPercentage(2), 
        color: '#fafafa', 
        fontWeight: 'bold', 
        letterSpacing: 1.5,
    },
});

export default styles;