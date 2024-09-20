var pricing = [2.80, 4.20, 7.00];
var isMultiplied = false;

document.querySelector('.toggle-switch').addEventListener('click', function () {
    this.classList.toggle('active');
    var priceDisplay1 = document.getElementById('priceDisplay1');
    var priceDisplay2 = document.getElementById('priceDisplay2');
    var priceDisplay3 = document.getElementById('priceDisplay3');
    
    var text = document.querySelectorAll(".card-price-span");

    if (isMultiplied) {
        priceDisplay1.textContent = "$" + pricing[0].toFixed(2);
        priceDisplay2.textContent = "$" + pricing[1].toFixed(2);
        priceDisplay3.textContent = "$" + pricing[2].toFixed(2);
        text.forEach(function (element) {
            element.innerText = "Per month";
        });
    } else {

        priceDisplay1.textContent = "$" + (pricing[0] * 12).toFixed(2);
        priceDisplay2.textContent = "$" + (pricing[1] * 12).toFixed(2);
        priceDisplay3.textContent = "$" + (pricing[2] * 12).toFixed(2);

        text.forEach(function (element) {
            element.innerText = "Per year";
        });

    }

    // Toggle the state
    isMultiplied = !isMultiplied;

});

var menu = document.querySelector(".menu").addEventListener("click",() => {

   let menuOpen =  document.querySelector(".menu-nav")
    menuOpen.classList.toggle("menu-open")
  
})
