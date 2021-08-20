import httpStatus from 'http-status';
import { User, UserDocument } from '../models';
import APIError from '../utils/APIError';

interface ILoginParams {
  phoneNumber: UserDocument['phoneNumber'];
  password: UserDocument['phoneNumber'];
}

class AuthService {
  static login = async ({ phoneNumber, password }: ILoginParams) => {
    const user = await User.findOne({ phoneNumber });

    if (!user) {
      throw new APIError({
        status: httpStatus.NOT_FOUND,
        message: 'This phone number is not registered',
      });
    }

    const isMatchPassword = await user.comparePassword(password);

    if (!isMatchPassword) {
      throw new APIError({
        status: httpStatus.BAD_REQUEST,
        message: 'Password is invalid',
      });
    }

    return {
      user,
      token: '',
    };
  };
}

export default AuthService;
