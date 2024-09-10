import { useEffect, useState } from "react";
import ChartArea from "./ChartArea";

export default function ChartPercentChange() {
  const [chart, setChart] = useState();
  const [areaSeries, setAreaSeries] = useState();
  const [nombre, setNombre] = useState();
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {

  })

  return (
    <ChartArea setChart={ } setAreaSeries={ } />
  )
}
