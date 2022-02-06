import React, {FC} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ArrowRight from '../../assests/icons/ArrowRight';

import colors from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {images} from '../../utils/images';
import {metrics} from '../../utils/metrics';

interface ILandingViewProps {
  onPressNext: () => void;
}

const LandingView: FC<ILandingViewProps> = ({onPressNext}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.mercedesHalf}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.contentContainer} />
        <View style={styles.footerContainer}>
          <View>
            <Text style={styles.mainTitle}>A race that</Text>
            <Text style={styles.mainTitle}>knows no finish </Text>
            <Text style={styles.mainTitle}>line</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Expolore models</Text>
            <TouchableOpacity
              style={styles.arrowContainer}
              onPress={onPressNext}>
              <ArrowRight fill={colors.white} size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {flex: 1},
  footerContainer: {
    height: 230,
    justifyContent: 'space-between',
    paddingVertical: 30,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  mainTitle: {
    width: metrics.screenWidth - 100,
    fontFamily: fonts.tusismoCF,
    color: colors.white,
    marginLeft: 24,
    fontSize: 28,
    lineHeight: 32,
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 24,
  },
  buttonText: {
    fontFamily: fonts.tusismoCF,
    color: colors.white,
    fontSize: 20,
    lineHeight: 32,
  },
  arrowContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 52,
    height: 52,
    marginLeft: 26,
    borderRadius: 18,
    backgroundColor: colors.transparentWhite,
  },
});

export default LandingView;
