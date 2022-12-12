// States of Promise : pending, fulfilled, rejected

let promise = new Promise((resolve, reject) => {
  let a = 9;
  if (a > 5) {
    resolve("OK Success!!");
  } else {
    reject("Error occured!");
  }
});

// console.log(promise)

// then, catch, finally blocks
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("finally block worked");
//   });

//promise chaining

// promise
//   .then((value) => {
//     return value;
//   })
//   .then((newValue) => {
//     console.log(newValue);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("finally block worked");
//   });

//FETCH

const BASE_URL = "https://jsonplaceholder.typicode.com/";

// fetch(`${BASE_URL}users`)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// fetch(`${BASE_URL}posts`)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// fetch(`${BASE_URL}todos`)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// // function for fetch data
function getData(endpoint) {
  fetch(`${BASE_URL}${endpoint}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

// //function for getUser by id
// function getUserById(id) {
//   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         console.log("bele bir istifadeci yoxdur");
//       }
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// getData("users")
// getData("posts")
// getData("todos")

// getUserById(4);
// getUserById(10);

// getUserById(15);
// getUserById(8);

const BASE_URL_2 = "https://northwind.vercel.app/api/";

function fetchData(endpoint) {
  fetch(`${BASE_URL_2}${endpoint}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

fetchData("suppliers");

function deleteById(endpoint, id) {
  fetch(`${BASE_URL_2}${endpoint}/${id}`, {
    method: "DELETE",
  });
}

// deleteById("suppliers", 6);

let supplierObj = {
  companyName: "Test",
  contactName: "Code Academy",
  contactTitle: "Manager",
  address: {
    street: "28 may yaxinligi",
    city: "London",
    region: "Absseron",
    postalCode: 1532,
    country: "GE",
    phone: "1532",
  },
};

supplierObj.contactName = "Programming";
supplierObj.contactName = "FrontEnd Programming";

function postNewSupplier(endpoint, obj) {
  fetch(`${BASE_URL_2}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
}

// postNewSupplier("suppliers", supplierObj);

function updateById(endpoint, id) {
  fetch(`${BASE_URL_2}${endpoint}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(supplierObj),
  });
}

updateById("customers", "BERGS");



setTimeout(() => {
    console.log("-------------------------------------------");
}, 1000);
