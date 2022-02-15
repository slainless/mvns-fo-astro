import Navigation from './Header/Navigation'
import Search from './Header/Search'

export default function Header() {
  return (
    <header class="px-20 grid grid-cols-3">
      <img id="logo" src="/image/logo.png" class="h-20"></img>
      <Search />
      <Navigation />
    </header>
  )
}
