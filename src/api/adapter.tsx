import { AuthUser } from '@Class/user'
import { useEffect } from 'react'
import { useAuthUserStore } from './user'

type ReduxStore = {
  _persist: {
    version: number
    rehydrated: boolean
  }
  accessToken: string | null
  user: AuthUser | null
}

type PersistedReduxStore = {
  [k in keyof ReduxStore]: Exclude<ReduxStore[k], null> extends Record<any, any>
    ? string | null
    : ReduxStore[k]
}
export default function PersistAdaptor() {
  const user = useAuthUserStore((state) => state.user)

  useEffect(() => {
    const storage = window.localStorage
    const data: ReduxStore = {
      _persist: {
        version: 0,
        rehydrated: true,
      },
      accessToken: null,
      user: null,
    } as const

    // @ts-expect-error
    const persisted: PersistedReduxStore = {
      ...data,
      _persist: JSON.stringify(data._persist),
    }

    if (user == null) {
      storage.setItem('persist:user', JSON.stringify(persisted))
      return
    }

    persisted.user = JSON.stringify(user)
    persisted.accessToken = JSON.stringify(user.token)
    storage.setItem('persist:user', JSON.stringify(persisted))
  }, [user])
  return <></>
}
