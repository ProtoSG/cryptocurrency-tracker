import ChartCrypto from "./modules/chartCrtypo/ChartCrypto"
import FavoriteCryptos from "./modules/favoriteCryptos/FavoriteCryptos"
import ListCryptos from "./modules/listCryptos/ListCryptos"

function App() {
  return (
    <main className="md:flex h-dvh">
      <ListCryptos />
      <div className="w-full">
        <ChartCrypto />
        <FavoriteCryptos />
      </div>
    </main>
  )
}

export default App
