import * as Yup from 'yup';

const qaCardSchema = Yup.object().shape({
  question: Yup.string().required('Digite uma pergunta').label('question'),
  answer: Yup.string().required('Digite uma resposta').label('answer'),
});

const basicCardSchema = Yup.object().shape({
  question: Yup.string().required('Digite uma pergunta').label('question'),
});

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Digite seu email')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email inválido')
    .label('email'),
  password: Yup.string()
    .required('Digite sua senha')
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+{}|:?><~?><~,./]{6,20}$/,
      'A senha deve ter de 6 a 20 caracteres',
    )
    .label('password'),
});

const signupSchema = Yup.object().shape({
  name: Yup.string().required('Digite um nome').label('name'),
  email: Yup.string()
    .required('Digite seu email')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email inválido')
    .label('email'),
  password: Yup.string()
    .required('Digite sua senha')
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+{}|:?><~?><~,./]{6,20}$/,
      'A senha deve ter de 6 a 20 caracteres',
    )
    .label('password'),
  confirmPassword: Yup.string().test(
    'passwords-match',
    'As senhas não coincidem',
    function (value) {
      return value === this.resolve(Yup.ref('password'));
    },
  ),
});

const createDeckSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Z0-9À-ÿ\s!@#$%^&*()_+{}|:?><~?><~,./]{1,40}$/,
      'O nome deve ter no máximo 40 caracteres',
    )
    .required('Digite um nome para o Deck')
    .label('name'),
});

export {
  basicCardSchema,
  qaCardSchema,
  loginSchema,
  signupSchema,
  createDeckSchema,
};
