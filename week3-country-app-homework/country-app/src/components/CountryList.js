import GetCountry from "../api/GetCountry";
import CountryCard from "./CountryCard";

//apiden çekilen tüm ülkelerin istenen bilgilerinin cartta gösterimi
const CountryList = () => {
  const { countries } = GetCountry();
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {countries.map((country, index) => (
          <CountryCard
            key={index.toString()}
            flag={country.flag}
            name={country.name}
            capital={country.capital}
            languages={country.languages}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryList;
