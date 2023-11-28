import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import Home from "./screens/Home";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DeputadosStack from "./screens/deputados/DeputadosStack";
import FavoritosStack from "./screens/favoritos/FavoritosStack";
import noticiasStack from "./screens/noticias/noticiasStack";


const Tab = createMaterialBottomTabNavigator();

export default function App() {
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
                  name="Favoritos"
                  component={FavoritosStack}
                  activeColor="#D3D031"
                  options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({color}) => (
                      <MaterialCommunityIcons name="heart-outline" color={color} size={26} />
                    ),
                  }}
                />
                <Tab.Screen
                  name="noticias"
                  component={noticiasStack}
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


