import { httpRequest as HttpRequest, httpResponse as HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-params-error'
import { BadRequest, serverError } from '../helpers/http-helpers'
import { Controller } from '../protocols/controller'
import { EmailValidator } from '../protocols/email-validator'
import { InvalidParamError } from '../errors/invalid-param-error'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator
  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse | any {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return BadRequest(new MissingParamError(field))
        }
      }
      if (httpRequest.body.passwordConfirmation !== httpRequest.body.password) {
        return BadRequest(new InvalidParamError('passwordConfirmation'))
      }
      const isValid = this.emailValidator.isValid(httpRequest.body.email)
      if (!isValid) {
        return BadRequest(new InvalidParamError('email'))
      }
    } catch (error) {
      return serverError()
    }
  }
}
