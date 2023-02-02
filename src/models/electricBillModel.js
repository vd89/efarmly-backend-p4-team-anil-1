import { model, Schema } from 'mongoose';

const _schema = new Schema(
 {
  startDate: { type: Date },
  endDate: { type: Date },
  billAmount: { type: Number },
  farmerName: { type: Schema.ObjectId, ref: 'Farmer' },
 },
 { timestamps: true }
);

class ElectricBill {}

_schema.loadClass(ElectricBill);

export default model('ElectricBill', _schema);
