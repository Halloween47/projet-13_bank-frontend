function FeatureItem(props) {
  return (
    <div className="feature-item">
      <img src={props.image} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{props.titre}</h3>
      <p>{props.texte}</p>
    </div>
  )
}
export default FeatureItem
