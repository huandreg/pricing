import { useEffect, useState } from "react";
import PriceCard from "./components/PriceCard";
import ToggleSwitch from "./components/ToggleSwitch";

export type PayStructure = {
  name: string,
  pricePerMonth: number,
  features: string[],
  highlighted: boolean
}

const App = () => {

  const [payStructures, getStructures] = useState<PayStructure[]>([])

  useEffect(() => {
    fetch("data.json")
      .then(beJson => beJson.json())
      .then(toData => getStructures(toData))
  }, [])


  return (
    <div className="outer-container">
      <div className="price-card-line">
        {payStructures.length > 0 ?
          payStructures.map((item) => {
            return <PriceCard {...item} />
          }) : "LOADING..."}
      </div>
      <div className="toggle-container"><ToggleSwitch /></div>
    </div>

  )
}

export default App
