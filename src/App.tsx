import { Toaster } from "sonner";
import ChartCrypto from "./modules/chartCrtypo/ChartCrypto";
import { CryptoProvider } from "./modules/core/hooks/useCrypto";
import FavoriteCryptos from "./modules/favoriteCryptos/FavoriteCryptos";
import ListCryptos from "./modules/listCryptos/ListCryptos";

function App() {

  return (
    <CryptoProvider>
      <main className="flex md:flex-row flex-col h-dvh">
        <ListCryptos />
        <div className="flex-1 flex flex-col px-8 md:px-0 md:w-[60%]">
          <ChartCrypto />
          <FavoriteCryptos />
        </div>
      </main>
      <Toaster richColors />
    </CryptoProvider>
  )
}

export default App
