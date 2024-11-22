import { StarFilledIcon } from "../../assets/icons";
import DolarIcon from "../../assets/icons/DolarIcon";
import { Box } from "../../components";
import { useFavoriteCryptos } from "../../hooks/useFavoriteCryptos";
import { DataItem } from "../../model/data.mode";
import { useCryptoSelected } from "../core/hooks/useCrypto";

export default function FavoriteCryptos() {
  const { favoriteCryptos } = useFavoriteCryptos();
  const { setCryptoSelected } = useCryptoSelected()

  const handleSelectCrypto = (crypto: DataItem) => {
    setCryptoSelected(crypto)
  }

  return (
    <section className="pb-8 md:pr-8">
      <Box className="pb-0 flex flex-col gap-8">
        <h3 className="text-3xl">Favoritos</h3>
        <div className="flex gap-4 overflow-x-scroll pb-4">
          {
            favoriteCryptos.map((crypto) => (
              <div
                key={crypto.id}
                className="hover:bg-zinc-700/70 hover:cursor-pointer transition-colors border-[1px] min-w-56 border-zinc-400 h-min rounded-lg px-2 py-3 flex gap-3 flex-col"
                onClick={() => handleSelectCrypto(crypto)}
              >
                <div className="flex justify-between items-center text-yellow-400">
                  <small className="text-nowrap text-white">{crypto.name}</small>
                  <StarFilledIcon />
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex text-2xl items-center">
                    <DolarIcon />
                    {crypto.quote.USD.price > 10 ? crypto.quote.USD.price.toFixed(2) : crypto.quote.USD.price.toFixed(6)}
                  </span>
                  <small className={`border rounded-full px-2 ${crypto.quote.USD.percent_change_24h > 0 ? 'text-green-400 border-green-400' : 'text-red-400 border-red-400'}`}>
                    {crypto.quote.USD.percent_change_24h.toFixed(2)}%
                  </small>
                </div>
              </div>
            ))
          }
        </div>
      </Box>
    </section>
  )
}
