function Welcome() {
  const lastname = localStorage.getItem('lastname');
  const firstname = localStorage.getItem('firstname');
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {/* Tony Jarvis! */}
        {firstname +' '+ lastname}
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  )
}
export default Welcome
