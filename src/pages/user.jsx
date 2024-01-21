import { useDispatch } from 'react-redux'
import { fetchUserProfile } from '../Store/AuthSlice'
import Account from '../components/account'
import Footer from '../components/footer'
import Header from '../components/header'
import Welcome from '../components/welcome'

function User() {
  const dispatch = useDispatch();
  dispatch(fetchUserProfile()).then((result) => {
    if (result.meta.requestStatus === 'fulfilled') {
      console.log('fetch AUTORISE')
      console.log(result)
      console.log(localStorage.getItem('user'));
   } else {
      console.log('fecth NON AUTORISE')
    }
  })
  return (
    <div className="App">
      <Header />
      <main class="main bg-dark">
        <Welcome />
        <h2 class="sr-only">Accounts</h2>
        <Account
          compte="Argent Bank Checking (x8349)"
          sommes="$2,082.79"
          balance="Available Balance"
        />
        <Account
          compte="Argent Bank Savings (x6712)"
          sommes="$10,928.42"
          balance="Available Balance"
        />
        <Account
          compte="Argent Bank Credit Card (x8349)"
          sommes="$184.30"
          balance="Current Balance"
        />
      </main>
      <Footer />
    </div>
  )
}
export default User
