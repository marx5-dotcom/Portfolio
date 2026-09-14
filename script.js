document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Certification Category Filter
    const filterButtons = document.querySelectorAll(".filter-btn");
    const certCards = document.querySelectorAll(".cert-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filterValue = button.getAttribute("data-filter");

            // Toggle active button style
            filterButtons.forEach(btn => {
                btn.classList.remove("bg-brand-accent", "text-brand-dark", "active-filter");
                btn.classList.add("bg-brand-card", "text-slate-400");
            });
            button.classList.add("bg-brand-accent", "text-brand-dark", "active-filter");
            button.classList.remove("bg-brand-card", "text-slate-400");

            // Filter cards
            certCards.forEach(card => {
                if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // 2. Active Navigation Highlight on Scroll
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-item");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navItems.forEach(item => {
            item.classList.remove("text-brand-accent");
            if (item.getAttribute("href") === `#${currentSection}`) {
                item.classList.add("text-brand-accent");
            }
        });
    });

    // 3. Simple Form Validation & Interactive Feedback
    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            formStatus.textContent = "Please fill in all fields.";
            formStatus.className = "text-xs text-center mt-2 text-rose-400 block";
            return;
        }

        // Simulate successful submission
        formStatus.textContent = "Message sent successfully! I will get back to you soon.";
        formStatus.className = "text-xs text-center mt-2 text-emerald-400 block";

        contactForm.reset();
    });
});
