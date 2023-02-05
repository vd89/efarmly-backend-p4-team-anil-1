import { model, Schema } from 'mongoose';

const _schema = new Schema(
 {
  seedName: { type: String },
  brand: { type: String },
 },
 { timestamps: true }
);

class Expense {}

_schema.loadClass(Expense);

export default model('Expense', _schema);
