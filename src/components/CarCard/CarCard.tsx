import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';

import {fonts} from '../../utils/fonts';
import colors from '../../utils/colors';
import {metrics} from '../../utils/metrics';

import ArrowRight from '../../assests/icons/ArrowRight';

import {CarDataType} from '../../pages/Cars/CarData';

interface ICarCardProps {
  carData: CarDataType;
  onPressDetail: () => void;
}

const CarCard: FC<ICarCardProps> = ({
  onPressDetail,
  carData,
}: ICarCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.fitImage}>
        <Image
          source={carData.image as ImageSourcePropType}
          style={styles.cardImage}
        />
      </View>
      <TouchableOpacity style={styles.cardBottom} onPress={onPressDetail}>
        <View>
          <Text style={styles.brandText}>{carData.carName.substring(12)}</Text>
        </View>
        <View style={styles.bottomRight}>
          <Text style={styles.bottomText}>Details</Text>
          <ArrowRight fill={colors.white} size={20} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignSelf: 'center',
    marginVertical: 13,
    width: metrics.screenWidth - 26,
    height: 230,
  },
  fitImage: {
    flex: 1,
    backgroundColor: colors.dark,
    borderRadius: 12,
  },
  cardImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    opacity: 0.7,
    borderRadius: 12,
  },
  cardBottom: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    paddingHorizontal: 10,
    height: 50,
    bottom: 0,
    backgroundColor: colors.transparentDark,
  },
  bottomRight: {
    flexDirection: 'row',
  },
  brandText: {
    color: 'white',
    fontSize: 12,
    fontFamily: fonts.tusismoCF,
  },
  bottomText: {
    color: 'white',
    marginRight: 5,
    fontSize: 18,
    fontFamily: fonts.tusismoCF,
  },
});

export default CarCard;
