import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';
import { MaterialIcons } from '@expo/vector-icons';
import { CONSTANTS } from '../src/constants/index';
const Tab = createBottomTabNavigator();

function Router() {
  const {
    COLORS: { light_gray, secondary_blue_logo, white, red },
  } = CONSTANTS;

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: red,
            borderBottomWidth: 0,
          },
          headerShadowVisible: false,
          headerTintColor: white,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Favorites') {
              iconName = 'favorite';
            }
            return <MaterialIcons name={iconName} color={color} size={size} />;
          },
          tabBarActiveTintColor: secondary_blue_logo,
          tabBarInactiveTintColor: light_gray,
        })}
      >
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen options={{ title: 'Pokedex' }} name="Home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;
