import * as Yup from 'yup';

export const teamSchema = Yup.object().shape({
  name: Yup.string().required(),
  website: Yup.string()
    .matches(/^(http|https):\/\/[^ "]+$/)
    .required(),
});
