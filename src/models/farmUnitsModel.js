import { model, Schema } from 'mongoose';

const _schema = new Schema(
 {
  unitsName: {
   transport: {
    type: String,
   },
   farm: {
    type: String,
   },
   quantity: {
    type: String,
   },
  },
 },
 { timestamps: true }
);

class Farmer {}

_schema.loadClass(Farmer);

export default model('Farmer', _schema);
