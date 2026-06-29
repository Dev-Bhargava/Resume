(function () {
  const APP_ORIGIN = "https://prod-db.vercel.app";
  const IFRAME_ID = "prodi-embed";
  const iframeOrigin = new URL(APP_ORIGIN).origin;

  function normalizeProteinId(value) {
    return String(value || "").trim();
  }

  function getProteinFromQuery() {
    const url = new URL(window.location.href);
    return normalizeProteinId(url.searchParams.get("protein"));
  }

  function buildIframeSrc() {
    const proteinId = getProteinFromQuery();

    if (!proteinId) {
      return APP_ORIGIN;
    }

    return `${APP_ORIGIN}/protein/${encodeURIComponent(proteinId)}`;
  }

  function setProteinInQuery(proteinId) {
    const url = new URL(window.location.href);
    const normalized = normalizeProteinId(proteinId);

    if (normalized) {
      url.searchParams.set("protein", normalized);
    } else {
      url.searchParams.delete("protein");
    }

    window.history.pushState({}, "", url.toString());
  }

  function ensureIframe() {
    let iframe = document.getElementById(IFRAME_ID);

    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.id = IFRAME_ID;
      iframe.title = "ProDI Embed";
      iframe.style.display = "block";
      iframe.style.width = "100%";
      iframe.style.height = "100vh";
      iframe.style.border = "0";
      document.body.appendChild(iframe);
    }

    return iframe;
  }

  function syncIframeFromQuery() {
    const iframe = ensureIframe();
    const nextSrc = buildIframeSrc();

    if (iframe.getAttribute("src") !== nextSrc) {
      iframe.setAttribute("src", nextSrc);
    }
  }

  function handleRouteChange(route) {
    const safeRoute = typeof route === "string" ? route : "/";
    const match = safeRoute.match(/^\/protein\/([^/?#]+)/);

    if (match) {
      const proteinId = decodeURIComponent(match[1]);
      const currentProtein = getProteinFromQuery();

      if (currentProtein !== proteinId) {
        setProteinInQuery(proteinId);
      }
    } else if (getProteinFromQuery()) {
      setProteinInQuery("");
    }
  }

  function init() {
    ensureIframe();

    window.addEventListener("message", function (event) {
      if (event.origin !== iframeOrigin) return;

      const data = event.data;
      if (!data || data.type !== "PRODI_EMBED_ROUTE_CHANGE") return;

      handleRouteChange(data.route);
    });

    window.addEventListener("popstate", function () {
      syncIframeFromQuery();
    });

    syncIframeFromQuery();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
