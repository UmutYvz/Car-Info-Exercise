import {CarDataType} from '../pages/Cars/CarData';

export type AppParams = {
  CarDetail: {car: CarDataType; menuOpen: boolean; goBack: boolean};
  CarsStack: {menuOpen: boolean; goBack: boolean};
};
