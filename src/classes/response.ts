import { Equals, IsNumber, IsOptional, IsString } from 'class-validator'

// prettier-ignore
export class GenericResponse {
  @IsOptional() @IsNumber() code?: number
  @IsString() message: string
}

// prettier-ignore
export class CreatedResponse extends GenericResponse {
  @Equals(201) code: 201
}

// prettier-ignore
export class OKResponse extends GenericResponse {
  @Equals(200) code: 200
  @Equals(true) success: true
  @IsOptional() data?: any
}

// prettier-ignore
export class UnauthorizedResponse extends GenericResponse {
  @Equals(401) code: 401
  @Equals(false) success: false
  @IsOptional() data?: any
}

// prettier-ignore
export class InternalErrorResponse extends GenericResponse {
  @IsOptional() @Equals(500) code?: 500
  @IsOptional() @IsString() exception?: string
}
