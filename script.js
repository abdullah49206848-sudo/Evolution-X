/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.getElementById("menuButton");

const mobileMenu = document.getElementById("mobileMenu");


if (menuButton) {

    menuButton.addEventListener("click", () => {

        document.body.classList.toggle("menu-open");

    });

}


document
    .querySelectorAll(".mobile-menu a")
    .forEach((link) => {

        link.addEventListener("click", () => {

            document.body.classList.remove("menu-open");

        });

    });



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(
    ".feature-card, .device-card, .showcase-card, .download-box, .about-content, .about-box"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal");
                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    observer.observe(element);

});



/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.style.background =
            "rgba(5,5,5,0.92)";

    } else {

        navbar.style.background =
            "rgba(5,5,5,0.72)";

    }

});



/* =====================================================
   CLOSE MENU WITH ESC
===================================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        document.body.classList.remove("menu-open");

    }

});



/* =====================================================
   SMOOTH ANCHOR OFFSET
===================================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                targetId === "#" ||
                !targetId
            ) {

                return;

            }


            const target =
                document.querySelector(targetId);


            if (!target) {

                return;

            }


            event.preventDefault();


            const offset = 75;


            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                offset;


            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        });

    });
