interface QuoteUSD {
  id: number;
  id_crypto: number;
  price: number;
  volume_24h: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
}

export interface DataItem {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  circulating_supply: number;
  cmc_rank: number;
  quote: {
    USD: QuoteUSD;
  };
}

