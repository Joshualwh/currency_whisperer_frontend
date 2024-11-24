import { createContext, useState } from "react";
import CURRENCY from "../currency.json";

export const CurrenciesContext = createContext({
  currencies: [],
})

export const CurrencyProvider = ({children}) => {
  const [currencies, setCurrencies] = useState(CURRENCY);
  const value = { currencies };

  return <CurrenciesContext.Provider value={value}>{children}</CurrenciesContext.Provider>
}