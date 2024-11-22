// import React, {useEffect} from 'react';
// import {Provider} from 'react-redux';
// import store from './src/store';
// import {loadMatches} from './src/store/actions';
// import Navigation from './src/navigator/Navigation';

// const App = () => {
//   useEffect(() => {
//     store.dispatch(loadMatches());
//   }, []);

//   return (
//     <Provider store={store}>
//       <Navigation />
//     </Provider>
//   );
// };

// export default App;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  DefaultTheme,
  Provider as PaperProvider,
  adaptNavigationTheme,
} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src/navigator/Navigation';
import {useColorScheme} from 'react-native';

export default function App() {
  const colorScheme = useColorScheme();

  // Create theme based on system preference
  const theme = {
    // You can customize the theme here
    colors: {
      ...DefaultTheme.colors,
      // Add custom colors if needed
    },
  };

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
