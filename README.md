# Fratello Fast Food — Menu Digital Interactif

> Livre de menu interactif haut de gamme pour le restaurant **Fratello Fast Food**.  
> Déployable directement sur **GitHub Pages** — aucun build nécessaire.

---

## Démo en Ligne

Après activation de GitHub Pages (branche `main`, dossier `/ (root)`), le site sera accessible à :

```
https://<votre-username>.github.io/<nom-du-repo>/
```

---

## Structure du Projet

```
menu/
├── index.html              ← Point d'entrée principal
├── css/
│   └── style.css           ← Styles (desktop + mobile responsive)
├── js/
│   └── script.js           ← Logique du menu interactif
├── assets/
│   ├── img/                ← Photos food, logo, scans originaux
│   └── deco/               ← Ornements décoratifs (coins botaniques)
├── README.md
├── .nojekyll               ← Désactive le traitement Jekyll sur GitHub Pages
└── .gitignore
```

---

## Fonctionnalités

- **Desktop (≥ 992px)** : Livre ouvert en double page avec reliure centrale, animation de tournage de page 3D, parallax subtile au mouvement de souris.
- **Mobile (< 992px)** : Pages uniques plein écran (`100dvh`), navigation par swipe tactile, 12 pages dédiées avec typographie optimisée.
- **Mode Plein Écran** : Basculement natif via bouton ou touche `F`.
- **Sommaire Interactif** : Navigation directe vers n'importe quelle catégorie.
- **Visionneuse de Scans** : Consultation des éditions imprimées originales.
- **Accessibilité** : Fallback `<noscript>` avec menu en scroll vertical complet.

---

## Catégories du Menu

| Catégorie | Spécialités |
|:---|:---|
| **Nos Burgers** | Burger Boeuf, Big Burger, Cheese Burger |
| **Nos Box** | Box Kids, Crispy Box, Chicken Corn, Potatoes |
| **Suppléments** | Frites, Jambon, Fromage, Gruyère, Gouda… |
| **Nos Pizzas** | 12 variétés (Margherita → Fruit de Mer) en M/L/XL |
| **Nos Ojja** | Merguez, Escalope, Fruits de Mer, Royal |
| **Nos Grillades** | Escalope, Cordon Bleu, Grillade Mixte, Steak Mexicain |
| **Poissons de Mer** | Dorade, Loup de Mer, Chevrette, Plat Pirate |
| **Pâtes & Salades** | César, Bolognaise, Carbonara, Fruits de Mer |
| **Baguettes & Makloub** | Baguette Farcie, Makloub Spécial, Libanais |
| **Tacos & Sandwichs** | Tacos Escalope/Cordon Bleu, Fratello Signature |

---

## Déploiement sur GitHub Pages

1. Créez un dépôt GitHub et poussez ce dossier.
2. Allez dans **Settings → Pages**.
3. Sélectionnez **Source : Deploy from a branch**.
4. Choisissez **Branch : `main`** et **Folder : `/ (root)`**.
5. Cliquez **Save**. Le site sera en ligne sous quelques minutes.

---

## Modifier les Prix ou le Menu

Toutes les données du menu sont centralisées dans la constante `MENU_CATEGORIES` au début de [`js/script.js`](js/script.js).

Modifiez les propriétés `name`, `price`, ou `desc` de n'importe quel item, puis poussez sur GitHub — le site se met à jour automatiquement.

---

## Technologie

- HTML5 sémantique
- CSS3 (animations, transforms 3D, media queries responsive)
- JavaScript Vanilla (zéro dépendance, zéro framework)
- Google Fonts (Cinzel, Cormorant Garamond, Montserrat)

---

**© Fratello Fast Food** — Tous droits réservés.
