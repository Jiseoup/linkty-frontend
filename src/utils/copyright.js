export function getCopyrightText() {
  const startYear = 2025;
  const currentYear = new Date().getFullYear();

  let copyrightYear = '';

  if (startYear === currentYear) {
    copyrightYear = `${startYear}.`;
  } else {
    copyrightYear = `${startYear}-${currentYear}.`;
  }

  return `COPYRIGHT © ${copyrightYear} Linkty. ALL RIGHTS RESERVED.`;
}
