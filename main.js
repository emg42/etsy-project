// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let priceAvg = 0;
  for (var i = 0; i < data.length; i++) {
    priceAvg += data[i].price /data.length;

  }
console.log(priceAvg);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let priceCheck = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].price === 14 || data[i].price <= 18) {
      priceCheck.push(data[i].price);
  }

  }
  console.log(priceCheck);
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  let gbpArr = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
    gbpArr.push(data[i].title +  " costs "  + data[i].price) + " pounds";
    console.log(gbpArr);
    }

  }
  return gbpArr;
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
let woodItems = [];
for (let i = 0; i < data.length; i++) {

    for (let j = 0; j < data[i].materials.length; j++) {
      if (data[i].materials[j] === "wood") {
        woodItems.push(data[i].title);

      }
    }
  }
console.log(woodItems);
}




// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
let eightItems = [];
  for (let i = 0; i < data.length; i++) {

    if (data[i].materials.length >= 8) {
     eightItems.push(data[i].title, data[i].materials.length, data[i].materials);
  }



}
  console.log(eightItems);
  return eightItems;
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let bySellers = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did") {
      bySellers.push(data[i]);
    }
  }
  console.log(bySellers);
  console.log(bySellers.length);
  let num = bySellers.length;


}
