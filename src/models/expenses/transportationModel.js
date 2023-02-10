import { model, Schema } from 'mongoose';

const _schema = new Schema(
 {
  transporterName: { type: String },
  distance: { type: Number },
  unit: { type: String, default: 'KM' },
  pricePerUnit: { type: Number },
  farmer: { type: Schema.ObjectId, ref: 'Farmer' },
 },
 { timestamps: true }
);

class Transport {}

_schema.loadClass(Transport);

export default model('Transport', _schema);
