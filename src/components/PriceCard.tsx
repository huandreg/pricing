import type { PayStructure } from "../App"

const PriceCard = (props: PayStructure & {toggleState: boolean}) => {
  function buttonClick(prop: string) {
    alert(prop + " plan chosen!");
  }
  const currentPrice = props.toggleState ? 11*props.pricePerMonth : 1*props.pricePerMonth

  return (
    <div className={props.highlighted ? "whole-card highlighted" : "whole-card"}>
      <h2>{props.name}</h2>
      <h1>{props.pricePerMonth === 0 ? "Free" : "$" + currentPrice}</h1>
      <h5>{props.toggleState ? "/yearly" : "/monthly"}</h5>
      <div className="feature-div">{props.features.map((item) => { return <h4>{item}</h4> })}</div>
      <div className="try-button" key={props.name} onClick={() => buttonClick(props.name)}>Try for Free</div>
    </div>
  )
}

export default PriceCard