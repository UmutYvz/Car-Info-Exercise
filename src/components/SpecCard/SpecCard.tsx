import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {fonts} from '../../utils/fonts';
import colors from '../../utils/colors';
import {metrics} from '../../utils/metrics';
import {commonStyles} from '../../utils/CommonStyles';

interface ICarCardProps {
  carData: {title: string; first: string; second: string; third?: string};
}

const SpecCard: FC<ICarCardProps> = ({carData}: ICarCardProps) => {
  return (
    <View style={[styles.cardContainer, {...commonStyles.allSides}]}>
      <View style={styles.leftSide}>
        <Text style={styles.verticalText}>{carData.title}</Text>
      </View>
      <View style={styles.rightSide}>
        <Text style={styles.firstRow}>{carData.first}</Text>
        <Text style={styles.secondRow}>{carData.second}</Text>
        {carData.third && <Text style={styles.thirdRow}>{carData.third}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    width: metrics.screenWidth - 100,
    backgroundColor: colors.transparentDark,
    marginRight: 30,
    borderRadius: 12,
    paddingVertical: 5,
    height: 130,
  },
  leftSide: {
    width: 26,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verticalText: {
    transform: [{rotate: '270deg'}],
    width: 120,
    textAlign: 'center',
    color: colors.white,
    fontFamily: fonts.tusismoCF,
    fontSize: 13,
  },
  rightSide: {
    height: 120,
    flex: 8,
    marginLeft: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  firstRow: {color: colors.gray, fontFamily: fonts.tusismoCF, fontSize: 22},
  secondRow: {color: colors.white, fontFamily: fonts.tusismoCF, fontSize: 36},
  thirdRow: {color: colors.gray, fontFamily: fonts.tusismoCF, fontSize: 22},
});

export default SpecCard;
