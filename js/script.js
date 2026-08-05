// ==========================
// Blue.Nexa - script.js
// ==========================

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

// Buka Sidebar
function openSidebar() {

    sidebar.classList.add("show");
    overlay.classList.add("show");

}

// Tutup Sidebar
function closeSidebar() {

    sidebar.classList.remove("show");
    overlay.classList.remove("show");

}

// Tombol Menu
menuBtn.addEventListener("click", () => {

    if (sidebar.classList.contains("show")) {

        closeSidebar();

    } else {

        openSidebar();

    }

});

// Klik Overlay
overlay.addEventListener("click", () => {

    closeSidebar();

});

// Tutup Sidebar Saat Ukuran Desktop
window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {

        closeSidebar();

    }

});

// Tutup Sidebar Setelah Memilih Menu
document.querySelectorAll("#sidebar nav a").forEach(link => {

    link.addEventListener("click", () => {

        closeSidebar();

    });

});

// ==========================
// Dark Mode
// ==========================

const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){

    document.body.classList.add("dark");

    themeBtn.textContent = "☀️";

}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeBtn.textContent="☀️";

    }else{

        localStorage.setItem("theme","light");

        themeBtn.textContent="🌙";

    }

});

console.log("Blue.Nexa Loaded");
