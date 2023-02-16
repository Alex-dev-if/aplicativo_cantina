import React, { Component } from 'react';

import { StyleSheet, View, TextInput, ImageBackground, TouchableOpacity, Text} from 'react-native';
import * as Animatable from 'react-native-animatable'
import  Icon  from 'react-native-vector-icons/AntDesign';




export default class SignIn extends Component {

    
  constructor()
    {
        super();
 
        this.state = 
          { 
 
            TextInputValue: ''
 
          }
    }
    

    

  Nested_If_Else=()=>{

    if( this.state.TextInputValue == "asn6@aluno.ifal.edu.br" )
    {

        this.props.navigation.navigate("TelaInicio")
    }
    else
    {

        this.props.navigation.navigate("Cadastro")

    }
  }
 
 render() {

   return (
        <ImageBackground style={styles.backgroundTema} source={require('../../assets/login.png')}>
            <Animatable.View animation="fadeInUp" style={styles.subcontainer}>
            <View style={styles.containerInput}>
                    <View>
                        <TextInput
                            placeholder="E-mail"
                            style={styles.input}
                            onChangeText = { ( text ) => { this.setState({ TextInputValue: text })} } 

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
                onPress={this.Nested_If_Else}>
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
}
 
const styles = StyleSheet.create({
 
  MainContainer :{
      
      flex:1,
      justifyContent: 'center',
      padding: 10,
  
  },
  backgroundTema:{
    flex: 1,
    flexDirection: "column"
},

  TextInputStyle:
    {
      width: '100%',
      borderWidth: 1,
      borderColor: '#009688',
      height: 40,
      borderRadius: 10,
      marginBottom: 10,
      textAlign: 'center',
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
 
});
