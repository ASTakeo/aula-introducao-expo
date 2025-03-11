import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 8,
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'space-between',
    },
    titulo: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: 'deepskyblue',
        marginTop: 10,
        marginBottom: 10,
        padding: 4,
        width: '100%',
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    texto: {
        fontSize: RFPercentage(2.2),
        color: 'deepskyblue' 
    }
})

export default styles;