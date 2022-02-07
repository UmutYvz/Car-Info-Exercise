import React, {FC, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import {commonStyles} from '../../utils/CommonStyles';

import Menu from '../../assests/icons/Menu';
import ArrowLeft from '../../assests/icons/ArrowLeft';

import colors from '../../utils/colors';
import {images} from '../../utils/images';
import {DrawerHeaderProps} from '@react-navigation/drawer';

interface IHeaderProps {
  navProps: DrawerHeaderProps;
}
interface headerParams {
  menuOpen?: boolean;
  goBack?: boolean;
}

const Header: FC<IHeaderProps> = ({navProps}: IHeaderProps) => {
  const {
    route: {params},
    navigation,
  } = navProps;

  console.log(navigation);
  const [headerParams, setHeaderParams] = useState<headerParams>();

  useEffect(() => {
    setHeaderParams(params);
  }, [params]);

  const onPressLeftButon = () => {
    if (headerParams?.menuOpen) {
      navigation.toggleDrawer();
    }
    if (headerParams?.goBack) {
      navigation.goBack();
    }
  };

  return (
    <>
      <SafeAreaView style={[styles.header, {...commonStyles.shadow}]}>
        <TouchableOpacity
          style={styles.leftContainer}
          onPress={onPressLeftButon}>
          {headerParams?.menuOpen && <Menu size={26} fill={colors.white} />}
          {headerParams?.goBack && <ArrowLeft size={32} fill={colors.white} />}
        </TouchableOpacity>
        <View style={styles.rightContainer}>
          <Image source={images.profile} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.dark,
    height: 80,
    paddingHorizontal: 18,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
    backgroundColor: 'red',
    borderRadius: 12,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    borderRadius: 12,
  },
});

export default Header;
