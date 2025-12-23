/*
  1. Smooth Scroll (Hire Me)*/

function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

/*2. Smooth Scroll for Navbar*/
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (e) {
        if (this.getAttribute("href").startsWith("#")) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href"))
                .scrollIntoView({ behavior: "smooth" });
        }
    });
});

/*3. Scroll Reveal Animation (Global)*/
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll("section").forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});


/*5. Skill Card Glow Effect (JS Hover)*/
document.querySelectorAll(".skill-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 0 25px rgba(160,237,218,0.9)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
    });
});

/*
  6. CV Download Functionality*/
document.querySelector('a[href="#CV"]').addEventListener("click", function (e) {
    e.preventDefault();

    const link = document.createElement("a");
    link.href = "Krupa_B_CV.pdf";   // CV file name
    link.download = "Krupa_B_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

/* 7 project card - to git hub redirect*/
// Map project IDs to GitHub links
document.addEventListener("DOMContentLoaded", () => {
const projectLinks = {
    project1: "https://github.com/KAP2228/portfolio",
    project2: "https://github.com/KAP2228/spotify-ui",
    project3: "https://github.com/KAP2228/rock-paper-scissors"
};

// Select all cards
document.querySelectorAll(".card").forEach(card => {
    // Ensure the card has an ID
    const id = card.id;
    if (id && projectLinks[id]) {
        card.style.cursor = "pointer";

        // Add click event listener
        card.addEventListener("click", () => {
            window.open(projectLinks[id], "_blank"); // Open in new tab
        });
    }
});
});

/* ===== BLINKING STARS BACKGROUND ===== */

/* ===== STRONG BLINKING STARS BACKGROUND ===== */

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "0";
canvas.style.pointerEvents = "none";

document.body.prepend(canvas);

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// ⭐ Create stars
const stars = [];
for (let i = 0; i < 150; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random(),
        speed: Math.random() * 0.08 + 0.04 // FAST blink
    });
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(s => {
        s.alpha += s.speed;
        if (s.alpha >= 1 || s.alpha <= 0) {
            s.speed *= -1;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = "white";
        ctx.fill();
    });

    requestAnimationFrame(animateStars);
}

animateStars();
