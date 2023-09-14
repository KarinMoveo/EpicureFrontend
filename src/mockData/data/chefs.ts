import {asafGranit, avivMoshe, eyalShani, meirAdoni, nitzanRaz, omerMiller, shahafShabtay, yossiShitrit, yuvalBenNeriah} from '../assets/chefs/index';

import {chef} from './types';

import restaurantsMockData from './restaurants';

const chefsMockData: chef[] = [
  {
    id: 1,
    image: asafGranit,
    name: 'Asaf Granit',
    summary: "Chef Asaf Granit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav Udim. Granit's creativity and culinary acumen born of long experience are expressed in every detail of each and every dish.",
    popularity: 1,
    restaurants: restaurantsMockData,
    isNew: false,
  },
  {
    id: 2,
    image: avivMoshe,
    name: 'Aviv Moshe',
    summary: "Chef Aviv Moshe has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav Udim. Moshe's creativity and culinary acumen born of long experience are expressed in every detail of each and every dish.",
    popularity: 2,
    restaurants: restaurantsMockData,
    isNew: true,
  },
  {
    id:3,
    image: eyalShani,
    name: 'Eyal Shani',
    summary: "Chef Eyal Shani has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav Udim. Shani's creativity and culinary acumen born of long experience are expressed in every detail of each and every dish.",
    popularity: 5,
    restaurants: restaurantsMockData,
    isNew: false,
  },
  {
    id: 4,
    image: meirAdoni,
    name: 'Meir Adoni',
    summary: "Chef Meir Adoni has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav Udim. Adoni's creativity and culinary acumen born of long experience are expressed in every detail of each and every dish.",
    popularity: 3,
    restaurants: restaurantsMockData,
    isNew: false,
  },
  {
    id: 5,
    image: nitzanRaz,
    name: 'Nitzan Raz',
    summary: "Chef Nitzan Raz has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav Udim. Raz's creativity and culinary acumen born of long experience are expressed in every detail of each and every dish.",
    popularity: 5,
    restaurants: restaurantsMockData,
    isNew: true,
  },
  {
    id: 6,
    image: omerMiller,
    name: 'Omer Miller',
    summary: "Chef Omer Miller has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav Udim. Miller's creativity and culinary acumen born of long experience are expressed in every detail of each and every dish.",
    popularity: 2,
    restaurants: restaurantsMockData,
    isNew: true,
  },
  {
    id:7,
    image: shahafShabtay,
    name: 'Shahaf Shabtay',
    summary: "Chef Shahaf Shabtay has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav Udim. Shabtay's creativity and culinary acumen born of long experience are expressed in every detail of each and every dish.",
    popularity: 4,
    restaurants: restaurantsMockData,
    isNew: false,
  },
  {
    id: 8,
    image: yossiShitrit,
    name: 'Yossi Shitrit',
    summary: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav Udim. Shitrit's creativity and culinary acumen born of long experience are expressed in every detail of each and every dish.",
    popularity: 1,
    restaurants: restaurantsMockData,
    isNew: false,
  },
  {
    id:9,
    image: yuvalBenNeriah,
    name: 'Yuval Ben Neriah',
    summary: "Chef Yuval Ben Neriah has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav Udim. Ben Neriah's creativity and culinary acumen born of long experience are expressed in every detail of each and every dish.",
    popularity: 3,
    restaurants: restaurantsMockData,
    isNew: true,
  },
  
];
 export default chefsMockData;
  
  