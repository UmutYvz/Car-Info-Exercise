import React, {FC} from 'react';

import CarDetailView from './CarDetailView';

interface ICarDetailScreenProps {}

const CarDetailScreen: FC<ICarDetailScreenProps> = () => {
  return <CarDetailView />;
};

export default CarDetailScreen;
