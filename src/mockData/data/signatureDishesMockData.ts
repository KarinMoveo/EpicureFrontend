import {garbanzoFrito, padKiMao, smokedPizza} from "../assets/dishes/index";
import {spicy, vegan, vegetarian} from '../assets/dishesIcons/index';


const signatureDishesMockData = [
  {
    cardImage: padKiMao,
    cardName: 'Pad Ki Mao',
    ingredients: 'Shrimps, Glass, Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic, Chilli Brown Coconut',
    icon: spicy,
    price: 88,
    dishSide: ['White bread', 'Sticky rice'],
    dishChanges: ['Without peanuts', 'Sticky less spicy'],
  },
  {
    cardImage: garbanzoFrito,
    cardName: 'Garbanzo Frito',
    ingredients: 'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
    icon: spicy,
    price: 98,
    dishSide: ['White bread', 'Sticky rice'],
    dishChanges: ['Without peanuts', 'Sticky less spicy'],
  },
  {
    cardImage: smokedPizza,
    cardName: 'Smoked Pizza',
    ingredients: 'Basil dough, cashew "butter", demi-glace, bison & radish',
    icon: vegan,
    price: 65,
    dishSide: ['White bread', 'Sticky rice'],
    dishChanges: ['Without peanuts', 'Sticky less spicy'],
  },


];
  
 export default signatureDishesMockData;
  
  
  