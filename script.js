document.addEventListener('DOMContentLoaded', function () {

    var prices = {"hotdog": 4.50, "fries": 3.00, "soda": 1.50, "sauerkraut": 1};

    document.querySelector('input[type=submit]').addEventListener('click', function () {
        
        
        let numHotDogs = document.querySelector('input[name=hotdog]').value;
        console.log(numHotDogs);
        console.log("Submit button clicked");
    });


    console.log("DOM content parsed and loaded");
}); // end DOMContentLoaded