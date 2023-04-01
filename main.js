///
const toggleNav = document.querySelector(".toggle-nav");
const navav = document.querySelector("nav");
toggleNav.addEventListener("click", function () {
    if(this.classList.contains("clicked")) {
        this.classList.remove("clicked");
        navav.style.display = "none";
    } else {
        this.classList.add("clicked");
        navav.style.display = "block";
    }
});

// 
const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    if(this.scrollY < 100) {
        header.classList.remove("white-bg");
    } else if(this.scrollY >= 100) {
        header.classList.add("white-bg");
    }
});

//

const bullets = Array.from(document.querySelectorAll(".bullet"));
const reviews = Array.from(document.querySelectorAll(".review"));
bullets.forEach(bullet => {
    bullet.addEventListener("click", function () {
        for(let i = 0; i < bullets.length; i++) {
            bullets[i].classList.remove("active");
        }
        reviews.forEach(review => {
            if(this.id == review.dataset.id) {
                review.classList.remove("hide");
            } else {
                review.classList.add("hide")
            }
        });
        this.classList.add("active");
    });
});

// https://preview.uideck.com/items/freelancer/