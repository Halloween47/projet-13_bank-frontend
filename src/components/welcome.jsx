import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { editProfileName } from '../store/AuthSlice';
import { editProfileName } from '../store/EditProfileSlice'

function Welcome(props) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  const dispatch = useDispatch()
  // const token = localStorage.getItem('token')
  const token = useSelector((state) => state.auth.token)


  const handleSave = () => {
    dispatch(editProfileName(firstName, lastName, token)).then((result) => {
      setFirstName(firstName)
      setLastName(lastName)
      setIsVisible(false)

      localStorage.setItem('firstname', firstName)
    })

  }
  const handleCancel = () => {
    setFirstName('')
    setLastName('')
  }
  const handleToggle = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {firstName && lastName !== '' ? firstName + ' ' + lastName : props.firstName + ' ' + props.lastName }
        {/* {props.firstName + ' ' + props.lastName} */}
        {/* {firstName + ' ' + lastName} */}
      </h1>
      <button className="edit-button" onClick={handleToggle}>
        Edit Name
      </button>
      {/* <div className="editName"> */}
      <div className={` ${isVisible ? 'editName-visible' : 'editName-hidden'}`}>
        <div className="editName-gauche">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Prenom"
          />
          <button onClick={handleSave}>Enregistrer</button>
        </div>
        <div className="editName-droite">
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Nom"
          />
          <button onClick={handleCancel}>Annuler</button>
        </div>
      </div>
    </div>
  )
}
export default Welcome
