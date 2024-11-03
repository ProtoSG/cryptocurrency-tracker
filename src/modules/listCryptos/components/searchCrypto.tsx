import { useEffect, useState } from "react"
import { useCrypto, useCryptoSelected } from "../../core/hooks/useCrypto";
import SearchIcon from "../../../assets/icons/SearchIcon";
import { DataItem } from "../../core/model/data.mode";

export default function SearchCrypto() {
  const [search, setSearch] = useState("");
  const { data, loading } = useCrypto()

  const { setCryptos, setCryptoSelected } = useCryptoSelected();

  useEffect(() => {
    if (!loading && data.length > 0) {
      setCryptoSelected(data[0])
    }
  }, [loading, data, setCryptoSelected]);

  useEffect(() => {
    if (!loading && data.length > 0) {
      const searchData = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setCryptos(searchData);
    }
  }, [search, loading, data, setCryptos, setCryptoSelected]);


  return (
    <>
      <form className="flex w-full">
        <label className="w-full bg-[#323232]  pl-3 rounded-r-md py-2 flex items-center  rounded-l-md">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[#323232] pl-2 w-full rounded-r-md focus:outline-none"
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
