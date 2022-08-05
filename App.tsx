import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { ModalProvider } from 'react-native-use-modal';
import colors from './src/application/common/colors';
import SpaceX from './src/presentation/container/container';

const App = () => {
  const backgroundStyle = {
    flex: 1,
    backgroundColor: colors.background
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <ModalProvider>
        <SpaceX startTiles={2} size={4} />
      </ModalProvider>
    </SafeAreaView>
  );
};

export default App;
