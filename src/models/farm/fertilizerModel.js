import { model, Schema } from 'mongoose';

const _schema = new Schema(
 {
  fertilizerName: { type: String },
  brand: { type: String },
 },
 { timestamps: true }
);

class Fertilizer {}

_schema.loadClass(Fertilizer);

export default model('Fertilizer', _schema);
