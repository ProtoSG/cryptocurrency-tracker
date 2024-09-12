import StarIcon from "../../assets/icons/StarIcon";
import { useCrypto } from "../core/hooks/useCrypto";
import ChartLine from "./ChartLine";
import ItemDetail from "./ItemDetail";

export default function ChartCrypto() {

  const { cryptoSelected: crypto } = useCrypto();
  console.log(crypto)
  return (
    <section className="">
      <header className="relative flex justify-center w-full py-6 border-b-2 border-zinc-600">
        <h3 className="text-3xl font-semibold"> {crypto?.name}</h3 >
        <span className="absolute right-8 top-8">
          <StarIcon />
        </span>
      </header >
      <main className="px-8">
        <section className="flex flex-col items-end py-6">
          <div className="flex  gap-3 items-end">
            <small className="text-xl text-zinc-600 font-semibold">USD</small>
            <span className="text-4xl">{crypto?.quote.USD.price.toFixed(6)}</span>
          </div>
          <span className={`text-xl md:hidden lg:block ${crypto !== null && crypto.quote.USD.percent_change_24h > 0 ? 'text-green-400' : 'text-red-400'}`}>
            {
              crypto !== null && crypto.quote.USD.percent_change_24h > 0 && <span>+</span>
            }
            {crypto?.quote.USD.percent_change_24h.toFixed(2)}%
          </span>
        </section>
        <section>
          <ChartLine />
        </section>
        <section className="flex flex-col gap-3">
          {
            crypto !== null && (
              <>
                <ItemDetail name="Ranking:" info={crypto.cmc_rank} />
                <ItemDetail name="Capitalización de mercado:" info={crypto.quote.USD.market_cap.toLocaleString()} />
                <ItemDetail name="Volumen 24h:" info={crypto.quote.USD.volume_24h.toLocaleString()} />
                <ItemDetail name="Cambio (1h):" info={`${crypto.quote.USD.percent_change_1h}%`} />
                <ItemDetail name="Cambio (24h):" info={`${crypto.quote.USD.percent_change_24h}%`} />
                <ItemDetail name="Cambio (7d):" info={`${crypto.quote.USD.percent_change_7d}%`} />
                <ItemDetail name="Suministro circulante:" info={`${crypto.circulating_supply.toLocaleString()} ${crypto.symbol}`} />
              </>
            )
          }
        </section>
      </main>
    </section >
  )
}

