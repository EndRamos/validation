import React, { Component } from 'react';
import { styles } from './style.js'
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
          TextInputUser: '',
          TextInputPassword: '',
        };
    }

    VerificationTextInput = () => {
        if (this.state.TextInputUser != '') {
            if (this.state.TextInputPassword != '') {
              alert('logou')
            } else {
              alert('Insira a senha');
            }
          } else {
            alert('Insira o usuário');
          }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.textInput}
                    placeholder={'Usuario'}
                    placeholderTextColor={'gray'}
                    onChangeText={TextInputUser => this.setState({ TextInputUser })}
                    />
                <TextInput 
                    style={styles.textInput}
                    placeholder={'Senha'}
                    placeholderTextColor={'gray'}
                    secureTextEntry={true}
                    onChangeText={TextInputPassword => this.setState({ TextInputPassword })}
                    />
                <TouchableOpacity
                    style={styles.button} 
                    onPress={this.VerificationTextInput}
                >
                    <Text style={styles.textButton}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {}}>
                    <Text style={styles.text}>Ainda não tenho cadastro</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Login;

