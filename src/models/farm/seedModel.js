import { model, Schema } from 'mongoose';

const _schema = new Schema(
 {
  seedName: { type: String },
  brand: { type: String },
 },
 { timestamps: true }
);

class Seed {}

_schema.loadClass(Seed);

export default model('Seed', _schema);
