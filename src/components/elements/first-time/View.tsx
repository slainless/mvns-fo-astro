import Section from '@Blocks/Section'
import Item from './Item'
import { Common as Button } from '@Bits/Button'
import { Category } from '@Class/category'
import { useForm } from 'react-hook-form'
import { useRequest } from 'ahooks'
import InterestAPI from '@Api/interest'
import Loader from 'react-loaders'
import { useEffect } from 'react'
import { InterestResponse } from '@Class/interest'
import toast from 'react-hot-toast'
import { useAuthUserStore } from '@Api/user'

type Props = HTMLAttr<'div'> & {
  categories: Category[]
}
export default function FirstTime(props: Props) {
  const setInterest = useAuthUserStore((state) => state.setInterest)
  const {
    data: result,
    loading,
    error,
    run: request,
  } = useRequest(InterestAPI.set, {
    manual: true,
  })
  useEffect(() => {
    if (result == null) return
    if (result.data instanceof InterestResponse.Add) {
      toast.success('Interested categories added!')
      setInterest(result.data.data)
      window.location.href = '/'
    }
  }, [result])

  const { categories } = props

  return (
    <Section.Container className="flex flex-col items-center gap-8">
      <form
        style={{
          display: 'contents',
        }}
        onSubmit={(e) => {
          e.preventDefault()
          const ids = Object.values(
            Object.fromEntries(new FormData(e.target as HTMLFormElement))
          )
          request(ids.map((v) => +v))
        }}
      >
        <Section.Title>What topics do you find interesting?</Section.Title>
        <Section.Content className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-3 sm:gap-y-8">
          {categories.map((category) => {
            // const registerProps = { ...register(`keyword_id[${category.id}]`) }
            return (
              <Item
                name={`keyword_id[${category.id}]`}
                title={category.keyword}
                key={category.slug + '_' + category.id}
                value={category.id}
              />
            )
          })}
        </Section.Content>
        <Button
          type="submit"
          className="w-32"
          mods={['fill-red', 'to-outline-red', 'hover-darker-fill']}
        >
          {loading ? <Loader type="ball-pulse" active /> : 'Save'}
        </Button>
      </form>
    </Section.Container>
  )
}
