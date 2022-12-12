const catsAPI = "https://api.thecatapi.com/v1/breeds";

// function fetchData() {
//   fetch(`${catsAPI}`)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// fetchData();

const fetchCats = async () => {
  let response = await fetch(`${catsAPI}`);
  let data = await response.json();
  console.log(data);
};

fetchCats();
