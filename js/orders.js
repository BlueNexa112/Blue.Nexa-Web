// ==========================
// Blue.Nexa - orders.js
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const onlineNow = document.getElementById("onlineNow");
    const todayOrders = document.getElementById("todayOrders");

    function random(min, max) {

        return Math.floor(Math.random() * (max - min + 1)) + min;

    }

    if (onlineNow) {

        onlineNow.textContent = random(10, 35);

    }

    if (todayOrders) {

        todayOrders.textContent = random(10, 40);

    }

    console.log("Orders Loaded");

});
