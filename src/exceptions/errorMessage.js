import { fieldName } from './fieldName';

export const ERROR_MESSAGES = {
  // Unexpected Error Codes.
  UNKNOWN_ERROR: '알 수 없는 오류가 발생했습니다.',
  VALIDATION_ERROR: '알 수 없는 오류가 발생했습니다.',

  // Common Error Codes.
  // INVALID_TOKEN: 'INVALID_TOKEN',
  EMAIL_CONFLICTED: '이미 사용 중인 이메일입니다.',

  // Url Service Error Codes.
  // URL_NOT_FOUND: 'URL_NOT_FOUND',
  // URL_NOT_ACTIVATED: 'URL_NOT_ACTIVATED',
  // URL_EXPIRED: 'URL_EXPIRED',

  // User Service Error Codes.
  // USER_NOT_FOUND: 'USER_NOT_FOUND',
  // INVALID_EMAIL_OR_PASSWORD: 'INVALID_EMAIL_OR_PASSWORD',
  // INVALID_PASSWORD: 'INVALID_PASSWORD',

  // Email Service Error Codes.
  SEND_EMAIL_FAILED:
    '이메일 전송 중 문제가 발생했습니다.\n잠시 후 다시 시도해 주세요.',
  INVALID_CODE: '인증번호가 올바르지 않거나 만료되었습니다.',

  // Captcha Service Error Codes.
  CAPTCHA_VERIFICATION_FAILED:
    'reCAPTCHA 인증에 문제가 발생했습니다.\n잠시 후 다시 시도해 주세요.',

  // Validation Error Codes.
  REQUIRED: (field) => `${fieldName(field)}(은)는 필수 입력 항목입니다.`,
  INVALID_FORMAT: (field) => `${fieldName(field)} 형식이 올바르지 않습니다.`,
  INVALID_LENGTH: (field) => `${fieldName(field)}의 길이가 올바르지 않습니다.`,
};
