document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    document.querySelector('input[type=submit]').addEventListener('click', function (e) {
        let numHotDogs = document.querySelector('input[name=hotdog]').value;
        let numFries = document.querySelector('input[name=fries]').value;
        let numSodas = document.querySelector('input[name=soda]').value;
        let numSks = document.querySelector('input[name=skraut]').value;
        
        var quantities = getQuantity(numHotDogs, numFries, numSodas, numSks);
        // Add order quantities to array
        var numOfItems = gatherTotals(quantities);
        var total = totalItems(numOfItems);

        document.querySelector('#order-total').innerHTML = "Your order total is: $" + total.toFixed(2);
        // Clear values from form
        document.querySelector('form').reset();
        // Prevent page refresh
        e.preventDefault();
    });

    // Add quanities to array
    function getQuantity(hd, fr, s, sk) {
        let quantities = [];
        quantities.push(hd, fr, s, sk);
        console.log(quantities);
        return quantities;
    }

    function gatherTotals(q) {
        // Associative array for product and price
        var prices = [];
        prices["hotdog"] = 4.5,
        prices["fries"] = 3.5,
        prices["soda"] = 1.5;
        prices["sauerkraut"] = 1;
        console.log(prices);
        var index = 0;
        for (let price in prices) {
            prices[price] = prices[price] * q[index];
            index++;
        }
        console.log(prices);
        return prices;
    }

    function totalItems(arr) {
        var total = 0;
        for (let value in arr) {
            total += arr[value];
        }
        console.log(total);
        return total;
    }
    console.log("DOM content parsed and loaded");
}); // end DOMContentLoaded