import { Type } from 'class-transformer'
import {
  IsArray,
  IsIn,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator'
import APIResponse from './response'

export enum Role {
  STUDENT = 'student',
  INSTRUCTOR = 'instructor',
  ADMIN = 'admin',
}

// prettier-ignore
export class User {
  // must-have fields
  @IsNumber() id: number
  @IsString() firstname: string
  @IsString() lastname: string
  @IsString() email: string
  @IsIn(Object.values(Role)) role: Role

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

export module UserResponse {
  export class Register extends APIResponse.Created {
    @ValidateNested()
    @Type(() => User)
    data: User
  }

  export class Login extends APIResponse.OK {
    @ValidateNested()
    @IsOptional()
    @Type(() => User)
    data?: User
  }
}
