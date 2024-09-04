/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import Chat from './src/screens/Chat';

function App() {
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={'rgba(255, 255, 255, 0)'}
        barStyle={'dark-content'}
        hidden={false}
      />
      <Chat />
    </>
  );
}

export default App;
