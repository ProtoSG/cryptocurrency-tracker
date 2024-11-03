import DolarIcon from "../../assets/icons/DolarIcon";
import StarIcon from "../../assets/icons/StarIcon";
import { Box } from "../../components";
import { useCryptoSelected } from "../core/hooks/useCrypto";

export default function FavoriteCryptos() {
  const { cryptos } = useCryptoSelected();
  return (
    <section className="pb-8 pr-8">
      <Box className="pb-0 flex flex-col gap-8">
        <h3 className="text-3xl">Favoritos</h3>
        <div className="flex gap-4 overflow-x-scroll pb-4">
          {
            cryptos.map((crypto) => (
              <div className="border-[1px] min-w-56 border-zinc-400 h-min rounded-lg px-2 py-3 flex gap-3 flex-col">
                <div className="flex justify-between items-center">
                  <small className="text-nowrap">{crypto.name}</small>
                  <StarIcon />
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex text-2xl items-center">
                    <DolarIcon />
                    {crypto.quote.USD.price > 10 ? crypto.quote.USD.price.toFixed(2) : crypto.quote.USD.price.toFixed(6)}
                  </span>
                  <small className="border-[1px] rounded-full px-2">{crypto.quote.USD.percent_change_24h.toFixed(2)}%</small>
                </div>
              </div>
            ))
          }
        </div>
      </Box>
    </section>
  )
}
