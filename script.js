// Produtos iniciais de exemplo (você pode substituir usando o botão "Exportar Lista")
const DEFAULT_PRODUCTS = [
    {
        "id": 1795469702383,
        "title": "GIGABYTE Placa de vídeo Radeon RX 9050 Gaming OC 8G 8GB GDDR6 WINDFORCE Cooling with Hawk Fan Boost Clock 2760MHz",
        "price": 2089.05,
        "store": "amazon",
        "category": "gpu",
        "image": "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/8133uBVZwRL._AC_SL1500_.jpg",
        "url": "https://link.amazon/B0f3DBKCk"
    },
    {
        "id": 1795469586240,
        "title": "PCYES Placa De Video Rx 550 4GB GDDR5 128 Bits Dual-fan Projeto Edge PVEX5504GBDF",
        "price": 521.13,
        "store": "amazon",
        "category": "gpu",
        "image": "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/61lfsM6-RgL._AC_SL1200_.jpg",
        "url": "https://link.amazon/B03G8AHGJ"
    },
    {
        "id": 1795469338078,
        "title": "Placa de vídeo para jogos SOYO New RX580 8GB GDDR5, desempenho suave e confiável para atualizações de PC",
        "price": 716.12,
        "store": "shopee",
        "category": "gpu",
        "image": "https://down-br.img.susercontent.com/file/sg-11134253-8258l-msio8dz1jwg4ab.webp",
        "url": "https://s.shopee.com.br/7AfMNJj78I"
    },
    {
        "id": 1795468822919,
        "title": "Placa de Vídeo RTX 3050 6GB Zotac Twin Edge OC GDDR6 96 Bits ZT-A30510H-10L",
        "price": 1369.17,
        "store": "shopee",
        "category": "gpu",
        "image": "https://down-br.img.susercontent.com/file/sg-11134201-8260q-mmc4mrov5kw09e@resize_w450_nl.webp",
        "url": "https://s.shopee.com.br/AUvoKtOEGn"
    },
    {
        "id": 1795468580247,
        "title": "Placa De Vídeo Msi Geforce Rtx 3050 Ventus 2x 6GB Oc",
        "price": 1567.4,
        "store": "mercadolivre",
        "category": "gpu",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_629319-MLU78890470219_092024-F.webp",
        "url": "https://meli.la/14NJoc1"
    },
    {
        "id": 1795468464015,
        "title": "Zotac Rtx 5060 Twin Edge Placa Vídeo 8gb Gddr7 Cooling Ar",
        "price": 3258.33,
        "store": "mercadolivre",
        "category": "gpu",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_980986-MLA99925899181_112025-F.webp",
        "url": "https://meli.la/2kSdPnE"
    },
    {
        "id": 1795468351150,
        "title": "Placa De Video Amd Radeon Rx580 8gb Gddr5 256 Bits revenger",
        "price": 781,
        "store": "mercadolivre",
        "category": "gpu",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_666807-MLA114125327565_072026-F.webp",
        "url": "https://meli.la/1gDky4S"
    },
    {
        "id": 1795467870752,
        "title": "Parafusadeira Furadeira Impacto Sem Fio 21v 2 Bateria 2.000mAh Bivolt Kit Chave Completo Com Maleta brocas chaves carregador",
        "price": 119.97,
        "store": "mercadolivre",
        "category": "ferramentas",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_811925-MLA107404790312_032026-F.webp",
        "url": "https://meli.la/1bjbGDL"
    },
    {
        "id": 1795467747240,
        "title": "Parafusadeira Furadeira Tipo 3/8 Sem Fio 2x Baterias 12v 2.0 Ah Bivolt Frequência 50/60hz 2 Funções Com Kit Jogo 2 Bits",
        "price": 76.91,
        "store": "mercadolivre",
        "category": "ferramentas",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_637951-MLA97567830697_112025-F.webp",
        "url": "https://meli.la/2PeizTK"
    },
    {
        "id": 1795467539992,
        "title": "Lavadora Lava Jato Portátil Pressão 2 Baterias + Maleta",
        "price": 94.99,
        "store": "mercadolivre",
        "category": "ferramentas",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_710675-MLB89102120983_082025-F-lavadora-lava-jato-portatil-pressao-2-baterias--maleta.webp",
        "url": "https://meli.la/2P5iBwn"
    },
    {
        "id": 1795467445056,
        "title": "Lavadora de Alta Pressão Kärcher Compacta 1.500 PSI 1400W 300L/h com Aplicador de Detergente e Lança Regulável",
        "price": 279,
        "store": "mercadolivre",
        "category": "ferramentas",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_746691-MLA118789821329_102026-F.webp",
        "url": "https://meli.la/2jRfARY"
    },
    {
        "id": 1795464414169,
        "title": "O Massacre da Família Hope (Livro)",
        "price": 39.3,
        "store": "amazon",
        "category": "livros",
        "image": "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/815bfY-u6-L._SL1500_.jpg",
        "url": "https://link.amazon/B08WgeZit"
    },
    {
        "id": 1795464241081,
        "title": "A Cabeça do Santo (Livro)",
        "price": 37.69,
        "store": "amazon",
        "category": "livros",
        "image": "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/71-YhujYUxS._SL1500_.jpg",
        "url": "https://link.amazon/B07C52Bld"
    },
    {
        "id": 1795463944281,
        "title": "Tênis Mormaii Urban Smash",
        "price": 90.99,
        "store": "amazon",
        "category": "tenis",
        "image": "https://m.media-amazon.com/images/I/514HZCIcgbL._AC_AIweblab1392912,T4_FMavif_SF695,695_PQ70_.jpg?aicid=detailPage-mediaBlock",
        "url": "https://link.amazon/B0gE76uKu"
    },
    {
        "id": 1795463753665,
        "title": "Kit 12 Pares de Meias Sport Cano Longo Meias Masculina Premium Confortavel Esportiva",
        "price": 34.3,
        "store": "amazon",
        "category": "moda",
        "image": "https://m.media-amazon.com/images/I/51wFnfJ6LQL._AC_AIweblab1392912,T4_FMavif_SF496,606_PQ70_.jpg?aicid=detailPage-mediaBlock",
        "url": "https://link.amazon/B0bzZlWtg"
    },
    {
        "id": 1795463642489,
        "title": "Celular Samsung Galaxy A57 5g 128gb, 8gb Ram, Câmera 50mp, Ip68, Super Amoled 6.7",
        "price": 1799.1,
        "store": "mercadolivre",
        "category": "smartphone",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_621426-MLA117326270324_102026-F.webp",
        "url": "https://meli.la/1dfGeJD"
    },
    {
        "id": 1795459355741,
        "title": "Tenis Academia Masculino Corrida Musculação Caminhada Treino",
        "price": 56.9,
        "store": "mercadolivre",
        "category": "tenis",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_743120-MLB110638329716_052026-F-tenis-academia-masculino-corrida-musculacao-caminhada-treino.webp",
        "url": "https://meli.la/16Dq3LG"
    },
    {
        "id": 1795458008622,
        "title": "Kit 12 Cueca Boxer Masculina Microfibra Adulto Premium",
        "price": 48.67,
        "store": "mercadolivre",
        "category": "moda",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_716074-MLB100374422172_122025-F-kit-12-cueca-boxer-masculina-microfibra-adulto-premium.webp",
        "url": "https://meli.la/28tVnUE"
    },
    {
        "id": 1795457752391,
        "title": "Kit 12 Pares Meias Masculina Soquete Cano Curto Sport Adulto 40 ao 46 Cores Sortidas",
        "price": 24.82,
        "store": "shopee",
        "category": "moda",
        "image": "https://down-br.img.susercontent.com/file/br-11134207-820l6-mogog0zcibr772@resize_w450_nl.webp",
        "url": "https://s.shopee.com.br/1CBZrDkRk"
    },
    {
        "id": 1795457488222,
        "title": "12 Pares De Meias Masculinas Cano Alto Grossa Algodão Oferta",
        "price": 38.97,
        "store": "mercadolivre",
        "category": "moda",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_717099-MLB109595670076_042026-F-12-pares-de-meias-masculinas-cano-alto-grossa-algodao-oferta.webp",
        "url": "https://meli.la/1qV7y8j"
    },
    {
        "id": 1795457321470,
        "title": "Kit 12 Pares Meias masculina SPORT Algodão cano alto/longo",
        "price": 34.64,
        "store": "shopee",
        "category": "moda",
        "image": "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mgzyya37eubrf6@resize_w450_nl.webp",
        "url": "https://s.shopee.com.br/9fMh8Aj2Sk"
    },
    {
        "id": 1795457133279,
        "title": "Kits ate 10 Cuecas Boxer de Microfibra Conforto e Alta Elasticidade",
        "price": 59.99,
        "store": "shopee",
        "category": "moda",
        "image": "https://down-br.img.susercontent.com/file/sg-11134201-8259u-mtpqwnc7u7ew1c@resize_w450_nl.webp",
        "url": "https://s.shopee.com.br/9pg7KIQqe1"
    },
    {
        "id": 1795456666471,
        "title": "Cubot Kingkong - resistencia + prova d'agua 128/16gb Estoque Brasil Preto/laranja Pronta entrega",
        "price": 1075.02,
        "store": "shopee",
        "category": "smartphone",
        "image": "https://down-br.img.susercontent.com/file/sg-11134201-7rbky-m5ylswik2pcu7e@resize_w450_nl.webp",
        "url": "https://s.shopee.com.br/4fy17oKSye"
    },
    {
        "id": 1795456577264,
        "title": "Redmi 14C 4G 6.88” 256GB 120Hz 50MP 13MP 5160mAh Android 14 Novo Versão Global",
        "price": 919.08,
        "store": "shopee",
        "category": "smartphone",
        "image": "https://down-br.img.susercontent.com/file/sg-11134201-823pg-mottgc2qykuk52@resize_w450_nl.webp",
        "url": "https://s.shopee.com.br/2VtWVuSSOK"
    }
];

