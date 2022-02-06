import React, {FC, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigator from '../../navigator/AppNavigator';

import SplashScreen from '../SplashScreen/SplashScreen';

const Main: FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoggedIn(false), 3000);
  }, []);

  return isLoggedIn ? (
    <SplashScreen />
  ) : (
    <SafeAreaView style={styles.container}>
      <Navigator viewState="app" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default Main;
