import { useEffect, useState } from "react";
import { HistorialPrice } from "../model/historialPrice.model";
const api = import.meta.env.VITE_BACKEND_URL

interface Props {
  id: number
}

export const useHistorialPriceProvider = ({ id }: Props) => {
  const [historialPrice, setHistorialPrice] = useState<HistorialPrice[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchHistorialPrice = async () => {
    setLoading(true);
    try {
      setError(null);
      const response = await fetch(`${api}/historialPrice/crypto/${id}`);
      const data: HistorialPrice[] = await response.json();
      setHistorialPrice(data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistorialPrice();
  }, [id]);

  return { historialPrice, loading, error, fetchHistorialPrice };
}
