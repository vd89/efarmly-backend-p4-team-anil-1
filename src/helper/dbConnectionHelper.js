import { connect } from 'mongoose';
import debug from 'debug';
import appConfig from '../appConfig.js';

const log = debug('app:dbConnection ->');
const { mongoUrl } = appConfig;
const mongoOpt = {
 keepAlive: true,
 useNewUrlParser: true,
 useUnifiedTopology: true,
 serverSelectionTimeoutMS: 50000,
 socketTimeoutMS: 50000,
};

const dbController = async () => {
 try {
  log(`MongoDb -> Connected to mongoDb Server`);
  return await connect(mongoUrl, mongoOpt);
 } catch (err) {
  log(err.message);
 }
};
export default dbController;
