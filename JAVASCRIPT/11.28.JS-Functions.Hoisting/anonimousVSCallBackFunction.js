//zself inwoked anonimous functions

(function (name = "emil") {
  console.log("something", name);
})();

(() => {
  console.log("this is anonim function with arrow");
})();

let callBackFunction = () => {
  console.log("I am CallBack function");
};

function testFunc(callback) {
  return callback();
}

// testFunc(callBackFunction);

testFunc(() => {
  console.log("I am CallBack function");
});
