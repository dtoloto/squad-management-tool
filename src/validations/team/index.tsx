import * as Yup from 'yup';

// eslint-disable-next-line no-useless-escape
const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

export const teamSchema = Yup.object().shape({
  name: Yup.string().required(),
  website: Yup.string().matches(expression).required(),
  squad: Yup.array().length(11).required(),
});
