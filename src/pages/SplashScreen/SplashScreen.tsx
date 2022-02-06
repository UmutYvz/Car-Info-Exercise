import React, {FC} from 'react';
import SplashView from './SplashView';

export interface ISplashScreenProps {}

const SplashScreen: FC<ISplashScreenProps> = () => {
  return <SplashView />;
};

export default SplashScreen;
