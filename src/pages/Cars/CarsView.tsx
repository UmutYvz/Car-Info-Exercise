import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fonts} from '../../utils/fonts';
import colors from '../../utils/colors';

interface ICarsViewProps {}
const CarsView: FC<ICarsViewProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top models</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'green'},
  header: {
    alignSelf: 'center',
    marginTop: 16,
    fontSize: 32,
    fontFamily: fonts.tusismoCF,
    color: colors.white,
  },
});

export default CarsView;
