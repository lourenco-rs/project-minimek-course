import { Model, attr, fk, oneToOne, many } from 'redux-orm';

import { getUnsharedEntitiesSession } from './unsharedEntitiesSelector';

const defaultAttributes = {
  name: 'Unnamed Lance',
};

// Basic JS class syntax, with field declarations added to the class later
export class Pilot extends Model {
  // Other classe methods would go here
}

Pilot.modelName = 'Pilot';

Pilot.fields = {
  id: attr(),
  name: attr(),
  mech: fk('Battlemech'),
  lance: oneToOne('Lance'),
};

export class Battlemech extends Model {
  static get modelName() {
    return 'Battlemech';
  }

  static get fields() {
    return {
      id: attr(),
      name: attr(),
      pilot: fk('Pilot'),
      lance: oneToOne('Lance'),
    };
  }
}

export class Lance extends Model {
  static modelName = 'Lance';

  static fields = {
    id: attr(),
    name: attr(),
    mechs: many('Battlemech'),
    pilots: many('Pilot'),
  };

  static parse(lanceData) {
    // Because it's a static method, "this" refers to the class itself.
    // In this case, we're running inside a subclass bound to the Session.
    const { Pilot, Battlemech, Officer } = this.session;

    // Assume our incoming data looks like:
    // {name, commander : {}, mechs : [], pilots : []}

    const clonedData = {
      ...lanceData,
      commander: Officer.parse(clonedData.commander),
      mechs: lanceData.mechs.map(mech => Battlemech.parse(mech)),

      pilots: lanceData.pilots.map(pilot => Pilot.parse(pilot)),
    };

    return this.create(clonedData);
  }

  toJSON() {
    const data = {
      // Include all fields from the plain data object
      ...this.ref,
      // As well as serialized versions of all the relations we know about
      commander: this.commander.toJSON(),
      pilots: this.pilots.withModels.map(pilot => pilot.toJSON()),
      mechs: this.mechs.withModels.map(mech => mech.toJSON()),
    };

    return data;
  }

  static generate(specifiedAttributes = {}) {
    // const id = generateUUID('lance');
    const id = 'lance';

    const mergedAttributes = {
      ...defaultAttributes,
      id,
      ...specifiedAttributes,
    };

    return this.create(mergedAttributes);
  }

  deleteCascade() {
    this.mechs.toModelArray().forEach(mechModel => mechModel.deleteCascade());
    this.pilots
      .toModelArray()
      .forEach(pilotModel => pilotModel.deleteCascade());
    this.delete();
  }
}

// function createNewLance(name) {
//   return (dispatch, getState) => {
//     const session = getUnsharedEntitiesSession(getState());
//     const { Lance } = session;

//     const newLance = Lance.generate({ name: 'Command Lance' });
//     const itemAttributes = newLance.toJSON();

//     dispatch(createEntity('Lance', newLance.getId(), itemAttributes));
//   };
// }
