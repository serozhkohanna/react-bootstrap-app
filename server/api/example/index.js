'use strict';

import express from 'express';
import { getPoints } from './service';

const router = express.Router();

router.route('/get-points')
    .get(getPoints);

export default router;
