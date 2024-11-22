import { useContext } from "react";
import { CurrencyContext } from "../../contexts/currency.context";

import CurrencyCard from "../../components/currency-card/currency-card.component";

const Home = () => {
  return (
    <div>
      {/* Create a filter function, left/to/right, 3 components */}
      <h1>This is a home page.</h1>
      <div>
        <span>Currency 1</span>
        <span>to</span>
        <span>Currency 2</span>
      </div>
      {/* Create a card component, import the .json file */}
      <CurrencyCard />
    </div>
  )
}

export default Home;