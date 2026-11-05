export function validatePhone(value: string) {
  if (!/^[+\d\s()-]+$/.test(value)) return false;
  const digits = value.replace(/\D/g, '');
  return /^(?:375\d{9}|80\d{9})$/.test(digits);
}
