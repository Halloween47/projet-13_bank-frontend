import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOut } from '../store/AuthSlice'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const firstname = localStorage.getItem('firstname')
  
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
      <div  className="main-nav-links">
        {isAuthenticated && localStorage.getItem('token') !== null ? (
          <>
            <Link to="/user" className="profileAuthentificated">
              <FontAwesomeIcon icon={faCircleUser} />
              {firstname}

              </Link>
            <Link to="/" className="main-nav-item" onClick={logOut}>
              {/* <Link to="/" className="main-nav-item" > */}
              <FontAwesomeIcon icon={faRightFromBracket} />
                  Sign Out
            </Link>
          </>
        ) : (
          <Link to="/login" className="main-nav-item">
            <FontAwesomeIcon icon={faCircleUser} />
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
