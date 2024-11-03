import { useCallback, useMemo } from "react";
import DolarIcon from "../../../assets/icons/DolarIcon";
import { TrendingDownIcon } from "../../../assets/icons/TrendingDownIcon";
import { TrendingUpIcon } from "../../../assets/icons/TrendingUpIcon";
import { useCrypto, useCryptoSelected } from "../../core/hooks/useCrypto";
import { DataItem } from "../../core/model/data.mode";

interface ItemCryptoProps {
  crypto: DataItem
}

export default function ItemCrypto({ crypto }: ItemCryptoProps) {

  const { cryptoSelected, setCryptoSelected } = useCryptoSelected();

  const selectCrypto = () => {
    setCryptoSelected(crypto)
  };


  return (
    <article
      onClick={() => selectCrypto()}
      className={`flex items-center transition-colors gap-4 px-8 py-4 hover:cursor-pointer hover:bg-zinc-700 
    ${cryptoSelected?.id === crypto.id ? 'bg-zinc-700 sticky top-0' : ''}`}>
      <div className="flex justify-between w-full  md:justify-center lg:justify-between">
        <div className="flex flex-col md:items-center lg:items-start ">
          <span className="text-xl">{crypto.symbol}</span>
          <small className="text-zinc-400 md:text-center">{crypto.name}</small>
        </div>
      </div>
      <span className="flex md:hidden lg:flex text-2xl items-center ">
        <DolarIcon />
        {crypto.quote.USD.price > 10 ? crypto.quote.USD.price.toFixed(2) : crypto.quote.USD.price.toFixed(6)}
      </span>
      <span className={`text-xl flex gap-2 ${crypto.quote.USD.percent_change_24h > 0 ? 'text-green-400' : 'text-red-400'}`}>
        {
          crypto.quote.USD.percent_change_24h > 0
            ? <TrendingUpIcon />
            : <TrendingDownIcon />
        }
        <span>{crypto.quote.USD.percent_change_24h.toFixed(2)}%</span>
      </span>
    </article>
  )
}
