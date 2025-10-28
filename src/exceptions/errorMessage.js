import { ERROR_CODES } from './errorCode';
import { fieldName } from './fieldName';

export const ERROR_MESSAGES = {
  // Unexpected Error Messages.
  [ERROR_CODES.UNKNOWN_ERROR]:
    '알 수 없는 오류가 발생했습니다.\n새로고침 후 다시 시도해 주세요.',
  [ERROR_CODES.VALIDATION_ERROR]:
    '알 수 없는 오류가 발생했습니다.\n새로고침 후 다시 시도해 주세요.',

  // Common Error Messages.
  [ERROR_CODES.INVALID_REQUEST]:
    '잘못된 요청입니다.\n새로고침 후 다시 시도해 주세요.',
  [ERROR_CODES.INVALID_TOKEN]:
    '유효하지 않은 토큰입니다.\n새로고침 후 다시 시도해 주세요.',
  [ERROR_CODES.USER_NOT_FOUND]: '존재하지 않는 사용자입니다.',
  [ERROR_CODES.EMAIL_CONFLICTED]: '이미 사용 중인 이메일입니다.',

  // Url Service Error Messages.
  [ERROR_CODES.URL_NOT_FOUND]: '존재하지 않는 URL입니다.',
  [ERROR_CODES.INVALID_URL_SCHEME]:
    'URL은 http:// 또는 https://로 시작해야 합니다.',
  [ERROR_CODES.INVALID_URL_FORMAT]: 'URL 형식이 올바르지 않습니다.',
  [ERROR_CODES.URL_NOT_ACTIVATED]: '아직 활성화되지 않은 URL입니다.',
  [ERROR_CODES.URL_EXPIRED]: '이 URL은 만료되었습니다.',
  [ERROR_CODES.ADVANCED_SETTINGS_UNAUTHORIZED]:
    '고급 설정은 로그인 후 이용 가능합니다.',

  // User Service Error Messages.
  [ERROR_CODES.INVALID_EMAIL_OR_PASSWORD]:
    '이메일 또는 비밀번호가 올바르지 않습니다.',
  [ERROR_CODES.INVALID_PASSWORD]: '비밀번호가 일치하지 않습니다.',
  [ERROR_CODES.INVALID_CURRENT_PASSWORD]: '현재 비밀번호가 일치하지 않습니다.',
  [ERROR_CODES.RESET_PASSWORD_EXPIRED]:
    '이 비밀번호 재설정 URL은 만료되었습니다.',

  // Email Service Error Messages.
  [ERROR_CODES.SEND_EMAIL_FAILED]:
    '이메일 전송 중 문제가 발생했습니다.\n잠시 후 다시 시도해 주세요.',
  [ERROR_CODES.INVALID_CODE]: '인증번호가 올바르지 않거나 만료되었습니다.',

  // Captcha Service Error Messages.
  [ERROR_CODES.CAPTCHA_VERIFICATION_FAILED]:
    'reCAPTCHA 인증에 문제가 발생했습니다.\n잠시 후 다시 시도해 주세요.',

  // Validation Error Messages.
  [ERROR_CODES.REQUIRED]: (field) =>
    `${fieldName(field)}(은)는 필수 입력 항목입니다.`,
  [ERROR_CODES.INVALID_FORMAT]: (field) =>
    `${fieldName(field)} 형식이 올바르지 않습니다.`,
  [ERROR_CODES.INVALID_LENGTH]: (field) =>
    `${fieldName(field)}의 길이가 올바르지 않습니다.`,
  [ERROR_CODES.LENGTH_OVERFLOW]: (field) =>
    `${fieldName(field)}의 길이가 너무 깁니다.`,
};
