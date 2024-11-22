import { Box } from "../../components";
import { useCrypto, useCryptoSelected } from "../core/hooks/useCrypto";
import ItemCrypto from "./components/ItemCrypto";
import SearchCrypto from "./components/searchCrypto";

export default function ListCryptos() {

  const { loading } = useCrypto()
  const { cryptos } = useCryptoSelected();


  if (loading) return <p>Loading...</p>

  return (
    <section className="flex-none md:w-[40%] md:max-w-[480px] p-8 flex flex-col gap-8">
      <Box className="flex flex-col gap-4">
        <h1 className="md:hidden lg:block text-pretty text-2xl font-semibold">Crypto Tracker</h1>
        <h1 className="hidden md:block lg:hidden text-pretty text-center mb-6 px-8 text-4xl font-semibold">C T</h1>
        <SearchCrypto />
      </Box>
      <Box className="flex w-full flex-col pt-0 pb-0 pr-0 pl-0 h-96 md:h-[90%] overflow-y-scroll">
        {
          cryptos.map((crypto) => (
            <ItemCrypto key={crypto.id} crypto={crypto} />
          ))
        }
      </Box>
    </section>
  )
}
