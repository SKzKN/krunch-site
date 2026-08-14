/* Krunch temporary site — language switch + blob parallax. No dependencies. */

const STRINGS = {
  en: {
    navStory: 'Our story', navProduct: 'Ingredients', navOrder: 'Order by email',
    heroTitle: 'Granola that hits the spot',
    heroBody: 'Slow-toasted oats, whole almonds, chia and Estonian honey. Our shop opens soon \u2014 until then, order straight from us.',
    orderCtaShort: 'Order by email',
    chip1: '100% natural', chip2: 'No added sugar', chip3: 'Handmade in Estonia',
    productBadge: 'First flavour',
    productBody: 'Slow-toasted whole oats with almonds, chia and pumpkin seeds, finished with Estonian honey. Seven ingredients, all of them food \u2014 no syrups, no fillers, nothing artificial.',
    ingredientsLabel: 'Ingredients:',
    ingredients: 'whole oats, almonds (15%), chia seeds, pumpkin seeds, honey, cold-pressed rapeseed oil, sea salt.',
    orderCta: 'Order by email \u2014 \u20ac8.90',
    card1Title: 'Nothing added', card1Body: 'No refined sugar, no fillers, no preservatives. Sweetness from honey alone.',
    card2Title: 'Made for routine', card2Body: 'Steady energy from whole oats, protein from almonds, chia and seeds.',
    card3Title: 'Estonian, proudly', card3Body: 'Mixed, toasted and packed in small batches in Tallinn.',
    storyBadge: 'Our story',
    storyTitle: "If it doesn't belong in your body, it doesn't belong in the bag.",
    storyBody1: 'Krunch started in a Tallinn kitchen with a simple frustration: every "healthy" granola on the shelf was candy in disguise. So we made our own \u2014 slow-toasted whole oats, honey-only sweetness, seven ingredients.',
    storyBody2: 'Every bag is mixed, toasted and packed in Estonia.',
    socialEyebrow: 'Follow the launch',
    socialTitle: 'The shop opens soon. The story is already happening.',
    socialBody: 'New flavours, kitchen tests and launch news \u2014 first on our socials.',
    footerBlurb: 'Full online shop coming soon. Until then, orders by email \u2014 we answer every one.',
    footerContact: 'Contact', footerFollow: 'Follow us', estonia: 'Estonia', footerLegal: 'Privacy \u00b7 Terms',
    mailto: 'mailto:hello@krunch.ee?subject=Order%3A%20CHIA%20Honey%20Almond&body=Hi%20Krunch%2C%0A%0AI%27d%20like%20to%20order%20CHIA%20Honey%20Almond%20granola.%0A%0AQuantity%20(bags)%3A%20%0AName%3A%20%0ADelivery%20address%3A%20%0A%0AThank%20you!'
  },
  et: {
    navStory: 'Meie lugu', navProduct: 'Koostis', navOrder: 'Kontakt',
    heroTitle: 'Granola, mis tabab t\u00e4ppi',
    heroBody: 'Aeglaselt r\u00f6stitud kaer, terved mandlid, chia ja Eesti mesi. E-pood avaneb peagi \u2014 seni telli otse meilt.',
    orderCtaShort: 'Telli e-postiga',
    chip1: '100% naturaalne', chip2: 'Ilma lisatud suhkruta', chip3: 'K\u00e4sitsi valmistatud Eestis',
    productBadge: 'Esimene maitse',
    productBody: 'Aeglaselt r\u00f6stitud t\u00e4isterakaer mandlite, chia- ja k\u00f5rvitsaseemnetega, viimistletud Eesti meega. Seitse koostisosa, k\u00f5ik p\u00e4ris toit \u2014 ilma siirupite, t\u00e4iteainete ja kunstlike lisanditeta.',
    ingredientsLabel: 'Koostisosad:',
    ingredients: 'Kaerahelbed, terved mandlid, Eesti mesi, oliivi\u00f5li, kookoshelbed, chiaseemned, kaneel. Ei midagi muud.',
    orderCta: 'TELLI',
    card1Title: 'Ei midagi lisatud', card1Body: 'Ilma rafineeritud suhkru, t\u00e4iteainete ja s\u00e4ilitusaineteta. Magusus ainult meest.',
    card2Title: 'Loodud rutiiniks', card2Body: '\u00dchtlane energia t\u00e4isterakaerast, valgud mandlitest, chiast ja seemnetest.',
    card3Title: 'Uhkusega Eesti', card3Body: 'Segatud, r\u00f6stitud ja pakendatud v\u00e4ikeste partiidena Tallinnas.',
    storyBadge: 'Meie lugu',
    storyTitle: 'Kui see ei kuulu sinu kehasse, ei kuulu see ka pakki.',
    storyBody1: 'Krunch s\u00fcndis Tallinna k\u00f6\u00f6gis lihtsast frustratsioonist: iga "tervislik" granola poeriiulil oli maskeeritud komm. Nii tegime oma \u2014 aeglaselt r\u00f6stitud t\u00e4isterakaer, ainult mesi, seitse koostisosa.',
    storyBody2: 'Iga pakk on segatud, r\u00f6stitud ja pakendatud Eestis.',
    socialEyebrow: 'J\u00e4lgi avamist',
    socialTitle: 'E-pood avaneb peagi. Lugu juba toimub.',
    socialBody: 'Uued maitsed, k\u00f6\u00f6gikatsetused ja avamisuudised \u2014 k\u00f5igepealt meie sotsiaalmeedias.',
    footerBlurb: 'T\u00e4ielik e-pood tuleb peagi. Seni telli e-postiga \u2014 vastame igale kirjale.',
    footerContact: 'Kontakt', footerFollow: 'J\u00e4lgi meid', estonia: 'Eesti', footerLegal: 'Privaatsus \u00b7 Tingimused',
    mailto: 'mailto:hello@krunch.ee?subject=Tellimus%3A%20CHIA%20Honey%20Almond&body=Tere%2C%20Krunch%21%0A%0ASooviksin%20tellida%20CHIA%20Honey%20Almond%20granolat.%0A%0AKogus%20(pakki)%3A%20%0ANimi%3A%20%0ATarneaadress%3A%20%0A%0AAit%C3%A4h!'
  }
};

function setLang(lang) {
  const t = STRINGS[lang];
  if (!t) return;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll('.js-mailto').forEach((el) => { el.href = t.mailto; });
  document.querySelectorAll('.lang-switch button').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  try { localStorage.setItem('krunch-lang', lang); } catch (e) { /* private mode */ }
}

document.querySelectorAll('.lang-switch button').forEach((btn) => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

let stored = 'en';
try { stored = localStorage.getItem('krunch-lang') || 'en'; } catch (e) { /* private mode */ }
setLang(stored);

/* Blob parallax */
const blobs = document.querySelectorAll('.bg-blobs [data-speed]');
window.addEventListener('scroll', () => {
  const y = window.scrollY || 0;
  blobs.forEach((el) => {
    el.style.transform = 'translateY(' + (-y * parseFloat(el.dataset.speed)) + 'px)';
  });
}, { passive: true });