let products = JSON.parse(localStorage.getItem('afiliados_produtos')) || DEFAULT_PRODUCTS;

// Elementos do DOM
const productsGrid = document.getElementById('products-grid');
const resultsCount = document.getElementById('results-count');
const searchInput = document.getElementById('search-input');
const filterStore = document.getElementById('filter-store');
const filterCategory = document.getElementById('filter-category');
const filterMaxPrice = document.getElementById('filter-max-price');
const sortProducts = document.getElementById('sort-products');

// Nomes formatados das lojas
const STORE_LABELS = {
    shopee: "Shopee",
    mercadolivre: "Mercado Livre",
    amazon: "Amazon"
    shein: "Shein"
};

// ==========================================
// 1. RENDERIZAÇÃO E FILTROS AVANÇADOS
// ==========================================
function renderProducts() {
    const query = searchInput.value.toLowerCase().trim();
    const store = filterStore.value;
    const category = filterCategory.value;
    const maxPrice = parseFloat(filterMaxPrice.value);
    const sort = sortProducts.value;

    let filtered = products.filter(item => {
        const matchesQuery = item.title.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query) ||
            STORE_LABELS[item.store].toLowerCase().includes(query);
        const matchesStore = store === 'all' || item.store === store;
        const matchesCategory = category === 'all' || item.category === category;
        const matchesPrice = isNaN(maxPrice) || maxPrice <= 0 || item.price <= maxPrice;

        return matchesQuery && matchesStore && matchesCategory && matchesPrice;
    });

    // Ordenação
    if (sort === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
    } else {
        filtered.sort((a, b) => b.id - a.id);
    }

    resultsCount.textContent = `${filtered.length} produto(s) encontrado(s)`;

    if (filtered.length === 0) {
        productsGrid.innerHTML = `<p style="color: var(--text-muted); grid-column: 1/-1; text-align: center; padding: 40px;">Nenhum produto encontrado com esses filtros.</p>`;
        return;
    }

    productsGrid.innerHTML = filtered.map(prod => `
        <article class="product-card">
            <div class="product-img-wrap">
                <span class="badge ${prod.store}">${STORE_LABELS[prod.store]}</span>
                <button class="btn-delete-card" onclick="removeProduct(${prod.id})" title="Remover produto">
                    <i class="fa-solid fa-trash"></i>
                </button>
                <img src="${prod.image}" alt="${prod.title}" loading="lazy">
            </div>
            <div class="product-info">
                <span class="product-category">${prod.category}</span>
                <h3 class="product-title" title="${prod.title}">${prod.title}</h3>
                <div class="product-price"><span>R$</span> ${prod.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                <a href="${prod.url}" target="_blank" rel="nofollow noopener noreferrer" class="btn-buy ${prod.store}">
                    Ver na ${STORE_LABELS[prod.store]} <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>
        </article>
    `).join('');
}

