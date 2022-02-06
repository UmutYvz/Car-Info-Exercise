import React, {FC} from 'react';

import CarsView from './CarsView';

interface ICarsScreenProps {}

const CarsScreen: FC<ICarsScreenProps> = () => {
  return <CarsView />;
};

export default CarsScreen;
