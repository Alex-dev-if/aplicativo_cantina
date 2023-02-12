import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import TelaInicio from '../pages/TelaInicio'
import Cadastro from '../pages/Cadastro'
import Menu from '../pages/Menu'
import Reserva from '../pages/Reserva'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="TelaInicio"
                component={TelaInicio}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="Menu"
                component={Menu}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="Reserva"
                component={Reserva}
                options={{ headerShown: false}}
            />
        </Stack.Navigator>
    )
}
