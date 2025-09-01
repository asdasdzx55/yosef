import smoothscroll from "smoothscroll-polyfill";
/* ...existing code... */
smoothscroll.polyfill();

/* ...existing code... */
const packageSelect = document.querySelector("#package");
const bookingSection = document.querySelector("#booking");

const t = {
  ar: {
    dir: "rtl",
    title: "كابتن يوسف – Personal Training",
    brandTitle: "كابتن يوسف – Personal Training",
    brandSub: "برامج رياضية مخصصة لكل فرد",
    nav: ["المميزات", "الباقات", "الحجز", "الشبكات", "التواصل"],
    navLang: "EN",
    heroH2: "ابدأ رحلتك الآن",
    heroP: "اختر الباقة المناسبة لك واحجز عبر WhatsApp بسهولة.",
    heroBtn: "احجز الآن",
    featuresTitle: "لماذا تختار كابتن يوسف؟",
    featuresList: [
      "جدول غذائي منظم لتحقيق هدفك: خسارة وزن، زيادة كتلة عضلية، أو تحسين اللياقة.",
      "كل جسم مختلف—برامج تدريبية وغذائية مصممة فرديًا وليست نسخ جاهزة.",
      "متابعة مستمرة للتطور والتعديل على الخطة عند الحاجة.",
      "دعم كامل وإجابة على أسئلتك طوال فترة الاشتراك.",
      "إرشادات لبناء عادات صحية تحافظ على نتائجك على المدى الطويل.",
    ],
    packagesTitle: "باقات التدريب",
    cards: [
      { h: "شهر واحد", price: "600 جنيه" },
      { h: "شهرين", price: "900 جنيه" },
      { h: "3 شهور", price: "1500 جنيه" },
    ],
    includes: ["برامج تمرين مخصصة", "إرشاد كامل", "دعم طوال فترة التدريب"],
    cardBtn: "احجز الآن",
    bookingTitle: "نموذج الحجز",
    labels: {
      name: "الاسم الكامل",
      phone: "رقم الهاتف (الحجز عبر WhatsApp)",
      branch: "اختيار الفرع",
      pkg: "باقة التدريب المختارة",
      age: "العمر (اختياري)",
      weight: "الوزن كجم (اختياري)",
      height: "الطول سم (اختياري)",
    },
    place: {
      name: "اكتب اسمك الكامل",
      phone: "مثال: 01XXXXXXXXX",
      age: "مثال: 28",
      weight: "مثال: 75",
      height: "مثال: 175",
    },
    branchOpts: ["مدينة نصر", "مصر الجديدة"],
    pkgOpts: [
      "اختر الباقة",
      "شهر واحد - 600 جنيه",
      "شهرين - 900 جنيه",
      "3 شهور - 1500 جنيه",
    ],
    hint: "العمر، الوزن، الطول يمكن إضافتهم لاحقاً عند توفر المعلومات",
    submit: "إرسال الحجز عبر WhatsApp",
    socialTitle: "تابعني على الشبكات",
    contactTitle: "طرق التواصل",
    contactWA: "WhatsApp للحجز:",
    email: "البريد الإلكتروني:",
    footer: "© كابتن يوسف — جميع الحقوق محفوظة",
    alert: "يرجى إدخال الاسم، رقم الهاتف، واختيار الباقة.",
    waIntro: "مرحباً كابتن يوسف، أرغب في حجز تدريب شخصي.",
    waSent: "تم الإرسال من الموقع",
  },
  en: {
    dir: "ltr",
    title: "Captain Youssef – Personal Training",
    brandTitle: "Captain Youssef – Personal Training",
    brandSub: "Personalized fitness programs for everyone",
    nav: ["Why Us", "Packages", "Booking", "Social", "Contact"],
    navLang: "AR",
    heroH2: "Start Your Journey Now",
    heroP: "Pick your plan and book easily via WhatsApp.",
    heroBtn: "Book Now",
    featuresTitle: "Why choose Captain Youssef?",
    featuresList: [
      "Structured nutrition plans to reach your goals: fat loss, muscle gain, or fitness.",
      "Every body is different—custom training and nutrition, not cookie-cutter plans.",
      "Continuous check-ins and adjustments when needed.",
      "Full support and open Q&A throughout your subscription.",
      "Guidance to build healthy habits that last.",
    ],
    packagesTitle: "Training Packages",
    cards: [
      { h: "1 Month", price: "EGP 600" },
      { h: "2 Months", price: "EGP 900" },
      { h: "3 Months", price: "EGP 1500" },
    ],
    includes: ["Custom workout plans", "Full guidance", "Ongoing support"],
    cardBtn: "Book Now",
    bookingTitle: "Booking Form",
    labels: {
      name: "Full Name",
      phone: "Phone (booking via WhatsApp)",
      branch: "Choose Branch",
      pkg: "Selected Package",
      age: "Age (optional)",
      weight: "Weight kg (optional)",
      height: "Height cm (optional)",
    },
    place: {
      name: "Enter your full name",
      phone: "e.g., 01XXXXXXXXX",
      age: "e.g., 28",
      weight: "e.g., 75",
      height: "e.g., 175",
    },
    branchOpts: ["Nasr City", "Heliopolis"],
    pkgOpts: [
      "Select a package",
      "1 Month - EGP 600",
      "2 Months - EGP 900",
      "3 Months - EGP 1500",
    ],
    hint: "You can add age, weight, and height later when available.",
    submit: "Send booking via WhatsApp",
    socialTitle: "Follow me",
    contactTitle: "Contact",
    contactWA: "WhatsApp (booking):",
    email: "Email:",
    footer: "© Captain Youssef — All rights reserved",
    alert: "Please enter name, phone number, and select a package.",
    waIntro: "Hello Coach Youssef, I'd like to book personal training.",
    waSent: "Sent from the website",
  },
};

