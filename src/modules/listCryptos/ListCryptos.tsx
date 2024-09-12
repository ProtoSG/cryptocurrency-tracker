import { useCrypto } from "../core/hooks/useCrypto";
import ItemCrypto from "./components/ItemCrypto";
import SearchCrypto from "./components/searchCrypto";

export default function ListCryptos() {

  const { cryptos } = useCrypto();

  return (
    <section className="w-full lg:w-96 md:w-32  lg:min-w-96 py-8 border-r-2 border-gray-400/40">
      <div className="h-28">
        <h1 className="md:hidden lg:block text-pretty mb-6 px-8 text-4xl font-semibold">Crypto Tracker</h1>
        <h1 className="hidden md:block lg:hidden text-pretty text-center mb-6 px-8 text-4xl font-semibold">C T</h1>
        <SearchCrypto />
      </div>
      <section className="flex flex-col gap-4 py-6 h-96  md:h-[90%]  overflow-scroll">
        {
          cryptos.map((crypto) => (
            <ItemCrypto key={crypto.id} crypto={crypto} />
          ))
        }
      </section>
    </section>
  )
}
