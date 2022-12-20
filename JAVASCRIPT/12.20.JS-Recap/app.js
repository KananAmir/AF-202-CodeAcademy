import { posts } from "./data.js";
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];

const results = [50, 25, 95, 78, 45, 88];

let newcountry = [...countries];
let c = "norway";

// console.log(newcountry.includes("norway"[0].toUpperCase()+"norway".slice(1)))

// console.log(newcountry.includes(c.replace(c[0], c[0].toUpperCase())));

// console.log(results.map((elem)=>elem*2));

// console.log(countries.map((elem, index, arr) => `${index}-${elem}`));

// let userObj = {
//   name: "John",
//   surname: "Doe",
//   city: "Sumqayit",
// };
// // let { name, surname:soyad, city } = userObj;
// // console.log(soyad);

// for (let key in userObj) {
//   console.log(key + "-" + userObj[key]);
// }

// const result = results.filter(check);
// function check(a) {
//   return a >= 50;
// }
// console.log(result);

// console.log(posts);

// console.log(posts.map((element) => element.id > 5 && element));

console.log(posts.filter((element) => element.id > 5));

console.log(posts.filter((element) => element.title[0] === "d"));