// Eventos de Busca e Filtro em Tempo Real
searchInput.addEventListener('input', renderProducts);
document.getElementById('btn-search').addEventListener('click', renderProducts);
filterStore.addEventListener('change', renderProducts);
filterCategory.addEventListener('change', renderProducts);
filterMaxPrice.addEventListener('input', renderProducts);
sortProducts.addEventListener('change', renderProducts);

document.getElementById('clear-filters').addEventListener('click', () => {
    searchInput.value = '';
    filterStore.value = 'all';
    filterCategory.value = 'all';
    filterMaxPrice.value = '';
    sortProducts.value = 'recent';
    renderProducts();
});

// Atalho chamado pelos banners do carrossel e rodapé
window.filtrarPorLoja = function (loja) {
    filterStore.value = loja;
    renderProducts();
    document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' });
};

// ==========================================
// 2. EXTRATOR AUTOMÁTICO DE LINK DE AFILIADO
// ==========================================
const adminPanel = document.getElementById('admin-panel');
const affiliateUrlInput = document.getElementById('affiliate-url');
const fetchStatus = document.getElementById('fetch-status');
const prodTitle = document.getElementById('prod-title');
const prodPrice = document.getElementById('prod-price');
const prodImg = document.getElementById('prod-img');
const prodStore = document.getElementById('prod-store');
const previewImg = document.getElementById('preview-img');
const previewBadge = document.getElementById('preview-store-badge');

