import { createContext, useState } from "react";
import CURRENCY from "../currency.json";

export const CurrencyContext = createContext({
  products: [],
})

export const CurrencyProvider = ({children}) => {
  const [currency, setCurrency] = useState(CURRENCY);
  const value = { currency };

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
}