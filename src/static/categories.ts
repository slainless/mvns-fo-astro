import CategoryAPI from '@Api/category'
import { CategoryResponse } from '@Class/category'

const response = await CategoryAPI.all()
if (!(response.data instanceof CategoryResponse.Get))
  throw new Error('Failed to fetch categories')

const Categories = response.data.data
export default Categories
