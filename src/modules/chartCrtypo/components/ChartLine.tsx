import { Box } from "@mui/material";
import { axisClasses, LineChart } from "@mui/x-charts";
import { useHistorialPriceProvider } from "../hooks/useHistorialPrice";
import { useCryptoSelected } from "../../core/hooks/useCrypto";

export default function ChartLine() {
  const { cryptoSelected } = useCryptoSelected();

  if (cryptoSelected === null) {
    return <div>Crypto not found</div>
  }

  const { historialPrice, loading } = useHistorialPriceProvider({ id: cryptoSelected.id });

  if (loading) return <p>Loading...</p>

  const dataset = historialPrice.map((item) => ({ day: item.date, value: item.price }));

  const valueFormatter = (value: number | null) => `${value}`;

  return (
    <Box className="h-full" sx={{ width: '100%', height: '100%' }}>
      <LineChart
        dataset={dataset}
        xAxis={[
          {
            scaleType: 'point',
            dataKey: 'day',
            valueFormatter: (day, context) =>
              context.location === 'tick'
                ? `${day.slice(5, 10)}`
                : `${day}`,
          },
        ]}
        series={[{ dataKey: 'value', valueFormatter }]}
        height={400}
        sx={{
          [`& .${axisClasses.bottom}, & .${axisClasses.left}, & .${axisClasses.line}, & .${axisClasses.tick}`]: {
            stroke: "#ffffff",
          },
        }}
      />
    </Box>
  )
}
