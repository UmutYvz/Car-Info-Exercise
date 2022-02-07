import React, {FC} from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ImageSourcePropType,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {fonts} from '../../utils/fonts';
import colors from '../../utils/colors';

import {CarDataType} from '../Cars/CarData';
import {metrics} from '../../utils/metrics';
import ArrowRight from '../../assests/icons/ArrowRight';
import SpecCard from '../../components/SpecCard/SpecCard';

interface ICarDetailViewProps {
  car: CarDataType;
  onPressOtherModels: () => void;
}
const CarDetailView: FC<ICarDetailViewProps> = ({car, onPressOtherModels}) => {
  const renderItem = ({
    item,
  }: {
    item: {title: string; first: string; second: string; third?: string};
  }) => {
    return <SpecCard carData={item} />;
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>{car.carName}</Text>
      <Image
        source={car.image as ImageSourcePropType}
        style={styles.cardImage}
      />
      <View style={styles.bottomContainer}>
        <FlatList
          horizontal
          data={car.specs}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={index => index.toString()}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{car.description}</Text>
        </View>

        <TouchableOpacity
          style={styles.arrowContainer}
          onPress={onPressOtherModels}>
          <Text style={styles.bottomButtonText}>view other models</Text>
          <ArrowRight fill={colors.white} size={20} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.dark},
  headerText: {
    color: colors.white,
    fontFamily: fonts.tusismoCF,
    alignSelf: 'center',
    marginTop: 15,
    fontSize: 15,
  },
  fitImage: {
    flex: 1,
    backgroundColor: colors.dark,
    width: metrics.screenWidth,
    borderRadius: 12,
  },
  cardImage: {
    flex: 1,
    width: metrics.screenWidth,
    height: 350,
    resizeMode: 'cover',
    opacity: 0.7,
  },
  bottomContainer: {
    top: -80,
  },
  buttonText: {
    fontFamily: fonts.tusismoCF,
    color: colors.white,
    fontSize: 20,
    lineHeight: 32,
  },
  bottomButtonText: {
    fontFamily: fonts.tusismoCF,
    color: colors.white,
    fontSize: 18,
    lineHeight: 32,
    marginRight: 10,
  },
  arrowContainer: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginTop: 32,
    marginRight: 26,
  },
  descriptionContainer: {
    paddingHorizontal: 22,
  },
  description: {
    color: colors.white,
    fontFamily: fonts.tusismoCF,
    marginVertical: 32,
    fontSize: 14,
  },
});

export default CarDetailView;
