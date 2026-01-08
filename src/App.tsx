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
  const [toggleState, setToggle] = useState<boolean>(false)


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
            return <PriceCard {...item} toggleState={toggleState}/>
          }) : "LOADING..."}
      </div>
      <div className="toggle-container"><ToggleSwitch toggleState={toggleState} setToggle={setToggle} /></div>
    </div>

  )
}

export default App
