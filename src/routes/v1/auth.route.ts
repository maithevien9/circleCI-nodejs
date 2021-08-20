import express from 'express';
import { validate } from 'express-validation';

import AuthController from '../../controllers/auth.controller';
import { loginSchema } from '../../validations/auth.validation';

const router = express.Router();

router.route('/login').post(validate(loginSchema), AuthController.login);

export default router;
