export const fieldName = (field) => {
  const map = {
    email: '이메일',
    password: '비밀번호',
    code: '인증번호',
    originalUrl: 'URL',
    alias: 'URL 별칭',
    activeDate: 'URL 활성일',
    expireDate: 'URL 만료일',
    token: '토큰',
    refreshToken: 'Refresh 토큰',
    captchaToken: 'Captcha 토큰',
  };

  return map[field] || field;
};
