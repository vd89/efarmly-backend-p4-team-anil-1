import { model, Schema } from 'mongoose';

const _schema = new Schema(
 {
  names: { type: String },
 },
 { timestamps: true }
);

class CattleName {}

_schema.loadClass(CattleName);

export default model('CattleName', _schema);
