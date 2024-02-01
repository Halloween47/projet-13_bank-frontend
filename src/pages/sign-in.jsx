import Header from '../components/header'
import Footer from '../components/footer'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '../store/AuthSlice'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';


function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLoginEvent = (e) => {
    e.preventDefault()

    let userCredentials = {
      email,
      password,
    }

    dispatch(loginUser(userCredentials))
      .then((result) => {
        if (result.data.status === 200) {
          localStorage.setItem('token', JSON.stringify(result.data.body.token))
          navigate('/profil')
        }
      })
      .catch((error) => {
        console.error('Erreur lors de la connexion:', error)
        setError('Username ou/et password incorrect')
      })
  }

  return (
    <div className="sign-in">
      <Header />
      <main className="main bg-dark" id='mainUser'>
        <section className="sign-in-content">
          <FontAwesomeIcon icon={faCircleUser} />
          <h1>Sign In</h1>
          <form onSubmit={handleLoginEvent}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">
              {/* {loading ? 'Chargement...' : 'Sign In'} */}
              Sign In
            </button>
            {error && <h2 className="error">{error}</h2>}
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}
export default SignIn
