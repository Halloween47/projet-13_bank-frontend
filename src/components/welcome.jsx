function Welcome(props) {
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {/* Tony Jarvis! */}
        {props.firstName +' '+ props.lastName}
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  )
}
export default Welcome
