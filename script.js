// --- 1. Base de Datos ---
const baseDatos = {
    'ÁRABES': [
    { nombre: "Lattafa Khamrah", imagen: "images/khamrah.png", familia: "Ámbar Especiada", notas: "Canela, Nuez moscada, Bergamota, Dátiles, Praliné, Tuberosa, Vainilla, Haba tonka, Ámbar, Benjuí, Mirra, Madera de Akigala", descripcion: "Una esencia cálida, dulce y altamente sofisticada.", beneficios: ["Larga duración", "Excelente proyección", "Unisex"], presentacion: "100 ml", acordes: [{nombre: "dulce", color: "#e91e63", porc: "95%"}, {nombre: "especiado", color: "#ff9800", porc: "85%"}] },
    { nombre: "Asad Bourbon Lattafa", imagen: "images/asad.png", familia: "Ámbar Amaderada", notas: "Lavanda, Café, Vainilla Bourbon, Notas amaderadas, Ámbar, Ciste", descripcion: "Una variante elegante, nocturna y profunda con un marcado carácter a vainilla Bourbon y café.", beneficios: ["Aroma intenso", "Excelente fijación"], presentacion: "100 ml", acordes: [{nombre: "amaderado", color: "#795548", porc: "85%"}, {nombre: "vainilla", color: "#ffe0b2", porc: "90%"}] },
    { nombre: "Lattafa Asad", imagen: "images/asad-elixir.png", familia: "Ámbar Especiada", notas: "Pimienta negra, Tabaco, Piña, Café, Pachulí, Iris, Vainilla, Ámbar, Maderas secas", descripcion: "Intensa y masculina, con una profundidad especiada y ahumada notable.", beneficios: ["Aroma potente", "Excelente duración"], presentacion: "100 ml", acordes: [{nombre: "especiado", color: "#ff9800", porc: "90%"}, {nombre: "dulce", color: "#e91e63", porc: "70%"}] },
    { nombre: "Afnan 9 PM", imagen: "images/9pm.png", familia: "Ámbar Vainilla", notas: "Manzana, Canela, Lavanda silvestre, Flor de azahar, Vainilla, Haba tonka, Ámbar", descripcion: "Un perfume juvenil, dulce y altamente versátil para salidas nocturnas.", beneficios: ["Ideal para salidas", "Moderno"], presentacion: "100 ml", acordes: [{nombre: "frutal", color: "#fdd835", porc: "85%"}, {nombre: "dulce", color: "#e91e63", porc: "90%"}] },
    { nombre: "Armaf Club de Nuit Intense Man", imagen: "images/cdnim.png", familia: "Amaderada Especiada", notas: "Limón, Grosellas negras, Manzana, Bergamota, Piña, Rosa, Jazmín, Abedul, Almizcle, Ámbar gris, Vainilla", descripcion: "Reconocido mundialmente por su carácter cítrico-ahumado y gran elegancia.", beneficios: ["Muy popular", "Uso diario"], presentacion: "105 ml", acordes: [{nombre: "cítrico", color: "#fdd835", porc: "90%"}, {nombre: "amaderado", color: "#795548", porc: "75%"}] },
    { nombre: "Rasasi Hawas for Him", imagen: "images/hawas.png", familia: "Aromática Acuática", notas: "Manzana, Bergamota, Limón, Canela, Notas acuosas, Ciruela, Cardamomo, Ámbar gris, Almizcle, Madera de deriva", descripcion: "Un perfume fresco, frutal y energético con un toque salado.", beneficios: ["Fresco y versátil", "Ideal verano"], presentacion: "100 ml", acordes: [{nombre: "fresco", color: "#03a9f4", porc: "95%"}, {nombre: "acuático", color: "#2196f3", porc: "85%"}] },
    { nombre: "Lattafa Qaed Al Fursan", imagen: "images/qaed.png", familia: "Ámbar Amaderada", notas: "Piña, Azafrán, Bayas silvestres, Jazmín, Abeto balsámico, Cedro, Ámbar, Almizcle", descripcion: "Vibrante, tropical y con un toque de exclusividad amaderada.", beneficios: ["Aroma llamativo", "Unisex"], presentacion: "90 ml", acordes: [{nombre: "frutal", color: "#fdd835", porc: "90%"}, {nombre: "amaderado", color: "#795548", porc: "60%"}] },
    { nombre: "Maison Alhambra Jean Lowe Immortal", imagen: "images/jeanlowe.png", familia: "Cítrica", notas: "Pomelo, Bergamota, Jengibre, Notas acuosas, Romero, Salvia, Geranio, Ambroxan, Ámbar, Ládano", descripcion: "Elegante, refrescante y de gran proyección.", beneficios: ["Refinado", "Larga duración"], presentacion: "100 ml", acordes: [{nombre: "cítrico", color: "#fdd835", porc: "95%"}, {nombre: "fresco", color: "#03a9f4", porc: "80%"}] }
],
    'NICHO': [
    { 
        nombre: "Erba Pura Xerjoff", 
        imagen: "images/erba-pura.png", 
        familia: "Oriental Frutal", 
        notas: "Naranja, Limón, Bergamota, Frutas mediterráneas, Almizcle blanco", 
        descripcion: "Una explosión frutal vibrante y magnética de larga duración.", 
        beneficios: ["Estela impresionante", "Alta fijación", "Exclusividad"], 
        presentacion: "100 ml", 
        acordes: [{nombre: "frutal", color: "#fdd835", porc: "95%"}, {nombre: "almizclado", color: "#e0e0e0", porc: "85%"}] 
    },
    { 
        nombre: "Naxos Xerjoff", 
        imagen: "images/naxos.png", 
        familia: "Aromática Especiada", 
        notas: "Lavanda, Bergamota, Miel, Tabaco, Haba tonka, Canela", 
        descripcion: "Un equilibrio perfecto entre frescura cítrica y calidez dulce.", 
        beneficios: ["Sofisticación absoluta", "Calidad premium", "Versátil"], 
        presentacion: "100 ml", 
        acordes: [{nombre: "dulce", color: "#e91e63", porc: "90%"}, {nombre: "miel", color: "#ffc107", porc: "85%"}] 
    },
    { 
        nombre: "Arabians Tonka Montale", 
        imagen: "images/arabians-tonka.png", 
        familia: "Oriental Especiada", 
        notas: "Azafrán, Bergamota, Oud, Rosa, Haba Tonka, Ámbar", 
        descripcion: "Intensa, misteriosa y con un dulzor especiado inolvidable.", 
        beneficios: ["Proyección masiva", "Rendimiento extremo", "Aroma de nicho"], 
        presentacion: "100 ml", 
        acordes: [{nombre: "especiado", color: "#ff9800", porc: "95%"}, {nombre: "dulce", color: "#e91e63", porc: "80%"}] 
    },
    { 
        nombre: "Bianco Latte Giardini Di Toscana", 
        imagen: "images/bianco-latte.png", 
        familia: "Ámbar Vainilla", 
        notas: "Caramelo, Cumarina, Miel, Vainilla blanca, Almizcle", 
        descripcion: "El aroma definitivo a vainilla cremosa y caramelo.", 
        beneficios: ["Aroma adictivo", "Muy elogiado", "Duración eterna"], 
        presentacion: "100 ml", 
        acordes: [{nombre: "vainilla", color: "#fff176", porc: "95%"}, {nombre: "dulce", color: "#e91e63", porc: "90%"}] 
    },
    { 
        nombre: "Intense French Riviera Mancera", 
        imagen: "images/french-riviera.png", 
        familia: "Aromática Acuática", 
        notas: "Limón, Naranja, Mandarina, Jengibre, Pimienta, Notas marinas, Flor de tiaré, Mimosa, Pino, Vetiver, Sal marina, Ámbar, Almizcle blanco", 
        descripcion: "Evoca un día de lujo en la costa francesa; fresco, marino y revitalizante.", 
        beneficios: ["Ideal para calor", "Energizante", "Elegancia natural"], 
        presentacion: "120 ml", 
        acordes: [{nombre: "cítrico", color: "#fdd835", porc: "90%"}, {nombre: "acuático", color: "#2196f3", porc: "85%"}] 
    },
    { 
        nombre: "Erba Gold Xerjoff", 
        imagen: "images/erba-gold.png", 
        familia: "Cítrica Frutal", 
        notas: "Limón de Amalfi, Jengibre, Canela, Melón, Vainilla, Ámbar", 
        descripcion: "Una interpretación más brillante y especiada del ADN Erba.", 
        beneficios: ["Luminosidad", "Proyección alta", "Perfil moderno"], 
        presentacion: "100 ml", 
        acordes: [{nombre: "frutal", color: "#fdd835", porc: "90%"}, {nombre: "cítrico", color: "#cddc39", porc: "80%"}] 
    }
],
    'DE-DISEÑADOR': [
    { nombre: "Valentino Born In Roma Intense", imagen: "images/vbir-intense.png", familia: "Ámbar Vainilla", notas: "Vainilla, Lavanda, Vetiver", descripcion: "Intenso, audaz y profundamente adictivo.", beneficios: ["Alta proyección", "Ideal para noche"], presentacion: "100 ml", acordes: [{nombre: "dulce", color: "#e91e63", porc: "90%"}, {nombre: "aromático", color: "#26a69a", porc: "80%"}] },
    { nombre: "Valentino Born In Roma Extradose", imagen: "images/vbir-extradose.png", familia: "Amaderada Especiada", notas: "Jengibre, Lavanda, Vainilla", descripcion: "Una versión más fresca y energizante del clásico.", beneficios: ["Versátil", "Moderno"], presentacion: "100 ml", acordes: [{nombre: "fresco", color: "#03a9f4", porc: "85%"}, {nombre: "especiado", color: "#ff9800", porc: "75%"}] },
    { nombre: "Stronger With You Intensely", imagen: "images/swy-intensely.png", familia: "Ámbar Fougère", notas: "Pimienta rosa, Canela, Vainilla, Ámbar", descripcion: "Cálido, especiado y extremadamente acogedor.", beneficios: ["Excelente duración", "Muy elogiado"], presentacion: "100 ml", acordes: [{nombre: "dulce", color: "#e91e63", porc: "95%"}, {nombre: "especiado", color: "#ff9800", porc: "85%"}] },
    { nombre: "1 Million Elixir", imagen: "images/1million.png", familia: "Ámbar Amaderada", notas: "Manzana, Davana, Rosa Damascena, Haba Tonka, Vainilla", descripcion: "Un icono moderno de la perfumería masculina.", beneficios: ["Estela potente", "Muy reconocible"], presentacion: "100 ml", acordes: [{nombre: "especiado", color: "#ff9800", porc: "90%"}, {nombre: "cuero", color: "#795548", porc: "70%"}] },
    { nombre: "Sauvage Dior Parfum", imagen: "images/sauvage.png", familia: "Ámbar Fougère", notas: "Bergamota, Mandarina, Sándalo, Haba Tonka", descripcion: "Fresco, salvaje y altamente masculino.", beneficios: ["Versatilidad extrema", "Larga duración"], presentacion: "100 ml", acordes: [{nombre: "fresco", color: "#03a9f4", porc: "90%"}, {nombre: "aromático", color: "#26a69a", porc: "85%"}] },
    { nombre: "Le Male Elixir Jean Paul Gaultier", imagen: "images/le-male.png", familia: "Ámbar Fougère", notas: "Lavanda, Menta, Benjuí, Vainilla, Miel", descripcion: "Un clásico atemporal, seductor y fresco.", beneficios: ["Icono de seducción", "Gran estela"], presentacion: "125 ml", acordes: [{nombre: "aromático", color: "#26a69a", porc: "90%"}, {nombre: "dulce", color: "#e91e63", porc: "75%"}] },
    { nombre: "Boss Bottled Absolu", imagen: "images/boss-bottled.png", familia: "Cuero Amaderada", notas: "Incienso, Davana, Cedro, Cuero", descripcion: "Elegancia cotidiana, profesional y limpia.", beneficios: ["Ideal para oficina", "Sofisticado"], presentacion: "100 ml", acordes: [{nombre: "frutal", color: "#fdd835", porc: "85%"}, {nombre: "amaderado", color: "#795548", porc: "80%"}] },
    { nombre: "Zadig & Voltaire This is Her!", imagen: "images/this-is-her.png", familia: "Ámbar Vainilla", notas: "Jazmín Sambac, Pimienta rosa, Crema de castañas, Vainilla, Sándalo", descripcion: "Rockera, femenina y con un toque cremoso único.", beneficios: ["Aroma distintivo", "Larga duración"], presentacion: "100 ml", acordes: [{nombre: "cremoso", color: "#f5f5f5", porc: "90%"}, {nombre: "dulce", color: "#e91e63", porc: "80%"}] },
    { nombre: "Valentino Born In Roma Purple Starlight", imagen: "images/vbir-purple.png", familia: "Ámbar Floral", notas: "Mandarina, Higo, Rosa, Vainilla", descripcion: "Artística, profunda y envolvente.", beneficios: ["Exclusividad", "Aroma nicho-diseñador"], presentacion: "100 ml", acordes: [{nombre: "floral", color: "#9c27b0", porc: "85%"}, {nombre: "amaderado", color: "#795548", porc: "75%"}] },
    { nombre: "Prada L'Homme Intense", imagen: "images/prada-homme-intense.png", familia: "Cuero", notas: "Iris, Ámbar, Cuero, Pachulí, Haba Tonka", descripcion: "La máxima expresión de la elegancia y pulcritud.", beneficios: ["Sofisticado", "Ideal para ocasiones formales"], presentacion: "100 ml", acordes: [{nombre: "empolvado", color: "#e1bee7", porc: "95%"}, {nombre: "cuero", color: "#795548", porc: "80%"}] },
    { nombre: "Prada Paradoxe Le Parfum", imagen: "images/prada-paradoxe.png", familia: "Ámbar Floral", notas: "Neroli, Jazmín, Ambrofix, Almizcle", descripcion: "Femenina, multidimensional y brillante.", beneficios: ["Muy versátil", "Elegante"], presentacion: "90 ml", acordes: [{nombre: "floral", color: "#9c27b0", porc: "90%"}, {nombre: "cítrico", color: "#fdd835", porc: "70%"}] },
    { nombre: "Dolce & Gabbana Light Blue Eau Intense", imagen: "images/light-blue-intense.png", familia: "Amaderada Acuática", notas: "Pomelo, Mandarina, Agua de mar, Almizcle, Ámbar", descripcion: "La esencia definitiva de un día de verano.", beneficios: ["Frescura extrema", "Larga duración"], presentacion: "100 ml", acordes: [{nombre: "acuático", color: "#2196f3", porc: "95%"}, {nombre: "cítrico", color: "#fdd835", porc: "85%"}] },
    { nombre: "Givenchy Gentleman Reserve Privée", imagen: "images/reserve-privee.png", familia: "Ámbar Amaderada", notas: "Bergamota, Whisky, Iris, Castaña, Notas amaderadas", descripcion: "Madura, alcohólica y sumamente elegante.", beneficios: ["Nivel de madurez", "Aroma de lujo"], presentacion: "100 ml", acordes: [{nombre: "empolvado", color: "#e1bee7", porc: "85%"}, {nombre: "licoroso", color: "#795548", porc: "80%"}] },
    { nombre: "Guerlain L'Homme Idéal L'Intense", imagen: "images/lhomme-ideal-edp.png", familia: "Ámbar Amaderada", notas: "Almendra, Chile, Cuero, Haba Tonka, Sándalo", descripcion: "Sofisticación masculina con un toque gourmand.", beneficios: ["Aroma complejo", "Alta calidad"], presentacion: "100 ml", acordes: [{nombre: "frutal", color: "#fdd835", porc: "85%"}, {nombre: "almendrado", color: "#ffcc80", porc: "90%"}] },
    { nombre: "Maison Margiela Jazz Club", imagen: "images/jazz-club.png", familia: "Cuero", notas: "Pimienta rosa, Ron, Salvia, Tabaco, Vainilla", descripcion: "Evoca una noche en un club de jazz, cálido y envolvente.", beneficios: ["Experiencia sensorial", "Único"], presentacion: "100 ml", acordes: [{nombre: "tabaco", color: "#5d4037", porc: "90%"}, {nombre: "dulce", color: "#e91e63", porc: "75%"}] },
    { nombre: "Prada Luna Rossa Black", imagen: "images/luna-rossa-black.png", familia: "Ámbar Amaderada", notas: "Angélica, Bergamota, Pachulí, Cumarina, Ámbar", descripcion: "Misteriosa, oscura y profundamente atractiva.", beneficios: ["Ideal para citas", "Elegancia nocturna"], presentacion: "100 ml", acordes: [{nombre: "amaderado", color: "#795548", porc: "85%"}, {nombre: "ámbar", color: "#ff9800", porc: "80%"}] },
    { nombre: "Versace Eros", imagen: "images/eros.png", familia: "Aromática Fougère", notas: "Menta, Manzana verde, Limón, Haba Tonka, Ambroxan", descripcion: "El rey de las fiestas y discotecas.", beneficios: ["Proyección enorme", "Aroma energético"], presentacion: "100 ml", acordes: [{nombre: "fresco", color: "#03a9f4", porc: "90%"}, {nombre: "dulce", color: "#e91e63", porc: "85%"}] },
    { nombre: "Versace Eros Flame", imagen: "images/eros-flame.png", familia: "Amaderada Especiada", notas: "Chinotto, Limón, Pimienta negra, Romero, Vainilla, Cedro", descripcion: "La versión intensa, apasionada y más especiada.", beneficios: ["Muy potente", "Llamativo"], presentacion: "100 ml", acordes: [{nombre: "cítrico", color: "#fdd835", porc: "80%"}, {nombre: "especiado", color: "#ff9800", porc: "90%"}] },
    { nombre: "Maison Margiela By The Fireplace", imagen: "images/by-the-fireplace.png", familia: "Amaderada", notas: "Clavo de olor, Castaña, Madera de Guayaco, Vainilla, Bálsamo del Perú", descripcion: "Como sentarse frente a una chimenea en invierno.", beneficios: ["Aroma reconfortante", "Cálido"], presentacion: "100 ml", acordes: [{nombre: "ahumado", color: "#424242", porc: "95%"}, {nombre: "dulce", color: "#e91e63", porc: "80%"}] }
],
    'MUJERES': [
    { nombre: "Moschino Toy 2", imagen: "images/toy2.png", familia: "Floral Amaderada Almizclada", notas: "Mandarina, Manzana, Magnolia, Sándalo", descripcion: "Alegre, chispeante y con un diseño icónico.", beneficios: ["Aroma fresco", "Uso diario"], presentacion: "100 ml", acordes: [{nombre: "cítrico", color: "#fdd835", porc: "85%"}, {nombre: "floral", color: "#9c27b0", porc: "75%"}] },
    { nombre: "Good Girl Jasmine Absolute Carolina Herrera", imagen: "images/good-girl-jasmine.png", familia: "Floral Amaderada", notas: "Jazmín sambac, Ylang-ylang, Vainilla", descripcion: "Una interpretación intensa y sensual del clásico Good Girl.", beneficios: ["Elegancia nocturna", "Gran fijación"], presentacion: "80 ml", acordes: [{nombre: "floral", color: "#9c27b0", porc: "95%"}, {nombre: "dulce", color: "#e91e63", porc: "70%"}] },
    { nombre: "YSL Libre Le Parfum", imagen: "images/libre-le-parfum.png", familia: "Ámbar Fougère", notas: "Azafrán, Flor de azahar, Lavanda, Vainilla", descripcion: "La versión más cálida, especiada y atrevida de la línea Libre.", beneficios: ["Proyección intensa", "Sofisticado"], presentacion: "90 ml", acordes: [{nombre: "especiado", color: "#ff9800", porc: "85%"}, {nombre: "floral", color: "#9c27b0", porc: "80%"}] },
    { nombre: "Jean Paul Gaultier Divine Le Parfum", imagen: "images/divine-le-parfum.png", familia: "Floral Solar", notas: "Lirio, Sal, Notas solares, Ámbar", descripcion: "Una fragancia radiante y poderosa que evoca la divinidad.", beneficios: ["Aroma único", "Larga duración"], presentacion: "100 ml", acordes: [{nombre: "floral", color: "#9c27b0", porc: "90%"}, {nombre: "salado", color: "#2196f3", porc: "70%"}] },
    { nombre: "Miss Dior Parfum", imagen: "images/miss-dior.png", familia: "Chipre Floral", notas: "Mandarina, Jazmín, Pachulí", descripcion: "Elegancia parisina, juvenil y sofisticada.", beneficios: ["Clásico moderno", "Muy versátil"], presentacion: "80 ml", acordes: [{nombre: "floral", color: "#9c27b0", porc: "95%"}, {nombre: "cítrico", color: "#fdd835", porc: "60%"}] },
    { nombre: "212 VIP Rosé", imagen: "images/212-vip-rose.png", familia: "Floral Frutal", notas: "Champán, Flor de duraznero, Maderas blancas", descripcion: "La esencia de las fiestas exclusivas de Nueva York.", beneficios: ["Ideal para eventos", "Fresco y chic"], presentacion: "80 ml", acordes: [{nombre: "frutal", color: "#fdd835", porc: "85%"}, {nombre: "floral", color: "#9c27b0", porc: "75%"}] },
    { nombre: "Valentino Born In Roma Donna Extradose", imagen: "images/vbir-donna.png", familia: "Floral Amaderada", notas: "Jazmín, Vainilla Bourbon, Grosellas negras", descripcion: "Moderna, femenina y con un toque rebelde.", beneficios: ["Aroma muy elogiado", "Versátil"], presentacion: "100 ml", acordes: [{nombre: "floral", color: "#9c27b0", porc: "90%"}, {nombre: "dulce", color: "#e91e63", porc: "80%"}] },
    { nombre: "Devotion Intense Dolce & Gabbana", imagen: "images/devotion.png", familia: "Ámbar Gourmand", notas: "Limón confitado, Flor de azahar, Vainilla", descripcion: "Un viaje sensorial delicioso y adictivo.", beneficios: ["Aroma inconfundible", "Muy buena estela"], presentacion: "100 ml", acordes: [{nombre: "dulce", color: "#e91e63", porc: "95%"}, {nombre: "cítrico", color: "#fdd835", porc: "70%"}] },
    { nombre: "Versace Dylan Blue Pour Femme", imagen: "images/dylan-blue-femme.png", familia: "Floral Frutal", notas: "Grosella negra, Manzana, Jazmín, Maderas", descripcion: "Fuerte, sensual y con una frescura mediterránea.", beneficios: ["Gran versatilidad", "Muy elegante"], presentacion: "100 ml", acordes: [{nombre: "frutal", color: "#fdd835", porc: "85%"}, {nombre: "floral", color: "#9c27b0", porc: "80%"}] },
    { nombre: "Coco Mademoiselle Intense Chanel", imagen: "images/coco-mademoiselle.png", familia: "Ámbar Floral", notas: "Naranja, Rosa, Pachulí, Vainilla", descripcion: "El estándar de oro de la elegancia femenina moderna.", beneficios: ["Atemporal", "Alta calidad"], presentacion: "100 ml", acordes: [{nombre: "floral", color: "#9c27b0", porc: "90%"}, {nombre: "cítrico", color: "#fdd835", porc: "75%"}] },
    { nombre: "Prada Paradoxe Intense", imagen: "images/paradoxe-intense.png", familia: "Ámbar Floral", notas: "Neroli, Jazmín, Musgo, Vainilla", descripcion: "Intensa, brillante y profundamente cautivadora.", beneficios: ["Alta duración", "Sofisticación"], presentacion: "90 ml", acordes: [{nombre: "floral", color: "#9c27b0", porc: "90%"}, {nombre: "dulce", color: "#e91e63", porc: "85%"}] }
]
};

