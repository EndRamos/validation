import React from 'react';
import { styles } from './style.js'
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { Button } from './../../components/button';

export function Login() {
  return (
    <View style={styles.container}>
        <TextInput 
            style={styles.textInput}
            placeholder={'Usuario'}
            placeholderTextColor={'gray'}
            />
        <TextInput 
            style={styles.textInput}
            placeholder={'Senha'}
            placeholderTextColor={'gray'}
            secureTextEntry={true}
            />
        <TouchableOpacity 
            style={styles.button}
            onPress={() => alert('tocou')}
            >
            <Text style={styles.textButton}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('tocou')}>
            <Text style={styles.text}>Ainda não tenho cadastro</Text>
        </TouchableOpacity>
    </View>
  );
}

const authentication = () => {
    
}

export default Login();

