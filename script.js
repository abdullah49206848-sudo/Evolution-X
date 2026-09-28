const menuButton = document.getElementById("menuButton");

menuButton.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
});


// Close mobile menu when clicking a link

document.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {
        document.body.classList.remove("menu-open");
    });

});


// Simple reveal animation

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.12
    }
);


document
    .querySelectorAll(
        ".feature-card, .device-card, .download-box, .about-content"
    )
    .forEach((element) => {

        element.classList.add("reveal");

        observer.observe(element);

    });
