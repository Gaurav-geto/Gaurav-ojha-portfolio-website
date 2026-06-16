// ===========================
// MOBILE MENU
// ===========================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("mobile-active");
    });
}

// ===========================
// TYPING EFFECT
// ===========================

const typingText = document.getElementById("typing-text");

if (typingText) {

    const words = [
        "AIoT Architect",
        "Python Developer",
        "Data Analyst",
        "Machine Learning Enthusiast",
        "IoT Innovator"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingText.textContent =
                currentWord.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentWord.length) {
                deleting = true;
                setTimeout(type, 1500);
                return;
            }

        } else {

            typingText.textContent =
                currentWord.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex <= 0) {
                deleting = false;
                charIndex = 0;
                wordIndex = (wordIndex + 1) % words.length;
            }

        }

        setTimeout(type, deleting ? 60 : 120);
    }

    type();
}

// ===========================
// SCROLL REVEAL
// ===========================

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

document.querySelectorAll(
    ".section,.project-card,.info-card,.timeline-item,.certificate-card,.skill-group"
).forEach((el) => {

    el.classList.add("hidden");
    observer.observe(el);

});

// ===========================
// ACTIVE NAVBAR
// ===========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===========================
// VANTA BACKGROUND
// ===========================

window.addEventListener("load", () => {

    if (typeof VANTA !== "undefined") {

        VANTA.NET({

            el: "#particles-js",

            mouseControls: true,
            touchControls: true,
            gyroControls: false,

            minHeight: 200,
            minWidth: 200,

            scale: 1,
            scaleMobile: 1,

            color: 0x8b5cf6,
            backgroundColor: 0x05010d,

            points: 14,
            maxDistance: 22,
            spacing: 18

        });

    } else {

        console.error("VANTA failed to load.");

    }

});