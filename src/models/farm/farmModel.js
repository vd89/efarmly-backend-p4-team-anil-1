import { model, Schema } from 'mongoose';

const _schema = new Schema(
 {
  farmerName: { type: Schema.ObjectId, ref: 'Farmer' },
  farmName: { type: String },
  farmArea: { type: Number },
  farmAreaUnit: { type: String },
  cultivationStaDate: { type: Date },
  cultivationEndDate: { type: Date },
  seedUsed: { type: Schema.ObjectId, ref: 'Seed' },
  fertilizerUsed: { type: Schema.ObjectId, ref: 'Fertilizer' },
  pesticidesUsed: { type: Schema.ObjectId, ref: 'Pesticide' },
 },
 { timestamps: true }
);

class FarmsModel {}

_schema.loadClass(FarmsModel);

export default model('Farm', _schema);
