const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const closeBtn = document.getElementById("close-menu");
const navLinks = nav.querySelectorAll("a");

const closeMenu = () => {
    nav.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
};

toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("active");
    toggle.setAttribute("aria-expanded", String(isOpen));
});

closeBtn.addEventListener("click", closeMenu);
navLinks.forEach((link) => link.addEventListener("click", closeMenu));

const revealItems = document.querySelectorAll(".reveal-left, .reveal-right, .reveal-up, .hero-copy, .site-header");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.1 },
    );

    revealItems.forEach((item) => observer.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
}
