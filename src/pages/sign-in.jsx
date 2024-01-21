import { useState } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import User from '../pages/user'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { accessToken, fetchUserProfile, loginUser } from '../Store/AuthSlice'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // const { loading, error } = useSelector((state) => state.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLoginEvent = (e) => {
    e.preventDefault()
    let userCredentials = {
      email,
      password,
    }
    dispatch(loginUser(userCredentials)).then((result) => {
      if (result.meta.requestStatus === 'fulfilled') {
        // navigate('/user')
        console.log('ACCES AUTORISE')
        console.log(result)
        console.log(localStorage.getItem('user'));

     } else {
        console.log('ACCES NON AUTORISE')
      }
    })
    dispatch(fetchUserProfile()).then((result) => {
      console.log(result);
    })
  }

  return (
    <div className="sign-in">
      <Header />
      <main class="main bg-dark">
        <section class="sign-in-content">
          <i class="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleLoginEvent}>
            <div class="input-wrapper">
              <label for="username">Username</label>
              <input
                type="text"
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
              />
            </div>
            <div class="input-wrapper">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
            <div class="input-remember">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <button class="sign-in-button">
             {/* {loading ? 'Chargement...' : 'Sign In'} */}
             'Sign In'
            </button>
            {/* {error && <h2 className="error">{error}</h2>} */}
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}
export default SignIn
