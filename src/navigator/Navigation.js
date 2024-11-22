// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {
//   Provider as PaperProvider,
//   DarkTheme,
//   DefaultTheme,
// } from 'react-native-paper';
// import {StatusBar} from 'react-native';

// // Import screens
// import HomeScreen from './screens/HomeScreen';
// import MatchSetupScreen from './screens/MatchSetupScreen';
// import ScoringScreen from './screens/ScoringScreen';
// import SignalsScreen from './screens/SignalsScreen';
// import SettingsScreen from './screens/SettingsScreen';
// import MatchHistoryScreen from '../screens/MatchHistoryScreen';
// import MatchStatsScreen from '../screens/MatchStatsScreen';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// function TabNavigator() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Match" component={ScoringScreen} />
//       <Tab.Screen name="Signals" component={SignalsScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//       <Tab.Screen name="History" component={MatchHistoryScreen} />
//     </Tab.Navigator>
//   );
// }

// export default function navigation() {
//   return (
//     <PaperProvider>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={HomeScreen} />
//           <Stack.Screen name="MatchSetup" component={MatchSetupScreen} />
//           <Stack.Screen
//             name="MainApp"
//             component={TabNavigator}
//             options={{headerShown: false}}
//           />
//           <Stack.Screen name="MatchStats" component={MatchStatsScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </PaperProvider>
//   );
// }

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IconButton} from 'react-native-paper';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import MatchSetupScreen from '../screens/MatchSetupScreen';
import ScoringScreen from '../screens/ScoringScreen';
import SignalsScreen from '../screens/SignalsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MatchHistoryScreen from '../screens/MatchHistoryScreen';
import MatchStatsScreen from '../screens/MatchStatsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Match') {
            iconName = 'trophy';
          } else if (route.name === 'Signals') {
            iconName = 'signal';
          } else if (route.name === 'Settings') {
            iconName = 'cog';
          } else if (route.name === 'History') {
            iconName = 'history';
          }

          return <IconButton icon={iconName} size={size} iconColor={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Match" component={ScoringScreen} />
      <Tab.Screen name="Signals" component={SignalsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="History" component={MatchHistoryScreen} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MatchSetup" component={MatchSetupScreen} />
      <Stack.Screen
        name="MainApp"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="MatchStats" component={MatchStatsScreen} />
    </Stack.Navigator>
  );
}
