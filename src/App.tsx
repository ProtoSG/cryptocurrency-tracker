import ChartCrypto from "./modules/chartCrtypo/ChartCrypto";
import { CryptoProvider } from "./modules/core/hooks/useCrypto";
import FavoriteCryptos from "./modules/favoriteCryptos/FavoriteCryptos";
import ListCryptos from "./modules/listCryptos/ListCryptos";

function App() {

  return (
    <CryptoProvider>
      <main className="md:flex h-dvh ">
        <ListCryptos />
        <div className="flex-1 flex flex-col w-[60%]">
          <ChartCrypto />
          <FavoriteCryptos />
        </div>
      </main>
    </CryptoProvider>
  )
}

export default App
