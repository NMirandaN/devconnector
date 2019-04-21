const validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.title = data.title ? data.title : "";
  data.company = data.company ? data.company : "";
  data.from = data.from ? data.from : "";

  if (validator.isEmpty(data.title)) {
    errors.title = "el campo title es requerido";
  }

  if (validator.isEmpty(data.company)) {
    errors.company = "el campo company es requerido";
  }

  if (validator.isEmpty(data.from)) {
    errors.from = "el campo from es requerido";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
