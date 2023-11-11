function Feature({ icon, altIcon, title, text }) {
  return (
    <div className="feature-item">
      <img src={icon} alt={altIcon} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Feature
