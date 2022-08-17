import react from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator  } from '@react-navigation/native-stack'

//Screens
import Signup from './screens/Signup'
import Login from './screens/Login'
import ForgetPassword from './screens/ForgetPassword'


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={Login} 
        options={{ headerShown: false }} />
         <Stack.Screen name='Signup' component={Signup} 
        options={{ headerShown: false }} />
         <Stack.Screen name='ForgetPassword' component={ForgetPassword} 
        options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
