import { Type } from 'class-transformer'
import {
  IsBoolean,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator'
import APIResponse from './response'

export enum CourseType {
  VIDEO = 'video',
  ONLINE = 'online',
  PHYSICAL = 'physical',
}

export enum CourseQuery {
  MOST_POPULAR = 'mostpopular',
  NEWEST = 'newest',
  TRENDING = 'trending',
}

export class Enrollment {
  @IsNumber() id: number
  @IsNumber() user_id: number
  @IsNumber() course_id: number
  @IsString() enroll_code: string

  @IsString() @IsOptional() created_at?: string
  @IsString() @IsOptional() updated_at?: string
  @IsString() @IsOptional() complete_at?: string

  @IsString() @IsOptional() review?: string
}

// prettier-ignore
export class Course {
  @IsNumber() id: number
  @IsString() title: string
  @IsString() subtitle: string
  @IsString() image: string
  @IsString() trailer: string
  @IsIn(Object.values(CourseType)) type: CourseType

  @IsString() @IsOptional() slug?: string
  @IsString() @IsOptional() link?: string
  @IsString() @IsOptional() zoom_link?: string

  @Type(() => Boolean) is_featured: boolean
  @Type(() => Boolean) is_active: boolean
  @Type(() => Boolean) is_enable_coming_soon: boolean
  @Type(() => Boolean) is_comingsoon: boolean

  @IsString() @IsOptional() course_datetime?: string
  @IsString() @IsOptional() difficulty?: string
  @IsString() @IsOptional() max_students?: string
  @IsString() @IsOptional() min_students?: string
  @IsString() @IsOptional() language?: string
  @IsString() @IsOptional() category?: string
  @IsString() @IsOptional() second_category?: string
  @IsString() @IsOptional() target_audience?: string
  @IsNumber() @IsOptional() avg_rating?: number

  @IsNumber() @IsOptional() instructor_id?: number
  @IsNumber() @IsOptional() co_instructor_id?: number
  @IsNumber() @IsOptional() number_of_session?: number
  @IsNumber() @IsOptional() duration_for_each_session?: number
  @IsString() @IsOptional() requirements?: string

  @IsString() @IsOptional() feature_image?: string

  @IsString() @IsOptional() coming_soon_end_time?: string
  @IsString() @IsOptional() comingsoon_endtime?: string

  @IsString() @IsOptional() created_at?: string
  @IsString() @IsOptional() updated_at?: string

  @Type(() => Enrollment) 
  @ValidateNested() 
  enrollment: Enrollment[]
}

export module CourseResponse {
  export class Get extends APIResponse.OK {
    @ValidateNested()
    @Type(() => Course)
    data: Course[]
  }
}
