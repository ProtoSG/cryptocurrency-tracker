import { create } from "zustand";
import { createContext, useContext, useEffect, useState } from "react";
import { DataItem } from "../../../model/data.mode";

interface Props {
  children: React.ReactNode;
}

interface ContextProps {
  data: DataItem[];
  loading: boolean;
  error: Error | null;
  fetchData: () => void;
}

const CryptoContext = createContext<ContextProps>({
  data: [],
  loading: false,
  error: null,
  fetchData: () => { },
});

export const CryptoProvider = ({ children }: Props) => {
  const [data, setData] = useState<DataItem[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const fetchData = async () => {
    setLoading(true)
    try {
      setError(null)
      const response = await fetch("http://localhost:8080/crypto")
      const data: DataItem[] = await response.json()
      setData(data)
    } catch (error) {
      setError(error as Error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <CryptoContext.Provider value={{ data, loading, error, fetchData }}>
      {children}
    </CryptoContext.Provider>
  )
}

export const useCrypto = () => {
  const context = useContext(CryptoContext);
  if (context === undefined) {
    throw new Error("useCrypto must be used within a CryptoProvider");
  }
  return context;
}

interface UseCryptoProps {
  cryptos: DataItem[];
  setCryptos: (data: DataItem[]) => void;

  cryptoSelected: DataItem | null;
  setCryptoSelected: (data: DataItem) => void;
}

export const useCryptoSelected = create<UseCryptoProps>((set) => ({
  cryptos: [],
  setCryptos: (data: DataItem[]) => set({ cryptos: data }),

  cryptoSelected: null,
  setCryptoSelected: (data: DataItem) => set({ cryptoSelected: data })
}))
