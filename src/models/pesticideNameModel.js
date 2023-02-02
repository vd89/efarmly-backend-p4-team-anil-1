import { model, Schema } from 'mongoose';

const _schema = new Schema(
 {
  pesticideName: { type: String, required: true },
 },
 { timestamps: true }
);

class Pesticide {}

_schema.loadClass(Pesticide);

export default model('Pesticide', _schema);
