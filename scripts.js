


//function validateEmailAndUserName(email, userName) {

//}


const validateEmailAndUserName = (email, userName) => {

    let isValidEmail = false;
    let isValidUserName = false;

    if (email.includes("@") && email.includes(".")) {
        isValidEmail = true;
        console.log("Email is valid")
    }
    else {
        isValidEmail = false;
        console.log("Email is not valid")
    }
    if (userName.length >= 8) {
        isValidUserName = true;
        console.log("Username is valid")
    }
    else {
        isValidUserName = false;
        console.log("Username is not valid")

    }
    return isValidEmail == true && isValidUserName == true;
}
console.log(validateEmailAndUserName("jalejooo@yahoo.com", "AlexAlejo"))
console.log(validateEmailAndUserName("jalejooo@yahoo.com", "Alex"))
console.log(validateEmailAndUserName("alex@yahoo.com", "Al"))

// total price calculation//


function addPrices(prices) {
  // Ensure the input is an array and calculate the total
  if (!Array.isArray(prices)) {
    throw new Error("Input must be an array of numbers.");
  }
  return prices.reduce((total, price) => total + price, 0);
}

// Example usage:
const prices = [89.99, 99.99, 150.00];
const total = addPrices(prices);
console.log(`The total price is $${total.toFixed(2)}`);

//search function//
function searchQuery (query) {
    console.log(`searching for ${query}`)
}
searchQuery("shoes")

function addToCart (item, cart) {
    cart.push(item)
    console.log(`${item} added to cart`)
}
const cart = []
addToCart("shoes", cart)