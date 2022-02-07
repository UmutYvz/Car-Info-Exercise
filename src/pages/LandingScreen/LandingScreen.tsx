import React, {FC} from 'react';

import type {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import LandingView from './LandingView';
import {AppParams} from '../../navigator/NavigatorTypes';

interface ILandingScreenProps {}

const LandingScreen: FC<ILandingScreenProps> = () => {
  const navigation: StackNavigationProp<AppParams> = useNavigation();

  const onPressNext = () => {
    navigation.navigate('CarsStack', {menuOpen: true, goBack: false});
  };

  return <LandingView onPressNext={onPressNext} />;
};

export default LandingScreen;
