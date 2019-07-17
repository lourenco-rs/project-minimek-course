import { combineReducers } from 'redux';

import tabsReducer from 'features/tabs/tabsReducer';

import entitiesReducer from './entitiesReducer';

const rootReducer = combineReducers({
  tabs: tabsReducer,
  entities: entitiesReducer,
});

export default rootReducer;
