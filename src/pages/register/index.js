import React, { Component } from 'react';
import { styles } from './style.js'
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

export class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
          TextInputUser: '',
          TextInputName: '',
          TextInputEmail: '',
          TextInputTelephone: '',
          TextInputPassword: '',  
        };
    }

    VerificationTextInput = () => {
        if (this.state.TextInputUser == '') {
            alert('Insira o nome de usuário')
        }
        else if (this.state.TextInputName == '') {
            alert('Insira o nome completo')
        }
        else if (this.state.TextInputEmail == '') {
            alert('Insira o email')
        }
        else if (this.state.TextInputTelephone == '') {
            alert('Insira o telefone')
        }
        else if (this.state.TextInputPassword == '') {
            alert('Insira a senha')
        }
        else{
            alert('cadastrado')
        }
    }
    render() {
        return (
            <View style={styles.container}>
                
                <TextInput 
                    style={styles.textInput}
                    placeholder={'Nome de Usuário'}
                    placeholderTextColor={'gray'}
                    onChangeText={TextInputUser => this.setState({ TextInputUser })}
                />

                <TextInput 
                    style={styles.textInput}
                    placeholder={'Nome'}
                    placeholderTextColor={'gray'}
                    onChangeText={TextInputName => this.setState({ TextInputName })}
                />

                <TextInput 
                    style={styles.textInput}
                    placeholder={'Email'}
                    placeholderTextColor={'gray'}
                    onChangeText={TextInputEmail => this.setState({ TextInputEmail })}
                />

                <TextInput 
                    style={styles.textInput}
                    placeholder={'Telefone'}
                    placeholderTextColor={'gray'}
                    onChangeText={TextInputTelephone => this.setState({ TextInputTelephone })}
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
                    <Text style={styles.textButton}>Cadastrar</Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}

export default Register;

