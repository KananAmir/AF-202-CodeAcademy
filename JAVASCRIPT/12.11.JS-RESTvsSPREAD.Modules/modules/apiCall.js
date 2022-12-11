import { BASE_URL } from "./data.js";

export default function getUsers() {
  fetch(`${BASE_URL}/users`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

// export default getUsers;

let number = 5;


export {number}