import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import colors from './src/application/common/colors';

import Tabs from './src/infrastructure/components/tabs/tabs';

const App = () => {
  const backgroundStyle = {
    flex: 1,
    backgroundColor: colors.background
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar translucent backgroundColor="transparent" />
      <Tabs />
    </SafeAreaView>
  );
};

export default App;
