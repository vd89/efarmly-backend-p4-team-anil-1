import { Router } from 'express';
import { testAuth } from '../helper/extraHelper.js';

const apiRoutes = new Router();

apiRoutes.get('/v1/test', testAuth);

export default apiRoutes;