// --- 2. Función Auxiliar para crear el HTML de la tarjeta ---
function obtenerHTMLTarjeta(p) {
    const beneficiosHTML = p.beneficios ? p.beneficios.map(b => `<li>✔ ${b}</li>`).join('') : '';
    const acordesHTML = p.acordes ? p.acordes.map(a => `
        <div class="acorde-item">
            <span class="label">${a.nombre}</span>
            <div class="bar-bg"><div class="bar-fill" style="width:${a.porc}; background:${a.color}"></div></div>
        </div>
    `).join('') : '';

    return `
        <div class="card">
            <img src="${p.imagen}" alt="${p.nombre}">
            <h3>${p.nombre}</h3>
            <div class="acordes-container">${acordesHTML}</div>
            <p><strong>${p.familia}</strong></p>
            <p><small>Notas: ${p.notas}</small></p>
            <p style="font-size: 0.9em; color: #ccc;">${p.descripcion}</p>
            <ul style="text-align: left; font-size: 0.85em; list-style: none;">${beneficiosHTML}</ul>
            <p style="color: var(--dorado);"><strong>Presentación: ${p.presentacion}</strong></p>
            <a href="https://wa.me/51923787690?text=Hola,%20me%20interesa%20el%20perfume:%20${encodeURIComponent(p.nombre)}" target="_blank" class="btn-whatsapp">Comprar por WhatsApp</a>
        </div>
    `;
}

