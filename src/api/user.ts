import create from 'zustand'
import { persist } from 'zustand/middleware'
import { LoginResponse, RegisterResponse, User } from '@Class/user'
import join from 'url-join'
import { isEmpty } from 'lodash-es'
import { requestJSON } from '@Functions/request'
import Endpoints from './endpoint'

export function login(input: { email: string; password: string }) {
  const { email, password } = input

  if (isEmpty(email) || isEmpty(password)) {
    throw new Error('Email or password should not be empty!')
  }

  return requestJSON(Endpoints.LOGIN, {
    method: 'post',
    json: input,
    headers: {
      Accept: 'application/json',
    },
    responseType: {
      200: LoginResponse,
    },
  })
}

export function register(input: {
  firstname: string
  lastname: string
  email: string
  password: string
}) {
  const { firstname, lastname, email, password } = input

  if (
    isEmpty(email) ||
    isEmpty(password) ||
    isEmpty(firstname) ||
    isEmpty(lastname)
  ) {
    throw new Error(`There can't be an empty input!`)
  }

  return requestJSON(Endpoints.STUDENT_REGISTER, {
    method: 'post',
    json: input,
    headers: {
      Accept: 'application/json',
    },
    responseType: {
      201: RegisterResponse,
    },
  })
}

export type UserStore = {
  user: User | null
  setUser: (user: User) => void
  removeUser: () => void
}
export const useUserStore = create<UserStore>(
  persist(
    (set, get) => ({
      user: null,
      setUser: (user: User) => set({ user }),
      removeUser: () => set({ user: null }),
    }),
    {
      name: 'user',
    }
  )
)
