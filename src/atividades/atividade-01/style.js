import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#faf7f7c',
        padding: 8,
        flex: 1,
        alignItems: 'center',
        borderRadius: 20,
        //justifyContent: 'space-between',
    },
    titulo: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: '#4400ff',
        backgroundColor: '#fff34d',
        marginTop: 10,
        marginBottom: 10,
        padding: 4,
        width: '100%',
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 20,
        color: '#0a0000' 
         
    },
    texto: {
        fontSize: RFPercentage(2.2),
        color: '#080000' 
    },
    titulo1: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: '#4400ff',
        marginTop: 10,
        marginBottom: 10,
        padding: 4,
        //width: '100%',
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#f8f3f3' 
    },
    texto1: {
        fontSize: RFPercentage(2.2),
        color: '#cefa09', 
        textAlign: 'center',
    }
})

export default styles;