// --- 3. Función Principal ---
function mostrarCategoria(categoria, clickedButton = null) {
    const contenedor = document.getElementById('contenido-perfumes');
    contenedor.innerHTML = ''; 

    baseDatos[categoria]?.forEach(p => {
        contenedor.innerHTML += obtenerHTMLTarjeta(p);
    });

    if (clickedButton) {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        clickedButton.classList.add('active');
    }
}

// --- 4. Event Listeners ---
document.querySelector('.cta')?.addEventListener('click', (e) => {
    e.preventDefault(); 
    const contenedor = document.getElementById('contenido-perfumes');
    if (contenedor) window.scrollTo({ top: contenedor.getBoundingClientRect().top + window.pageYOffset - 50, behavior: 'smooth' });
});

document.getElementById('search').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const contenedor = document.getElementById('contenido-perfumes');
    
    if (term === '') {
        const categoriaActiva = document.querySelector('.tab-btn.active')?.textContent || 'ÁRABES';
        mostrarCategoria(categoriaActiva);
        return;
    }

    contenedor.innerHTML = ''; 
    let resultadosEncontrados = false;
    
    Object.keys(baseDatos).forEach(categoria => {
        baseDatos[categoria].forEach(p => {
            if (p.nombre.toLowerCase().includes(term)) {
                resultadosEncontrados = true;
                contenedor.innerHTML += obtenerHTMLTarjeta(p);
            }
        });
    });

    if (!resultadosEncontrados) contenedor.innerHTML = '<p style="text-align:center; width:100%;">No se encontraron perfumes con ese nombre.</p>';
});