import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initGsapAnimations() {
  if (typeof window === "undefined") return;

  // 1. Magnetic Buttons Effect (GSAP quickTo for 60fps buttery fluid tracking)
  const magneticElements = document.querySelectorAll<HTMLElement>(".magnetic-btn, .magnetic-item");

  magneticElements.forEach((el) => {
    const xTo = gsap.quickTo(el, "x", { duration: 0.35, ease: "power2.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.35, ease: "power2.out" });

    // Optional inner text parallax if available
    const innerText = el.querySelector<HTMLElement>(".magnetic-text");
    const textXTo = innerText ? gsap.quickTo(innerText, "x", { duration: 0.45, ease: "power2.out" }) : null;
    const textYTo = innerText ? gsap.quickTo(innerText, "y", { duration: 0.45, ease: "power2.out" }) : null;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Distance from center
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;

      // Pull strength factor
      xTo(distX * 0.32);
      yTo(distY * 0.32);

      if (textXTo && textYTo) {
        textXTo(distX * 0.16);
        textYTo(distY * 0.16);
      }
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1.1, 0.4)",
      });

      if (innerText) {
        gsap.to(innerText, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: "elastic.out(1.1, 0.4)",
        });
      }
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
  });

  // 2. Button Ripple & Shine Interaction on Click
  const shineButtons = document.querySelectorAll<HTMLElement>(".btn-shine");
  shineButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const rect = btn.getBoundingClientRect();
      const circle = document.createElement("span");
      const diameter = Math.max(rect.width, rect.height);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - rect.left - radius}px`;
      circle.style.top = `${e.clientY - rect.top - radius}px`;
      circle.classList.add("ripple-circle");

      const existingRipple = btn.querySelector(".ripple-circle");
      if (existingRipple) existingRipple.remove();

      btn.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    });
  });

  // 3. Staggered ScrollTrigger Section Reveals
  const sections = document.querySelectorAll<HTMLElement>("section");
  sections.forEach((sec) => {
    // Header elements reveal
    const header = sec.querySelector(".section-header");
    if (header) {
      gsap.fromTo(
        header,
        { opacity: 0, y: 35, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Staggered Cards / Grid items reveal
    const cards = sec.querySelectorAll<HTMLElement>(".reveal-card");
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  });

  // 4. Interactive 3D Card Tilt for Bento and Project Cards
  const tiltCards = document.querySelectorAll<HTMLElement>(".tilt-card");
  tiltCards.forEach((card) => {
    const handleTilt = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6; // Max 6 deg
      const rotateY = ((x - centerX) / centerX) * 6;

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 900,
        duration: 0.35,
        ease: "power1.out",
      });
    };

    const handleLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.65,
        ease: "power2.out",
      });
    };

    card.addEventListener("mousemove", handleTilt);
    card.addEventListener("mouseleave", handleLeave);
  });

  // 5. Animated Number Counters (Stats in Hero)
  const counterElements = document.querySelectorAll<HTMLElement>(".stat-counter");
  counterElements.forEach((el) => {
    const targetValue = parseInt(el.getAttribute("data-target") || "0", 10);
    const suffix = el.getAttribute("data-suffix") || "";

    if (targetValue > 0) {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: targetValue,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          el.textContent = Math.floor(obj.val) + suffix;
        },
      });
    }
  });

  // Refresh ScrollTrigger once preloader curtain opens and scroll is restored
  window.addEventListener("preloader:complete", () => {
    ScrollTrigger.refresh();
  }, { once: true });
}
