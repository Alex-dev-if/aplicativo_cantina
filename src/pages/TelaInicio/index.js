import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';


export default function TelaInicio() {
    const navigation = useNavigation();

    return (
        <ImageBackground 
          style={styles.backgroundTema}
          source={require('../../assets/menu.png')}
          >
            <TouchableOpacity 
                style={styles.buttonOne}
                onPress={ () => navigation.navigate('Reserva')}>
            </TouchableOpacity>
            
            <TouchableOpacity 
                style={styles.buttonTwo}
                onPress={ () => navigation.navigate('Menu')}>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.buttonPagamento}
                onPress={ () => navigation.navigate('TelaPix')}>
                <Text style={styles.buttonText}>Pagamentos</Text>
            </TouchableOpacity>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    backgroundTema:{
        flex:1,
        flexDirection: "column",
      },

      buttonTwo:{
        height: 135,
        width: 130,
        alignSelf: 'flex-end',
        top: 12,
        marginRight: 33  
      },

      buttonOne:{
        height: 135,
        width: 130,
        marginLeft: 35,
        top: 147,
      },
      buttonPagamento:{
        backgroundColor: '#ffc9',
        width: '35%',
        borderRadius: 30,
        paddingVertical: 8,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        borderWidth: 1,
        borderColor: 'white',
        top: 300
      },
      buttonText:{
        fontSize: 20
      }
})
