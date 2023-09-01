import * as yup from 'yup';

export const prepaidCardValidationSchema = yup.object().shape({
  balance: yup.number().integer().required(),
  currency: yup.string().required(),
  expiration_date: yup.date().nullable(),
});
