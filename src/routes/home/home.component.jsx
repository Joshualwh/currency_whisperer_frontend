import { useContext } from "react";
import { CurrenciesContext } from "../../contexts/currency.context";

import CurrencyCard from "../../components/currency-card/currency-card.component";

const Home = () => {
  const { currencies }= useContext(CurrenciesContext)
  return (
    <div>
      {/* Create a filter function, left/to/right, 3 components */}
      <h1>This is home page.</h1>
      <div>
        <span>Currency 1</span>
        <span>to</span>
        <span>Currency 2</span>
      </div>
      {/* Create a card component, import the .json file */}
      <div>
        { currencies.map((currency) => (
          <CurrencyCard key={currency.id} currency={currency}/>
        ))}
      </div>
    </div>
  )
}

export default Home;