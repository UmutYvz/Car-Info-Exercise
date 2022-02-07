import {images} from '../../utils/images';

export const carData = [
  {
    id: '97b1c50c-cf95-4335-802d-b4126b5cfed2',
    image: images.blackseries,
    carName: 'Mercedes-AMG GT BLACK SERIES',
    description:
      'The Mercedes-AMG GT Black Series marks the return of an iconic name to the world of super sports cars. Unorthodox, untamed, ultimate. He has emerged from uncompromising engineering paired with unprecedented performance – especially on the race track.',
    startOfProduction: 'July, 2020 year',
    specs: [
      {
        title: 'TOP SPEED',
        first: 'V8, BITURBO',
        second: '325 km/h',
        third: '201.95 mph',
      },
      {
        title: 'POWER',
        first: '800 Nm',
        second: '730 Hp',
        third: '0-100: 3.7s',
      },
      {
        title: 'TRUNK',
        first: '1587 kg',
        second: 'small',
        third: '286L',
      },
    ],
  },
  {
    id: '015b994d-acbd-4dd7-bbbe-40c78191f88d',
    image: images.sl63,
    carName: 'Mercedes-AMG SL 63',
    description:
      'The legend of the SL, quickly retold by Mercedes-AMG. Experience the newest edition of an icon – now sportier, more luxurious and more attractive than ever before. The new SL embodies the enjoyment of a roadster without any compromises.',
    startOfProduction: 'October, 2021 year',
    specs: [
      {
        title: 'TOP SPEED',
        first: 'V8, BITURBO',
        second: '295 km/h',
        third: '183.3 mph',
      },
      {
        title: 'POWER',
        first: '700 Nm',
        second: '476 Hp',
        third: '0-100: 5.2s',
      },
      {
        title: 'TRUNK',
        first: '1875 kg',
        second: 'small',
        third: '213L - 240L',
      },
    ],
  },
  {
    id: '03c8de44-8b35-444d-b6bd-0b3a3f106f6d',
    image: images.cla45s,
    carName: 'Mercedes-AMG CLA 45S',
    description:
      'With their sporty but functional design, the new Mercedes-AMG CLA 35 4MATIC, CLA 45 4MATIC+ and CLA 45 S 4MATIC+ Shooting Brake represent enormous driving pleasure and suitability for everyday use in the compact sports car segment.',
    startOfProduction: '2019 year',
    specs: [
      {
        title: 'TOP SPEED',
        first: 'TURBOCHARGER',
        second: '270 km/h',
        third: '167.77 mph',
      },
      {
        title: 'POWER',
        first: '500 Nm',
        second: '421 Hp',
        third: '0-100: 5.67s',
      },
      {
        title: 'TRUNK',
        first: '1600 kg',
        secong: 'middle',
        third: '460L',
      },
    ],
  },
];

export type CarDataType = {
  id: string;
  image: string;
  carName: string;
  description: string;
  startOfProduction: string;
  specs: Array<{
    title: string;
    first: string;
    second: string;
    third?: string;
  }>;
};
