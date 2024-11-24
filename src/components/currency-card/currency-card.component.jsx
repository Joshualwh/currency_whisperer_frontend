import "./currency-card.styles.scss";

const CurrencyCard = ({currency}) => {
  const { currency_1, currency_2, google } = currency;
  return (
    <div className="currency-card-container">
      {/* This is a Currency Card text */}
      <div className="currency-card-text">
        {/* This is currency name from and to */}
        <div className="currency">
          <span>{currency_1}</span>
          <span> to </span>
          <span>{currency_2}</span>
        </div> 
        {/* This is to show the conversion_rate in small cards */}
        <div className="conversion-rate">
          <span>{google.conversion_rate}</span>
        </div>
      </div>
      {/* This is a Currency Card buttons */}
      <div className="button">
        {/* Subscribe button */}
        <button className="subscribe">subscribe</button>
        {/* expand to see more other conversion rates button */}
        <button className="expand">expand</button>
      </div>
    </div>
  )
}

export default CurrencyCard;