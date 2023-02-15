import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { useNavigation } from '@react-navigation/native';

export default function TelaPix() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image style={styles.imgLogo}
            source={require('../../assets/logo2.png')}/>
            <Text style={styles.head}>
                Pix para pagamento do almoço.
            </Text>
            <View style={styles.containerPix}>
                <Image
                source={require('../../assets/qrcodeteste.png')}

                />
            </View>
            <Text style={styles.headDois}>Enviar comprovante aqui</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "purple",
        flex:1
    },
    head:{
        color: "#fff",
        fontSize: 30,
        top: 30,
        alignItems: 'center',
        alignSelf: 'center',
    },
    containerPix:{
        alignItems: 'center',
        alignSelf: 'center',
        top: 50
    },
    headDois:{
        color: "#fff",
        fontSize: 30,
        top: 80,
        alignItems: 'center',
        alignSelf: 'center',
    },
    imgLogo:{
        width: 250,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 75
    }
})
