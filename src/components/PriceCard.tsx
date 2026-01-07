import type { PayStructure } from "../App"

const PriceCard = (props: PayStructure) => {
  return (
<section className="container">
    <div className="whole-card">
      <h2>{props.name}</h2>
      <h1>{props.pricePerMonth === 0 ? "Free" : "$" + props.pricePerMonth }</h1>
      <div className="feature-div">{props.features.map((item)=>{return <h5>{item}</h5>})}</div>
      <div className="try-button">Try for Free</div>
    </div>
</section>
  )
}

export default PriceCard