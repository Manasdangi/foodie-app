import React, {useContext, useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Navigation from './src/navigations/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppProvider} from './src/context/AppContext';

function App(): React.JSX.Element {
  return (
    <AppProvider>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <Navigation />
        </SafeAreaView>
      </SafeAreaProvider>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    marginBottom: -45,
  },
});

export default App;
