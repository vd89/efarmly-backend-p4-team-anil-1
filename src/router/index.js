import { Router } from 'express';
import { testAuth } from '../helper/extraHelper.js';
import { _useAuth } from '../middleware/errorMiddleware.js';

import _auth from './api/auth.js';
import _privateApi from './api/privateApi.js';
import _publicApi from './api/publicApi.js';

const apiRoutes = new Router();

apiRoutes.get('/v1/test', testAuth);
apiRoutes.use('/v1/auth', _auth);
apiRoutes.use('/v1/public', _publicApi);
apiRoutes.use('/v1/private', _useAuth, _privateApi);

export default apiRoutes;
