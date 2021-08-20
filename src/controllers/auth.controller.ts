import { Request, Response, NextFunction } from 'express';
import _ from 'lodash';
import { AuthService } from '../services';

class AuthController {
  static login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { phoneNumber, password } = req.body;

      const { user, token } = await AuthService.login({
        phoneNumber,
        password,
      });

      return res.json({
        user: _.omit(user, ['password']),
        token,
      });
    } catch (e) {
      return next(e);
    }
  };
}

export default AuthController;
