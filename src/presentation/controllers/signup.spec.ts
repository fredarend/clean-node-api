import { SignUpController } from './signup'

describe('Signup Controller', () => {
  test('Should be return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'any@email.com',
        password: 'anypassword',
        passwordConfirmation: 'anypassword',
      },
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})