import { toast } from "sonner";
import { StarFilledIcon, StarIcon } from "../../assets/icons";
import { TrendingDownIcon } from "../../assets/icons/TrendingDownIcon";
import { TrendingUpIcon } from "../../assets/icons/TrendingUpIcon";
import { Box } from "../../components";
import { useFavoriteCryptos } from "../../hooks/useFavoriteCryptos";
import { useCryptoSelected } from "../core/hooks/useCrypto";
import ChartLine from "./components/ChartLine";
import ItemDetail from "./components/ItemDetail";

export default function ChartCrypto() {
  const { cryptoSelected: crypto } = useCryptoSelected();
  const { addFavoriteCrypto, removeFavoriteCrypto, isFavorite } = useFavoriteCryptos()

  if (crypto === null) {
    return <div>Crypto not found</div>
  }

  const favorite = isFavorite(crypto)
  console.log({ favorite })

  const handleAddFavorite = () => {
    addFavoriteCrypto(crypto)
    toast.success('Crypto added to favorites')
  }

  const handleRemoveFavorite = () => {
    removeFavoriteCrypto(crypto)
    toast.success('Crypto removed from favorites')
  }

  return (
    <section className="flex-1 flex flex-col w-full gap-8 py-8 md:pr-8">
      <Box className="relative flex justify-center w-full py-6  border-zinc-600">
        <h3 className="text-3xl font-semibold"> {crypto.name}</h3 >
        <span
          onClick={favorite ? handleRemoveFavorite : handleAddFavorite}
          className={`absolute right-8 top-8 hover:cursor-pointer hover:text-yellow-400 transition-colors ${favorite ? 'text-yellow-400' : 'text-zinc-400'}`}
        >
          {
            favorite ? <StarFilledIcon /> : <StarIcon />
          }
        </span>
      </Box >
      <Box className="h-full flex flex-col">
        <section className="flex flex-col items-end py-6">
          <div className="flex  gap-3 items-end">
            <small className="text-xl text-zinc-600 font-semibold">USD</small>
            <span className="text-4xl">{crypto.quote.USD.price.toFixed(6)}</span>
          </div>
          <span className={`text-xl flex gap-2 ${crypto.quote.USD.percent_change_24h > 0 ? 'text-green-400' : 'text-red-400'}`}>
            {
              crypto.quote.USD.percent_change_24h > 0 ?
                <TrendingUpIcon />
                : <TrendingDownIcon />
            }
            <span>{crypto?.quote.USD.percent_change_24h.toFixed(8)}%</span>
          </span>
        </section>
        <section className="flex-1">
          <ChartLine />
        </section>
        <section className="flex flex-col gap-3">
          {
            crypto !== null && (
              <>
                <ItemDetail name="Ranking:" info={crypto.cmc_rank} />
                {/* <ItemDetail name="Capitalización de mercado:" info={crypto.quote.USD.market_cap.toLocaleString()} /> */}
                <ItemDetail name="Volumen 24h:" info={crypto.quote.USD.volume_24h.toLocaleString()} />
                <ItemDetail name="Cambio (1h):" info={`${crypto.quote.USD.percent_change_1h}%`} />
                <ItemDetail name="Cambio (24h):" info={`${crypto.quote.USD.percent_change_24h}%`} />
                <ItemDetail name="Cambio (7d):" info={`${crypto.quote.USD.percent_change_7d}%`} />
                <ItemDetail name="Suministro circulante:" info={`${crypto.circulating_supply.toLocaleString()} ${crypto.symbol}`} />
              </>
            )
          }
        </section>
      </Box>
    </section >
  )
}

