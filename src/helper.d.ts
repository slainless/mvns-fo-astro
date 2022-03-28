declare type ReactHTML = import('react').ReactHTML
declare type FunctionComponent<P> = import('react').FunctionComponent<P>
declare type HTMLAttributes<T> = import('react').HTMLAttributes<T>
declare type HTMLAttr<T extends keyof ReactHTML> = Parameters<ReactHTML[T]>[0] &
  HTMLAttributes<HTMLElement>
declare type OneOrMany<T> = T | T[]
declare type HTMLAs<
  T extends Record<string, any> & { as: keyof ReactHTML },
  K extends keyof ReactHTML
> = {
  [Tag in keyof ReactHTML]: T & HTMLAttr<Tag>
}[K]
declare type ModKeys<T extends import('@Functions/style-helper').Mods> =
  OneOrMany<keyof T['mods']>
