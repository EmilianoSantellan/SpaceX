import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import colors from './src/application/common/colors';
import SpaceX from './src/presentation/container/spacex-container';

const App = () => {
  const backgroundStyle = {
    flex: 1,
    backgroundColor: colors.background
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <SpaceX startTiles={2} size={4} />
    </SafeAreaView>
  );
};

export default App;
