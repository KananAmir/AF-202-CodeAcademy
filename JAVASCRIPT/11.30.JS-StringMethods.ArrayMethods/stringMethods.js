let str = "hello World!";

// console.log(str.length);

// console.log(str.charAt(str.length - 1));

// console.log(str.toLocaleLowerCase());
// console.log(str.toLocaleUpperCase());

// console.log(str);

// console.log(str.indexOf("l"));
// console.log(str.lastIndexOf("l"));

// console.log(str.startsWith("e"));
// console.log(str.startsWith("h"));

// let email = "test.test@gmail.info";

// console.log(email.endsWith(".info"));
// console.log(email.endsWith(".com"));

// let trimStr = "     salam aleykum      ";

// console.log(trimStr);
// console.log(trimStr.trim());

let newStr = "helloWorld!";

console.log(newStr.substr(3, 5)); //start and length

console.log(newStr.substring(2, 5)); //start and end

let newString = "mytttt sring es";
console.log(newString.length);
// console.log(newString.padStart(15, " "));

// console.log(newString.padEnd(15, "@"));

// console.log(newString.includes("d"));
console.log(newString.includes("t"));
console.log(newString.includes("t", 5));

let testString = "lorem ipsum dolor";

console.log(testString.slice(5));
console.log(testString.slice(6, 8));

console.log(newString.includes("t"));

let splitStr = "hello";
let splitStr2 = "hello,my,friend,sdsad,asdsad,asdasd,asdsa";
let splitStr3 = "hello my friend sdsad asdsad asdasd asdsa";

console.log(splitStr.split());
console.log(splitStr.split(""));
console.log(splitStr2.split(",", 5));
console.log(splitStr3.split(" "));

console.log(splitStr[0]);
console.log(splitStr[splitStr.length - 1]);
