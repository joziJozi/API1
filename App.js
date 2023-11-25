import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import Deputado from "./screens/Deputado";
import Home from "./screens/Home";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
   
    <>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator>
          <Tab.Screen
              name="Home" 
              component={Home}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="home" size={26} />
                ),
              }}
            />
          <Tab.Screen
              name="Deputado" 
              component={Deputado}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="bookshelf" size={26} />
                ),
              }}
            />
          
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
   
  );
}


