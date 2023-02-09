/* eslint-disable spellcheck/spell-checker */
import { Router } from 'express';
import { loginCtrl, otpCtrl } from '../../controllers/authCtrl.js';

const _auth = new Router();

_auth.post('/login', loginCtrl);
_auth.post('/otp', otpCtrl);

export default _auth;
