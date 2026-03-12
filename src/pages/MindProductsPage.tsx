import { useState } from "react";

type Product = {
  id: number;
  name: string;
  subtitle: string;
  price: string;
  colors: number;
  badge?: string;
  tag?: string;
  images: string[];
  category: string;
  gender: string;
};

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Nike Mind 002",
    subtitle: "Chaussure pour homme",
    price: "139,99 €",
    colors: 2,
    badge: "Meilleure vente",
    tag: "Chaussures",
    gender: "Homme",
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a1c1d8b9-858a-4d74-ac47-dd9e7c5b7b62/chaussure-mind-002-pour-SK3ZWf8f.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/603e9c70-7b56-4c48-831e-4518a2212f45/chaussure-mind-002-pour-SK3ZWf8f.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8c50e4b7-d4a9-4d6d-9d7a-59d04e1c2e42/chaussure-mind-002-pour-SK3ZWf8f.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c13346cf-3b2d-4874-a690-34907a759e51/chaussure-mind-002-pour-SK3ZWf8f.png",
    ],
    category: "Chaussures",
  },
  {
    id: 2,
    name: "Nike Mind 002",
    subtitle: "Chaussure pour femme",
    price: "139,99 €",
    colors: 3,
    tag: "Chaussures",
    gender: "Femme",
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/01f05788-b42f-4c28-b210-61b6e41b714b/chaussure-mind-002-pour-SK3ZWf8f.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a1c1d8b9-858a-4d74-ac47-dd9e7c5b7b62/chaussure-mind-002-pour-SK3ZWf8f.png",
    ],
    category: "Chaussures",
  },
  {
    id: 3,
    name: "Nike Mind 001",
    subtitle: "Mules d'avant-match pour homme",
    price: "89,99 €",
    colors: 2,
    badge: "Bientôt disponible",
    tag: "Chaussures",
    gender: "Homme",
    images: [
      "https://static.nike.com/a/images/t_default/f_auto/d42a69d1-8d26-49a0-97f4-d54b8d27d7e4/mules-davant-match-mind-001-pour-homme-BqJSZp.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8c50e4b7-d4a9-4d6d-9d7a-59d04e1c2e42/chaussure-mind-002-pour-SK3ZWf8f.png",
    ],
    category: "Chaussures",
  },
  {
    id: 4,
    name: "Nike Mind 001",
    subtitle: "Mules d'avant-match pour femme",
    price: "89,99 €",
    colors: 2,
    badge: "Bientôt disponible",
    tag: "Chaussures",
    gender: "Femme",
    images: [
      "https://static.nike.com/a/images/t_default/f_auto/d42a69d1-8d26-49a0-97f4-d54b8d27d7e4/mules-davant-match-mind-001-pour-homme-BqJSZp.png",
    ],
    category: "Chaussures",
  },
];

const CATEGORIES = ["Tout", "Chaussures"];
const GENDERS = ["Tout", "Homme", "Femme", "Mixte"];
const SORTS = ["En vedette", "Prix croissant", "Prix décroissant"];

type Props = {
  onBack: () => void;
};

