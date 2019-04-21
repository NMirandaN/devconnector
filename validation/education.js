const validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateEducationInput(data) {
  let errors = {};

  data.school = data.school ? data.school : "";
  data.degree = data.degree ? data.degree : "";
  data.fieldofstudy = data.fieldofstudy ? data.fieldofstudy : "";
  data.from = data.from ? data.from : "";

  if (validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "el campo fieldofstudy es requerido";
  }

  if (validator.isEmpty(data.school)) {
    errors.school = "el campo school es requerido";
  }

  if (validator.isEmpty(data.degree)) {
    errors.degree = "el campo degree es requerido";
  }

  if (validator.isEmpty(data.from)) {
    errors.from = "el campo from es requerido";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
