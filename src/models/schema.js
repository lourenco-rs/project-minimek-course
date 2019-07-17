import { ORM } from 'redux-orm';
import { Pilot, Battlemech, Lance } from './models';

const orm = new ORM();

orm.register(Pilot, Battlemech, Lance);

export default orm;
