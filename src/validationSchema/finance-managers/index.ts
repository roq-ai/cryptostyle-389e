import * as yup from 'yup';

export const financeManagerValidationSchema = yup.object().shape({
  last_login: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
