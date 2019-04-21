const validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateLoginInput(data) {
  let errors = {};

  data.text = data.text ? data.text : "";

  if (!validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = "el comentario debe tener entre 10 a 300 caracteres";
  }

  if (validator.isEmpty(data.text)) {
    errors.text = "el campo text es requerido";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
