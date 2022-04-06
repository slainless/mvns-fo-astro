import {
  IsArray,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator'
import { CreatedResponse, OKResponse } from './response'

// prettier-ignore
export class User {
  // must-have fields
  @IsNumber() id: number
  @IsString() firstname: string
  @IsString() lastname: string
  @IsString() email: string

  // other
  @IsArray() student_interest: any[]

  // credential
  @IsString() token: string

  // optional fields
  @IsString() @IsOptional() email_verified_at?: string
  @IsString() @IsOptional() nickname?: string
  @IsString() @IsOptional() birthdate?: string
  @IsString() @IsOptional() country?: string
  @IsString() @IsOptional() phone?: string
  @IsString() @IsOptional() link_twitter?: string
  @IsString() @IsOptional() link_facebook?: string
  @IsString() @IsOptional() link_youtube?: string
  @IsString() @IsOptional() image?: string
  @IsString() @IsOptional() provider?: string
  @IsString() @IsOptional() id_provider?: string
  @IsString() @IsOptional() created_at?: string
  @IsString() @IsOptional() updated_at?: string
}

export class RegisterResponse extends CreatedResponse {
  @ValidateNested()
  data: User
}

export class LoginResponse extends OKResponse {
  @ValidateNested()
  data: User
}
