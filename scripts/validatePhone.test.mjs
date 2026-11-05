import assert from 'node:assert/strict';
import test from 'node:test';
import { validatePhone } from '../src/lib/validatePhone.ts';

test('accepts Belarus international and domestic formatting', () => {
  for (const phone of [
    '+375 (29) 123-45-67',
    '375291234567',
    '8 (029) 123-45-67',
  ]) {
    assert.equal(validatePhone(phone), true, phone);
  }
});

test('rejects missing, incomplete, foreign and malformed numbers', () => {
  for (const phone of [
    '',
    '+375',
    '+375 29 123 45 678',
    '+7 999 123 45 67',
    'phone375291234567',
    '+375/29/1234567',
  ]) {
    assert.equal(validatePhone(phone), false, phone);
  }
});
