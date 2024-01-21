function Account(props) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        {/* <h3 className="account-title">Argent Bank Checking (x8349)</h3> */}
        <h3 className="account-title">{props.compte}</h3>
        <p className="account-amount">{props.sommes}</p>
        <p className="account-amount-description">{props.balance}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  )
}
export default Account
