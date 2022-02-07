import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

import colors from '../../utils/colors';
import {images} from '../../utils/images';
import {commonStyles} from '../../utils/CommonStyles';
import {fonts} from '../../utils/fonts';
const DrawerComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topDrawer}>
        <Image style={styles.logo} source={images.logo} />
        <View style={[styles.seperator, {...commonStyles.shadow}]} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Umut Yavuz</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.transparentDark,
    justifyContent: 'space-between',
  },
  topDrawer: {
    height: 200,
  },
  logo: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
  },
  seperator: {
    borderWidth: 2,
    borderColor: 'red',
  },
  footer: {
    marginHorizontal: 12,
    marginVertical: 12,
  },
  footerText: {
    alignSelf: 'flex-end',
    fontFamily: fonts.tusismoCF,
    color: colors.dark,
    fontSize: 18,
  },
});
export default DrawerComponent;
