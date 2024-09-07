import { create } from "zustand";
import { DataItem } from "../model/data.mode";

interface UseCryptoProps {
  cryptos: DataItem[];
  setCryptos: (data: DataItem[]) => void;

  cryptoSelected: DataItem | null;
  setCryptoSelected: (data: DataItem) => void;
}

export const useCrypto = create<UseCryptoProps>((set) => ({
  cryptos: [],
  setCryptos: (data: DataItem[]) => set({ cryptos: data }),

  cryptoSelected: null,
  setCryptoSelected: (data: DataItem) => set({ cryptoSelected: data })
}))
