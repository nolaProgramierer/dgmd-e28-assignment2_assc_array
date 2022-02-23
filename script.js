document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    var prices = {"hotdog": 4.50, "fries": 3.00, "soda": 1.50, "sauerkraut": 1};

    document.querySelector('input[type=submit]').addEventListener('click', function (e) {
        let numHotDogs = document.querySelector('input[name=hotdog]').value;
        let numFries = document.querySelector('input[name=fries]').value;
        let numSodas = document.querySelector('input[name=soda]').value;
        let numSks = document.querySelector('input[name=skraut]').value;

        var q = getQuantity(numHotDogs, numFries, numSodas, numSks);
        gatherTotals(q);
        document.querySelector('#order-total').innerHTML = "Your order total is: $" + totalItems(prices);
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
        var index = 0;
        for (let price in prices) {
            prices[price] = prices[price] * q[index];
            index++;
        }
        console.log(prices);
        return prices;
    }

    function totalItems(obj) {
        var total = 0;
        for (let value in obj) {
            total += obj[value];
        }
        console.log(total);
        return total;
    }
    console.log("DOM content parsed and loaded");
}); // end DOMContentLoaded