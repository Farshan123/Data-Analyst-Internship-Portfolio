/* Portfolio interactions - plain JavaScript, no libraries. */
(function () {
  "use strict";

  // 1. Mobile navigation -------------------------------------------------
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Close" : "Menu";
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && links.classList.contains("open")) {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
        toggle.focus();
      }
    });
  }

  // 2. Highlight the current page in the navigation ---------------------
  var here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    var target = a.getAttribute("href").split("#")[0].toLowerCase();
    if (target === here) { a.classList.add("active"); a.setAttribute("aria-current", "page"); }
  });

  // 3. Highlight the section being read (sub-navigation) -----------------
  var subLinks = document.querySelectorAll(".subnav a");
  if (subLinks.length && "IntersectionObserver" in window) {
    var map = {};
    subLinks.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && map[entry.target.id]) {
          subLinks.forEach(function (a) { a.classList.remove("active"); });
          map[entry.target.id].classList.add("active");
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) spy.observe(el);
    });
  }

  // 4. Project filtering -------------------------------------------------
  var buttons = document.querySelectorAll(".filters button");
  var items = document.querySelectorAll("[data-tags]");
  var status = document.getElementById("filter-status");
  if (buttons.length) {
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var f = btn.getAttribute("data-filter");
        buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
        var shown = 0;
        items.forEach(function (el) {
          var match = f === "all" || el.getAttribute("data-tags").split(" ").indexOf(f) !== -1;
          el.hidden = !match;
          if (match && el.classList.contains("project-card")) shown++;
        });
        document.querySelectorAll(".subnav a").forEach(function (a) {
          var t = document.getElementById(a.getAttribute("href").slice(1));
          if (t) a.parentElement.hidden = t.hidden;
        });
        if (status) {
          status.textContent = f === "all" ? "" :
            "Showing " + shown + " of " + document.querySelectorAll(".project-card").length + " projects: " + btn.textContent + ".";
        }
      });
    });
  }

  // 5. Back-to-top button -------------------------------------------------
  var top = document.getElementById("back-to-top");
  if (top) {
    window.addEventListener("scroll", function () {
      top.classList.toggle("show", window.scrollY > 500);
    }, { passive: true });
    top.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    });
  }

  // 6. Footer year -----------------------------------------------------------
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