document.getElementById('toggle-admin-btn').addEventListener('click', () => {
    adminPanel.classList.toggle('hidden');
});

document.getElementById('close-admin-btn').addEventListener('click', () => {
    adminPanel.classList.add('hidden');
});

// Detecta qual loja pertence ao link
function detectStoreFromUrl(url) {
    const lower = url.toLowerCase();
    if (lower.includes('shopee') || lower.includes('shp.ee')) return 'shopee';
    if (lower.includes('mercadolivre') || lower.includes('mercadolibre') || lower.includes('mlb')) return 'mercadolivre';
    if (lower.includes('amazon') || lower.includes('amzn')) return 'amazon';
    return 'shopee';
}

// Extrai nome legível direto da estrutura da URL (slug)
function extractTitleFromSlug(url) {
    try {
        const urlObj = new URL(url);
        const pathParts = urlObj.pathname.split('/').filter(p => p.length > 5 && !p.startsWith('dp') && !p.startsWith('MLB'));
        if (pathParts.length > 0) {
            return decodeURIComponent(pathParts[0])
                .replace(/-i\.\d+\.\d+.*$/, '') // Limpa IDs da Shopee
                .replace(/[-_]+/g, ' ')
                .replace(/\b\w/g, l => l.toUpperCase())
                .trim();
        }
    } catch (e) { }
    return '';
}

function updatePreview() {
    const store = prodStore.value;
    previewBadge.className = `badge ${store}`;
    previewBadge.textContent = STORE_LABELS[store];
    if (prodImg.value) {
        previewImg.src = prodImg.value;
    }
}

prodImg.addEventListener('input', updatePreview);
prodStore.addEventListener('change', updatePreview);

