import { combineReducers } from 'redux';

import CountriesReducer from './countriesReducer';
import MortalityReducer from './mortalityReducer';

const rootReducer = combineReducers({
 countries: CountriesReducer,
 mortality: MortalityReducer,
});

export default rootReducer;