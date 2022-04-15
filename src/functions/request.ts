import APIResponse from '@Class/response'
import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'
import ky, { HTTPError, Options } from 'ky'

type ClassOf<T extends Record<any, any>> = {
  [k in keyof T]: InstanceType<T[k]>
}
type Result<A, B> = ClassOf<Omit<A, keyof B> & B>
const defaultResponseType = {
  200: APIResponse.OK,
  201: APIResponse.Created,
  401: APIResponse.Unauthorized,
  500: APIResponse.InternalError,
  default: APIResponse.Generic,
}
export async function requestJSON<
  T extends { [k in number | 'default']?: typeof APIResponse.Generic } = {}
>(
  url: Parameters<typeof ky>[0],
  options: Options & {
    responseType?: T
  }
): Promise<{
  data: Result<typeof defaultResponseType, T>[keyof Result<
    typeof defaultResponseType,
    T
  >]
  response: Response
  code: number
  error?: HTTPError
}> {
  const { responseType, ...rest } = options

  let rawJSON
  let code: number
  let response: Response
  let error: HTTPError | undefined = undefined
  try {
    response = await ky(url, rest)
    rawJSON = await response.json()
    code = response.status
  } catch (e) {
    if (!(e instanceof HTTPError)) throw e
    response = e.response
    rawJSON = await response.json()
    code = response.status
    error = e
  }

  const mergedDataType = Object.assign({}, defaultResponseType, responseType)
  const dataType = mergedDataType[code] ?? mergedDataType.default

  const data = dataType
    ? // @ts-ignore
      plainToInstance(dataType, rawJSON)
    : plainToInstance(APIResponse.Generic, rawJSON)

  if ((await validate(data)).length > 0) {
    throw new Error('Response mismatch!')
  }

  // @ts-expect-error
  return {
    data,
    code,
    response,
    error,
  }
}
