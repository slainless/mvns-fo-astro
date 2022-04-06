export enum Role {
  NONE = 0,
  STUDENT = 0b0001,
  INSTRUCTOR = 0b0010,
  BUSINESS = 0b0100,
}

export class RoleClass {
  private role: number
  constructor(roles: Role[]) {
    this.role = roles.length > 0 ? roles.reduce((p, c) => p | c) : 0
  }

  is(role: number | Role | Role[]): boolean
  is(...roles: Role[]): boolean
  is(...roles: (Role | Role[])[]) {
    const first = roles[0]
    if (roles.length === 1 && !Array.isArray(first)) {
      return first === this.role
    }
    const _roles = (Array.isArray(first) ? first : roles) as Role[]

    const all = _roles.reduce((p: Role, c: Role) => p | c)
    return this.role === all
  }

  and(role: number | Role | Role[]): boolean
  and(...roles: Role[]): boolean
  and(...roles: (Role | Role[])[]) {
    const first = roles[0]
    if (roles.length === 1 && !Array.isArray(first)) {
      return first === 0 ? false : (this.role & first) === first
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
