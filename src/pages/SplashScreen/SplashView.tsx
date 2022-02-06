import React, {FC} from 'react';
import {View, StyleSheet, Image, ActivityIndicator, Text} from 'react-native';

import colors from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {images} from '../../utils/images';

interface ISplashViewProps {}

const SplashView: FC<ISplashViewProps> = () => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={images.splash} style={styles.logo} />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.header}>Explore Cars</Text>
    </View>
    <ActivityIndicator color={colors.dark} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  imageContainer: {
    width: 156,
    height: 156,
    marginBottom: 26,
  },
  logo: {width: '100%', height: '100%'},
  textContainer: {alignItems: 'center', marginBottom: 50},
  header: {fontFamily: fonts.tusismoCF, fontSize: 28},
});

export default SplashView;
