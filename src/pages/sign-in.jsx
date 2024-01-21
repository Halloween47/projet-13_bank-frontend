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
    // let userCredentials = {
    //   email,
    //   password,
    // }
    // dispatch(loginUser(userCredentials)).then((result) => {
    dispatch(loginUser()).then((result) => {
      if (result.meta.requestStatus === 'fulfilled') {
        // navigate('/user')
        console.log('ACCES AUTORISE')
        // console.log(JSON.stringify(result))
        // console.log(localStorage.getItem('user'));
        // console.log(localStorage.getItem('profile'));
        
        // console.log(localStorage.getItem('lastname'));
        // console.log(localStorage.getItem('firstname'));

        // console.log(localStorage.getItem('token'));


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
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
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
