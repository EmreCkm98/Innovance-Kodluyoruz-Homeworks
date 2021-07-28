
import LanguagesAmount from "../api/GetLanguages";


const MostSpokenLanguage = () => {
  const { mostTenLang }=LanguagesAmount();
  
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="card" style={{ width: "19rem" }}>
          <div className="card-header">
            <b> En çok konuşulan 10 dil :</b>
          </div>
          <ol className="list-group list-group-numbered">
            {mostTenLang.map((language, index) => (
              <li
                key={index.toString()}
                className="list-group-item d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">konuşulan dil: {language.name}</div>
                  <div>konuşulan ülke sayısı: {language.count}</div>
                </div>
                <span className="badge bg-primary rounded-pill">
                  {language.count}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default MostSpokenLanguage;
