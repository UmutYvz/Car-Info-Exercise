import {StackHeaderProps} from '@react-navigation/stack';
import React, {FC} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Menu from '../../assests/icons/Menu';

import colors from '../../utils/colors';
import {images} from '../../utils/images';

interface IHeaderProps {
  navProps: StackHeaderProps;
}

const Header: FC<IHeaderProps> = ({navProps}: IHeaderProps) => {
  //@ts-ignore
  const {scene, previous, navigation} = navProps;
  console.log({scene, previous, navigation});
  return (
    <>
      <SafeAreaView style={styles.header}>
        <TouchableOpacity style={styles.leftContainer}>
          <Menu size={26} fill={colors.white} />
          {/* <MenuCross size={32} fill={colors.dark} /> */}
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
    width: 50,
    height: 50,
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
