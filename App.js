import { Link, NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import Home from "./screens/Home";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DeputadosStack from "./screens/deputados/DeputadosStack";
import FavoritosStack from "./screens/favoritos/FavoritosStack";
import NoticiassStack from "./screens/noticias/NoticiassStack";
import { Linking } from "react-native";


const Tab = createMaterialBottomTabNavigator();

export default function App() {

  const handlePress = () => {
    Linking.openURL('http://127.0.0.1:5500/pages/');
  };

  return (
   
    <>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator    barStyle={{ backgroundColor: '#D3D031' }}>
          <Tab.Screen
              name="Home" 
              component={Home}
              activeColor="#D3D031"
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color}) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                  ),
                }}
            />
          <Tab.Screen
              name="Deputados" 
              component={DeputadosStack}
              activeColor="#D3D031"
              options={{
                tabBarLabel: 'Deputados',
                tabBarIcon: ({color}) => (
                  <MaterialCommunityIcons name="bookshelf"  color={color} size={26} />
                  ),
                }}
            />
                <Tab.Screen
                  name="Jogo"
                  component={handlePress}
                  activeColor="#D3D031"
                  options={{
                    tabBarLabel: 'Jogo',
                    tabBarIcon: ({color}) => (
                      <MaterialCommunityIcons name="gamepad-variant" color={color} size={26} />
                    ),
                  }}
                />
                <Tab.Screen
                  name="noticias"
                  component={NoticiassStack}
                  activeColor="#D3D031"
                  options={{
                    tabBarLabel: 'noticias',
                    tabBarIcon: ({color}) => (
                      <MaterialCommunityIcons name="book" color={color} size={26} />
                    ),
                  }}
                />
         
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
   
  );
}


