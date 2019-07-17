import schema from './schema';
import { selectEntities } from './entitiesSelector';

export function getUnsharedEntitiesSession(state) {
  const entities = selectEntities(state);
  return schema.from(entities);
}
