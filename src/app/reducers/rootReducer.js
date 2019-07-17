import { combineReducers } from 'redux';

import tabsReducer from 'features/tabs/tabsReducer';
import unitInfoReducer from 'features/unitInfo/unitInfoReducer';

import entitiesReducer from './entitiesReducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  unitInfo: unitInfoReducer,
  tabs: tabsReducer,
});

export default rootReducer;
