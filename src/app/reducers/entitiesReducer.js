import orm from 'models/schema';

// This gives us a set of "tables" for our data, with the right structure
const initialState = orm.getEmptyState();

export default function entitiesReducer(state = initialState, action) {
  switch (action.type) {
    case 'PILOT_CREATE': {
      const session = orm.session(state);
      const { Pilot } = session;

      // Creates a Pilot class instance, and updates session.state immutably
      const pilot = Pilot.create(action.payload.pilotDetails);

      // Returns the updated "database tables" object
      return session.state;
    }
    default:
      return state;
  }
}