// Botão para carregar dados automaticamente ao colar o link
document.getElementById('btn-fetch-link').addEventListener('click', async () => {
    const url = affiliateUrlInput.value.trim();
    if (!url) {
        fetchStatus.textContent = "Cole um link válido primeiro.";
        return;
    }

    const detectedStore = detectStoreFromUrl(url);
    prodStore.value = detectedStore;
    updatePreview();

    // Preenche título preliminar pela URL imediatamente
    const slugTitle = extractTitleFromSlug(url);
    if (slugTitle) prodTitle.value = slugTitle;

    fetchStatus.textContent = "Buscando imagem e preço do link...";

    try {
        // Usa proxy público para tentar ler meta tags (og:title, og:image, price)
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
        const response = await fetch(proxyUrl);
        const data = await response.json();

        if (data && data.contents) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data.contents, 'text/html');

            const ogTitle = doc.querySelector('meta[property="og:title"]')?.content || doc.title;
            const ogImage = doc.querySelector('meta[property="og:image"]')?.content;
            const metaPrice = doc.querySelector('meta[property="product:price:amount"]')?.content ||
                doc.querySelector('meta[name="twitter:data1"]')?.content;

            if (ogTitle && !ogTitle.includes('Robot') && !ogTitle.includes('Captcha')) {
                prodTitle.value = ogTitle.split('|')[0].trim();
            }

            if (ogImage) {
                prodImg.value = ogImage;
                previewImg.src = ogImage;
            }

            if (metaPrice) {
                const numericPrice = parseFloat(metaPrice.replace(/[^\d.,]/g, '').replace(',', '.'));
                if (!isNaN(numericPrice)) prodPrice.value = numericPrice.toFixed(2);
            }

            fetchStatus.textContent = ogImage
                ? "Dados carregados! Confira o valor e clique em Publicar."
                : "Loja identificada! Cole a URL da imagem e o preço abaixo para finalizar.";
        }
    } catch (error) {
        fetchStatus.textContent = "Loja identificada! Devido à proteção do site de origem, confirme o título, imagem e preço abaixo.";
    }
});

// Salvar novo produto na vitrine
document.getElementById('product-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const affiliateUrl = affiliateUrlInput.value.trim();
    if (!affiliateUrl) {
        alert("Cole o link de afiliado no campo superior.");
        return;
    }

    const newProduct = {
        id: Date.now(),
        title: prodTitle.value.trim(),
        price: parseFloat(prodPrice.value),
        store: prodStore.value,
        category: document.getElementById('prod-category').value,
        image: prodImg.value.trim(),
        url: affiliateUrl
    };

    products.unshift(newProduct);
    localStorage.setItem('afiliados_produtos', JSON.stringify(products));

    renderProducts();
    e.target.reset();
    affiliateUrlInput.value = '';
    previewImg.src = 'https://placehold.co/300x300/18181b/00f5d4?text=Imagem+do+Produto';
    fetchStatus.textContent = "Produto publicado com sucesso!";
});

window.removeProduct = function (id) {
    if (confirm("Remover este produto da vitrine?")) {
        products = products.filter(p => p.id !== id);
        localStorage.setItem('afiliados_produtos', JSON.stringify(products));
        renderProducts();
    }
};

// Exporta o array atualizado para colar no DEFAULT_PRODUCTS quando subir o site
document.getElementById('btn-export-json').addEventListener('click', () => {
    const code = `const DEFAULT_PRODUCTS = ${JSON.stringify(products, null, 4)};`;
    navigator.clipboard.writeText(code).then(() => {
        alert("Código copiado! Cole no início do arquivo script.js para que todos os visitantes vejam os produtos cadastrados.");
    });
});

// ==========================================
// 3. CARROSSEL DE IMAGENS / BANNERS
// ==========================================
const slides = document.querySelectorAll('.carousel-slide');
const dotsContainer = document.getElementById('carousel-dots');
let currentSlide = 0;

slides.forEach((_, idx) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (idx === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(idx));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

document.getElementById('next-slide').addEventListener('click', () => goToSlide(currentSlide + 1));
document.getElementById('prev-slide').addEventListener('click', () => goToSlide(currentSlide - 1));

// Troca automática a cada 5 segundos
setInterval(() => goToSlide(currentSlide + 1), 5000);

// Inicializa a vitrine
renderProducts();