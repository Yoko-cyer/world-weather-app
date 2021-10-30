const Results = ({results}) => {

  // destructuring assignment
    const { cityName, country, temperature, conditionText, icon } = results;

  return (
   <>
     {cityName && <div> {cityName}</div>}
     {country && <div> {country}</div>}
     {temperature && <div> {temperature}<span>℃</span></div>}
     {conditionText && 
      <div className="results-condition"> 
        <img src={icon} alt="icon" />
        <span>{conditionText}</span>
      </div>
     }
   </>

  )
}

export default Results