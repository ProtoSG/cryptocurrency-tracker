import { create } from "zustand";
import { DataItem } from "../model/data.mode";
import { loadFromLocalStorage, saveToLocalStorage } from "../services/localStorageActions";

interface FavoriteStorage {
  favoriteCryptos: DataItem[];
  addFavoriteCrypto: (crypto: DataItem) => void;
  removeFavoriteCrypto: (crypto: DataItem) => void;
  isFavorite: (crypto: DataItem) => boolean;
}

export const useFavoriteCryptos = create<FavoriteStorage>((set, get) => ({
  favoriteCryptos: loadFromLocalStorage<DataItem[]>('favoriteCryptos', []),
  addFavoriteCrypto: (crypto: DataItem) => set((state) => {
    if (state.favoriteCryptos.some((c) => c.id === crypto.id)) {
      return state
    }
    const newFavoriteCryptos = [...state.favoriteCryptos, crypto]
    saveToLocalStorage('favoriteCryptos', newFavoriteCryptos)
    return { favoriteCryptos: newFavoriteCryptos }
  }),
  removeFavoriteCrypto: (crypto: DataItem) => set((state) => {
    const newFavoriteCryptos = state.favoriteCryptos.filter(c => c.id !== crypto.id)
    saveToLocalStorage('favoriteCryptos', newFavoriteCryptos)
    return { favoriteCryptos: newFavoriteCryptos }
  }),
  isFavorite: (crypto: DataItem) => get().favoriteCryptos.some((c) => c.id === crypto.id),
}))
