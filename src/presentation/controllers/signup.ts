import { httpRequest as HttpRequest, httpResponse as HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-params-error'
import { BadRequest } from '../helpers/http-helpers'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return BadRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return BadRequest(new MissingParamError('email'))
    } else {
      return {
        statusCode: 200,
        body: new Error('all data is correctly')
      }
    }
  }
}
