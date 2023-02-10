/* eslint-disable spellcheck/spell-checker */
import { Router } from 'express';
import { getCategories } from '../../controllers/publicCtrl.js';

const _public = new Router();

_public.get('/getCategories', getCategories);

export default _public;
