import { Router } from 'express';
import { testAuth } from '../helper/extraHelper.js';
import auth from './api/auth.js';

const apiRoutes = new Router();

apiRoutes.get('/v1/test', testAuth);
apiRoutes.use('/v1/auth', auth);

export default apiRoutes;
