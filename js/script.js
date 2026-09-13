/**
 * Fratello Restaurant — Luxury Digital Menu Book
 * Pure Vanilla JavaScript Architecture
 */

(function () {
  "use strict";  // --- Master Authoritative Menu Categories Data ---
  const MENU_CATEGORIES = {
    intro: {
      id: "page-intro",
      type: "editorial-intro",
      title: "MAISON FRATELLO",
      subtitle: "L'Art de la Haute Gastronomie Italienne & Méditerranéenne",
      scanImg: "assets/img/2026-09-07_08-51.png",
      heroImg: "assets/img/logo_clean_final.png",
      quote: "« Une symphonie de saveurs authentiques, d'ingrédients nobles et de passion artisanale. »",
      paragraphs: [
        "Bienvenue dans l'univers Fratello, où l'excellence culinaire rencontre le raffinement d'un cadre intime et prestigieux.",
        "Nos maîtres cuisiniers sélectionnent chaque jour les produits les plus nobles du terroir et de la mer pour vous offrir une expérience gustative inoubliable.",
        "Feuilletez notre carte et laissez-vous transporter par la passion de nos créations signatures."
      ]
    },
    burgers: {
      id: "page-burgers",
      type: "menu-standard",
      title: "NOS BURGERS",
      subtitle: "Créations gourmandes au boeuf de premier choix",
      scanImg: "assets/img/2026-09-07_08-51.png",
      heroImg: "assets/img/burger-hero-new.jpg",
      heroAlt: "Gourmet Burger Fratello au boeuf avec cheddar fondant",
      items: [
        { name: "BURGER BOEUF", price: "13.0 DT", desc: "Steak pur boeuf façon bouchère, salade croquante, oignons caramélisés, sauce maison." },
        { name: "BIG BURGER BOEUF", price: "15.0 DT", desc: "Double steak de boeuf juteux, cheddar fondu, garniture généreuse." },
        { name: "CHEESE BURGER", price: "13.0 DT", desc: "Steak de boeuf savoureux, double cheddar fondu affiné, sauce veloutée." },
        { name: "BIG CHEESE BURGER", price: "15.0 DT", desc: "Double steak de boeuf, abondance de cheddar royal affiné crémeux." }
      ]
    },
    box: {
      id: "page-box",
      type: "menu-standard",
      title: "NOS BOX",
      subtitle: "Gourmandise croustillante & volailles dorées",
      scanImg: "assets/img/2026-09-07_08-51.png",
      heroImg: "assets/img/box-chicken-new.jpg",
      heroAlt: "Fratello Box signature avec poulet croustillant et frites",
      items: [
        { name: "BOX KIDS", price: "22 DT", desc: "Nuggets, boule fromage, gougant, escalope, escalope pané, chicken corn, frite." },
        { name: "CRISPY BOX", price: "25 DT", desc: "Crispy escalope panée dorée, frite croustillante, sauce onctueuse." },
        { name: "CHICKEN CORN (1 PIÈCE)", price: "6.5 DT", desc: "Épi de maïs croustillant enrobé de poulet tendre épicé." },
        { name: "POTATOES", price: "6.5 DT", desc: "Quartiers de pommes de terre rôties et assaisonnées aux fines herbes." }
      ]
    },
    supplements: {
      id: "page-supplements",
      type: "menu-supplements",
      title: "SUPPLÉMENTS",
      subtitle: "Pour parfaire chacune de vos dégustations",
      scanImg: "assets/img/2026-09-07_08-51.png",
      heroImg: "assets/img/supplements-frites.jpg",
      heroAlt: "Portion frites croustillantes dorées et sauces maison Fratello",
      itemsCol1: [
        { name: "PORTION FRITES", price: "3.5 DT" },
        { name: "JAMBON", price: "2 DT" },
        { name: "FROMAGE", price: "2 DT" },
        { name: "ESCALOPE", price: "4 DT" }
      ],
      itemsCol2: [
        { name: "GRUYÈRE", price: "4.5 DT" },
        { name: "GOUDA", price: "4.5 DT" },
        { name: "CHAMPIGNON", price: "3.5 DT" },
        { name: "IMPORTER", price: "2.5 DT" }
      ]
    },
    pizzas: {
      id: "page-pizza",
      type: "menu-pizza",
      title: "NOS PIZZA",
      subtitle: "Pâte artisanale étalée à la main & cuisson traditionnelle",
      scanImg: "assets/img/2026-09-07_08-51_1.png",
      heroImg: "assets/img/pizza-hero-new.jpg",
      heroAlt: "Pizza artisanale Fratello avec mozzarella filante",
      pizzas: [
        { name: "PIZZA MARGHERITA", desc: "Sauce tomate, mozzarella fior di latte, basilic", m: "10 DT", l: "12 DT", xl: "22 DT", price: "12 DT" },
        { name: "PIZZA VÉGÉTARIENNE", desc: "Légumes du marché grillés aux herbes", m: "11 DT", l: "14 DT", xl: "25 DT", price: "14 DT" },
        { name: "PIZZA NEPTUNE", desc: "Thon de première sélection, olives noires", m: "13 DT", l: "17 DT", xl: "30 DT", price: "17 DT" },
        { name: "PIZZA 4 SAISONS", desc: "Thon, légumes marinés, champignons", m: "18 DT", l: "22 DT", xl: "35 DT", price: "22 DT" },
        { name: "PIZZA TEX MEX", desc: "Escalope émincée, champignons sautés", m: "16 DT", l: "20 DT", xl: "32 DT", price: "20 DT" },
        { name: "PIZZA ORIENTALE", desc: "Oeuf fermier poché, merguez artisanales", m: "16 DT", l: "20 DT", xl: "32 DT", price: "20 DT" },
        { name: "PIZZA CHEF", desc: "Viande hachée relevée aux épices douces", m: "18 DT", l: "22 DT", xl: "38 DT", price: "22 DT" },
        { name: "PIZZA PEPPERONI", desc: "Mozzarella, fines tranches de pepperoni épicé", m: "16 DT", l: "20 DT", xl: "33 DT", price: "20 DT" },
        { name: "PIZZA FRATELLO", desc: "Notre spécialité : escalope, jambon, thon, double pâte", m: "-", l: "30 DT", xl: "-", price: "30 DT" },
        { name: "PIZZA 4 FROMAGE", desc: "Gruyère, cheddar, roquefort, mozzarella", m: "19 DT", l: "24 DT", xl: "36 DT", price: "24 DT" },
        { name: "PIZZA FRUIT DE MER", desc: "Sauce tomate mijotée, fruits de mer marinés", m: "-", l: "28 DT", xl: "45 DT", price: "28 DT" },
        { name: "PIZZA REGINA", desc: "Jambon savoureux, champignons de Paris", m: "13 DT", l: "16 DT", xl: "30 DT", price: "16 DT" }
      ]
    },
    ojja: {
      id: "page-ojja-single",
      type: "menu-standard",
      title: "NOS OJJA",
      subtitle: "Saveurs méditerranéennes mijotées à l'huile d'olive",
      scanImg: "assets/img/2026-09-07_08-51_2.png",
      heroImg: "assets/img/ojja-seafood-clean.png",
      heroAlt: "Poêle de fonte Ojja aux fruits de mer Fratello",
      items: [
        { name: "OJJA MERGUEZ", price: "15 DT", desc: "Tomates fraîches mijotées, oeufs fermiers et merguez dorées." },
        { name: "OJJA ESCALOPE", price: "13.5 DT", desc: "Escalope tendre mijotée dans une sauce épicée douce." },
        { name: "OJJA FRUITS DE MER", price: "28 DT", desc: "Crevettes royales, moules et calamars dans un jus corsé." },
        { name: "OJJA ROYAL", price: "35 DT", desc: "Assortiment prestigieux de fruits de mer et merguez braisées." }
      ]
    },
    grillades: {
      id: "page-grillades-single",
      type: "menu-standard",
      title: "NOS GRILLADES",
      subtitle: "Viandes nobles & pièces du boucher saisies à la flamme",
      scanImg: "assets/img/2026-09-07_08-51_2.png",
      heroImg: "assets/img/steak-grille-new.jpg",
      heroAlt: "Pièces de viande noble grillées au feu de bois",
      items: [
        { name: "ESCALOPE GRILLÉ", price: "15 DT", desc: "Filet de volaille mariné cuit à la flamme, frites maison." },
        { name: "CORDON BLEU MAISON", price: "20 DT", desc: "Roulé doré croustillant au cœur coulant, frites maison." },
        { name: "GRILLADE MIXTE", price: "40 DT", desc: "Sélection royale de viandes nobles grillées au feu." },
        { name: "STEAK MEXICAIN 220GR", price: "30 DT", desc: "Pavé de bœuf persillé tendre, sauce signature relevée." }
      ]
    },
    poissons: {
      id: "page-poissons-single",
      type: "menu-standard",
      title: "POISSONS DE MER",
      subtitle: "Arrivages côtiers & fraîcheur marine",
      scanImg: "assets/img/2026-09-07_08-53.png",
      heroImg: "assets/img/dorad.jpeg",
      heroAlt: "Dorade royale fraîchement grillée au citron et herbes",
      items: [
        { name: "DORADE ROYALE", price: "22 DT", desc: "Poisson noble entier grillé aux herbes aromatiques." },
        { name: "LOUP DE MER", price: "24 DT", desc: "Filet délicat grillé, citron rôti et filet d'huile d'olive vierge." },
        { name: "CHEVRETTE SAUTÉ À L'AIL", price: "28 DT", desc: "Crevettes royales saisies à l'huile d'ail et persil frais." },
        { name: "PLAT PIRATE", price: "40 DT", desc: "Fruits de mer panés et grillés de premier choix." }
      ]
    },
    pates: {
      id: "page-pates-single",
      type: "menu-standard",
      title: "PÂTES & SALADES",
      subtitle: "Recettes italiennes traditionnelles & fraîcheur",
      scanImg: "assets/img/2026-09-07_08-53.png",
      heroImg: "assets/img/spagutie.jpeg",
      heroAlt: "Spaghetti à l'italienne cuisinés avec sauce mijotée",
      items: [
        { name: "SALADE CÉSAR", price: "20 DT", desc: "Poulet croustillant, romaine, copeaux de parmesan affiné." },
        { name: "SPAGHETTI BOLOGNAISE", price: "20 DT", desc: "Sauce mijotée longuement au boeuf et aromates frais." },
        { name: "SPAGHETTI CARBONARA", price: "28 DT", desc: "Recette traditionnelle au jaune d'oeuf et pecorino affiné." },
        { name: "SPAGHETTI FRUIT DE MER", price: "32 DT", desc: "Calamars, crevettes et moules au jus iodé mijoté." }
      ]
    },
    baguettes: {
      id: "page-baguettes-single",
      type: "menu-standard",
      title: "BAGUETTES & MAKLOUB",
      subtitle: "Pains artisanaux garnis et cuits à la minute",
      scanImg: "assets/img/2026-09-07_08-53_2.png",
      heroImg: "assets/img/baguette-farcie-clean.png",
      heroAlt: "Baguette farcie dorée cuite au four",
      items: [
        { name: "BAGUETTE FARCIE THON", price: "11 DT", desc: "Pain croustillant farci cuit au four avec fromage fondant." },
        { name: "BAGUETTE VIANDE HACHÉE", price: "16 DT", desc: "Garniture abondante de boeuf savoureux et fromage coulant." },
        { name: "MAKLOUB SPÉCIAL", price: "9.50 DT", desc: "Pâte fine roulée, garnie au choix et cuite à la plaque." },
        { name: "LIBANAIS TRADITIONNEL", price: "12 DT", desc: "Pain libanais aérien, escalope marinée ou chawarma." }
      ]
    },
    tacos: {
      id: "page-tacos-single",
      type: "menu-standard",
      title: "NOS TACOS & SANDWICHS",
      subtitle: "Gratinés croustillants & sauces fromagères onctueuses",
      scanImg: "assets/img/2026-09-07_08-53_3.png",
      heroImg: "assets/img/tacos-gourmet-clean.png",
      heroAlt: "Tacos gratiné et garni Fratello",
      items: [
        { name: "TACOS ESCALOPE (SIMPLE / MAXI)", price: "11 / 14 DT", desc: "Sauce fromagère maison onctueuse, frites et viande grillée." },
        { name: "TACOS CORDON BLEU (SIMPLE / MAXI)", price: "13 / 16 DT", desc: "Double texture dorée, garniture généreuse, sauce chef." },
        { name: "TACOS FRATELLO SIGNATURE", price: "19 DT", desc: "Format maxi avec trio de viandes nobles, fromage coulant." },
        { name: "SANDWICH PAIN SPÉCIAL FRATELLO", price: "14.0 DT", desc: "Pain artisanal brioché spécial, garniture d'exception." }
      ]
    }
  };

  // Desktop Two-Page Spread Manifest (8 pages total across 4 dual-page spreads)
  const desktopMenuPages = [
    MENU_CATEGORIES.intro,
    MENU_CATEGORIES.burgers,
    MENU_CATEGORIES.box,
    MENU_CATEGORIES.supplements,
    MENU_CATEGORIES.pizzas,
    {
      id: "page-ojja",
      type: "menu-standard",
      title: "NOS GRILLADES & PIÈCES DU BOUCHER",
      subtitle: "Viandes sélectionnées saisies à la flamme & saveurs mijotées",
      scanImg: MENU_CATEGORIES.ojja.scanImg,
      heroImg: MENU_CATEGORIES.grillades.heroImg,
      heroAlt: "Pièces de viande noble grillées au feu de bois",
      secondaryImg: MENU_CATEGORIES.ojja.heroImg,
      secondaryTitle: "NOS OJJA MAISON",
      items: [...MENU_CATEGORIES.grillades.items, ...MENU_CATEGORIES.ojja.items]
    },
    {
      id: "page-poissons",
      type: "menu-standard",
      title: "POISSONS & PÂTES",
      subtitle: "Fraîcheur marine et recettes italiennes ancestrales",
      scanImg: MENU_CATEGORIES.poissons.scanImg,
      heroImg: MENU_CATEGORIES.poissons.heroImg,
      heroAlt: MENU_CATEGORIES.poissons.heroAlt,
      secondaryImg: MENU_CATEGORIES.pates.heroImg,
      secondaryTitle: "PÂTES AL DENTE",
      items: [...MENU_CATEGORIES.poissons.items, ...MENU_CATEGORIES.pates.items]
    },
    {
      id: "page-sandwichs",
      type: "menu-standard",
      title: "SANDWICHS & TACOS",
      subtitle: "Pains artisanaux garnis à la minute",
      scanImg: MENU_CATEGORIES.tacos.scanImg,
      heroImg: MENU_CATEGORIES.tacos.heroImg,
      heroAlt: MENU_CATEGORIES.tacos.heroAlt,
      secondaryImg: MENU_CATEGORIES.baguettes.heroImg,
      secondaryTitle: "BAGUETTES FARCIES",
      items: [...MENU_CATEGORIES.baguettes.items, ...MENU_CATEGORIES.tacos.items]
    }
  ];

  // Mobile Single-Page Manifest (12 dedicated pages, 4–6 items each, referencing the master data)
  const mobileMenuPages = [
    { ...MENU_CATEGORIES.intro, id: "mob-page-intro" },
    { ...MENU_CATEGORIES.burgers, id: "mob-page-burgers" },
    { ...MENU_CATEGORIES.box, id: "mob-page-box" },
    { ...MENU_CATEGORIES.supplements, id: "mob-page-supplements" },
    {
      id: "mob-page-pizza-1",
      type: "menu-standard",
      title: "NOS PIZZAS (I)",
      subtitle: "Classiques artisanales & tradition italienne",
      scanImg: MENU_CATEGORIES.pizzas.scanImg,
      heroImg: "assets/img/pizza-hero-part1.jpg",
      heroAlt: "Pizza artisanale Fratello avec mozzarella filante",
      items: MENU_CATEGORIES.pizzas.pizzas.slice(0, 6).map(p => ({
        name: p.name,
        price: p.l !== "-" ? p.l : p.price,
        desc: p.desc
      }))
    },
    {
      id: "mob-page-pizza-2",
      type: "menu-standard",
      title: "NOS PIZZAS (II)",
      subtitle: "Spécialités royales & créations gourmandes",
      scanImg: MENU_CATEGORIES.pizzas.scanImg,
      heroImg: "assets/img/pizza-hero-part2.jpg",
      heroAlt: "Pizza signature Fratello fromage coulant et pâte croustillante",
      items: MENU_CATEGORIES.pizzas.pizzas.slice(6, 12).map(p => ({
        name: p.name,
        price: p.l !== "-" ? p.l : p.price,
        desc: p.desc
      }))
    },
    { ...MENU_CATEGORIES.ojja, id: "mob-page-ojja" },
    { ...MENU_CATEGORIES.grillades, id: "mob-page-grillades" },
    { ...MENU_CATEGORIES.poissons, id: "mob-page-poissons" },
    { ...MENU_CATEGORIES.pates, id: "mob-page-pates" },
    { ...MENU_CATEGORIES.baguettes, id: "mob-page-baguettes" },
    { ...MENU_CATEGORIES.tacos, id: "mob-page-tacos" }
  ];

  // Helper to get active menu pages according to device mode
  function isTwoPageSpread() {
    return window.innerWidth >= 992;
  }

  function getActivePages() {
    return isTwoPageSpread() ? desktopMenuPages : mobileMenuPages;
  }

  function getTotalPages() {
    return getActivePages().length;
  }

  function getTotalSpreads() {
    return Math.ceil(desktopMenuPages.length / 2);
  }

  // State Management
  let currentPageIndex = 0;
  let currentSpreadIndex = 0;
  let isBookOpen = false;
  let isTransitioning = false;
  let currentMode = isTwoPageSpread() ? "desktop" : "mobile";
  let wasTwoPage = isTwoPageSpread();

  // DOM Elements
  const preloader = document.getElementById("preloader");
  const loaderFill = document.querySelector(".loader-bar-fill");
  const bookWrapper = document.getElementById("bookWrapper");
  const menuCover = document.getElementById("menuCover");
  const menuBook = document.getElementById("menuBook");
  const bookSpineCrease = document.getElementById("bookSpineCrease");
  const btnOpenMenu = document.getElementById("btnOpenMenu");
  const btnPrev = document.getElementById("btnPrev");
  const btnNext = document.getElementById("btnNext");
  const pageCounter = document.getElementById("pageCounter");
  const pageDots = document.getElementById("pageDots");
  const btnTableOfContents = document.getElementById("btnTableOfContents");
  const btnCloseBook = document.getElementById("btnCloseBook");
  const btnViewScan = document.getElementById("btnViewScan");

  const tocModal = document.getElementById("tocModal");
  const closeTocBtn = document.getElementById("closeTocBtn");
  const tocList = document.getElementById("tocList");

  const scanModal = document.getElementById("scanModal");
  const closeScanBtn = document.getElementById("closeScanBtn");
  const scanModalTitle = document.getElementById("scanModalTitle");
  const scanModalImg = document.getElementById("scanModalImg");

  // --- Initial Render of Pages with Physical Front & Back Underside ---
  // --- Initial Render of Pages with Physical Front & Back Underside ---
  function renderAllPages() {
    menuBook.innerHTML = "";
    pageDots.innerHTML = "";
    tocList.innerHTML = "";

    const activePages = getActivePages();
    const isMobile = !isTwoPageSpread();
    const pad = (n) => String(n).padStart(2, "0");

    activePages.forEach((page, index) => {
      // 1. Create Page DOM
      const pageEl = document.createElement("section");
      const itemCount = page.items ? page.items.length : 0;
      const densityClass = itemCount > 6 ? "page-dense-8" :
                           itemCount > 4 ? "page-compact-6" :
                           itemCount <= 4 ? "page-compact-4" : "";
      pageEl.className = `menu-page ${densityClass} page-${page.type}`;
      pageEl.id = page.id;
      pageEl.setAttribute("aria-label", page.title);
      pageEl.setAttribute("role", "region");

      let bodyContentHtml = "";

      if (page.type === "editorial-intro") {
        bodyContentHtml = `
          <div class="editorial-intro-box">
            <p class="intro-box-subtitle">${page.subtitle}</p>
            <div class="intro-box-flourish">
              <svg width="80" height="12" viewBox="0 0 100 14" class="flourish-svg"><path d="M0 7 Q25 0 50 7 Q75 14 100 7 Q75 0 50 7 Q25 14 0 7"/></svg>
            </div>
            <p class="intro-box-quote">${page.quote}</p>
            <div class="intro-prose-wrap">
              <p class="intro-prose-text"><span class="intro-dropcap">B</span>ienvenue dans l'univers Fratello, où l'art culinaire rencontre la passion des saveurs authentiques. Chaque création est confectionnée à partir d'ingrédients rigoureusement sélectionnés pour vous offrir un moment de dégustation d'exception.</p>
            </div>
            <div class="intro-divider-ornament">
              <span class="ornament-leaf">❦</span>
            </div>
            <div class="intro-pillars-editorial">
              <div class="intro-pillar-item">
                <span class="pillar-name">VIANDES NOBLES</span>
                <span class="pillar-desc">Bœuf maturé & grillades</span>
              </div>
              <span class="pillar-sep">✦</span>
              <div class="intro-pillar-item">
                <span class="pillar-name">PÂTES & PIZZAS</span>
                <span class="pillar-desc">Farine italienne & mozzarella</span>
              </div>
              <span class="pillar-sep">✦</span>
              <div class="intro-pillar-item">
                <span class="pillar-name">SAVEURS MARINES</span>
                <span class="pillar-desc">Arrivages côtiers</span>
              </div>
            </div>
            <div class="intro-box-footer">
              <span>FRATELLO FAST FOOD</span>
            </div>
          </div>
        `;
      } else if (page.type === "menu-standard") {
        bodyContentHtml = `
          <div class="editorial-hero-grid ${!isMobile && (index % 2 === 0) ? "two-col" : "two-col reverse"}">
            <div class="food-image-frame">
              <img src="${page.heroImg}" alt="${page.heroAlt || page.title}" class="food-image-photo" loading="lazy" />
            </div>
            ${!isMobile ? `
              <div class="editorial-page-quote">
                <p class="editorial-quote-text">« ${page.subtitle} »</p>
                ${page.secondaryImg ? `
                  <div class="secondary-editorial-card">
                    <img src="${page.secondaryImg}" alt="Détail" class="editorial-thumb-img" loading="lazy" />
                    <div class="editorial-card-text">
                      <h4>${page.secondaryTitle || "SPÉCIALITÉ"}</h4>
                      <p>Sélection artisanale préparée avec passion.</p>
                    </div>
                  </div>
                ` : ""}
              </div>
            ` : ""}
          </div>

          <div class="menu-items-list">
            ${page.items.map(item => `
              <div class="menu-item-row">
                <div class="menu-item-header">
                  <span class="menu-item-name">${item.name}</span>
                  <span class="menu-item-dots"></span>
                  <span class="menu-item-price">${item.price}</span>
                </div>
                ${item.desc ? `<p class="menu-item-desc">${item.desc}</p>` : ""}
              </div>
            `).join("")}
          </div>
        `;
      } else if (page.type === "menu-supplements") {
        bodyContentHtml = `
          <div class="editorial-hero-grid ${!isMobile ? "two-col supplements-hero-grid" : ""}">
            <div class="food-image-frame frame-hero-salad">
              <img src="${page.heroImg}" alt="${page.heroAlt}" class="food-image-photo" loading="lazy" />
            </div>
            ${!isMobile ? `
              <div class="editorial-page-quote">
                <p class="editorial-quote-text">
                  Ajoutez une touche gourmande et personnalisée à vos mets préférés. Ingrédients frais préparés chaque matin.
                </p>
              </div>
            ` : ""}
          </div>

          <div class="supplements-grid">
            <div class="menu-items-list">
              ${page.itemsCol1.map(item => `
                <div class="menu-item-row">
                  <div class="menu-item-header">
                    <span class="menu-item-name">${item.name}</span>
                    <span class="menu-item-dots"></span>
                    <span class="menu-item-price">${item.price}</span>
                  </div>
                </div>
              `).join("")}
            </div>
            <div class="menu-items-list">
              ${page.itemsCol2.map(item => `
                <div class="menu-item-row">
                  <div class="menu-item-header">
                    <span class="menu-item-name">${item.name}</span>
                    <span class="menu-item-dots"></span>
                    <span class="menu-item-price">${item.price}</span>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        `;
      } else if (page.type === "menu-pizza") {
        bodyContentHtml = `
          <div class="food-image-frame frame-hero-pizza">
            <img src="${page.heroImg}" alt="${page.heroAlt}" class="food-image-photo" loading="lazy" />
          </div>

          <div class="pizza-table-wrap">
            <div class="pizza-table-header">
              <span>VARIÉTÉ</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
            </div>
            ${page.pizzas.map(p => `
              <div class="pizza-table-row">
                <div class="pizza-name-col">
                  <h4>${p.name}</h4>
                  <p>${p.desc}</p>
                </div>
                <div class="pizza-price-val">${p.m}</div>
                <div class="pizza-price-val">${p.l}</div>
                <div class="pizza-price-val">${p.xl}</div>
              </div>
            `).join("")}
          </div>
        `;
      }

      pageEl.innerHTML = `
        <div class="page-front">
          <div class="page-spine"></div>
          <div class="page-border-outer"></div>
          <div class="page-border-inner"></div>
          <div class="botanical-corner top-left"></div>
          <div class="botanical-corner top-right"></div>
          <div class="botanical-corner bottom-left"></div>
          <div class="botanical-corner bottom-right"></div>

          <header class="page-brand-header">
            <img src="assets/img/logo_clean_final.png" alt="Fratello Fast Food" class="page-logo-img" />
          </header>

          <div class="section-plaque-wrap">
            <div class="plaque-crown">
              <svg width="36" height="10" viewBox="0 0 72 20" class="flourish-svg">
                <path d="M36 0 L42 12 L56 4 L48 18 L72 10 L52 20 L36 14 L20 20 L0 10 L24 18 L16 4 L30 12 Z" />
              </svg>
            </div>
            <div class="section-plaque">
              <div class="section-plaque-inner">
                <h2 class="section-title">${page.title}</h2>
              </div>
            </div>
            <div class="plaque-foot">
              <svg width="28" height="8" viewBox="0 0 60 16" class="flourish-svg">
                <path d="M30 16 L25 8 L10 12 L20 2 L0 8 L18 0 L30 6 L42 0 L60 8 L40 2 L50 12 L35 8 Z" />
              </svg>
            </div>
          </div>

          <div class="page-body-content">
            ${bodyContentHtml}
          </div>

          <div class="page-maker-mark" role="contentinfo" aria-label="Signature du créateur MOUHIB MH">
            <div class="maker-mark-ornament" aria-hidden="true">
              <svg viewBox="0 0 54 8" width="44" height="7" class="maker-ornament-svg">
                <line x1="0" y1="4" x2="18" y2="4" stroke="#d4af37" stroke-width="0.75" opacity="0.65" />
                <polygon points="27,1 30,4 27,7 24,4" fill="#d4af37" />
                <line x1="36" y1="4" x2="54" y2="4" stroke="#d4af37" stroke-width="0.75" opacity="0.65" />
              </svg>
            </div>
            <div class="maker-mark-name">MOUHIB MH</div>
            <a href="https://instagram.com/mouhib_mh" target="_blank" rel="noopener noreferrer" class="maker-mark-link" aria-label="Instagram @mouhib_mh">
              <svg class="maker-mark-ig-icon" viewBox="0 0 24 24" width="10" height="10" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 011.47.957c.453.453.773.898.957 1.47.163.46.349 1.26.404 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.241 1.97-.404 2.43a4.088 4.088 0 01-.957 1.47 4.088 4.088 0 01-1.47.957c-.46.163-1.26.349-2.43.404-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.241-2.43-.404a4.088 4.088 0 01-1.47-.957 4.088 4.088 0 01-.957-1.47c-.163-.46-.349-1.26-.404-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.055-1.17.241-1.97.404-2.43a4.088 4.088 0 01.957-1.47A4.088 4.088 0 015.064 2.293c.46-.163 1.26-.349 2.43-.404C8.76 1.831 9.14 1.819 12 1.819zM12 0C8.741 0 8.333.014 7.053.072 5.775.13 4.903.333 4.14.63a5.876 5.876 0 00-2.126 1.384A5.876 5.876 0 00.63 4.14C.333 4.903.13 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.058 1.278.261 2.15.558 2.913a5.876 5.876 0 001.384 2.126 5.876 5.876 0 002.126 1.384c.763.297 1.635.5 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.278-.058 2.15-.261 2.913-.558a5.876 5.876 0 002.126-1.384 5.876 5.876 0 001.384-2.126c.297-.763.5-1.635.558-2.913.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.278-.261-2.15-.558-2.913a5.876 5.876 0 00-1.384-2.126A5.876 5.876 0 0019.86.63C19.097.333 18.225.13 16.947.072 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              <span>@mouhib_mh</span>
            </a>
          </div>

          <div class="corner-lift-hint bottom-right" title="Tourner la page suivante" aria-hidden="true">
            <div class="corner-lift-triangle right"></div>
          </div>
          <div class="corner-lift-hint bottom-left" title="Page précédente" aria-hidden="true">
            <div class="corner-lift-triangle left"></div>
          </div>
        </div>

        <div class="page-underside" aria-hidden="true">
          <div class="underside-border-outer"></div>
          <div class="underside-border-inner"></div>
          <div class="botanical-corner top-left"></div>
          <div class="botanical-corner top-right"></div>
          <div class="botanical-corner bottom-left"></div>
          <div class="botanical-corner bottom-right"></div>
          <div class="underside-crease-shadow"></div>
          <div class="underside-watermark-wrap">
            <img src="assets/img/logo_clean_final.png" alt="" class="underside-watermark-crest" />
            <div class="underside-flourish">
              <svg viewBox="0 0 100 16" width="70" height="11" fill="#d4af37">
                <path d="M0 8 Q25 0 50 8 Q75 16 100 8 Q75 0 50 8 Q25 16 0 8"/>
              </svg>
            </div>
            <div class="underside-watermark-title">FRATELLO FAST FOOD</div>
            <div class="underside-watermark-sub">SAVEURS AUTHENTIQUES</div>
            <div class="underside-watermark-sig">MOUHIB MH · @mouhib_mh</div>
          </div>
        </div>
      `;

      menuBook.appendChild(pageEl);

      // Page Dot
      const dotEl = document.createElement("li");
      dotEl.className = `page-dot-item ${index === 0 ? "active-dot" : ""}`;
      dotEl.title = `Page ${index + 1}: ${page.title}`;
      dotEl.setAttribute("role", "tab");
      dotEl.setAttribute("aria-label", `Aller à la page ${index + 1}: ${page.title}`);
      dotEl.addEventListener("click", () => goToPage(index));
      pageDots.appendChild(dotEl);

      // TOC Item
      const tocItem = document.createElement("li");
      tocItem.innerHTML = `
        <button class="toc-link" data-page="${index}">
          <span>${page.title}</span>
          <span class="toc-page-num">Page ${pad(index + 1)}</span>
        </button>
      `;
      tocList.appendChild(tocItem);
    });

    // TOC buttons click listener
    tocList.querySelectorAll(".toc-link").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const targetPage = parseInt(e.currentTarget.getAttribute("data-page"), 10);
        closeModal(tocModal);
        if (!isBookOpen) {
          openBook(targetPage);
        } else {
          goToPage(targetPage);
        }
      });
    });

    // Corner lift click listeners
    menuBook.querySelectorAll(".corner-lift-hint.bottom-right").forEach(hint => {
      hint.addEventListener("click", (e) => {
        e.stopPropagation();
        nextStep();
      });
    });
    menuBook.querySelectorAll(".corner-lift-hint.bottom-left").forEach(hint => {
      hint.addEventListener("click", (e) => {
        e.stopPropagation();
        prevStep();
      });
    });
  }

  // --- Loader Simulation ---
  function initLoader() {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      if (loaderFill) {
        loaderFill.style.width = progress + "%";
      }
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          if (preloader) {
            preloader.classList.add("fade-out");
            setTimeout(() => {
              preloader.style.display = "none";
            }, 850);
          }
        }, 350);
      }
    }, 90);
  }

  // --- Book Open / Close Animations ---
  function openBook(targetIndex = 0) {
    if (isBookOpen) return;
    isBookOpen = true;

    if (bookWrapper) bookWrapper.classList.add("book-opened-mode");
    menuCover.classList.add("cover-opened");
    setTimeout(() => {
      menuBook.classList.add("book-active");
      if (isTwoPageSpread()) {
        if (bookSpineCrease) bookSpineCrease.classList.add("spine-visible");
        goToSpread(Math.floor(targetIndex / 2), true);
      } else {
        if (bookSpineCrease) bookSpineCrease.classList.remove("spine-visible");
        goToPage(targetIndex, true);
      }
    }, 450);
  }

  function closeBook() {
    if (!isBookOpen) return;
    isBookOpen = false;

    if (bookWrapper) bookWrapper.classList.remove("book-opened-mode");
    if (bookSpineCrease) bookSpineCrease.classList.remove("spine-visible");
    menuBook.classList.remove("book-active");
    menuCover.classList.remove("cover-opened");
    currentPageIndex = 0;
    currentSpreadIndex = 0;
    updateNavigationControls();
  }

  // --- Desktop Two-Page Spread Navigation ---
  function goToSpread(targetSpread, isInitial = false) {
    const totalSpreads = getTotalSpreads();
    if (targetSpread < 0 || targetSpread >= totalSpreads || (isTransitioning && !isInitial)) return;
    if (targetSpread === currentSpreadIndex && !isInitial) return;

    const pages = menuBook.querySelectorAll(".menu-page");
    const oldSpread = currentSpreadIndex;
    currentSpreadIndex = targetSpread;
    currentPageIndex = targetSpread * 2;
    updateNavigationControls();

    if (isInitial || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      pages.forEach(p => p.classList.remove("active-spread-page", "spread-left", "spread-right", "flipping-spread-forward", "flipping-spread-backward", "active-page", "flipping-next", "flipping-prev"));
      const leftPage = pages[targetSpread * 2];
      const rightPage = pages[targetSpread * 2 + 1];
      if (leftPage) leftPage.classList.add("spread-left", "active-spread-page");
      if (rightPage) rightPage.classList.add("spread-right", "active-spread-page");
      isTransitioning = false;
      return;
    }

    isTransitioning = true;
    const isForward = targetSpread > oldSpread;

    if (isForward) {
      const turningLeaf = pages[oldSpread * 2 + 1];
      const newLeftPage = pages[targetSpread * 2];
      const newRightPage = pages[targetSpread * 2 + 1];

      if (newLeftPage) newLeftPage.classList.add("spread-left", "active-spread-page");
      if (newRightPage) newRightPage.classList.add("spread-right", "active-spread-page");

      if (turningLeaf) {
        turningLeaf.classList.add("flipping-spread-forward");
      }

      setTimeout(() => {
        pages.forEach(p => p.classList.remove("flipping-spread-forward", "flipping-spread-backward"));
        pages.forEach((p, idx) => {
          if (idx !== targetSpread * 2 && idx !== targetSpread * 2 + 1) {
            p.classList.remove("active-spread-page", "spread-left", "spread-right");
          }
        });
        isTransitioning = false;
      }, 650);
    } else {
      const turningLeaf = pages[targetSpread * 2 + 1];
      const newLeftPage = pages[targetSpread * 2];

      if (newLeftPage) newLeftPage.classList.add("spread-left", "active-spread-page");

      if (turningLeaf) {
        turningLeaf.classList.add("spread-right", "active-spread-page", "flipping-spread-backward");
      }

      setTimeout(() => {
        pages.forEach(p => p.classList.remove("flipping-spread-forward", "flipping-spread-backward"));
        pages.forEach((p, idx) => {
          if (idx !== targetSpread * 2 && idx !== targetSpread * 2 + 1) {
            p.classList.remove("active-spread-page", "spread-left", "spread-right");
          }
        });
        isTransitioning = false;
      }, 650);
    }
  }

  // --- Mobile Single Page Navigation ---
  let mobileTransitionTimer = null;
  function goToPage(targetIndex, isInitial = false) {
    if (isTwoPageSpread()) {
      goToSpread(Math.floor(targetIndex / 2), isInitial);
      return;
    }

    const activePages = getActivePages();
    const count = activePages.length;

    if (targetIndex < 0 || targetIndex >= count) return;
    if (targetIndex === currentPageIndex && !isInitial) return;

    const pages = menuBook.querySelectorAll(".menu-page");
    if (mobileTransitionTimer) {
      clearTimeout(mobileTransitionTimer);
      mobileTransitionTimer = null;
    }

    const oldIndex = currentPageIndex;
    const oldPage = pages[oldIndex];
    const newPage = pages[targetIndex];

    const isForward = targetIndex > oldIndex;
    currentPageIndex = targetIndex;
    currentSpreadIndex = Math.floor(targetIndex / 2);
    updateNavigationControls();

    // Immediately cleanse any pages that are neither the oldPage nor newPage
    pages.forEach((p, idx) => {
      if (idx !== oldIndex && idx !== targetIndex) {
        p.classList.remove("active-page", "flipping-next", "flipping-prev", "active-spread-page", "spread-left", "spread-right");
      }
    });

    if (isInitial || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      pages.forEach(p => p.classList.remove("active-page", "flipping-next", "flipping-prev", "active-spread-page", "spread-left", "spread-right"));
      if (newPage) newPage.classList.add("active-page");
      isTransitioning = false;
      return;
    }

    isTransitioning = true;
    if (isForward) {
      if (oldPage) {
        oldPage.classList.remove("active-page");
        oldPage.classList.add("flipping-next");
      }
      if (newPage) newPage.classList.add("active-page");

      mobileTransitionTimer = setTimeout(() => {
        pages.forEach((p, idx) => {
          if (idx !== targetIndex) {
            p.classList.remove("active-page", "flipping-next", "flipping-prev");
          }
        });
        if (newPage) {
          newPage.classList.remove("flipping-next", "flipping-prev");
          newPage.classList.add("active-page");
        }
        isTransitioning = false;
        mobileTransitionTimer = null;
      }, 450);
    } else {
      if (oldPage) {
        oldPage.classList.remove("active-page");
      }
      if (newPage) {
        newPage.classList.add("flipping-prev", "active-page");
      }

      mobileTransitionTimer = setTimeout(() => {
        pages.forEach((p, idx) => {
          if (idx !== targetIndex) {
            p.classList.remove("active-page", "flipping-next", "flipping-prev");
          }
        });
        if (newPage) {
          newPage.classList.remove("flipping-prev", "flipping-next");
          newPage.classList.add("active-page");
        }
        isTransitioning = false;
        mobileTransitionTimer = null;
      }, 450);
    }
  }

  // Step Helpers (advance spread on desktop, page on mobile)
  function nextStep() {
    if (isTwoPageSpread()) {
      const totalSpreads = getTotalSpreads();
      if (currentSpreadIndex < totalSpreads - 1) {
        goToSpread(currentSpreadIndex + 1);
      }
    } else {
      const count = getActivePages().length;
      if (currentPageIndex < count - 1) {
        goToPage(currentPageIndex + 1);
      }
    }
  }

  function prevStep() {
    if (isTwoPageSpread()) {
      if (currentSpreadIndex > 0) {
        goToSpread(currentSpreadIndex - 1);
      }
    } else {
      if (currentPageIndex > 0) {
        goToPage(currentPageIndex - 1);
      }
    }
  }

  function updateNavigationControls() {
    const twoPage = isTwoPageSpread();
    const activeList = getActivePages();
    const count = activeList.length;
    const totalSpreads = getTotalSpreads();
    const pad = (n) => String(n).padStart(2, "0");

    if (pageCounter) {
      if (twoPage) {
        const p1 = currentSpreadIndex * 2 + 1;
        const p2 = Math.min(currentSpreadIndex * 2 + 2, count);
        pageCounter.textContent = `${pad(p1)} - ${pad(p2)} / ${pad(count)}`;
      } else {
        pageCounter.textContent = `${pad(currentPageIndex + 1)} / ${pad(count)}`;
      }
    }

    if (btnPrev) {
      btnPrev.disabled = twoPage ? (currentSpreadIndex === 0) : (currentPageIndex === 0);
    }
    if (btnNext) {
      btnNext.disabled = twoPage ? (currentSpreadIndex === totalSpreads - 1) : (currentPageIndex === count - 1);
    }

    const dots = pageDots.querySelectorAll(".page-dot-item");
    dots.forEach((dot, idx) => {
      const isActive = twoPage ? (Math.floor(idx / 2) === currentSpreadIndex) : (idx === currentPageIndex);
      dot.classList.toggle("active-dot", isActive);
      dot.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    if (btnViewScan) {
      const activeIdx = twoPage ? Math.min(currentSpreadIndex * 2 + 1, count - 1) : currentPageIndex;
      const activePageData = activeList[activeIdx] || activeList[0];
      btnViewScan.setAttribute("data-scan", activePageData.scanImg || "assets/img/2026-09-07_08-51.png");
      btnViewScan.setAttribute("data-title", activePageData.title);
    }
  }

  // --- Responsive Viewport Adaptation ---
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const newMode = isTwoPageSpread() ? "desktop" : "mobile";
      if (newMode !== currentMode) {
        currentMode = newMode;
        renderAllPages();
        if (isBookOpen) {
          if (newMode === "desktop") {
            if (bookSpineCrease) bookSpineCrease.classList.add("spine-visible");
            goToSpread(0, true);
          } else {
            if (bookSpineCrease) bookSpineCrease.classList.remove("spine-visible");
            goToPage(0, true);
          }
        } else {
          updateNavigationControls();
        }
      }
    }, 120);
  });

  // --- Modal Helpers ---
  function openModal(modal) {
    modal.classList.add("modal-open");
    modal.setAttribute("aria-hidden", "false");
    const firstFocusable = modal.querySelector("button, [href], input");
    if (firstFocusable) firstFocusable.focus();
  }

  function closeModal(modal) {
    modal.classList.remove("modal-open");
    modal.setAttribute("aria-hidden", "true");
  }

  // --- Touch Swipe Detection ---
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;
  const minSwipeDistance = 45;

  function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }

  function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipeGesture();
  }

  function handleSwipeGesture() {
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
      if (!isBookOpen) {
        if (deltaX < 0) openBook(0);
      } else {
        if (deltaX < 0) {
          nextStep();
        } else {
          prevStep();
        }
      }
    }
  }

  // --- Subtle Desktop Mouse Parallax ---
  function handleMouseMove(e) {
    if (window.innerWidth < 1024 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const activePage = menuBook.querySelector(".menu-page.active-page");
    if (!activePage) return;

    const heroImg = activePage.querySelector(".food-image-photo");
    if (!heroImg) return;

    const mouseXRatio = (e.clientX / window.innerWidth - 0.5) * 2;
    const mouseYRatio = (e.clientY / window.innerHeight - 0.5) * 2;

    const shiftX = mouseXRatio * 3.5;
    const shiftY = mouseYRatio * 3.5;

    heroImg.style.transform = `scale(1.02) translate(${shiftX}px, ${shiftY}px)`;
  }

  
  // --- Fullscreen Toggle Engine ---
  const btnToggleFullscreen = document.getElementById("btnToggleFullscreen");
  const fullscreenText = document.getElementById("fullscreenText");
  const fullscreenIcon = document.getElementById("fullscreenIcon");

  function isFullscreenActive() {
    return Boolean(document.fullscreenElement || document.webkitFullscreenElement);
  }

  function toggleFullscreen() {
    if (!isFullscreenActive()) {
      const el = document.documentElement;
      if (el.requestFullscreen) {
        el.requestFullscreen().catch(err => console.warn("Fullscreen error:", err));
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(err => console.warn("Exit fullscreen error:", err));
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  function updateFullscreenUI() {
    const active = isFullscreenActive();
    if (fullscreenText) {
      fullscreenText.textContent = active ? "Quitter" : "Plein Écran";
    }
    if (btnToggleFullscreen) {
      btnToggleFullscreen.setAttribute("aria-label", active ? "Quitter le mode plein écran" : "Activer le mode plein écran");
      btnToggleFullscreen.setAttribute("title", active ? "Quitter Plein Écran" : "Plein Écran");
    }
    if (fullscreenIcon) {
      if (active) {
        // Exit fullscreen icon (compress)
        fullscreenIcon.innerHTML = '<path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>';
      } else {
        // Enter fullscreen icon (expand)
        fullscreenIcon.innerHTML = '<path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>';
      }
    }
  }

  document.addEventListener("fullscreenchange", updateFullscreenUI);
  document.addEventListener("webkitfullscreenchange", updateFullscreenUI);

  // --- Event Listeners Setup ---
  function bindEventListeners() {
    if (btnToggleFullscreen) {
      btnToggleFullscreen.addEventListener("click", toggleFullscreen);
    }

    if (btnOpenMenu) {
      btnOpenMenu.addEventListener("click", () => openBook(0));
    }
    if (menuCover) {
      menuCover.addEventListener("click", (e) => {
        if (e.target.closest("button")) return;
        openBook(0);
      });
    }

    if (btnPrev) {
      btnPrev.addEventListener("click", () => {
        prevStep();
      });
    }
    if (btnNext) {
      btnNext.addEventListener("click", () => {
        nextStep();
      });
    }

    if (btnCloseBook) {
      btnCloseBook.addEventListener("click", closeBook);
    }

    if (btnTableOfContents) {
      btnTableOfContents.addEventListener("click", () => openModal(tocModal));
    }
    if (closeTocBtn) {
      closeTocBtn.addEventListener("click", () => closeModal(tocModal));
    }
    if (tocModal) {
      tocModal.addEventListener("click", (e) => {
        if (e.target === tocModal) closeModal(tocModal);
      });
    }

    if (btnViewScan) {
      btnViewScan.addEventListener("click", () => {
        const scanPath = btnViewScan.getAttribute("data-scan");
        const pageTitle = btnViewScan.getAttribute("data-title");
        if (scanModalImg && scanModalTitle) {
          scanModalImg.src = scanPath;
          scanModalTitle.textContent = `Édition Imprimée — ${pageTitle}`;
        }
        openModal(scanModal);
      });
    }
    if (closeScanBtn) {
      closeScanBtn.addEventListener("click", () => closeModal(scanModal));
    }
    if (scanModal) {
      scanModal.addEventListener("click", (e) => {
        if (e.target === scanModal) closeModal(scanModal);
      });
    }

    document.addEventListener("keydown", (e) => {
      if (tocModal && tocModal.classList.contains("modal-open")) {
        if (e.key === "Escape") closeModal(tocModal);
        return;
      }
      if (scanModal && scanModal.classList.contains("modal-open")) {
        if (e.key === "Escape") closeModal(scanModal);
        return;
      }

      if (e.key === "ArrowRight" || e.key === "PageDown") {
        if (!isBookOpen) openBook(0);
        else nextStep();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        if (isBookOpen) prevStep();
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
        return;
      }
      if (e.key === "Escape") {
        if (isBookOpen) closeBook();
      }
    });

    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
  }

  // --- Initialization ---
  document.addEventListener("DOMContentLoaded", () => {
    renderAllPages();
    bindEventListeners();
    initLoader();

    // Expose menu controller for QA and deep inspection
    window.fratelloMenu = {
      goToPage,
      goToSpread,
      nextStep,
      prevStep,
      openBook,
      closeBook,
      isTwoPageSpread,
      getState: () => ({
        isBookOpen,
        currentPageIndex,
        currentSpreadIndex,
        totalPages: getTotalPages(),
        totalSpreads: getTotalSpreads(),
        mode: isTwoPageSpread() ? "desktop" : "mobile"
      })
    };
  });
})();
