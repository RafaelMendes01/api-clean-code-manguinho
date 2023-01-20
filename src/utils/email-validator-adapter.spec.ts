import { EmailValidatorAdapter } from './email-validator'

describe('Emailvalidator adapter', () => {
  test('shoul returns false if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(false)
  })
})
