const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = data.handle ? data.handle : "";
  data.status = data.status ? data.status : "";
  data.skills = data.skills ? data.skills : "";

  if (!validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "handle debe tener entre 2 y 40 caracteres";
  }

  if (validator.isEmpty(data.handle)) {
    errors.handle = "handle del profile es requerido";
  }

  if (validator.isEmpty(data.status)) {
    errors.status = "status del profile es requerido";
  }

  if (validator.isEmpty(data.skills)) {
    errors.skills = "skills del profile es requerido";
  }

  if (!isEmpty(data.website)) {
    if (!validator.isURL(data.website)) {
      errors.website = "campo website No es una url";
    }
  }

  if (!isEmpty(data.youtube)) {
    if (!validator.isURL(data.youtube)) {
      errors.youtube = "campo youtube No es una url";
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!validator.isURL(data.twitter)) {
      errors.twitter = "campo twitter No es una url";
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!validator.isURL(data.facebook)) {
      errors.facebook = "campo facebook No es una url";
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!validator.isURL(data.linkedin)) {
      errors.linkedin = "campo linkedin No es una url";
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!validator.isURL(data.instagram)) {
      errors.instagram = "campo instagram No es una url";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
