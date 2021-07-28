
import GetCountry from "./GetCountry";

const languages = []; //languages namelerini tutan dizi
const mostLanguages = []; //en çok konuşulan dilleri tutan dizi
const mostTenLang = []; //ilk 10 konuşulan dil dizisi

const GetLanguages = () => {
  //ülkelerin languages propunu alma işlemi
  const { countries } = GetCountry();
  const CountryLanguages = [];

  countries.forEach((language) => {
    CountryLanguages.push(language.languages);
  });
  return CountryLanguages;
};

const GetLanguageName = () => {
  //languages dizisindeki name değerini alma işlemi
  const CountryLanguages = GetLanguages();
  languages.splice(0,languages.length);
  CountryLanguages.forEach((data) => {
    data.forEach((languageName) => {
      languages.push(languageName.name);
    });
  });
};

const GetUniqueLanguage = () => {
  //aynı dilleri tek dile indirme işlemi
  let uniqueLanguages = languages.filter((c, index) => {
    return languages.indexOf(c) === index;
  });
  return uniqueLanguages;
};

const LanguagesAmount =()=> {
  //en çok konuşulan dilleri filtreleyip sıralama işlemi
  mostTenLang.splice(0,mostTenLang.length);
  mostLanguages.splice(0,mostLanguages.length);
  GetLanguageName();
  const uniqueLang = GetUniqueLanguage();
  const mostTen = [];
  uniqueLang.forEach((lang) => {
    const selectedLanguage = languages.filter(
      (a) => a.toLowerCase() === lang.toLowerCase()
    );
    let countLanguage = selectedLanguage.length;
    mostLanguages.push({ name: lang, count: countLanguage });
  });
  mostLanguages.sort((a, b) => a.count - b.count); //küçükten büyüğe sıralama
  console.table(mostLanguages.slice(mostLanguages.length - 10).reverse()); //ilk 10 değeri alma
  mostTen.push(mostLanguages.slice(mostLanguages.length - 10).reverse());
  mostTen.forEach((data) => {
    data.forEach((ten) => {
      mostTenLang.push(ten);
    });
  });
  return { mostTenLang };
};

export default LanguagesAmount;
