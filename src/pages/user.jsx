import Account from '../components/account'
import Footer from '../components/footer'
import Header from '../components/header'
import Welcome from '../components/welcome'

function User() {
  return (
    <div className="App">
      <Header />
      <main className="main bg-dark">
        <Welcome />
        <h2 className="sr-only">Accounts</h2>
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
