import React from 'react';
import { 
    View,
    Text, 
    StyleSheet, 
    Image, 
    TouchableOpacity 
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
           
           <View style={styles.containerLogo}>
            <Animatable.Image 
              animation="flipInY"
              source={require('../../assets/logo.png')}
              style={{ width: '100%' }}
              resizeMode="contain"
            />
           </View>

           <View style={styles.containerForm}>
            <TouchableOpacity 
            style={styles.button}
            onPress={ () => navigation.navigate('SignIn')}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
           </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:2,
        backgroundColor: 'purple'
    },
    containerLogo:{
        flex:1,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm:{
        flex:1,
        backgroundColor: 'purple',
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    button:{
        position: 'absolute',
        backgroundColor: '#fff',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        fontSize: 18,
        color: 'purple',
        fontWeight: 'bold'
    }
    
})
