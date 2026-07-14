// ===== Sticky nav on scroll =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ===== Mobile menu toggle =====
const burger = document.getElementById('burger');
burger.addEventListener('click', () => {
  nav.classList.toggle('open');
});
document.querySelectorAll('.links a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// ===== Scroll-reveal animations =====
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== Smooth-scroll for in-page anchors =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== Progress bar animation =====
const progressObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const percent = bar.dataset.percent;
      bar.style.width = percent + '%';
      observer.unobserve(bar);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.bar-fill').forEach(bar => progressObserver.observe(bar));

// ===== Contact Form to WhatsApp =====
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // --- अपना व्हाट्सएप नंबर यहाँ डालें ---
  const yourWhatsAppNumber = '910000000000'; // कंट्री कोड के साथ, बिना '+' के

  // Form से डेटा प्राप्त करें
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const selectedPackage = document.getElementById('package').value;

  // व्हाट्सएप मैसेज तैयार करें
  const message = `New Fitness Inquiry from TNFE Website:
*Name:* ${name}
*Phone:* ${phone}
*Package:* ${selectedPackage}`;

  // व्हाट्सएप URL बनाएं
  const whatsappURL = `https://wa.me/${yourWhatsAppNumber}?text=${encodeURIComponent(message)}`;

  // यूजर को व्हाट्सएप पर रीडायरेक्ट करें
  window.open(whatsappURL, '_blank');
});
