import { plainToInstance } from 'class-transformer'

export enum Role {
  NONE = 0,
  STUDENT = 0b0001,
  INSTRUCTOR = 0b0010,
  BUSINESS = 0b0100,
}

class RoleClass {
  private role: number
  constructor(roles: Role[]) {
    console.log('what the asd', roles)
    this.role = roles.length > 0 ? roles.reduce((p, c) => p | c) : 0
  }

  is(role: number | Role | Role[]): boolean
  is(...roles: Role[]): boolean
  is(...roles: (Role | Role[])[]) {
    const first = roles[0]
    if (roles.length === 1 && !Array.isArray(first)) {
      return first === 0
        ? this.role === Role.NONE
        : (this.role & first) === first
    }
    const _roles = (Array.isArray(first) ? first : roles) as Role[]

    const all = _roles.reduce((p: Role, c: Role) => p | c)
    return (this.role & all) === all
  }

  or(role: number | Role | Role[]): boolean
  or(...roles: Role[]): boolean
  or(...roles: (Role | Role[])[]) {
    const first = roles[0]
    if (roles.length === 1 && !Array.isArray(first)) {
      return first === 0 ? this.role > 0 : (this.role & first) > 0
    }
    const _roles = (Array.isArray(first) ? first : roles) as Role[]

    const all = _roles.reduce((p: Role, c: Role) => p | c)
    return (this.role & all) > 0
  }

  addRole(role: Role) {}

  getRole() {}
}

export class User {
  name!: string
  role!: RoleClass
}

const mockUser = {
  name: 'Muhammad al-Fatih',
  role: new RoleClass([Role.STUDENT]),
}
export function getUser(): User | null {
  return mockUser
}
