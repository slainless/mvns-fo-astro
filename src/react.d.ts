declare type ReactHTML = import('react').ReactHTML
declare type FunctionComponent<P> = import('react').FunctionComponent<P>
declare type HTMLAttributes<T> = import('react').HTMLAttributes<T>
declare type HTMLAttr<T extends keyof ReactHTML> = Parameters<ReactHTML[T]>[0] &
  HTMLAttributes<HTMLElement>
