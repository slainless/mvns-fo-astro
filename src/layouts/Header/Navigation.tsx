import { useMemo, useEffect, useState } from 'preact/hooks'
import isBrowser from '@Functions/isBrowser'
import { getUser, Role, User } from '@Api/user'

const Container = ({ children }: any) => (
  <nav class="flex items-center justify-end gap-6" id="navigation">
    {children}
  </nav>
)

export default function Navigation() {
  const defaultNav = (
    <>
      <a>Become Instructor</a>
      {/* <a>For Business</a> */}
      <a>Log In</a>
      <a>Register</a>
    </>
  )

  if (!isBrowser) return <Container>{defaultNav}</Container>

  const user: User | null = useMemo(getUser, [])

  return (
    <nav class="flex items-center justify-end gap-6" id="navigation">
      {user == null || user.role.is(0) ? (
        defaultNav
      ) : user.role.or(Role.STUDENT | Role.INSTRUCTOR) ? (
        <>
          <a>This is for student/instructor</a>
        </>
      ) : (
        <></>
      )}
    </nav>
  )
}
