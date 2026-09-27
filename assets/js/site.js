/* Beige Machine — small site-wide behaviour. No dependencies. */
(function () {
  "use strict";

  /* 1. Local preview helper.
     Links use clean folder URLs (e.g. "software/"), which Netlify serves as
     software/index.html. When the site is opened straight from disk
     (file://), browsers show a folder listing instead, so point those links
     at index.html. This does nothing on the live site. */
  if (window.location.protocol === "file:") {
    document.querySelectorAll("a[href]").forEach(function (link) {
      var href = link.getAttribute("href");
      if (/^(https?:|mailto:|#)/.test(href)) return;
      if (href === "" || href === "." || href === "./") {
        link.setAttribute("href", "index.html");
      } else if (href.slice(-1) === "/") {
        link.setAttribute("href", href + "index.html");
      }
    });
  }

  /* 2. Beige Mail.
     Not connected to a mailing-list service yet, so the form must not
     submit anywhere. Replace this block when a provider is chosen. */
  document.querySelectorAll("form[data-mail-form]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
    });
  });
})();
