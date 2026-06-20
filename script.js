(function () {
  "use strict";

  const data = window.portfolioContent;
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  const escapeHtml = (value) =>
    String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const slugify = (value) =>
    String(value)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const renderTags = (items = []) =>
    items.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("");

  const sectionShell = (id, eyebrow, title, lead, body) => `
    <div class="section-shell">
      <div class="section-heading reveal">
        <span class="eyebrow">${escapeHtml(eyebrow)}</span>
        <h2 id="${escapeHtml(id)}">${escapeHtml(title)}</h2>
        ${lead ? `<p>${escapeHtml(lead)}</p>` : ""}
      </div>
      ${body}
    </div>
  `;

  const linkAttributes = (link) => {
    if (link.uiOnly) {
      return `href="${escapeHtml(link.url)}" data-ui-only="true" aria-label="${escapeHtml(
        `${link.label} placeholder`
      )}"`;
    }

    const isExternal = /^https?:\/\//.test(link.url);
    return `href="${escapeHtml(link.url)}"${isExternal ? ' target="_blank" rel="noopener noreferrer"' : ""}`;
  };

  function init() {
    if (!data) {
      document.body.innerHTML =
        "<main class='missing-content'><h1>Portfolio content is missing.</h1><p>Please check content.js.</p></main>";
      return;
    }

    document.title = `${data.profile.name} | Computer Science (AI) Portfolio`;
    document.documentElement.lang = "en";

    renderNavigation();
    renderHome();
    renderAbout();
    renderAcademic();
    renderSkills();
    renderProjects();
    renderExperience();
    renderLifeGallery();
    renderContact();
    renderFooter();

    setupTheme();
    setupMobileMenu();
    setupSmoothLinks();
    setupRevealAnimations();
    setupActiveNavigation();
    setupLifeGallery();
    setupContactForm();
    setupBackToTop();
    setupUiOnlyLinks();
  }

  function renderNavigation() {
    $("#brandName").textContent = data.profile.name;

    $("#primaryNavigation").innerHTML = data.navigation
      .map(
        (item) => `
          <li>
            <a href="#${escapeHtml(item.id)}" data-nav-link="${escapeHtml(item.id)}">
              ${escapeHtml(item.label)}
            </a>
          </li>
        `
      )
      .join("");
  }

  function renderHome() {
    const metrics = data.homeMetrics
      .map(
        (metric) => `
          <div class="metric-card reveal">
            <strong>${escapeHtml(metric.value)}</strong>
            <span>${escapeHtml(metric.label)}</span>
          </div>
        `
      )
      .join("");

    const quickLinks = data.quickLinks
      .map(
        (link) => `
          <a class="quick-card reveal" href="${escapeHtml(link.href)}">
            <span>${escapeHtml(link.label)}</span>
            <small>${escapeHtml(link.detail)}</small>
            <b aria-hidden="true">-></b>
          </a>
        `
      )
      .join("");

    $("#home").innerHTML = `
      <div class="hero-grid section-shell">
        <div class="hero-copy reveal">
          <span class="eyebrow">Academic Intelligence Profile System</span>
          <h1 id="homeTitle">${escapeHtml(data.profile.name)}</h1>
          <p class="degree">${escapeHtml(data.profile.degree)}</p>
          <p class="tagline">${escapeHtml(data.profile.tagline)}</p>
          <p class="intro">${escapeHtml(data.profile.intro)}</p>
          <div class="hero-actions" aria-label="Primary actions">
            <a class="button button-primary" href="#projects">View Projects</a>
            <a class="button button-secondary" href="#contact">Contact</a>
          </div>
        </div>

        <aside class="profile-panel reveal" aria-label="Profile summary">
          <div class="profile-visual" role="img" aria-label="Profile image placeholder for ${escapeHtml(
            data.profile.name
          )}">
            <img src="assets/test_169.png" alt="${escapeHtml(data.profile.name || 'Profile image')}">
          </div>
          <div class="profile-readout">
            <span class="readout-label">Identity Record</span>
            <strong>${escapeHtml(data.profile.degree)}</strong>
            <p>${escapeHtml(data.profile.institution)}</p>
            <p>${escapeHtml(data.profile.location)}</p>
          </div>
          <div class="signal-list" aria-label="Profile signals">
            <span>AI Systems</span>
            <span>Human-Centred Design</span>
            <span>Decision Support</span>
          </div>
        </aside>
      </div>

      <div class="section-shell hero-dashboard" aria-label="Portfolio overview">
        <div class="metrics-grid">${metrics}</div>
        <div class="quick-grid">${quickLinks}</div>
      </div>
    `;
  }

  function renderAbout() {
    const highlights = data.about.highlights
      .map(
        (item, index) => `
          <li class="highlight-item reveal">
            <span class="timeline-index">${String(index + 1).padStart(2, "0")}</span>
            <div>
              <strong>${escapeHtml(item.label)}</strong>
              <p>${escapeHtml(item.detail)}</p>
            </div>
          </li>
        `
      )
      .join("");

    $("#about").innerHTML = sectionShell(
      "aboutTitle",
      "Profile Narrative",
      "About Me",
      "A concise academic and career profile shaped by AI, software engineering, and HCI.",
      `
        <div class="about-layout">
          <article class="text-panel reveal">
            <h3>Biography</h3>
            <p>${escapeHtml(data.about.biography)}</p>
            <h3>Career Goals</h3>
            <p>${escapeHtml(data.about.careerGoals)}</p>
          </article>

          <aside class="summary-panel reveal">
            <h3>Technical + Soft Skills Summary</h3>
            <p>${escapeHtml(data.about.skillsSummary)}</p>
          </aside>
        </div>

        <ol class="highlight-timeline" aria-label="Timeline highlights">
          ${highlights}
        </ol>
      `
    );
  }

  function renderAcademic() {
    const education = data.education
      .map(
        (item) => `
          <article class="timeline-card reveal">
            <div class="timeline-marker" aria-hidden="true"></div>
            <div class="timeline-content">
              <span class="eyebrow">${escapeHtml(item.period)}</span>
              <h3>${escapeHtml(item.title)}</h3>
              <strong>${escapeHtml(item.position)}</strong>
              <strong>${escapeHtml(item.institution)}</strong>
              <p>${escapeHtml(item.description)}</p>
              <div class="tag-row">${renderTags(item.tags)}</div>
            </div>
          </article>
        `
      )
      .join("");

    $("#academic").innerHTML = sectionShell(
      "academicTitle",
      "Learning Trace",
      "Academic History",
      "Timeline-based view of the study path from STPM foundation to UTeM Computer Science (AI).",
      `<div class="academic-timeline">${education}</div>`
    );
  }

  function renderSkills() {
    const skillGroups = data.skills
      .map(
        (group) => `
          <article class="skill-card reveal">
            <div class="card-header">
              <h3>${escapeHtml(group.category)}</h3>
              <p>${escapeHtml(group.summary)}</p>
            </div>
            <div class="skill-list">
              ${group.items
                .map(
                  (skill) => `
                    <div class="skill-item">
                      <div class="skill-meta">
                        <strong>${escapeHtml(skill.name)}</strong>
                        <span>${escapeHtml(skill.level)}%</span>
                      </div>
                      <div
                        class="progress"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-valuenow="${escapeHtml(skill.level)}"
                        aria-label="${escapeHtml(`${skill.name} competency`)}"
                      >
                        <span style="--value: ${escapeHtml(skill.level)}%"></span>
                      </div>
                      <small>${escapeHtml(skill.detail)}</small>
                    </div>
                  `
                )
                .join("")}
            </div>
          </article>
        `
      )
      .join("");

    $("#skills").innerHTML = sectionShell(
      "skillsTitle",
      "Competency Matrix",
      "Skills & Competencies",
      "Grouped capabilities with visual indicators for fast scanning and comparison.",
      `<div class="skills-grid">${skillGroups}</div>`
    );
  }

  function renderProjects() {
    const projects = data.projects
      .map((project, index) => {
        const links = project.links
          .map(
            (link) => `
              <a class="project-link" ${linkAttributes(link)}>
                ${escapeHtml(link.label)}
              </a>
            `
          )
          .join("");

        return `
          <article class="project-card reveal">
            <div class="project-media media-${(index % 4) + 1}">
              ${project.image
                            ? `<img src="${project.image}" alt="${escapeHtml(project.title)}">`
                            : `
                    <span aria-hidden="true">${escapeHtml(project.mediaLabel)}</span>
                    <div class="media-lines" aria-hidden="true">
                      <i></i><i></i><i></i><i></i>
                    </div>
                  `
              }
            </div>
            <div class="project-body">
              <span class="eyebrow">${escapeHtml(project.category)}</span>
              <h3>${escapeHtml(project.title)}</h3>
              <p>${escapeHtml(project.description)}</p>
              <div class="tag-row">${renderTags(project.technologies)}</div>
              <div class="project-actions">${links}</div>
            </div>
          </article>
        `;
      })
      .join("");

    $("#projects").innerHTML = sectionShell(
      "projectsTitle",
      "Project Evidence",
      "Projects / Work",
      "Academic and AI-related systems presented as evidence records with technologies and media placeholders.",
      `<div class="projects-grid">${projects}</div>`
    );
  }

  function renderExperience() {
    const activities = data.experience
      .map(
        (item) => `
          <article class="experience-card reveal">
            <div class="experience-top">
              <span class="eyebrow">${escapeHtml(item.period)}</span>
              <h3>${escapeHtml(item.title)}</h3>
              <strong>${escapeHtml(item.role)}</strong>
            </div>
            <p>${escapeHtml(item.description)}</p>
            <div class="evidence-list">
              ${item.evidence.map((entry) => `<span>${escapeHtml(entry)}</span>`).join("")}
            </div>
          </article>
        `
      )
      .join("");

    $("#experience").innerHTML = sectionShell(
      "experienceTitle",
      "Activity Log",
      "Experience / Activities",
      "Coursework, group assignments, and activities that demonstrate collaboration and practical delivery.",
      `<div class="experience-grid">${activities}</div>`
    );
  }

  function renderLifeGallery() {
    const gallery = data.lifeGallery;
    const items = gallery?.items || [];
    const slides = items
      .map(
        (item, index) => `
          <article class="gallery-slide${index === 0 ? " is-active" : ""}" id="gallerySlide${index + 1}" aria-label="${escapeHtml(
            `${item.caption} slide`
          )}" tabindex="0" ${index === 0 ? 'aria-current="true"' : ""}>
            <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.alt)}" loading="lazy">
            <div class="gallery-caption">
              <span>${escapeHtml(String(index + 1).padStart(2, "0"))}</span>
              <strong>${escapeHtml(item.caption)}</strong>
            </div>
          </article>
        `
      )
      .join("");

    const dots = items
      .map(
        (item, index) => `
          <button
            class="gallery-dot${index === 0 ? " is-active" : ""}"
            type="button"
            data-gallery-dot="${index}"
            aria-label="Show ${escapeHtml(item.caption)}"
            aria-controls="lifeGalleryTrack"
            ${index === 0 ? 'aria-current="true"' : ""}
          ></button>
        `
      )
      .join("");

    $("#life-gallery").innerHTML = sectionShell(
      "lifeGalleryTitle",
      gallery.eyebrow,
      gallery.title,
      gallery.lead,
      `
        <div class="gallery-shell reveal">
          <div
            class="gallery-track"
            id="lifeGalleryTrack"
            tabindex="0"
            aria-label="Life gallery cover flow carousel"
          >
            ${slides}
          </div>
          <div class="gallery-dots" aria-label="Life gallery slide controls">
            ${dots}
          </div>
        </div>
      `
    );
  }

  function renderContact() {
    const contactLinks = [
      { label: "Email", url: `mailto:${data.profile.email}` },
      { label: "GitHub", url: data.profile.github },
      { label: "LinkedIn", url: data.profile.linkedin },
        {
            label: "Resume",
            url: data.profile.resumeFile,
            uiOnly: data.profile.resumeFile === "#",
            displayText: data.profile.resumeFile === "#" ? "UI only" : "Click to view"
        }
    ];

    $("#contact").innerHTML = sectionShell(
      "contactTitle",
      "Contact Channel",
      "Contact",
      data.contact.heading,
      `
        <div class="contact-layout">
          <aside class="contact-panel reveal">
            <p>${escapeHtml(data.contact.note)}</p>
            <div class="contact-links">
              ${contactLinks
                .map(
                  (link) => `
                    <a class="contact-link" ${linkAttributes(link)}>
                      <span>${escapeHtml(link.label)}</span>
                      <small>
                      ${
                        link.displayText
                            ? escapeHtml(link.displayText)
                            : escapeHtml(link.uiOnly ? "UI only" : link.url.replace(/^mailto:/, ""))
                      }
                    </small>
                    </a>
                  `
                )
                .join("")}
            </div>
          </aside>

          <form class="contact-form reveal" id="contactForm" novalidate>
            <div class="form-row">
              <label for="contactName">Name</label>
              <input id="contactName" name="name" type="text" autocomplete="name" required>
            </div>
            <div class="form-row">
              <label for="contactEmail">Email</label>
              <input id="contactEmail" name="email" type="email" autocomplete="email" required>
            </div>
            <div class="form-row">
              <label for="contactMessage">Message</label>
              <textarea id="contactMessage" name="message" rows="5" required></textarea>
            </div>
            <button class="button button-primary" type="submit">Prepare Message</button>
            <p class="form-status" id="formStatus" role="status" aria-live="polite"></p>
          </form>
        </div>
      `
    );
  }

  function renderFooter() {
    $("#siteFooter").innerHTML = `
      <div class="footer-shell">
        <p>${escapeHtml(data.profile.name)} - Computer Science (AI) Portfolio</p>
        <p>Static HTML, CSS, and vanilla JavaScript. Designed for HCI submission and static hosting.</p>
      </div>
    `;
  }

  function setupTheme() {
    const button = $("#themeToggle");
    const storedTheme = localStorage.getItem("portfolio-theme");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(storedTheme || preferredTheme);

    button.addEventListener("click", () => {
      const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
      localStorage.setItem("portfolio-theme", nextTheme);
    });

    function setTheme(theme) {
      document.documentElement.dataset.theme = theme;
      const isDark = theme === "dark";
      button.setAttribute("aria-pressed", String(isDark));
      button.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    }
  }

  function setupMobileMenu() {
    const header = $("[data-header]");
    const toggle = $(".nav-toggle");

    toggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    $$(".nav-links a").forEach((link) => link.addEventListener("click", closeMenu));

    function closeMenu() {
      header.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation menu");
    }
  }

  function setupSmoothLinks() {
    document.addEventListener("click", (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link || link.matches("[data-ui-only]")) {
        return;
      }

      const target = $(link.getAttribute("href"));
      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", link.getAttribute("href"));
    });
  }

  function setupRevealAnimations() {
    const revealItems = $$(".reveal");

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    revealItems.forEach((item) => observer.observe(item));
  }

  function setupActiveNavigation() {
    const sections = data.navigation.map((item) => $(`#${item.id}`)).filter(Boolean);

    if (!("IntersectionObserver" in window)) {
      setActiveNav("home");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -58% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  function setActiveNav(id) {
    $$("[data-nav-link]").forEach((link) => {
      const isActive = link.dataset.navLink === id;
      link.toggleAttribute("aria-current", isActive);
    });
  }

  function setupLifeGallery() {
    const track = $("#lifeGalleryTrack");
    if (!track) {
      return;
    }

    const slides = $$(".gallery-slide", track);
    const dots = $$("[data-gallery-dot]");
    if (!slides.length) {
      return;
    }

    let activeIndex = 0;
    let frameId = 0;

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const setActiveIndex = (index) => {
      activeIndex = index;

      slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === index;
        slide.classList.toggle("is-active", isActive);
        if (isActive) {
          slide.setAttribute("aria-current", "true");
        } else {
          slide.removeAttribute("aria-current");
        }
      });

      dots.forEach((dot, dotIndex) => {
        const isActive = dotIndex === index;
        dot.classList.toggle("is-active", isActive);
        if (isActive) {
          dot.setAttribute("aria-current", "true");
        } else {
          dot.removeAttribute("aria-current");
        }
      });
    };

    const updateCoverFlow = () => {
      frameId = 0;

      const trackRect = track.getBoundingClientRect();
      const trackCenter = trackRect.left + trackRect.width / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      const slideMetrics = slides.map((slide, index) => {
        const slideRect = slide.getBoundingClientRect();
        const slideCenter = slideRect.left + slideRect.width / 2;
        const distance = Math.abs(trackCenter - slideCenter);
        const rawOffset = (slideCenter - trackCenter) / Math.max(slideRect.width, 1);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }

        return {
          slide,
          offset: clamp(rawOffset, -2.25, 2.25)
        };
      });

      slideMetrics.forEach(({ slide, offset }, index) => {
        const isActive = index === closestIndex;
        const transformOffset = isActive ? 0 : offset;
        const depth = isActive ? 0 : Math.min(Math.abs(transformOffset), 2.25);
        const scale = isActive ? 1 : 1 - Math.min(depth * 0.17, 0.36);
        const opacity = isActive ? 1 : 1 - Math.min(depth * 0.28, 0.56);
        const brightness = isActive ? 1 : 1 - Math.min(depth * 0.34, 0.54);
        const rotate = isActive ? 0 : clamp(transformOffset * -16, -24, 24);
        const translateY = isActive ? 0 : Math.min(depth * 24, 44);
        const translateX = isActive ? 0 : clamp(transformOffset * -16, -34, 34);
        const zIndex = isActive ? 120 : Math.round(100 - depth * 28);

        slide.style.setProperty("--cover-scale", scale.toFixed(3));
        slide.style.setProperty("--cover-opacity", opacity.toFixed(3));
        slide.style.setProperty("--cover-brightness", brightness.toFixed(3));
        slide.style.setProperty("--cover-rotate", `${rotate.toFixed(2)}deg`);
        slide.style.setProperty("--cover-translate-x", `${translateX.toFixed(2)}px`);
        slide.style.setProperty("--cover-translate-y", `${translateY.toFixed(2)}px`);
        slide.style.setProperty("--cover-z", String(zIndex));
        slide.dataset.coverPosition = offset < -0.25 ? "left" : offset > 0.25 ? "right" : "center";
      });

      setActiveIndex(closestIndex);
    };

    const requestCoverFlowUpdate = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateCoverFlow);
      }
    };

    const scrollToSlide = (index, behavior = "smooth") => {
      const slide = slides[index];
      if (slide) {
        slide.scrollIntoView({ behavior, block: "nearest", inline: "center" });
      }
    };

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        scrollToSlide(Number(dot.dataset.galleryDot));
      });
    });

    track.addEventListener("scroll", requestCoverFlowUpdate, { passive: true });

    track.addEventListener(
      "wheel",
      (event) => {
        if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
          return;
        }

        const maxScroll = track.scrollWidth - track.clientWidth;
        const canScrollHorizontally =
          (event.deltaY < 0 && track.scrollLeft > 0) ||
          (event.deltaY > 0 && track.scrollLeft < maxScroll - 1);

        if (!canScrollHorizontally) {
          return;
        }

        event.preventDefault();
        track.scrollLeft += event.deltaY * 1.15;
        requestCoverFlowUpdate();
      },
      { passive: false }
    );

    track.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollToSlide(Math.min(activeIndex + 1, slides.length - 1));
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollToSlide(Math.max(activeIndex - 1, 0));
      }

      if (event.key === "Home") {
        event.preventDefault();
        scrollToSlide(0);
      }

      if (event.key === "End") {
        event.preventDefault();
        scrollToSlide(slides.length - 1);
      }
    });

    window.addEventListener("resize", requestCoverFlowUpdate, { passive: true });
    requestCoverFlowUpdate();
  }

  function setupContactForm() {
    const form = $("#contactForm");
    const status = $("#formStatus");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        status.textContent = "Please complete the required fields with a valid email address.";
        form.reportValidity();
        return;
      }

      status.textContent = data.contact.formSuccess;
      form.reset();
    });
  }

  function setupBackToTop() {
    const button = $(".back-to-top");

    window.addEventListener(
      "scroll",
      () => {
        button.hidden = window.scrollY < 650;
      },
      { passive: true }
    );

    button.addEventListener("click", () => {
      $("#home").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function setupUiOnlyLinks() {
    document.addEventListener("click", (event) => {
      const link = event.target.closest("[data-ui-only]");
      if (!link) {
        return;
      }

      event.preventDefault();
      showToast("Placeholder link. Update content.js with a real URL or file path.");
    });
  }

  function showToast(message) {
    const toast = $(".toast");
    toast.textContent = message;
    toast.classList.add("is-visible");

    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 3200);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
