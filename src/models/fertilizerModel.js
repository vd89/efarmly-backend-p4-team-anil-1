import { model, Schema } from 'mongoose';

const _schema = new Schema(
 {
  fertilizerName: { type: String, required: true },
 },
 { timestamps: true }
);

class Fertilizer {}

_schema.loadClass(Fertilizer);

export default model('Fertilizer', _schema);
