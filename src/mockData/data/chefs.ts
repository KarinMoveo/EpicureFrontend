import {asafGranit, avivMoshe, eyalShani, meirAdoni, nitzanRaz, omerMiller, shahafShabtay, yossiShitrit, yuvalBenNeriah} from '../assets/chefs/index';

import {chef} from './types';

import restaurantsMockData from './restaurants';

const chefsMockData: chef[] = [
  {
    image: asafGranit,
    name: 'Asaf Granit',
    summary: 'Chef Asaf Granit...',
    restaurants: restaurantsMockData,
  },
  {
    image: avivMoshe,
    name: 'Aviv Moshe',
    summary: 'Chef Aviv Moshe...',
    restaurants: restaurantsMockData,
  },
  {
    image: eyalShani,
    name: 'Eyal Shani',
    summary: 'Chef Eyal Shani...',
    restaurants: restaurantsMockData,
  },
  {
    image: meirAdoni,
    name: 'Meir Adoni',
    summary: 'Chef Meir Adoni...',
    restaurants: restaurantsMockData,
  },
  {
    image: nitzanRaz,
    name: 'Nitzan Raz',
    summary: 'Chef Nitzan Raz...',
    restaurants: restaurantsMockData,
  },
  {
    image: omerMiller,
    name: 'Omer Miller',
    summary: 'Chef Omer Miller...',
    restaurants: restaurantsMockData,
  },
  {
    image: shahafShabtay,
    name: 'Shahaf Shabtay',
    summary: 'Chef Shahaf Shabtay...',
    restaurants: restaurantsMockData,
  },
  {
    image: yossiShitrit,
    name: 'Yossi Shitrit',
    summary: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav Udim. Shitrit's creativity and culinary acumen born of long experience are expressed in every detail of each and every dish.",
    restaurants: restaurantsMockData,
  },
  {
    image: yuvalBenNeriah,
    name: 'Yuval Ben Neriah',
    summary: 'Chef Yuval Ben Neriah...',
    restaurants: restaurantsMockData,
  },
];
 export default chefsMockData;
  
  