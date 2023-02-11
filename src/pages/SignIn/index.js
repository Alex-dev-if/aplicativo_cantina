import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
    const navigation = useNavigation();
    return (
            
            <ImageBackground style={styles.backgroundTema} source={require('../../assets/login.png')}>
            <Animatable.View animation="fadeInUp" style={styles.subcontainer}>
                <TextInput
                    placeholder="E-mail"
                    style={styles.input}
                    />
                
                <TextInput
                    placeholder="Senha"
                    style={styles.input}
                    />

                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('TelaInicio')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                

            </Animatable.View>
            <TouchableOpacity 
                style={styles.buttonRegistro}
                onPress={ () => navigation.navigate('Cadastro')}>
                    <Text style={styles.registroText}>Cadastrar</Text>
                </TouchableOpacity>
            </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    backgroundTema:{
        flex: 1,
        flexDirection: "column"
    },
    subcontainer:{
        height: 380,
        marginHorizontal: 20,
        borderRadius: 15,
        width: 290,
        alignSelf: 'center',
        top: 290
    },
    
    container:{
        backgroundColor: 'white',
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',
        
    },
    
    input:{
        borderWidth: 1,
        borderRadius: 300,
        textAlign: 'center',
        fontSize: 16,
        marginLeft: 20,
        marginRight: 20,
        borderColor: 'green',
        height: 50,
        width: 200,
        alignSelf: 'center',
        marginTop: 30,
        top: 70
    },
    button:{
        backgroundColor: 'purple',
        width: '40%',
        borderRadius: 4,
        marginTop: 14,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        top: 90
        
    },
    buttonText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegistro:{
        marginTop: 14,
        alignSelf: 'center',
        top: 200
    }
})
