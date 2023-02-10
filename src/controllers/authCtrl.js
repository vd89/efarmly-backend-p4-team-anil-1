/* eslint-disable spellcheck/spell-checker */
import { generateAuthToken } from '../helper/encryptionHelper.js';
import Farmer from '../models/farmer/farmerModel.js';

const verifyCode = [111111, 222222, 333333, 444444, 555555, 666666];
const data = {};

export const loginCtrl = async (req, res) => {
 try {
  const { name, mobile } = req.body;
  data.farmer = await Farmer.findOne({ mobile });
  if (!data.farmer) {
   data.farmer = await Farmer.create({ farmerName: name, mobile });
   return res.created({ message: 'OTP_GENERATED', data });
  }
  return res.ok({ message: 'OTP_GENERATED', data });
 } catch (err) {
  res.error(err.message);
 }
};

export const otpCtrl = async (req, res) => {
 try {
  const { otp, mobile } = req.body;
  data.farmer = await Farmer.findOne({ mobile });
  if (!data.farmer) {
   return res.error('LOGIN_WITH_CORRECT_MOBILE');
  }
  if (!verifyCode.includes(otp)) {
   return res.error('WRONG_VERIFICATION_CODE');
  }
  data.token = await generateAuthToken(data.farmer._id);

  return res.ok({ message: 'OTP_GENERATED', data });
 } catch (err) {
  res.error(err.message);
 }
};

// helper for the auth
export const getFarmer = async (id) => {
 try {
  return await Farmer.findById(id);
 } catch (err) {
  logger(err.message);
 }
};
