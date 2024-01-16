import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav class="main-nav">
      <Link to="/" class="main-nav-logo">
        <img
          class="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link to="/login" class="main-nav-item">
          <i class="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  )
}
export default Header
