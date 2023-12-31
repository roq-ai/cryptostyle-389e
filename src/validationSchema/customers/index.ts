import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  last_login: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  prepaid_card_id: yup.string().nullable().required(),
});
