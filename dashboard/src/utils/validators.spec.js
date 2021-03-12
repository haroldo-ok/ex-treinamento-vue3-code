import {
  validateEmptyAndEmail,
  validateEmptyAndLength3
} from './validators'

describe('Validator utils', () => {
  it('should give an error with empty payload', () => {
    expect(validateEmptyAndLength3()).toBe('*Este campo é obrigatório')
  })

  it('should give an error with less than 3 characters payload', () => {
    expect(validateEmptyAndLength3('ab')).toBe('*Este campo precisa de, no mínimo, 3 caracteres')
  })

  it('should return true when you pass correct input', () => {
    expect(validateEmptyAndLength3('abcd')).toBe(true)
  })

  it('should give an error with an empty payload', () => {
    expect(validateEmptyAndEmail()).toBe('Este campo é obrigatório')
  })

  it('should give an error with an invalid email', () => {
    expect(validateEmptyAndEmail('bob')).toBe('*Este campo precisa ser um e-mail')
  })

  it('should return true when you pass a correct email', () => {
    expect(validateEmptyAndEmail('bob@example.com')).toBe(true)
  })
})
