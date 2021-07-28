//ülke bilgilerini gösteren cart
const CountryCard = (props) => {
  const { name, capital, flag, languages } = props;
  return (
    <div className="col">
      <div className="card h-100 border-dark mb-3" style={{ width: "18rem" }}>
        <img src={flag} className="card-img-top" alt="..." />
        <div className="card-body text-dark">
          <h5 className="card-title">{name}</h5>
          <div
            className="d-flex justify-content-start"
            style={{ marginBottom: "11px" }}
          >
            <b>Başkent</b> : {capital}
          </div>
          <div>
            <div
              className="d-flex justify-content-start"
              style={{ marginBottom: "3px" }}
            >
              <b> Konuşulan dil(ler) :</b>
            </div>
            <ol>
              {languages.map((language, index) => (
                <li key={index.toString()} style={{ width: "80px" }}>
                  {language.name}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
