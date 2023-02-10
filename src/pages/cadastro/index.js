import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>


            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Nome:</Text>

            <TextInput
                    placeholder="Informe seu nome"
                    style={styles.input}
                    />
                    <Text style={styles.title}>E-mail:</Text>

            <TextInput
                placeholder="E-mail institucional"
                style={styles.input}
                    />
                <Text style={styles.title}>Senha:</Text>
                <TextInput
                    placeholder="Crie uma senha forte"
                    style={styles.input}
                    />
                
                <Text style={styles.title}>Confirme sua senha:</Text>
                <TextInput
                    placeholder="Insira a senha novamente"
                    style={styles.input}
                    />

                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

            </Animatable.View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'purple',
        alignContent: 'center',
    },

    mensagem:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },
    containerForm:{
        justifyContent: 'center',
        backgroundColor: 'orange',
        flex:1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 20,
        alignSelf: 'center',
        
    },
    input:{
        height: 40,
        fontSize: 11,
        backgroundColor: '#FFDEAD',
        alignSelf: 'center',
        width: 275,
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center'
        
    },
    button:{
        backgroundColor: '#ffc9',
        width: '35%',
        borderRadius: 30,
        paddingVertical: 8,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        borderWidth: 1,
        borderColor: 'white',
        
    },
    buttonText:{
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegistro:{
        marginTop: 14,
        alignSelf: 'center'
    }
})
