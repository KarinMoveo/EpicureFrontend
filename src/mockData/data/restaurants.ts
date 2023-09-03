import {claro, lumina, tigerLilly} from "../assets/restaurants/index";
import {oneStar, twoStars, threeStars, fourStars, fiveStars} from '../assets/rating/index';
import {restaurant} from './types';
import dishesMockData from './dishes';

const restaurantsMockData : restaurant[]= [
    {
        name: 'Claro',
        chef: 'Yossi Shitrit',
        rating: fourStars,
        popularity: 4,
        image: claro,
        address: "Ha-Arba'a Street, Tel Aviv-Yafo",
        from: '10:00',
        to: '22:00',
        openingDate: '01.01.2018',
        dishes: dishesMockData,
        
      },
    {
        name: 'Lumina',
        chef: 'Meir Adoni',
        rating: threeStars,
        popularity: 3,
        image: lumina,
        address: 'Eliezer Perry Street, Tel Aviv-Yafo',
        from: '10:00',
        to: '23:00',
        openingDate: '01.01.2021',
        dishes: dishesMockData,
    },
    {
        name: 'Tiger Lilly',
        chef: 'Yanir Green',
        rating: fourStars,
        popularity: 4,
        image: tigerLilly,
        address: 'Alof Kalman Magen Street, Tel Aviv-Yafo',
        from: '10:00',
        to: '18:00',
        openingDate: '01.01.2020',
        dishes: dishesMockData,
      },
  ];
  
 export default restaurantsMockData;
  
  
  