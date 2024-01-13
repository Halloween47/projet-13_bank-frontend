function FeatureItem(props) {
  return (
    <div class="feature-item">
      <img src={props.image} alt="Chat Icon" class="feature-icon" />
      <h3 class="feature-item-title">{props.titre}</h3>
      <p>{props.texte}</p>
    </div>
  )
}
export default FeatureItem
