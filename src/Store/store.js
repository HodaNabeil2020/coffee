import { configureStore } from '@reduxjs/toolkit';
import menuCoffeSlice  from './Slices/MenuCoffeSlice';

import dessertSlice from './Slices/dessertSlice'

import favoritesSlice from "./Slices/FavoritesSlice"
import card from '../Store/Slices/Card'
export const store = configureStore({
  reducer: {
    coffe: menuCoffeSlice,
    order:card,
    dessert: dessertSlice,
    favorites:favoritesSlice
  },
})