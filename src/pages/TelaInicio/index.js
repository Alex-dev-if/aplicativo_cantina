import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';


export default function TelaInicio() {
    const navigation = useNavigation();

    return (
        <ImageBackground 
          style={styles.backgroundTema}
          source={require('../../assets/inicio.png')}
          >
            <TouchableOpacity 
                style={styles.buttonOne}
                onPress={ () => navigation.navigate('Reserva')}>
            </TouchableOpacity>
            
            <TouchableOpacity 
                style={styles.buttonTwo}
                onPress={ () => navigation.navigate('Menu')}>
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
      
    
})