/* ...existing code... */

let currentLang = localStorage.getItem("lang") || (document.documentElement.lang || "ar");

function applyLang(lang) {
  const L = t[lang];
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = L.dir;
  document.title = L.title;
  const titleEl = document.querySelector(".title");
  const parts = L.brandTitle.split("–");
  titleEl.innerHTML = parts.length > 1
    ? `${parts[0].trim()} – <span class="brand-sub">${parts[1].trim()}</span>`
    : L.brandTitle;
  document.querySelector(".subtitle").textContent = L.brandSub;
  document.querySelector(".hero-cta h2").textContent = L.heroH2;
  document.querySelector(".hero-cta p").textContent = L.heroP;
  document.querySelector(".hero-cta .btn").textContent = L.heroBtn;
}

/* ...existing code... */

function applySections(lang) {
  const L = t[lang];
  document.querySelector(".features .section-title").textContent = L.featuresTitle;
  document.querySelectorAll(".features .feature-item").forEach((li, i) => (li.textContent = L.featuresList[i]));
  document.querySelector(".packages .section-title").textContent = L.packagesTitle;
}

/* ...existing code... */

function applyPackages(lang) {
  const L = t[lang];
  const cards = [...document.querySelectorAll(".cards .card")];
  cards.forEach((card, i) => {
    card.querySelector("h4").textContent = L.cards[i].h;
    card.querySelector(".price").textContent = L.cards[i].price;
    const inc = card.querySelectorAll(".includes li");
    inc.forEach((li, j) => (li.textContent = L.includes[j]));
    const btn = card.querySelector(".book-btn");
    btn.textContent = L.cardBtn;
    btn.dataset.package = `${L.cards[i].h} - ${L.cards[i].price}`;
  });
  const pkg = document.querySelector("#package");
  pkg.innerHTML = "";
  L.pkgOpts.forEach((o, idx) => {
    const opt = document.createElement("option");
    opt.textContent = o;
    if (idx === 0) {
      opt.disabled = true;
      opt.selected = true;
      opt.value = "";
    }
    pkg.appendChild(opt);
  });
  document.querySelectorAll(".cards .card h4").forEach((h4, idx) => {
    h4.style.cursor = "pointer";
    h4.addEventListener("click", () => {
      const card = h4.closest(".card");
      const badge = card?.querySelector(".tier-badge");
      if (!badge) return;
      const labels = currentLang === "ar" ? ["فضة","الذهبي","بلاتينيوم"] : ["Silver","Gold","Platinum"];
      const classes = ["tier-silver","tier-gold","tier-platinum"];
      badge.textContent = labels[idx] || "";
      badge.classList.remove("tier-silver","tier-gold","tier-platinum","show");
      void badge.offsetWidth;
      badge.classList.add(classes[idx] || "tier-silver","show");
      clearTimeout(badge._hideTimer);
      badge._hideTimer = setTimeout(() => badge.classList.remove("show"), 1800);
    });
  });
  document.querySelectorAll(".cards .card").forEach((card, idx) => {
    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
      const badge = card.querySelector(".tier-badge");
      if (!badge) return;
      const labels = currentLang === "ar" ? ["فضة","الذهبي","بلاتينيوم"] : ["Silver","Gold","Platinum"];
      const classes = ["tier-silver","tier-gold","tier-platinum"];
      badge.textContent = labels[idx] || "";
      badge.classList.remove("tier-silver","tier-gold","tier-platinum","show");
      void badge.offsetWidth;
      badge.classList.add(classes[idx] || "tier-silver","show");
      clearTimeout(badge._hideTimer);
      badge._hideTimer = setTimeout(() => badge.classList.remove("show"), 1800);
    });
  });
}

