/* =====================================================================
   ESTRUCTURA DE LA WEB · Dibuja cada pestaña a partir de SITE (content.js)
   Normalmente no necesitas tocar este archivo para cambiar contenido.
   ===================================================================== */
(function () {
  const LANGS = ["es", "en", "fr"];
  let lang = "es";
  try { const saved = localStorage.getItem("brp-lang"); if (LANGS.includes(saved)) lang = saved; } catch (e) {}
  let techFilter = "all";

  /* Textos fijos de la interfaz (menú, títulos, botones) */
  const UI = {
    tabs: [
      ["inicio",        { es: "Inicio", en: "Home", fr: "Accueil" }],
      ["sobre-mi",      { es: "Sobre mí", en: "About", fr: "À propos" }],
      ["investigacion", { es: "Investigación y proyectos", en: "Research & projects", fr: "Recherche et projets" }],
      ["tecnicas",      { es: "Técnicas", en: "Techniques", fr: "Techniques" }],
      ["casos",         { es: "Casos de estudio", en: "Study cases", fr: "Études de cas" }],
      ["publicaciones", { es: "Publicaciones", en: "Publications", fr: "Publications" }],
      ["contacto",      { es: "Contacto", en: "Contact", fr: "Contact" }]
    ],
    research: { es: "Investigación y proyectos", en: "Research & projects", fr: "Recherche et projets" },
    researchLede: { es: "Mi trayectoria, proyecto a proyecto: el contexto, lo que hice y las imágenes que lo cuentan.", en: "My path, project by project: the context, what I did and the images that tell the story.", fr: "Mon parcours, projet par projet : le contexte, ce que j’ai fait et les images qui le racontent." },
    did: { es: "Qué hice", en: "What I did", fr: "Ce que j’ai fait" },
    cases: { es: "Casos de estudio", en: "Study cases", fr: "Études de cas" },
    casesLede: { es: "Problemas reales que he trabajado, contados de principio a fin.", en: "Real problems I have worked on, told from start to finish.", fr: "Des problèmes réels sur lesquels j’ai travaillé, racontés du début à la fin." },
    context: { es: "Contexto", en: "Context", fr: "Contexte" },
    approach: { es: "Cómo lo abordé", en: "Approach", fr: "Approche" },
    result: { es: "Resultado", en: "Result", fr: "Résultat" },
    read: { es: "Leer el caso →", en: "Read the case →", fr: "Lire le cas →" },
    back: { es: "← Todos los casos", en: "← All cases", fr: "← Tous les cas" },
    tech: { es: "Técnicas", en: "Techniques", fr: "Techniques" },
    techLede: { es: "Lo que sé hacer en el laboratorio y delante del ordenador.", en: "What I can do in the lab and at the computer.", fr: "Ce que je sais faire au laboratoire et sur ordinateur." },
    all: { es: "Todas", en: "All", fr: "Toutes" },
    about: { es: "Sobre mí", en: "About me", fr: "À propos" },
    edu: { es: "Formación", en: "Education", fr: "Formation" },
    langs: { es: "Idiomas", en: "Languages", fr: "Langues" },
    interests: { es: "Aficiones", en: "Interests", fr: "Loisirs" },
    pubs: { es: "Publicaciones", en: "Publications", fr: "Publications" },
    types: { art: { es: "Artículo", en: "Article", fr: "Article" }, conf: { es: "Congreso", en: "Conference", fr: "Conférence" }, chap: { es: "Capítulo", en: "Chapter", fr: "Chapitre" }, sub: { es: "Enviado", en: "Submitted", fr: "Soumis" } },
    contact: { es: "Contacto", en: "Contact", fr: "Contact" },
    contactLede: { es: "Abierta a colaborar en materiales para entornos criogénicos y de fusión. Para contactar conmigo, escríbeme por LinkedIn.", en: "Open to collaborations on materials for cryogenic and fusion environments. To get in touch, message me on LinkedIn.", fr: "Ouverte aux collaborations sur les matériaux pour environnements cryogéniques et de fusion. Pour me contacter, écrivez-moi sur LinkedIn." },
    writeIn: { es: "Escríbeme por LinkedIn", en: "Message me on LinkedIn", fr: "M’écrire sur LinkedIn" },
    email: { es: "Email", en: "Email", fr: "E-mail" },
    location: { es: "Ubicación", en: "Location", fr: "Localisation" },
    copy: { es: "Copiar", en: "Copy", fr: "Copier" },
    copied: { es: "Copiado", en: "Copied", fr: "Copié" },
    workedWith: { es: "He trabajado con", en: "Worked with", fr: "J’ai travaillé avec" },
    heroHint: { es: "Foto de fondo", en: "Background photo", fr: "Photo de fond" },
    portrait: { es: "Tu foto", en: "Your photo", fr: "Ta photo" },
    photo: { es: "Foto", en: "Photo", fr: "Photo" },
    cv: { es: "Descargar CV", en: "Download CV", fr: "Télécharger le CV" }
  };

  /* ---------- utilidades ---------- */
  const t = (v) => (v && typeof v === "object" && !Array.isArray(v)) ? (v[lang] ?? v.en ?? "") : (v ?? "");
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const photo = (src, label, ratio) => src
    ? (/\.(mov|mp4|webm)$/i.test(src)
        ? `<div class="photo ${ratio}"><video src="${esc(src)}" muted autoplay loop playsinline preload="metadata" aria-label="${esc(t(label))}"></video></div>`
        : `<div class="photo ${ratio}"><img src="${esc(src)}" alt="${esc(t(label))}" loading="lazy"></div>`)
    : `<div class="photo empty ${ratio}"><span>${esc(t(label))}</span></div>`;
  const ICON = {
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 21 11.2 21 14.5V21h-4v-5.8c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V21H9z"/></svg>',
    orcid: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM8.3 17H6.7V9.4h1.6zm-.8-8.9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM10 9.4h4.2c2.6 0 4 1.8 4 3.8 0 2.2-1.6 3.8-4 3.8H10zm1.6 1.4v4.8h2.5c1.8 0 2.5-1.3 2.5-2.4 0-1.4-.9-2.4-2.5-2.4z"/></svg>',
    scholar: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3 1 9.5l4 2.4V17c0 1.7 3.1 3.5 7 3.5s7-1.8 7-3.5v-5.1l2-1.2V16h2V9.5zm0 2.3 7.4 4.2L12 13.7 4.6 9.5z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>'
  };

  /* ---------- pestañas ---------- */
  function home() {
    const S = SITE;
    const bg = S.heroImage ? ` has-img" style="background-image:url('${esc(S.heroImage)}')` : "";
    const social = ["linkedin", "orcid", "scholar"].filter((k) => S[k])
      .map((k) => `<a href="${esc(S[k])}" target="_blank" rel="noopener" aria-label="${k}">${ICON[k]}</a>`).join("");
    const cv = t(S.cvPdf) ? `<a class="btn" href="${esc(t(S.cvPdf))}" target="_blank">${t(UI.cv)}</a>` : "";
    return `
      <section class="hero${bg}">
        ${S.heroImage ? "" : `<span class="hint">${t(UI.heroHint)}</span>`}
        <div class="wrap">
          <div class="n1">${esc(S.firstName)}</div>
          <div class="n2">${esc(S.lastName)}</div>
          <div class="role">${esc(t(S.role))}</div>
          <div class="tagline">${t(S.tagline).split("\n").map((l) => `<span>${esc(l)}</span>`).join("")}</div>
          ${cv ? `<div class="btns">${cv}</div>` : ""}
          ${social ? `<div class="social">${social}</div>` : ""}
        </div>
      </section>
      <section class="logos"><div class="wrap">
        <span class="cap">${t(UI.workedWith)}</span>
        ${S.logos.map((l) => `<div class="logo${l.white ? " has-white" : ""}" title="${esc(l.name)}">${l.img
          ? (l.white ? `<img class="w" src="${esc(l.white)}" alt="${esc(l.name)}">` : "") + `<img class="c" src="${esc(l.img)}" alt="${esc(l.name)}" onerror="this.replaceWith(Object.assign(document.createElement('span'),{textContent:this.alt}))">`
          : `<span>${esc(l.name)}</span>`}</div>`).join("")}
      </div></section>`;
  }

  function about() {
    const S = SITE;
    return `<div class="wrap page"><div class="about">
      <div>
        <h1 class="title">${t(UI.about)}</h1>
        ${t(S.about).split(/\n\s*\n/).map((p) => `<p class="pre">${esc(p)}</p>`).join("")}
        <div class="loc">${esc(t(S.location))}</div>
        <h2>${t(UI.edu)}</h2>
        ${S.education.map((e) => `<div class="row"><span>${esc(t(e.title))}<small>${esc(t(e.place))}</small></span><span class="r">${esc(e.years)}</span></div>`).join("")}
        <h2>${t(UI.langs)}</h2>
        ${S.languages.map((l) => `<div class="row"><span>${esc(t(l.name))}</span><span class="r">${esc(t(l.level))}</span></div>`).join("")}
        <h2>${t(UI.interests)}</h2>
        <div class="chips">${S.interests.map((i) => `<span class="chip">${esc(t(i))}</span>`).join("")}</div>
      </div>
      <div>${photo(S.portrait, UI.portrait, "r34")}</div>
    </div></div>`;
  }

  function research() {
    return `<div class="wrap page">
      <h1 class="title">${t(UI.research)}</h1>
      <p class="lede">${t(UI.researchLede)}</p>
      <ol class="path">${SITE.projects.map((p) => {
        const did = t(p.did) || [];
        return `<li class="step">
          <div class="dot">${esc(t(p.when))}</div>
          <article>
            <div class="where">${esc(p.where)}</div>
            <h2>${esc(t(p.title))}</h2>
            <p>${esc(t(p.text))}</p>
            ${did.length ? `<div class="tag" style="margin-bottom:6px">${t(UI.did)}</div><ul class="did">${did.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>` : ""}
            <div class="chips">
              ${(p.temps || []).map((x) => `<span class="chip temp">${esc(x)}</span>`).join("")}
              ${(p.tags || []).map((x) => `<span class="chip">${esc(t(x))}</span>`).join("")}
            </div>
            ${p.photos && p.photos.length ? `<div class="gallery">${p.photos.map((f) => `<figure>${photo(f.img, UI.photo, "r43")}<figcaption>${esc(t(f.cap))}</figcaption></figure>`).join("")}</div>` : ""}
          </article>
        </li>`;
      }).join("")}</ol>
    </div>`;
  }

  function techniques() {
    const list = SITE.techniques.filter((x) => techFilter === "all" || x.cat === techFilter);
    const btn = (id, name) => `<button data-filter="${id}" aria-pressed="${techFilter === id}">${esc(t(name))}</button>`;
    return `<div class="wrap page">
      <h1 class="title">${t(UI.tech)}</h1>
      <p class="lede">${t(UI.techLede)}</p>
      <div class="filter">${btn("all", UI.all)}${SITE.categories.map((c) => btn(c.id, c.name)).join("")}</div>
      <div class="grid">${list.map((x) => {
        const cat = SITE.categories.find((c) => c.id === x.cat);
        return `<article class="card">${photo(x.img, x.title, "r169")}
          <div class="body"><span class="tag">${cat ? esc(t(cat.name)) : ""}</span><h3>${esc(t(x.title))}</h3><p class="pre">${esc(t(x.text))}</p></div>
        </article>`;
      }).join("")}</div>
    </div>`;
  }

  function cases() {
    return `<div class="wrap page">
      <h1 class="title">${t(UI.cases)}</h1>
      <p class="lede">${t(UI.casesLede)}</p>
      <div class="cases">${SITE.cases.map((c, i) => `
        <a class="case-card" href="#caso-${i + 1}">
          ${photo(c.photos[0] && c.photos[0].img, c.photos[0] ? c.photos[0].cap : UI.photo, "r169")}
          <div class="body"><span class="tag">${esc(t(c.tag))}</span><h3>${esc(t(c.title))}</h3><p>${esc(t(c.context))}</p><span class="more">${t(UI.read)}</span></div>
        </a>`).join("")}</div>
    </div>`;
  }

  function caseDetail(i) {
    const c = SITE.cases[i];
    if (!c) return cases();
    return `<div class="wrap page">
      <a class="back" href="#casos">${t(UI.back)}</a>
      <div class="case-head">
        <div><span class="tag">${esc(t(c.tag))}</span><h1>${esc(t(c.title))}</h1></div>
        ${photo(c.photos[0] && c.photos[0].img, c.photos[0] ? c.photos[0].cap : UI.photo, "r169")}
      </div>
      <div class="steps">
        <div><h3>${t(UI.context)}</h3><p class="pre">${esc(t(c.context))}</p></div>
        <div><h3>${t(UI.approach)}</h3><p class="pre">${esc(t(c.approach))}</p></div>
        <div><h3>${t(UI.result)}</h3><p class="pre">${esc(t(c.result))}</p></div>
      </div>
      <div class="gallery">${c.photos.map((f) => `<figure>${photo(f.img, UI.photo, "r43")}<figcaption>${esc(t(f.cap))}</figcaption></figure>`).join("")}</div>
    </div>`;
  }

  function publications() {
    const years = [...new Set(SITE.publications.map((p) => p.year))].sort((a, b) => b - a);
    const me = /(B\.\s?Ruiz[- ]Palenzuela)/;
    return `<div class="wrap page">
      <h1 class="title">${t(UI.pubs)}</h1>
      ${years.map((y) => `<section class="year"><div class="y">${y}</div><div>
        ${SITE.publications.filter((p) => p.year === y).map((p) => `<div class="pub">
          <div class="t">${p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.title)}</a>` : esc(p.title)}</div>
          <div class="a">${esc(p.authors).replace(me, "<b>$1</b>")}</div>
          <div class="v"><span class="ty">${t(UI.types[p.type] || "")}</span>${esc(p.venue)}</div>
        </div>`).join("")}
      </div></section>`).join("")}
    </div>`;
  }

  function contact() {
    const S = SITE;
    const link = (u) => u ? `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(u.replace(/^https?:\/\//, ""))}</a>` : `<span class="muted">—</span>`;
    return `<div class="wrap page"><div class="contact">
      <div><h1 class="title">${t(UI.contact)}</h1><p class="muted" style="max-width:44ch">${t(UI.contactLede)}</p>
        ${S.linkedin ? `<a class="btn btn-in" href="${esc(S.linkedin)}" target="_blank" rel="noopener">${ICON.linkedin}<span>${t(UI.writeIn)}</span></a>` : `<p class="muted">[LinkedIn]</p>`}</div>
      <dl>
        <div class="crow"><dt>LinkedIn</dt><dd>${link(S.linkedin)}</dd></div>
        <div class="crow"><dt>ORCID</dt><dd>${link(S.orcid)}</dd></div>
        <div class="crow"><dt>Google Scholar</dt><dd>${link(S.scholar)}</dd></div>
        <div class="crow"><dt>${t(UI.location)}</dt><dd>${esc(t(S.location))}</dd></div>
      </dl>
    </div></div>`;
  }

  /* ---------- navegación ---------- */
  function route() {
    const h = (location.hash || "#inicio").slice(1);
    const m = h.match(/^caso-(\d+)$/);
    if (m) return ["casos", +m[1] - 1];
    return [UI.tabs.some(([id]) => id === h) ? h : "inicio", null];
  }

  function render() {
    const [id, caseIdx] = route();
    document.documentElement.lang = lang;
    document.getElementById("tabs").innerHTML = UI.tabs
      .map(([k, name]) => `<li><a href="#${k}" ${k === id ? 'aria-current="page"' : ""}>${t(name)}</a></li>`).join("");
    document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));
    const views = { inicio: home, "sobre-mi": about, investigacion: research, tecnicas: techniques,
      casos: () => (caseIdx != null ? caseDetail(caseIdx) : cases()), publicaciones: publications, contacto: contact };
    document.getElementById("main").innerHTML = views[id]();
    document.getElementById("footer").textContent = `© ${new Date().getFullYear()} Berta Ruiz Palenzuela`;
  }

  document.addEventListener("click", (e) => {
    const l = e.target.closest("[data-lang]");
    if (l) { lang = l.dataset.lang; try { localStorage.setItem("brp-lang", lang); } catch (_) {} render(); return; }
    const f = e.target.closest("[data-filter]");
    if (f) { techFilter = f.dataset.filter; render(); return; }
    if (e.target.id === "copy-mail") {
      const b = e.target;
      navigator.clipboard.writeText(SITE.email).then(() => { b.textContent = t(UI.copied); }).catch(() => {});
    }
  });
  window.addEventListener("hashchange", () => { render(); window.scrollTo(0, 0); });
  render();
})();
