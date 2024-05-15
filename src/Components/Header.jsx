
import '../all.min.css'
import '../style/header.css'
import Headeright from './HeaderLeft';
import Logo from './Logo';
import Nav from './Nav';

function Header() {
  return (
    <header className="header  container">
      <Logo/>
      <Nav/>
      <Headeright/>
    </header>
  )
}

export default Header