export const MindProductsPage = ({ onBack }: Props) => {
  const [activeCategory, setActiveCategory] = useState("Tout");
  const [activeGender, setActiveGender] = useState("Tout");
  const [activeSort, setActiveSort] = useState("En vedette");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const parsePrice = (p: string) => parseFloat(p.replace(",", ".").replace(" €", ""));

  let filtered = PRODUCTS.filter((p) => {
    if (activeCategory !== "Tout" && p.category !== activeCategory) return false;
    if (activeGender !== "Tout" && p.gender !== activeGender) return false;
    return true;
  });

  if (activeSort === "Prix croissant") filtered = [...filtered].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
  if (activeSort === "Prix décroissant") filtered = [...filtered].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));

  return (
    <div className="min-h-screen bg-white text-black font-helvetica_now_text">
      {/* Breadcrumb */}
      <div className="px-6 md:px-12 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-xs text-neutral-500">
          <button onClick={onBack} className="hover:text-black transition-colors">Accueil</button>
          <span>/</span>
          <span className="text-black font-medium">Mind Game</span>
        </nav>
      </div>

      {/* Page header */}
      <div className="px-6 md:px-12 py-6 border-b border-neutral-200">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-helvetica_now_display_medium tracking-tight leading-tight">
              Mind Game
            </h1>
            <p className="text-neutral-500 text-sm mt-1">{filtered.length} résultats</p>
          </div>
          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-neutral-500 hidden md:block">Trier par :</span>
            <select
              value={activeSort}
              onChange={(e) => setActiveSort(e.target.value)}
              className="text-sm border border-neutral-300 rounded-full px-4 py-2 bg-white focus:outline-none focus:border-black cursor-pointer appearance-none pr-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDEyIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMUw2IDYgMTEgMSIgc3Ryb2tlPSIjMTExIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+')] bg-no-repeat bg-[right_12px_center]"
            >
              {SORTS.map((s) => <option key={s}>{s}</option>)}
            </select>
            {/* Mobile filter toggle */}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="md:hidden flex items-center gap-2 text-sm border border-neutral-300 rounded-full px-4 py-2 hover:border-black transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Filtres
            </button>
          </div>
        </div>
      </div>

      <div className="flex min-h-[70vh]">
        {/* Sidebar filters — desktop */}
        <aside className="hidden md:block w-56 lg:w-64 flex-shrink-0 border-r border-neutral-200 px-6 py-8">
          <div className="sticky top-28 space-y-8">
            {/* Category filter */}
            <div>
              <h3 className="text-xs font-helvetica_now_text_medium uppercase tracking-widest text-neutral-400 mb-3">Catégories</h3>
              <ul className="space-y-1">
                {CATEGORIES.map((c) => (
                  <li key={c}>
                    <button
                      onClick={() => setActiveCategory(c)}
                      className={`text-sm w-full text-left py-1.5 transition-colors duration-150 ${activeCategory === c ? "font-helvetica_now_text_medium text-black" : "text-neutral-500 hover:text-black"}`}
                    >
                      {c}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            {/* Gender filter */}
            <div>
              <h3 className="text-xs font-helvetica_now_text_medium uppercase tracking-widest text-neutral-400 mb-3">Genre</h3>
              <ul className="space-y-1">
                {GENDERS.map((g) => (
                  <li key={g}>
                    <button
                      onClick={() => setActiveGender(g)}
                      className={`text-sm w-full text-left py-1.5 transition-colors duration-150 ${activeGender === g ? "font-helvetica_now_text_medium text-black" : "text-neutral-500 hover:text-black"}`}
                    >
                      {g}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            {/* Price ranges info */}
            <div>
              <h3 className="text-xs font-helvetica_now_text_medium uppercase tracking-widest text-neutral-400 mb-3">Prix</h3>
              <ul className="space-y-1 text-sm text-neutral-500">
                {["Moins de 50 €", "50 € – 100 €", "100 € – 150 €", "Plus de 150 €"].map((p) => (
                  <li key={p}><button className="py-1.5 hover:text-black transition-colors w-full text-left">{p}</button></li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Mobile filter drawer */}
        {filtersOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="absolute inset-0 bg-black/50" onClick={() => setFiltersOpen(false)} />
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-helvetica_now_text_medium">Filtres</h2>
                <button onClick={() => setFiltersOpen(false)} className="w-8 h-8 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </button>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-helvetica_now_text_medium uppercase tracking-widest text-neutral-400 mb-3">Catégories</h3>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((c) => (
                      <button
                        key={c}
                        onClick={() => { setActiveCategory(c); setFiltersOpen(false); }}
                        className={`text-sm px-4 py-2 rounded-full border transition-colors ${activeCategory === c ? "border-black bg-black text-white" : "border-neutral-300 hover:border-black"}`}
                      >{c}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-helvetica_now_text_medium uppercase tracking-widest text-neutral-400 mb-3">Genre</h3>
                  <div className="flex flex-wrap gap-2">
                    {GENDERS.map((g) => (
                      <button
                        key={g}
                        onClick={() => { setActiveGender(g); setFiltersOpen(false); }}
                        className={`text-sm px-4 py-2 rounded-full border transition-colors ${activeGender === g ? "border-black bg-black text-white" : "border-neutral-300 hover:border-black"}`}
                      >{g}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product grid */}
        <main className="flex-1 px-6 md:px-8 py-8">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-neutral-400">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-4 opacity-30">
                <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 24h16M24 16v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <p className="text-lg">Aucun produit trouvé</p>
              <button onClick={() => { setActiveCategory("Tout"); setActiveGender("Tout"); }} className="mt-4 text-sm underline hover:text-black">Réinitialiser les filtres</button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10">
              {filtered.map((product) => (
                <div
                  key={product.id}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Product image */}
                  <div className="relative bg-neutral-100 rounded-lg overflow-hidden aspect-square mb-3">
                    <img
                      src={product.images[hoveredId === product.id && product.images.length > 1 ? 1 : 0]}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e80efb44-1ae5-4b77-861a-2a07cefd02a8/M+NK+DF+STRIDE+1%2F4+ZIP+TOP.png";
                      }}
                    />
                    {/* Badge */}
                    {product.badge && (
                      <span className={`absolute top-3 left-3 text-xs font-helvetica_now_text_medium px-2 py-1 rounded-sm ${product.badge === "Meilleure vente" ? "bg-orange-500 text-white" : product.badge === "Bientôt disponible" ? "bg-neutral-800 text-white" : "bg-green-700 text-white"}`}>
                        {product.badge}
                      </span>
                    )}
                    {/* Quick add — hover */}
                    <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <button className="w-full bg-black text-white text-xs font-helvetica_now_text_medium py-3 hover:bg-neutral-800 transition-colors">
                        Ajouter au panier
                      </button>
                    </div>
                  </div>

                  {/* Product info */}
                  <div className="space-y-0.5">
                    <div className="flex items-start justify-between">
                      <h3 className="text-sm font-helvetica_now_text_medium text-black leading-snug">{product.name}</h3>
                      <button className="ml-2 flex-shrink-0 w-7 h-7 flex items-center justify-center text-neutral-400 hover:text-black transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                    <p className="text-sm text-neutral-500">{product.subtitle}</p>
                    {product.colors > 0 && (
                      <p className="text-xs text-neutral-400">{product.colors} {product.colors === 1 ? "coloris" : "coloris"}</p>
                    )}
                    <p className="text-sm font-helvetica_now_text_medium text-black pt-1">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Bottom CTA banner */}
      <div className="bg-neutral-950 text-white mt-12 py-16 px-6 md:px-12 text-center">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">La collection</p>
        <h2 className="text-3xl md:text-5xl font-helvetica_now_display_medium mb-4">LA CHAUSSURE QUI BOOSTE TON MENTAL</h2>
        <p className="text-neutral-400 max-w-xl mx-auto text-sm leading-relaxed mb-8">
          Conçue pour les athlètes qui comprennent que la performance commence dans la tête. Nike Mind — quand l'équipement rencontre la psychologie du sport.
        </p>
        <button className="bg-white text-black text-sm font-helvetica_now_text_medium px-8 py-3 rounded-full hover:bg-neutral-200 transition-colors btn-press">
          Découvrir la gamme Mind
        </button>
      </div>
    </div>
  );
};
