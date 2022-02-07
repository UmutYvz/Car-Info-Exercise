import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  ScrollView,
} from 'react-native';
import {fonts} from '../../utils/fonts';
import colors from '../../utils/colors';
import {images} from '../../utils/images';
import {commonStyles} from '../../utils/CommonStyles';
import {CarDataType} from './CarData';
import CarCard from '../../components/CarCard/CarCard';

interface ICarsViewProps {
  carData: Array<CarDataType>;
  onPressDetail: (id: string) => void;
}

const CarsView: FC<ICarsViewProps> = ({
  carData,
  onPressDetail,
}: ICarsViewProps) => {
  const renderItem = ({item}: {item: CarDataType}) => (
    <CarCard
      carData={item}
      key={item.id}
      onPressDetail={() => onPressDetail(item.id)}
    />
  );

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={images.mercedesHalf}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.contentContainer}>
          <Text style={styles.header}>Top models</Text>
          <View style={[styles.seperator, {...commonStyles.shadow}]} />
          <View style={styles.flatList}>
            <FlatList
              data={carData}
              showsVerticalScrollIndicator={false}
              renderItem={renderItem}
              keyExtractor={(_item: CarDataType) => _item.id}
            />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.transparentDark},
  header: {
    alignSelf: 'center',
    marginTop: 16,
    fontSize: 32,
    fontFamily: fonts.tusismoCF,
    color: colors.white,
  },
  contentContainer: {flex: 1, backgroundColor: colors.transparentDark},
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  seperator: {
    marginVertical: 12,
    borderWidth: 1,
    borderColor: colors.dark,
  },
  flatList: {},
});

export default CarsView;
