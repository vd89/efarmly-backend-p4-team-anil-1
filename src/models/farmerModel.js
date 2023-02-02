import { model, Schema } from 'mongoose';

const _schema = new Schema(
 {
  name: { type: String, required: true },
  mobile: { type: String, required: true, unique: true },
 },
 { timestamps: true }
);

class Farmer {}

_schema.loadClass(Farmer);

export default model('Farmer', _schema);
