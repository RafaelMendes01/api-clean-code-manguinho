import { httpRequest as HttpRequest, httpResponse as HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-params-error'
import { BadRequest } from '../helpers/http-helpers'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse | any {
    const requiredFields = ['name', 'email']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return BadRequest(new MissingParamError(field))
      }
    }
  }
}
