/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/
/*
function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  coinPurse.quarters = 0;

  return coinPurse;
}

var coins = coinCounter()
console.log();
*/

//First Try


function coinCount () {
  //pluging in sum and displaying total
  var sum = prompt("How much money do you have? I'll turn it into coins, I'm a reverse CoinStar!");
  var total = document.getElementById("total");

  total.innerHTML = total.innerHTML + "Total Dollar Amount : $" + sum;

  //quarters with test
  var quarters = parseInt(sum/.25);
  var sum = sum-(.25*quarters);
  var sum = Math.round(sum * 100) / 100;
  console.log(quarters);
  console.log(sum);

  //dimes with test
  var dimes = parseInt(sum/.1);
  var sum = sum-(.1*dimes);
  var sum = Math.round(sum * 100) / 100;
  console.log(dimes);
  console.log(sum);

  //nickels with test
  var nickels = parseInt(sum/.05);
  var sum = sum-(.05*nickels);
  var sum = Math.round(sum * 100) / 100;
  console.log(nickels);
  console.log(sum);

  //pennies with test
  var pennies = parseInt(sum/.01);
  var sum = sum-(.01*pennies);
  var sum = Math.round(sum * 100) / 100;
  console.log(pennies);
  console.log(sum);

  //coinPurse obj with check and display
  var coinPurse = {
    quarters : quarters,
    dimes : dimes,
    nickels : nickels,
    pennies : pennies,
  };
  console.log(coinPurse);

  var coins = document.getElementById("coins");

  for (var prop in coinPurse) {
    coins.innerHTML = coins.innerHTML + prop + ": " + coinPurse[prop] + "<br>";
  };
};

//running coinCount
coinCount()


