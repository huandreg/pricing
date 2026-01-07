import { useEffect, useState } from "react";
import PriceCard from "./components/PriceCard";

export type PayStructure = {
  name: string,
  pricePerMonth: number,
  features: string[];
}

const App = () => {


  const [payStructures, getStructures] = useState<PayStructure[]>([])

  useEffect(() => {
    fetch("data.json")
      .then(beJson => beJson.json())
      .then(toData => getStructures(toData))
  }, [])


  return (
    payStructures.map((item) => {
      return <PriceCard{...item} />
    })
  )
}

export default App

 //<div>{payStructures.length > 0 && "miafaszom" }</div>