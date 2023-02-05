import { model, Schema } from 'mongoose';

const _schema = new Schema(
 {
  pesticidesName: { type: String },
  brand: { type: String },
 },
 { timestamps: true }
);

class Pesticide {}

_schema.loadClass(Pesticide);

export default model('Pesticide', _schema);
