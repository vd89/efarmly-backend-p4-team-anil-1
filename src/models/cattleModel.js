import { model, Schema } from 'mongoose';

const _schema = new Schema(
 {
  names: { type: String },
 },
 { timestamps: true }
);

class Cattle {}

_schema.loadClass(Cattle);

export default model('Cattle', _schema);
