import { httpRequest as HttpRequest, httpResponse as HttpResponse } from './http'
export interface Controller {
  handle (httpRequest: HttpRequest): Promise<HttpResponse>
}
