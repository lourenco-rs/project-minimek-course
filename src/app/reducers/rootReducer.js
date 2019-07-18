import { combineReducers } from 'redux';

import pilotsReducer from 'features/pilots/pilotsReducer';
import tabsReducer from 'features/tabs/tabsReducer';
import unitInfoReducer from 'features/unitInfo/unitInfoReducer';

import entitiesReducer from './entitiesReducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  pilots: pilotsReducer,
  unitInfo: unitInfoReducer,
  tabs: tabsReducer,
});

export default rootReducer;
