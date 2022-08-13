import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import colors from './src/application/common/colors';
import SpaceX from './src/presentation/containers/spacex/spacex-container';
// import Planets from './src/presentation/containers/planets/planets-container';

const App = () => {
  const backgroundStyle = {
    flex: 1,
    backgroundColor: colors.background
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar translucent backgroundColor="transparent" />
      <SpaceX startTiles={2} size={4} />
      {/* <Planets /> */}
    </SafeAreaView>
  );
};

export default App;
