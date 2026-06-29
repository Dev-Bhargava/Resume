(function () {
  var APP_ORIGIN = "https://prodi-db.vercel.app";
  var DEFAULT_IFRAME_HEIGHT = "100vh";
  var DEFAULT_IFRAME_ID = "prodi-embed-frame";
  var DEFAULT_CONTAINER_ID = "prodi-embed-root";
  var iframeOrigin = new URL(APP_ORIGIN).origin;

  function normalizeProteinId(value) {
    return String(value || "").trim();
  }

  function getProteinFromQuery() {
    var url = new URL(window.location.href);
    return normalizeProteinId(url.searchParams.get("protein"));
  }

  function setProteinInQuery(proteinId) {
    var url = new URL(window.location.href);
    var normalized = normalizeProteinId(proteinId);

    if (normalized) {
      url.searchParams.set("protein", normalized);
    } else {
      url.searchParams.delete("protein");
    }

    window.history.pushState({}, "", url.toString());
  }

  function buildIframeSrc(proteinId) {
    var normalized = normalizeProteinId(proteinId);

    if (!normalized) {
      return APP_ORIGIN;
    }

    return APP_ORIGIN + "/protein/" + encodeURIComponent(normalized);
  }

  function ensureContainer() {
    var container = document.getElementById(DEFAULT_CONTAINER_ID);
    if (container) return container;

    container = document.createElement("div");
    container.id = DEFAULT_CONTAINER_ID;
    container.style.width = "100%";
    container.style.margin = "0";
    container.style.padding = "0";

    if (document.body.firstChild) {
      document.body.insertBefore(container, document.body.firstChild);
    } else {
      document.body.appendChild(container);
    }

    return container;
  }

  function ensureIframe(container) {
    var iframe = document.getElementById(DEFAULT_IFRAME_ID);

    if (iframe && iframe.tagName.toLowerCase() === "iframe") {
      return iframe;
    }

    iframe = document.createElement("iframe");
    iframe.id = DEFAULT_IFRAME_ID;
    iframe.title = "ProDI Embed";
    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
    iframe.style.display = "block";
    iframe.style.width = "100%";
    iframe.style.height = DEFAULT_IFRAME_HEIGHT;
    iframe.style.border = "0";

    container.appendChild(iframe);
    return iframe;
  }

  function syncIframeFromQuery(iframe) {
    var proteinId = getProteinFromQuery();
    var nextSrc = buildIframeSrc(proteinId);

    if (iframe.getAttribute("src") !== nextSrc) {
      iframe.setAttribute("src", nextSrc);
    }
  }

  function handleRouteChange(route) {
    var safeRoute = typeof route === "string" ? route : "/";
    var match = safeRoute.match(/^\/protein\/([^/?#]+)/);

    if (match) {
      var proteinId = decodeURIComponent(match[1]);
      var currentProtein = getProteinFromQuery();

      if (currentProtein !== proteinId) {
        setProteinInQuery(proteinId);
      }
    } else if (getProteinFromQuery()) {
      setProteinInQuery("");
    }
  }

  function init() {
    if (!document.body) return;

    var container = ensureContainer();
    var iframe = ensureIframe(container);

    window.addEventListener("message", function (event) {
      if (event.origin !== iframeOrigin) return;

      var data = event.data;
      if (!data || typeof data !== "object") return;

      if (data.type === "PRODI_EMBED_ROUTE_CHANGE") {
        handleRouteChange(data.route);
        return;
      }

      if (data.type === "PRODI_EMBED_SET_HEIGHT") {
        var nextHeight = parseInt(data.height, 10);
        if (!isNaN(nextHeight) && nextHeight > 0) {
          iframe.style.height = nextHeight + "px";
        }
      }
    });

    window.addEventListener("popstate", function () {
      syncIframeFromQuery(iframe);
    });

    syncIframeFromQuery(iframe);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
