import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string; // um objeto com uma chave que é qualquer string
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    const key = error.path ? error.path : 'inexistentPath';

    validationErrors[key] = error.message;
  });

  return validationErrors;
}
