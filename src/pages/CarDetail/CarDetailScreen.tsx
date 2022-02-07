import React, {FC} from 'react';

import type {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

import {AppParams} from '../../navigator/NavigatorTypes';

import CarDetailView from './CarDetailView';

interface ICarDetailScreenProps {
  route: RouteProp<AppParams, 'CarDetail'>;
}

const CarDetailScreen: FC<ICarDetailScreenProps> = ({route}) => {
  const {car} = route.params;
  const navigation: StackNavigationProp<AppParams> = useNavigation();
  const onPressOtherModels = () => {
    navigation.goBack();
  };
  return <CarDetailView car={car} onPressOtherModels={onPressOtherModels} />;
};

export default CarDetailScreen;
