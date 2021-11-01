import * as yup from 'yup';

const schema = yup.object().shape({
  newRepo: yup
    .string()
    .matches(
      /[(aA-zZ)|(0-9)]*\/[(aA-zZ)|(0-9)]*/,
      'Digite autor/nome do repositorio',
    )
    .required(),
});

export default schema;
