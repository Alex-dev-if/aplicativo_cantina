import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import  Icon  from 'react-native-vector-icons/AntDesign';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
    const navigation = useNavigation();
    return (
        <ImageBackground style={styles.backgroundTema} source={require('../../assets/login.png')}>
            <Animatable.View animation="fadeInUp" style={styles.subcontainer}>
                
                <View style={styles.containerInput}>
                    <View>
                        <TextInput
                            placeholder="E-mail"
                            style={styles.input}
                            />
                        <Icon style={styles.icon} name="mail" size={25} color='#fff'/>
                    </View>
                    <View>
                        <TextInput
                            placeholder="Senha"
                            style={styles.input}
                            secureTextEntry={true}
                            />
                        <Icon style={styles.icon} name="unlock" size={25} color='#fff'/>
                    </View>
                </View>

                <TouchableOpacity 
                style={styles.buttonOne}
                onPress={ () => navigation.navigate('TelaInicio')}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

            <TouchableOpacity 
                style={styles.buttonTwo}
                onPress={ () => navigation.navigate('Cadastro')}>
                    <Text style={styles.buttonText}>CADASTRAR</Text>
                </TouchableOpacity>
            </Animatable.View>    
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
        paddingVertical: 5,
        marginHorizontal: 20,
        borderRadius: 15,
        width: 290,
        alignSelf: 'center',
        top: '38.5%',
    },
    container:{
        backgroundColor: 'white',
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',
    },
    input:{
        borderWidth: 2,
        borderRadius: 300,
        textAlign: 'center',
        fontSize: 16,
        marginLeft: 20,
        marginRight: 20,
        borderColor: '#007d00',
        height: 50,
        width: 200,
        alignSelf: 'center',
        marginTop: 30,
        top: 17
    },
    icon:{
        position: 'absolute',
        left: 55,
        marginTop: 57
    },
    buttonOne:{
        backgroundColor: '#fff',
        width: '40%',
        borderRadius: 300,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        top: 30,
        height: 35,
    },
    buttonText:{
        color: 'black',
        fontSize: 13,
        fontWeight: 'bold'
    },
    buttonTwo:{
        borderWidth: 1,
        borderColor: "#fff",
        width: '40%',
        borderRadius: 300,
        marginTop: 14,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        top: 30,
        height: 35,
    },
})
