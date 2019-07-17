export function getModelByType(session, itemType, itemID) {
  const modelClass = session[itemType];
  const model = modelClass.withId(itemID);

  return model;
}

export function getModelIdentifiers(model) {
  return {
    itemID: model.getId(),
    itemType: model.getClass().modelName,
  };
}
