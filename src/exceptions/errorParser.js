import { ERROR_MESSAGES } from './errorMessage';

export const parseErrorMessage = (error) => {
  const code = error?.response?.data?.code || 'UNKNOWN_ERROR';
  const field = error?.response?.data?.field;

  // Get corresponding messageEntry using the error code.
  const messageEntry = ERROR_MESSAGES[code];

  // If messageEntry is a function, call it with the field.
  if (typeof messageEntry === 'function') {
    return messageEntry(field);
  }

  return messageEntry || `오류 코드: ${code}`;
};
