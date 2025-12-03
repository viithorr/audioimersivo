// === MENU MOBILE ===

const menuBtn = document.querySelector(".menu-btn");
const menuMobile = document.getElementById("menuMobile");
const overlay = document.getElementById("overlay");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        menuMobile.classList.add("open");
        overlay.classList.add("show");
        document.body.style.overflow = "hidden"; // trava scroll
    });
}

if (overlay) {
    overlay.addEventListener("click", () => {
        menuMobile.classList.remove("open");
        overlay.classList.remove("show");
        document.body.style.overflow = "auto"; // libera scroll
    });
}


