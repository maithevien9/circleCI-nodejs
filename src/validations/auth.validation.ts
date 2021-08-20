import Joi from 'joi';

// eslint-disable-next-line import/prefer-default-export
export const loginSchema = {
  body: Joi.object({
    phoneNumber: Joi.string().required(),
    password: Joi.string().min(6).max(30).required(),
  }),
};
