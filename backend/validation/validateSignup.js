// Source:
// https://appdividend.com/2018/07/18/react-redux-node-mongodb-jwt-authentication/#React_Redux_Node_MongoDB_JWT_Authentication

const validator = require('validator');
const isEmpty = require('./isEmpty');

const validateSignup = (data) => {
  const errors = {};

  /* eslint-disable no-param-reassign */
  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.passwordConfirm = !isEmpty(data.passwordConfirm)
    ? data.passwordConfirm
    : '';
  /* eslint-enable no-param-reassign */

  if (!validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Le pseudonyme doit cotenir entre 2 et 30 caractères.';
  }

  if (validator.isEmpty(data.name)) {
    errors.name = 'Pseudonyme requis.';
  }

  if (!validator.isEmail(data.email)) {
    errors.email = 'Adresse e-mail invalide.';
  }

  if (validator.isEmpty(data.email)) {
    errors.email = 'Adresse e-mail requis.';
  }

  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Le mot de passe doit contenir entre 6 et 30 caractères.';
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'Mot de passe requis.';
  }

  if (!validator.isLength(data.passwordConfirm, { min: 6, max: 30 })) {
    errors.passwordConfirm = 'Le mot de passe doit contenir entre 6 et 30 caractères.';
  }

  if (!validator.equals(data.password, data.passwordConfirm)) {
    errors.passwordConfirm = 'Le mot de passe et le mot de passe de confirmation doivent être similaires.';
  }

  if (validator.isEmpty(data.passwordConfirm)) {
    errors.passwordConfirm = 'Mot de passe requis.';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateSignup;
