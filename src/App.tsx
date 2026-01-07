import { useEffect, useState } from "react";

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
    <div></div>
  )
}

export default App