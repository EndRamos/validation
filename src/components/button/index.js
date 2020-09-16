import React from 'react';
import { styles } from './style.js'
import { Text, TouchableOpacity } from 'react-native';

export function Button({...props}) {
  return (
    <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>Acessar</Text>
    </TouchableOpacity>
  );
}

export default Button();