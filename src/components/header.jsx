import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function Header() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const firstname = localStorage.getItem('firstname');
  
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
      {isAuthenticated ? (
        <>
          <Link to="/profile" className='profileAuthentificated'>
{firstname}
          </Link>
          <Link to="/" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign Out
        </Link>
        </>
        ) : (
          <Link to="/login" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
        )}
        {/* <Link to="/login" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          {isAuthenticated ? 'Sign Out' : 'Sign In'}
        </Link> */}
        
      </div>
    </nav>
  )
}
export default Header
