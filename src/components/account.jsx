function Account(props) {
  return (
    <section class="account">
      <div class="account-content-wrapper">
        {/* <h3 class="account-title">Argent Bank Checking (x8349)</h3> */}
        <h3 class="account-title">{props.compte}</h3>
        <p class="account-amount">{props.sommes}</p>
        <p class="account-amount-description">{props.balance}</p>
      </div>
      <div class="account-content-wrapper cta">
        <button class="transaction-button">View transactions</button>
      </div>
    </section>
  )
}
export default Account
