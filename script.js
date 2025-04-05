document.addEventListener("DOMContentLoaded", function () {
    /* --- Back to Top Button --- */
    const backToTopBtn = document.createElement("button");
    backToTopBtn.id = "back-to-top";
    backToTopBtn.innerText = "↑";
    document.body.appendChild(backToTopBtn);
  
    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    });
  
    /* --- Scroll Reveal Animations --- */
    const observerOptions = {
      threshold: 0.1,
    };
  
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          entry.target.classList.remove("hidden");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    const revealElements = document.querySelectorAll(
      ".page-content, .content-section, .card, .hero-content"
    );
    revealElements.forEach((el) => {
      el.classList.add("hidden");
      revealObserver.observe(el);
    });
  
    /* --- Smooth Scrolling for Internal Links --- */
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });
  