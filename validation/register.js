const validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = data.name ? data.name : "";
  data.email = data.email ? data.email : "";
  data.password = data.password ? data.password : "";
  data.password2 = data.password2 ? data.password2 : "";

  if (!validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "El campo nombre debe contener entre 2 a 30 caractéres";
  }

  if (validator.isEmpty(data.name)) {
    errors.name = "el campo nombre es requerido";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "el campo email es requerido";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "el campo password es requerido";
  }

  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "La contraseña debe ser mayor a 6 caractéres";
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "Debe ser un email válido";
  }

  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "Los campos no coinciden";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