/* ...existing code... */

function applyForm(lang) {
  const L = t[lang];
  document.querySelector(".booking .section-title").textContent = L.bookingTitle;
  const set = (sel, txt) => (document.querySelector(sel).previousElementSibling.textContent = txt);
  set("#fullName", L.labels.name);
  set("#phone", L.labels.phone);
  set("#package", L.labels.pkg);
  set("#age", L.labels.age);
  set("#weight", L.labels.weight);
  set("#height", L.labels.height);
  document.querySelector("#fullName").placeholder = L.place.name;
  document.querySelector("#phone").placeholder = L.place.phone;
  document.querySelector("#age").placeholder = L.place.age;
  document.querySelector("#weight").placeholder = L.place.weight;
  document.querySelector("#height").placeholder = L.place.height;
  document.querySelector(".submit-btn").textContent = L.submit;
  document.querySelector(".form-hint").textContent = L.hint;
}

/* ...existing code... */

function applyFooterAndNav(lang) {
  const L = t[lang];
  const langBtn = document.querySelector("#langToggle");
  langBtn.textContent = L.navLang;
  document.querySelector(".social .section-title").textContent = L.socialTitle;
  document.querySelector(".contact .section-title").textContent = L.contactTitle;
  const cItems = document.querySelectorAll(".contact-list li");
  cItems[0].innerHTML = `${L.contactWA} <a href="https://wa.me/201283399565" class="contact-link">01283399565</a>`;
  cItems[1].innerHTML = `${L.email} <a href="mailto:uossifahmed4@gmail.com" class="contact-link">uossifahmed4@gmail.com</a>`;
  document.querySelector(".site-footer p").textContent = L.footer;
}

/* ...existing code... */

function applyAll(lang) {
  applyLang(lang);
  applySections(lang);
  applyPackages(lang);
  applyForm(lang);
  applyFooterAndNav(lang);
}
applyAll(currentLang === "en" ? "en" : "ar");

document.querySelector("#langToggle")?.addEventListener("click", () => {
  const next = currentLang === "ar" ? "en" : "ar";
  applyAll(next);
});

/* ...existing code... */

