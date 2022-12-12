const countriesAPI = "https://restcountries.com/v2/all";

const fetchCountries = async () => {
  let response =  await axios(`${countriesAPI}`);

  let data = response.data;
//   return data
console.log(data);
};

fetchCountries();

// fetchCountries().then((value) => console.log(value));
