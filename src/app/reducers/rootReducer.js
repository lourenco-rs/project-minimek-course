import { combineReducers } from 'redux';

import pilotsReducer from 'features/pilots/pilotsReducer';
import mechsReducer from 'features/mechs/mechsReducer';
import tabsReducer from 'features/tabs/tabsReducer';
import unitInfoReducer from 'features/unitInfo/unitInfoReducer';

import entitiesReducer from './entitiesReducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  pilots: pilotsReducer,
  mechs: mechsReducer,
  unitInfo: unitInfoReducer,
  tabs: tabsReducer,
});

export default rootReducer;
