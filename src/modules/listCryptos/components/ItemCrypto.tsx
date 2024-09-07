import DolarIcon from "../../../assets/icons/DolarIcon";
import { useCrypto } from "../../core/hooks/useCrypto";
import { DataItem } from "../../core/model/data.mode";

interface ItemCryptoProps {
  crypto: DataItem
}

export default function ItemCrypto({ crypto }: ItemCryptoProps) {

  const { cryptoSelected, setCryptoSelected } = useCrypto();

  const selectCrypto = () => {
    setCryptoSelected(crypto)
  }

  return (
    <article
      onClick={() => selectCrypto()}
      className={`flex items-center transition-colors px-8 py-2 hover:cursor-pointer hover:bg-zinc-700 
    ${cryptoSelected?.id === crypto.id ? 'bg-zinc-700' : ''}`}>
      <div className="flex justify-between w-full pr-4 md:justify-center lg:justify-between">
        <div className="flex flex-col md:items-center lg:items-start ">
          <span className="text-xl">{crypto.symbol}</span>
          <small className="text-zinc-400 md:text-center">{crypto.name}</small>
        </div>
        <span className="flex md:hidden lg:flex text-2xl items-center ">
          <DolarIcon />
          {crypto.quote.USD.price > 10 ? crypto.quote.USD.price.toFixed(2) : crypto.quote.USD.price.toFixed(6)}
        </span>
      </div>
      <span className={`text-xl md:hidden lg:block ${crypto.quote.USD.percent_change_24h > 0 ? 'text-green-400' : 'text-red-400'}`}>
        {
          crypto.quote.USD.percent_change_24h > 0 && <span>+</span>
        }
        {crypto.quote.USD.percent_change_24h.toFixed(2)}%
      </span>
    </article>
  )
}