document.querySelectorAll(".book-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const p = btn.getAttribute("data-package");
    if (p && packageSelect) packageSelect.value = "";
    bookingSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

/* ...existing code... */

const form = document.querySelector("#bookingForm");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const L = t[currentLang];
  const name = document.querySelector("#fullName").value.trim();
  const phone = document.querySelector("#phone").value.trim();
  const pkg = packageSelect.value;
  if (!name || !phone || !pkg) {
    alert(L.alert);
    return;
  }
  const parts = [
    L.waIntro,
    `${currentLang === "ar" ? "الاسم" : "Name"}: ${name}`,
    `${currentLang === "ar" ? "رقم الهاتف" : "Phone"}: ${phone}`,
    `${currentLang === "ar" ? "الباقة" : "Package"}: ${pkg}`,
  ];
  const age = document.querySelector("#age").value.trim();
  if (age) parts.push(`${currentLang === "ar" ? "العمر" : "Age"}: ${age}`);
  const weight = document.querySelector("#weight").value.trim();
  if (weight) parts.push(`${currentLang === "ar" ? "الوزن" : "Weight"}: ${weight} ${currentLang === "ar" ? "كجم" : "kg"}`);
  const height = document.querySelector("#height").value.trim();
  if (height) parts.push(`${currentLang === "ar" ? "الطول" : "Height"}: ${height} ${currentLang === "ar" ? "سم" : "cm"}`);
  parts.push(L.waSent);
  const msg = encodeURIComponent(parts.join("\n"));
  const coachPhone = "201283399565"; // +20 12 83399565
  const waLink = `https://wa.me/${coachPhone}?text=${msg}`;
  window.location.href = waLink;
});

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("in");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* Parallax hero image */
let ticking = false;
const progressBar = document.querySelector(".scroll-progress");
function onScroll() {
  if (!ticking) {
    requestAnimationFrame(() => {
      const img = document.querySelector(".hero-media img");
      if (img) {
        const rect = img.getBoundingClientRect();
        const winH = window.innerHeight || 1;
        const progress = Math.max(-1, Math.min(1, (rect.top + rect.height/2 - winH/2) / winH));
        img.style.transform = `translateY(${progress * 10}px)`;
      }
      // scale feature bubbles by proximity to viewport center
      document.querySelectorAll(".feature-item").forEach(item => {
        const r = item.getBoundingClientRect(), c = (window.innerHeight||1)/2, ic = r.top + r.height/2;
        const d = Math.abs(ic - c), s = 1 + Math.max(0, 1 - d / ((window.innerHeight||1) * 0.9)) * 0.06;
        item.style.setProperty("--scale", s.toFixed(3));
      });
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const ratio = Math.max(0, Math.min(1, window.scrollY / max));
      if (progressBar) progressBar.style.transform = `scaleX(${ratio})`;
      ticking = false;
    });
    ticking = true;
  }
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ...existing code... */
const heroImg = document.querySelector(".hero-media img");
if (heroImg) {
  const original = heroImg.src;
  const dumbbell = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop";
  new Image().src = dumbbell;
  let toggled = false;
  heroImg.addEventListener("click", () => {
    toggled = !toggled; heroImg.src = toggled ? dumbbell : original;
  });
}

window.addEventListener("scroll", () => {
  const sh = document.querySelector(".site-header");
  if (!sh) return;
  (window.scrollY > 12) ? sh.classList.add("shrink") : sh.classList.remove("shrink");
}, { passive:true });

function addRipple(e, target){
  const rect = target.getBoundingClientRect();
  const x = (e.touches?.[0]?.clientX ?? e.clientX) - rect.left;
  const y = (e.touches?.[0]?.clientY ?? e.clientY) - rect.top;
  const r = document.createElement("span");
  r.className = "ripple";
  r.style.left = x + "px"; r.style.top = y + "px";
  target.appendChild(r);
  setTimeout(() => r.remove(), 700);
}

document.querySelectorAll(".btn, .card").forEach(el => {
  el.addEventListener("click", (e) => addRipple(e, el), { passive:true });
  el.addEventListener("touchstart", (e) => addRipple(e, el), { passive:true });
});

document.querySelectorAll(".card").forEach(card => {
  const reset = () => { card.style.setProperty("--rx","0deg"); card.style.setProperty("--ry","0deg"); card.style.setProperty("--ty","0px"); };
  card.addEventListener("pointermove", (e) => {
    const r = card.getBoundingClientRect(), cx = r.left + r.width/2, cy = r.top + r.height/2;
    const dx = (e.clientX - cx) / (r.width/2), dy = (e.clientY - cy) / (r.height/2);
    card.style.setProperty("--ry", (dx * 6).toFixed(2) + "deg");
    card.style.setProperty("--rx", (-dy * 6).toFixed(2) + "deg");
    card.style.setProperty("--ty", "-2px");
  });
  card.addEventListener("pointerleave", reset);
  card.addEventListener("pointerdown", () => card.style.setProperty("--ty","-1px"));
  card.addEventListener("pointerup", reset);
});