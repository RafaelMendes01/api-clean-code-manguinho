import { httpRequest as HttpRequest, httpResponse as HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-params-error'
import { BadRequest } from '../helpers/http-helpers'
import { Controller } from '../protocols/controller'

export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse | any {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return BadRequest(new MissingParamError(field))
      }
    }
  }
}
