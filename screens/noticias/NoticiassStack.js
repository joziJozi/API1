import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import News from './News';



const Stack = createNativeStackNavigator();
const NoticiassStack = () => {
  return (
    <>
    <Stack.Navigator>
          <Stack.Screen name="noticias" component={News} options={{ title: "Noticias" }} />
        </Stack.Navigator>
    </>
  )
}

export default NoticiassStack