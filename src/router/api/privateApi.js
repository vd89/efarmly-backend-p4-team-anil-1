import { Router } from 'express';
import { addSeed } from '../../controllers/privateCtrl.js';
// import { _useAuth } from '../../middleware/errorMiddleware.js';

const _private = new Router();

_private.post('/addSeed', addSeed);

export default _private;
