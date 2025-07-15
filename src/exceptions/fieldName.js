export const fieldName = (field) => {
  const map = {
    email: '이메일',
    password: '비밀번호',
    code: '인증번호',
    originalUrl: 'URL',
    alias: 'URL 별칭',
    activeDate: 'URL 활성일',
    expireDate: 'URL 만료일',
    refreshToken: 'Refresh Token',
    captchaToken: 'Captcha Token',
  };

  return map[field] || field;
};
