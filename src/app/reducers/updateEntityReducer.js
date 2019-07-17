import orm from 'models/schema';

export function updateEntity(state, payload) {
  const { itemType, itemID, newItemAttibutes } = payload;

  const session = orm.session(state);
  const ModelClass = session[itemType];

  let newState = state;

  if (ModelClass.hasId(itemID)) {
    const modelInstance = ModelClass.withId(itemID);

    modelInstance.update(newItemAttibutes);

    newState = session.state;
  }
  return newState;
}
