import { useEffect, useState } from "react"
import { data } from "../../core/data/crypto.data";
import { useCrypto } from "../../core/hooks/useCrypto";
import SearchIcon from "../../../assets/icons/SearchIcon";

export default function SearchCrypto() {
  const [search, setSearch] = useState("");

  const searchData = data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  const { setCryptos, setCryptoSelected } = useCrypto();

  useEffect(() => {
    setCryptoSelected(searchData[0])
  }, [])

  useEffect(() => {
    setCryptos(searchData)
  }, [search])

  const openList = () => {
    console.log("pasa")
  }

  return (
    <>
      <form className="px-8 flex lg:flex md:hidden">
        <label className="bg-zinc-700 w-full rounded-r-md p-2 flex items-center pl-3 rounded-l-md">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-zinc-700 pl-2 w-full rounded-r-md focus:outline-none"
          />
        </label>
      </form>
      <div className="md:flex items-center  justify-center hidden lg:hidden">
        <button className="bg-zinc-700 px-4 py-2 rounded-md">
          <SearchIcon />
        </button>
      </div>
    </>
  )
}
