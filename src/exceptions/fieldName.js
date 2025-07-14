export const fieldName = (field) => {
  const map = {
    email: '이메일',
    password: '비밀번호',
    code: '인증번호',

    // Not Null 값들
    // refreshToken: '',
    // captchaToken: '',
    // originalUrl: '',

    // Nullable 값들
    // alias: '',
    // activeDate: '',
    // expireDate: '',
  };

  return map[field] || field;
};
