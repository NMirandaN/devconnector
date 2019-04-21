const validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = data.email ? data.email : "";
  data.password = data.password ? data.password : "";

  if (!validator.isEmail(data.email)) {
    errors.email = "Debe ser un email válido";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "el campo email es requerido";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "el campo password es requerido";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
