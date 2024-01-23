import { useState } from 'react'

function Welcome(props) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isVisible, setIsVisible] = useState(false);

  const handleSave = () => {
    console.log('Nom:', lastName)
    console.log('Prénom:', firstName)
  }

  const handleCancel = () => {
    setFirstName('')
    setLastName('')
  }
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {props.firstName + ' ' + props.lastName}
      </h1>
      <button className="edit-button"  onClick={handleToggle}>Edit Name</button>
      {/* <div className="editName"> */}
      <div className={` ${isVisible ? 'editName-visible' : 'editName-hidden'}`}>
        <div className="editName-gauche">
        <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Prenom"
            />
            <button onClick={handleSave}>Enregistrer</button>
        </div>
        <div className="editName-droite">
        <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Nom"
            />
            <button onClick={handleCancel}>Annuler</button>
        </div>

        
      </div>
    </div>
  )
}
export default Welcome
