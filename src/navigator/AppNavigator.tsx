import React, {FC} from 'react';

import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import LandingScreen from '../pages/LandingScreen/LandingScreen';
import CarDetailScreen from '../pages/CarDetail/CarDetailScreen';

import colors from '../utils/colors';
import Header from '../components/Header/Header';
import CarsScreen from '../pages/Cars/CarsScreen';

const RootStack = createStackNavigator();
const Stack = createStackNavigator();

const CarsStack: FC = (props: any) => {
  return (
    <Stack.Navigator
      //@ts-ignore
      headerMode="screen"
      screenOptions={{
        header: () => <Header navProps={props} />,
      }}>
      <Stack.Screen
        name="Cars"
        component={CarsScreen}
        initialParams={props.route.params}
      />
      <Stack.Screen
        name="CarDetail"
        component={CarDetailScreen}
        initialParams={props.route.params}
      />
    </Stack.Navigator>
  );
};

const AppStackModal: FC = () => {
  return (
    <Stack.Navigator
      //@ts-ignore
      headerMode="none"
      screenOptions={{
        cardStyle: {backgroundColor: colors.white},
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}>
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CarsStack"
        component={CarsStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

interface INavigatorPropTypes {
  viewState: string;
}

const Navigator: FC<INavigatorPropTypes> = (props: INavigatorPropTypes) => {
  return (
    <RootStack.Navigator
      //@ts-ignore
      headerMode="none"
      screenOptions={{animationEnabled: false}}>
      {props.viewState === 'app' ? (
        <RootStack.Screen
          name="AppStack"
          component={AppStackModal}
          initialParams={props}
        />
      ) : undefined}
    </RootStack.Navigator>
  );
};

export default Navigator;
