//ülke listesi ve istatistik butonları
const CountryButton = ({ setCheckedButton }) => {
  const onChangeValue = (event) => {
    //butonların seçilme durumunu tutma

    setCheckedButton(event.target.id);
  };
  return (
    <div
      className="btn-group"
      role="group"
      aria-label="Basic radio toggle button group"
      onChange={onChangeValue}
      style={{ marginBottom: "30px" }}
    >
      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="country"
        autoComplete="off"
        defaultChecked
      />
      <label className="btn btn-outline-primary" htmlFor="country">
        Ülke Listesi
      </label>

      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="stats"
        autoComplete="off"
      />
      <label className="btn btn-outline-primary" htmlFor="stats">
        İstatistikler
      </label>
    </div>
  );
};

export default CountryButton;
