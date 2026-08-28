const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});

const sections = document.querySelectorAll(".section");

const revealSections = () => {
    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight - 100) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealSections);
revealSections();