import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000080',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        height: 40,
        width: '70%',
        backgroundColor: '#FFF',
        borderRadius: 10,
        paddingLeft: 15,
        marginBottom: 15, 
    },
    text: {
        color: '#dc143c',
        fontWeight: 'bold',
        margin: 10,
    },
    button: {
        width: '70%',
        height: 40,
        backgroundColor: '#dc143c',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    textButton: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 15,
    }
  });