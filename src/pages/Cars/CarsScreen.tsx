import React, {FC} from 'react';

import {useNavigation} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';

import {carData, CarDataType} from './CarData';

import CarsView from './CarsView';
import {AppParams} from '../../navigator/NavigatorTypes';

interface ICarsScreenProps {}

const CarsScreen: FC<ICarsScreenProps> = () => {
  const navigation: StackNavigationProp<AppParams> = useNavigation();
  const onPressDetail = (id: string) => {
    //@ts-ignore
    const car: CarDataType = carData.find(item =>
      item.id === id ? item : undefined,
    );
    navigation.navigate('CarDetail', {car, menuOpen: false, goBack: true});
  };

  return <CarsView carData={carData} onPressDetail={onPressDetail} />;
};

export default CarsScreen;
