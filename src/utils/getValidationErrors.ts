import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

interface NewValidationError extends Omit<ValidationError, 'path'> {
  path: string;
  message: string;
  inner: NewValidationError[];
}

export default function getValidationErrors(err: NewValidationError): Errors {
  const validationErrors: Errors = {};
  if (err.inner) {
    err.inner.forEach(error => {
      validationErrors[error.path] = error.message;
    });
  }
  return validationErrors;
}
