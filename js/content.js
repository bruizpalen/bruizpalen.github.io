/* =====================================================================
   CONTENIDO DE LA WEB  ·  Este es el único archivo que necesitas tocar
   para cambiar textos, fotos, proyectos, técnicas, casos o publicaciones.
   ---------------------------------------------------------------------
   - Los textos traducidos van así:  { es: "...", en: "...", fr: "..." }
   - Para un salto de línea dentro de un texto escribe  \n
   - Fotos: guárdalas en la carpeta  web/img/  y pon la ruta, por ejemplo
       img: "img/sem-fractura.jpg"
     Si dejas  img: ""  se muestra un recuadro gris de marcador.
   - Para añadir un elemento a una lista, copia uno entero { ... },
     pégalo debajo y sepáralo con una coma.
   ===================================================================== */

const SITE = {

  /* ---------- Datos generales ---------- */
  firstName: "BERTA",
  lastName: "RUIZ PALENZUELA",
  role: { es: "Ingeniera de Materiales", en: "Materials Engineer", fr: "Ingénieure Matériaux" },
  /* Frase de la portada: cada 
 es una línea */
  tagline: {
    es: "Caracterización de materiales · Relación microestructura–propiedades\nEnsayos mecánicos · Microscopía · Ensayos no destructivos",
    en: "Materials characterisation · Linking microstructure and properties\nMechanical testing · Microscopy · Non-destructive testing",
    fr: "Caractérisation des matériaux · Lien microstructure–propriétés\nEssais mécaniques · Microscopie · Contrôle non destructif"
  },
  heroImage: "img/photos/img_5514.jpg",            // foto de fondo de la portada, p. ej. "img/portada.jpg"
  portrait: "img/photos/berta-lab.jpg",   // tu foto para "Sobre mí" (pantalla, notas y pizarra difuminadas)
  cvPdf: { es: "", en: "", fr: "" },   // p. ej. "../cv/CV_Berta_Ruiz_ES.pdf"

  linkedin: "https://www.linkedin.com/in/bruizpalen/",
  orcid: "https://orcid.org/0009-0007-3781-7566",
  scholar: "https://scholar.google.com/citations?hl=es&user=-FAjrg4AAAAJ",              // p. ej. "https://scholar.google.com/citations?user=..."
  location: { es: "Ginebra, Suiza", en: "Geneva, Switzerland", fr: "Genève, Suisse" },

  /* Logos de la franja "He trabajado con".
     Guarda cada logo oficial en  web/img/logos/  con el nombre indicado
     (SVG o PNG con fondo transparente). Si falta el archivo se muestra el nombre.
     Todos se muestran en una caja del mismo tamaño, en blanco, y en color al pasar el ratón.
     Opcional  white: "..."  = versión en blanco hecha a mano, para logos que llevan
     partes blancas (si no, se calcula sola a partir del logo en color).                              */
  logos: [
    { name: "CERN",  img: "img/logos/cern.svg" },
    { name: "ITER",  img: "img/logos/iter.svg" },
    { name: "F4E",   img: "img/logos/f4e.svg" },
    { name: "UC3M",  img: "img/logos/uc3m.svg" },
    { name: "IMDEA Materials", img: "img/logos/imdea.png", white: "img/logos/imdea-white.png" }
  ],

  /* ---------- Sobre mí ---------- */
  about: {
    es: "Ingeniera industrial especializada en ciencia e ingeniería de materiales, centrada en relacionar la microestructura de los materiales, caracterizada a distintas escalas, con sus propiedades mecánicas y funcionales para entender su comportamiento en servicio y apoyar el análisis de fallos.\n\nExperiencia práctica en ensayos mecánicos desde alta temperatura hasta condiciones criogénicas en nitrógeno líquido (77 K) y helio líquido (4.2 K). Incluye ensayos estándar y no estándar de tracción, compresión, tenacidad a la fractura y fatiga, así como ensayos de componentes. Responsable del ciclo completo del ensayo, desde su diseño y el desarrollo del procedimiento hasta la ejecución, el protocolo de análisis de datos y la interpretación.\n\nExperiencia en caracterización microestructural mediante microscopía óptica y electrónica (SEM/EDS, EBSD, TEM) y XRD, complementada con nanoindentación y AFM, para relacionar los rasgos microestructurales con el comportamiento mecánico. Experiencia en la selección de las inspecciones no destructivas adecuadas (VT, RT, PT, CT, UT) y en la interpretación de sus resultados para evaluar la integridad del material, integrándolos con la evidencia microestructural y mecánica en los análisis de fallo.\n\nHe aplicado este enfoque a una amplia variedad de materiales: termoplásticos, elastómeros, composites reforzados con fibra de vidrio y de carbono, aceros inoxidables, aleaciones de cobre e intermetálicos γ-TiAl. Me mueve entender por qué los materiales se comportan como lo hacen y cómo ese conocimiento puede ayudar a resolver problemas prácticos de ingeniería. Disfruto trabajando entre disciplinas, adaptándome a nuevos retos y comunicando resultados complejos con claridad tanto a especialistas como a público no especializado.",
    en: "Industrial engineer specialised in materials science and engineering, focused on linking material microstructure, characterised across different scales, to mechanical and functional properties to understand behaviour in service and support failure analysis.\n\nHands-on experience in mechanical testing from high temperatures down to cryogenic conditions in liquid nitrogen (77 K) and liquid helium (4.2 K). This includes standard and non-standard tensile, compression, fracture toughness and fatigue tests, as well as component testing. Responsible for the full test cycle, from test design and procedure development to execution, data analysis protocol, and interpretation.\n\nPractical experience in microstructural characterisation using optical and electron microscopy (SEM/EDS, EBSD, TEM) and XRD, complemented by nanoindentation and AFM, to relate microstructural features to mechanical behaviour. Experience selecting appropriate non-destructive inspections (VT, RT, PT, CT, UT) and interpreting their results to assess material soundness, integrating these findings with microstructural and mechanical evidence in failure analyses.\n\nThis approach has been applied to a wide range of materials, including thermoplastics, elastomers, glass- and carbon-fibre-reinforced composites, stainless steels, copper alloys and γ-TiAl intermetallics. I am driven by understanding why materials behave as they do and how that knowledge can help solve practical engineering problems. I enjoy working across disciplines, adapting to new challenges and communicating complex findings clearly to both specialist and non-specialist audiences.",
    fr: "Ingénieure industrielle spécialisée en science et génie des matériaux, qui relie la microstructure des matériaux, caractérisée à différentes échelles, à leurs propriétés mécaniques et fonctionnelles afin de comprendre leur comportement en service et d’appuyer l’analyse de défaillance.\n\nExpérience pratique des essais mécaniques, des hautes températures jusqu’aux conditions cryogéniques dans l’azote liquide (77 K) et l’hélium liquide (4,2 K). Cela comprend des essais normalisés et non normalisés de traction, de compression, de ténacité à la rupture et de fatigue, ainsi que des essais sur composants. Responsable du cycle complet de l’essai, de sa conception et du développement de la procédure jusqu’à l’exécution, au protocole d’analyse des données et à l’interprétation.\n\nExpérience en caractérisation microstructurale par microscopie optique et électronique (MEB/EDS, EBSD, MET) et DRX, complétée par la nanoindentation et l’AFM, pour relier les caractéristiques microstructurales au comportement mécanique. Expérience dans le choix des contrôles non destructifs adaptés (VT, RT, PT, CT, UT) et l’interprétation de leurs résultats pour évaluer la santé matière, en les intégrant aux éléments microstructuraux et mécaniques dans les analyses de défaillance.\n\nJ’ai appliqué cette approche à une grande variété de matériaux : thermoplastiques, élastomères, composites renforcés de fibres de verre et de carbone, aciers inoxydables, alliages de cuivre et intermétalliques γ-TiAl. Ce qui me motive, c’est de comprendre pourquoi les matériaux se comportent comme ils le font et comment ces connaissances peuvent aider à résoudre des problèmes concrets d’ingénierie. J’aime travailler entre disciplines, relever de nouveaux défis et communiquer clairement des résultats complexes à des publics spécialistes comme non spécialistes."
  },
  education: [
    { title: { es: "Doctorado en Ciencia e Ingeniería de Materiales", en: "PhD in Materials Science and Engineering", fr: "Doctorat en science et génie des matériaux" }, place: "UC3M · CERN", years: "2024 –" },
    { title: { es: "Máster en Ciencia e Ingeniería de Materiales", en: "MSc in Materials Science and Engineering", fr: "Master en science et génie des matériaux" }, place: "UC3M", years: "2020 – 2021" },
    { title: { es: "Grado en Ingeniería en Tecnologías Industriales", en: "BEng in Industrial Technologies", fr: "Licence en technologies industrielles" }, place: "UC3M", years: "2016 – 2020" },
    { title: { es: "Técnico en Enseñanzas Musicales (oboe)", en: "Professional music diploma (oboe)", fr: "Diplôme professionnel de musique (hautbois)" }, place: { es: "Conservatorio de Alcalá de Henares", en: "Alcalá de Henares Conservatory", fr: "Conservatoire d’Alcalá de Henares" }, years: "2006 – 2016" }
  ],
  languages: [
    { name: { es: "Español", en: "Spanish", fr: "Espagnol" }, level: { es: "Nativo", en: "Native", fr: "Langue maternelle" } },
    { name: { es: "Inglés", en: "English", fr: "Anglais" }, level: { es: "C1 (idioma de trabajo diario en CERN)", en: "C1 (daily working language at CERN)", fr: "C1 (langue de travail quotidienne au CERN)" } },
    { name: { es: "Francés", en: "French", fr: "Français" }, level: { es: "B1", en: "B1", fr: "B1" } }
  ],

  interests: [
    { es: "Música · oboe", en: "Music · oboe", fr: "Musique · hautbois" },
    { es: "Deporte · correr, de 400 m a maratón", en: "Sport · running, from 400 m to marathon", fr: "Sport · course à pied, du 400 m au marathon" },
    { es: "Tecnología · programación e impresión 3D", en: "Technology · programming and 3D printing", fr: "Technologie · programmation et impression 3D" },
  ],

  /* ---------- Investigación y proyectos (de más reciente a más antiguo) ----------
     when:   texto del círculo (usa \n para partirlo en dos líneas)
     temps:  etiquetas de temperatura o condiciones (opcional)
     did:    lista de "Qué hice" (puede quedar vacía: [])
     photos: fotos del proyecto                                                    */
  projects: [
    {
      when: { es: "2024\nhoy", en: "2024\nnow", fr: "2024\nauj." },
      where: "CERN · UC3M",
      temps: ["4.2 K", "77 K"],
      title: { es: "Tesis doctoral: aceros inoxidables austeníticos de alto nitrógeno a temperatura criogénica", en: "PhD: high-nitrogen austenitic stainless steels at cryogenic temperature", fr: "Thèse : aciers inoxydables austénitiques à haute teneur en azote à température cryogénique" },
      text: {
        es: "Investigación sobre el comportamiento mecánico criogénico de aceros inoxidables austeníticos de alto nitrógeno para imanes superconductores de dispositivos de fusión y aceleradores de partículas, junto con actividades de ensayo de materiales y análisis de fallo en apoyo a proyectos de CERN.",
        en: "Research on the cryogenic mechanical behaviour of high-nitrogen austenitic stainless steels for superconducting magnets in fusion devices and particle accelerators, alongside materials testing and failure analysis activities supporting CERN projects.",
        fr: "Recherche sur le comportement mécanique cryogénique d’aciers inoxydables austénitiques à haute teneur en azote pour les aimants supraconducteurs des dispositifs de fusion et des accélérateurs de particules, en parallèle d’activités d’essais de matériaux et d’analyse de défaillance au service de projets du CERN."
      },
      did: {
        es: ["Diseño y realización de ensayos de tenacidad a la fractura y de tracción en helio líquido (4.2 K) y nitrógeno líquido (77 K), y de fatiga a 4.2 K: planificación, montaje, desarrollo del procedimiento, ejecución e interpretación de datos.", "Relación microestructura–propiedades en aceros inoxidables austeníticos (316LNH, FXM-19, P506) mediante microscopía óptica, SEM/EDS, EBSD y TEM.", "Análisis de fallo y evaluación de defectos combinando caracterización microestructural, ensayos mecánicos y resultados de END: soldaduras, uniones por brazing, porosidad interna y defectos de procesado.", "Especificación y evaluación de inspecciones VT, RT, PT, CT y UT para evaluar la integridad de materiales y componentes, incluida la cualificación de soldaduras.", "Análisis de cortes FIB para evaluar la profundidad de defectos y el espesor de capas de óxido por corrosión.", "Planificación, preparación y ejecución de campañas de ensayo para cualificación de proveedores, incluida la gestión de contratos de ensayo externalizados.", "Colaboración con ITER, F4E y forjadores, y presentación de resultados a equipos de proyecto de CERN y socios externos."],
        en: ["Design and conduct fracture toughness and tensile tests in liquid helium (4.2 K) and liquid nitrogen (77 K), and fatigue tests at 4.2 K, covering test planning, set-up, procedure development, execution and data interpretation.", "Investigate microstructure–property relationships in austenitic stainless steels, including 316LNH, FXM-19 and P506, using optical microscopy, SEM/EDS, EBSD and TEM.", "Conduct failure analyses and defect assessments by combining microstructural characterisation, mechanical testing and non-destructive testing (NDT) results, including investigations of welds, brazed joints, internal porosity and processing defects.", "Specify and evaluate VT, RT, PT, CT and UT inspections to assess material and component soundness, including weld qualification.", "Analyse FIB cross-sections to assess defect depth and corrosion oxide layer thickness.", "Plan, prepare and execute test campaigns for supplier qualification, including management of outsourced testing contracts.", "Collaborate with ITER, F4E and forging suppliers, and present findings to CERN project teams and external partners."],
        fr: ["Conception et réalisation d’essais de ténacité à la rupture et de traction dans l’hélium liquide (4,2 K) et l’azote liquide (77 K), et d’essais de fatigue à 4,2 K : planification, montage, développement de la procédure, exécution et interprétation des données.", "Relations microstructure–propriétés dans des aciers inoxydables austénitiques (316LNH, FXM-19, P506) par microscopie optique, MEB/EDS, EBSD et MET.", "Analyses de défaillance et évaluation de défauts combinant caractérisation microstructurale, essais mécaniques et résultats de CND : soudures, assemblages brasés, porosité interne et défauts d’élaboration.", "Spécification et évaluation de contrôles VT, RT, PT, CT et UT pour évaluer la santé des matériaux et des composants, y compris la qualification de soudures.", "Analyse de coupes FIB pour évaluer la profondeur des défauts et l’épaisseur des couches d’oxyde de corrosion.", "Planification, préparation et exécution de campagnes d’essais pour la qualification de fournisseurs, y compris la gestion de contrats d’essais externalisés.", "Collaboration avec ITER, F4E et des forgerons, et présentation des résultats aux équipes projet du CERN et aux partenaires externes."]
      },
      tags: ["316LNH", "FXM-19", "P506", "EBSD", "TEM"],
      photos: [
        { img: "img/photos/img_5128.jpg", cap: { es: "Probetas de tenacidad a la fractura pulidas", en: "Polished fracture toughness specimens", fr: "Éprouvettes de ténacité à la rupture polies" } },
        { img: "img/photos/img_4900.jpg", cap: { es: "Probeta de tracción con extensómetro en el criostato", en: "Tensile specimen with extensometer in the cryostat", fr: "Éprouvette de traction avec extensomètre dans le cryostat" } },
        { img: "img/videos/criostato.mov", cap: { es: "Criostato tras un ensayo a temperatura criogénica", en: "Cryostat after a cryogenic test", fr: "Cryostat après un essai cryogénique" } },
        { img: "img/videos/forja.webp", cap: { es: "Forja en un proveedor de piezas forjadas", en: "Forging at a forging supplier", fr: "Forgeage chez un fournisseur" } },
        { img: "img/photos/P506_EBSD_CL_highmag.png", cap: { es: "Mapa EBSD", en: "EBSD map", fr: "Carte EBSD" } }

      ]
    },
    {
      when: { es: "2022\n2024", en: "2022\n2024", fr: "2022\n2024" },
      where: "CERN · CARE",
      temps: [],
      title: { es: "Envejecimiento de cables por radiación (CARE)", en: "Radiation ageing of cables (CARE)", fr: "Vieillissement des câbles sous irradiation (CARE)" },
      text: {
        es: "Investigación de la degradación mecánica y química de polímeros de cables eléctricos por radiación ionizante y envejecimiento acelerado.",
        en: "Investigation of the mechanical and chemical degradation of electrical cable polymers under ionising radiation and accelerated ageing.",
        fr: "Étude de la dégradation mécanique et chimique des polymères de câbles électriques sous rayonnement ionisant et vieillissement accéléré."
      },
      did: {
        es: ["Ensayos de tracción, calorimetría diferencial de barrido (DSC) para el tiempo de inducción a la oxidación (OIT) y FTIR para evaluar la degradación mecánica y química de polímeros de cable envejecidos.", "Desarrollo de procedimientos experimentales para la caracterización de polímeros de cable envejecidos.", "Planificación de campañas de irradiación y de envejecimiento no ionizante, con planes de muestreo y montajes de irradiación adaptados a cada instalación.", "Coordinación del trabajo experimental con socios del proyecto e instalaciones de irradiación, incluida la colocación y recuperación de muestras."],
        en: ["Performed tensile testing, differential scanning calorimetry (DSC) for oxidation induction time (OIT), and FTIR analysis to assess mechanical and chemical degradation of aged cable polymers.", "Developed experimental procedures for the characterisation of aged cable polymers.", "Planned irradiation and non-ionising ageing campaigns, including sampling plans and irradiation set-ups adapted to each facility.", "Coordinated experimental work with project partners and irradiation facilities, including sample placement and recovery."],
        fr: ["Essais de traction, calorimétrie différentielle à balayage (DSC) pour le temps d’induction à l’oxydation (OIT) et FTIR pour évaluer la dégradation mécanique et chimique de polymères de câbles vieillis.", "Développement de procédures expérimentales pour la caractérisation des polymères de câbles vieillis.", "Planification de campagnes d’irradiation et de vieillissement non ionisant, avec plans d’échantillonnage et montages d’irradiation adaptés à chaque installation.", "Coordination du travail expérimental avec les partenaires du projet et les installations d’irradiation, y compris la mise en place et la récupération des échantillons."]
      },
      tags: [{ es: "Polímeros", en: "Polymers", fr: "Polymères" }, "DSC", "FTIR"],
      photos: [
        { img: "img/photos/img_03228.jpg", cap: { es: "Tracción de polímero de cable envejecido", en: "Tensile test of an aged cable polymer", fr: "Traction d’un polymère de câble vieilli" } },
        { img: "img/videos/care-traccion.mov", cap: { es: "Ensayo de tracción de aislante de cable", en: "Tensile test of cable insulation", fr: "Essai de traction d’isolant de câble" } },
        { img: "img/photos/img_06532.jpg", cap: { es: "Muestras preparadas para irradiación", en: "Samples prepared for irradiation", fr: "Échantillons préparés pour l’irradiation" } },
        { img: "img/photos/img_45562.jpg", cap: { es: "Sección de cable", en: "Cable cross-section", fr: "Section de câble" } }
      ]
    },
    {
      when: { es: "2021", en: "2021", fr: "2021" },
      where: "CERN",
      temps: [],
      title: { es: "Prácticas: cavidades superconductoras de cobre hidroconformadas", en: "Internship: hydroformed copper superconducting cavities", fr: "Stage : cavités supraconductrices en cuivre hydroformées" },
      text: {
        es: "Determinación experimental del diagrama límite de conformado de chapa gruesa de Cu-OFE para el hidroconformado de cavidades superconductoras de RF.",
        en: "Experimental determination of the forming limit diagram of thick Cu-OFE sheets for hydroforming superconducting RF cavities.",
        fr: "Détermination expérimentale de la courbe limite de formage de tôles épaisses de Cu-OFE pour l’hydroformage de cavités RF supraconductrices."
      },
      did: {
        es: ["Ensayos de tracción con distintas geometrías de probeta para estudiar el comportamiento a deformación bajo distintas trayectorias de deformación.", "Correlación digital de imágenes (DIC) para medir campos de deformación y analizar la deformación durante el ensayo.", "Coautora en Materials & Design (2024)."],
        en: ["Performed tensile tests using different specimen geometries to investigate deformation behaviour under different strain paths.", "Used digital image correlation (DIC) to measure strain fields and analyse deformation during testing.", "Co-author in Materials & Design (2024)."],
        fr: ["Essais de traction sur différentes géométries d’éprouvettes pour étudier le comportement en déformation selon différents chemins de déformation.", "Corrélation d’images numériques (DIC) pour mesurer les champs de déformation et analyser la déformation pendant l’essai.", "Co-autrice dans Materials & Design (2024)."]
      },
      tags: ["Cu-OFE", "DIC"],
      photos: [
        { img: "img/photos/cuofe-hidroconformado.jpg", cap: { es: "Tubo de Cu-OFE y pieza hidroconformada", en: "Cu-OFE tube and hydroformed part", fr: "Tube de Cu-OFE et pièce hydroformée" } },
        { img: "img/photos/cuofe-microestructura.jpg", cap: { es: "Microestructura del Cu-OFE (microscopía óptica)", en: "Cu-OFE microstructure (optical microscopy)", fr: "Microstructure du Cu-OFE (microscopie optique)" } },
        { img: "img/photos/cuofe-fractura-traccion.jpg", cap: { es: "Fractura de una probeta de tracción de Cu-OFE", en: "Fracture of a Cu-OFE tensile specimen", fr: "Rupture d’une éprouvette de traction en Cu-OFE" } }
      ]
    },
    {
      when: { es: "2020\n2021", en: "2020\n2021", fr: "2020\n2021" },
      where: "UC3M · IMDEA",
      temps: ["700 °C"],
      title: { es: "TFM: intermetálicos γ-TiAl", en: "Master’s thesis: γ-TiAl intermetallics", fr: "Mémoire de master : intermétalliques γ-TiAl" },
      text: {
        es: "Investigación de la relación microestructura–propiedades en intermetálicos γ-TiAl tras distintos tratamientos térmicos.",
        en: "Investigation of microstructure–property relationships in γ-TiAl intermetallics following different heat treatments.",
        fr: "Étude des relations microstructure–propriétés dans des intermétalliques γ-TiAl après différents traitements thermiques."
      },
      did: {
        es: ["Ensayos de relajación de tensiones a distintas temperaturas en un simulador termomecánico Gleeble para determinar volúmenes de activación.", "Nanoindentación a alta temperatura combinada con TEM para relacionar la respuesta mecánica local con los rasgos microestructurales."],
        en: ["Performed stress-relaxation tests at different temperatures using a Gleeble thermomechanical simulator to determine activation volumes.", "Combined high-temperature nanoindentation with TEM characterisation to relate local mechanical response to microstructural features."],
        fr: ["Essais de relaxation de contraintes à différentes températures sur simulateur thermomécanique Gleeble pour déterminer les volumes d’activation.", "Nanoindentation à haute température combinée au MET pour relier la réponse mécanique locale aux caractéristiques microstructurales."]
      },
      tags: ["γ-TiAl", "TEM", { es: "Nanoindentación", en: "Nanoindentation", fr: "Nanoindentation" }],
      photos: [{ img: "", cap: { es: "Microestructura (TEM)", en: "Microstructure (TEM)", fr: "Microstructure (MET)" } }]
    },
    {
      when: { es: "2020", en: "2020", fr: "2020" },
      where: "IMDEA Materiales",
      temps: [],
      title: { es: "Aceros martensíticos por temple y partición", en: "Quenching and partitioning martensitic steels", fr: "Aciers martensitiques par trempe et partition" },
      text: {
        es: "Beca de iniciación a la investigación sobre aceros inoxidables martensíticos por temple y partición.",
        en: "Research initiation fellowship on quenching and partitioning martensitic stainless steels.",
        fr: "Bourse d’initiation à la recherche sur les aciers inoxydables martensitiques par trempe et partition."
      },
      did: {
        es: ["Identificación de islas de austenita retenida en aceros inoxidables martensíticos de temple y partición combinando AFM y EBSD."],
        en: ["Identified retained austenite islands in quenching and partitioning martensitic stainless steels by combining AFM and EBSD."],
        fr: ["Identification d’îlots d’austénite résiduelle dans des aciers inoxydables martensitiques trempés et partitionnés en combinant AFM et EBSD."]
      },
      tags: ["Q&P", "AFM", "EBSD"],
      photos: [{ img: "", cap: { es: "Mapa AFM + EBSD", en: "AFM + EBSD map", fr: "Carte AFM + EBSD" } }]
    },
    {
      when: { es: "2019\n2020", en: "2019\n2020", fr: "2019\n2020" },
      where: "UC3M",
      temps: ["700 °C"],
      title: { es: "Beca de colaboración: intermetálicos γ-TiAl", en: "Collaboration scholarship: γ-TiAl intermetallics", fr: "Bourse de collaboration : intermétalliques γ-TiAl" },
      text: {
        es: "Efecto del tratamiento térmico en la relación microestructura–propiedades de intermetálicos γ-TiAl.",
        en: "Effects of heat treatment on microstructure–property relationships in γ-TiAl intermetallics.",
        fr: "Effet du traitement thermique sur les relations microstructure–propriétés d’intermétalliques γ-TiAl."
      },
      did: {
        es: ["Ensayos de compresión a distintas temperaturas y velocidades de deformación, y selección de tratamientos térmicos, técnicas de caracterización y entornos de procesado."],
        en: ["Performed compression tests at different temperatures and strain rates, and selected heat treatments, characterisation techniques and processing environments."],
        fr: ["Essais de compression à différentes températures et vitesses de déformation, et choix des traitements thermiques, des techniques de caractérisation et des environnements d’élaboration."]
      },
      tags: ["γ-TiAl"],
      photos: [{ img: "", cap: { es: "Probeta de compresión", en: "Compression specimen", fr: "Éprouvette de compression" } }]
    }
  ],

  /* ---------- Técnicas ----------
     categories: los botones del filtro (además de "Todas")
     techniques: cada técnica indica su categoría con  cat                */
  categories: [
    { id: "mec",  name: { es: "Ensayos mecánicos", en: "Mechanical testing", fr: "Essais mécaniques" } },
    { id: "mic",  name: { es: "Microscopía y caracterización", en: "Microscopy & characterisation", fr: "Microscopie et caractérisation" } },
    { id: "end",  name: { es: "Ensayos no destructivos", en: "Non-destructive testing", fr: "Contrôle non destructif" } },
    { id: "fa",   name: { es: "Análisis de fallo", en: "Failure analysis", fr: "Analyse de défaillance" } },
    { id: "sim",  name: { es: "Diseño y simulación", en: "Design & simulation", fr: "Conception et simulation" } },
    { id: "org",  name: { es: "Campañas y colaboraciones", en: "Campaigns & collaborations", fr: "Campagnes et collaborations" } },
    { id: "com",  name: { es: "Comunicación", en: "Communication", fr: "Communication" } },
    { id: "prog", name: { es: "Software", en: "Software", fr: "Logiciels" } }
  ],
  techniques: [
    { cat: "mec", img: "img/photos/img_4901.jpg", title: { es: "Ensayos criogénicos", en: "Cryogenic testing", fr: "Essais cryogéniques" },
      text: { es: "Tenacidad a la fractura y velocidad de crecimiento de grieta por fatiga desde temperatura ambiente hasta temperatura criogénica; tracción en helio líquido (4.2 K) y nitrógeno líquido (77 K).", en: "Fracture toughness and fatigue crack growth rate testing from room to cryogenic temperatures; tensile testing in liquid helium (4.2 K) and liquid nitrogen (77 K).", fr: "Ténacité à la rupture et vitesse de propagation de fissure en fatigue de la température ambiante aux températures cryogéniques ; traction dans l’hélium liquide (4,2 K) et l’azote liquide (77 K)." } },
    { cat: "mec", img: "img/photos/img_4654.jpg", title: { es: "Tracción, compresión, cortadura y flexión", en: "Tensile, compression, shear and bending", fr: "Traction, compression, cisaillement et flexion" },
      text: { es: "Desde temperatura criogénica en helio líquido (4.2 K) y nitrógeno líquido (77 K), pasando por temperatura ambiente, hasta alta temperatura.", en: "From cryogenic temperatures in liquid helium (4.2 K) and liquid nitrogen (77 K) through room temperature to high temperatures.", fr: "Des températures cryogéniques dans l’hélium liquide (4,2 K) et l’azote liquide (77 K), en passant par la température ambiante, jusqu’aux hautes températures." } },
    { cat: "mec", img: "", title: { es: "Relajación de tensiones", en: "Stress relaxation", fr: "Relaxation de contraintes" },
      text: { es: "Compresión y relajación de tensiones a alta temperatura en simulador termomecánico Gleeble, para obtener volúmenes de activación.", en: "High-temperature compression and stress-relaxation testing on a Gleeble thermomechanical simulator, to derive activation volumes.", fr: "Compression et relaxation de contraintes à haute température sur simulateur thermomécanique Gleeble, pour déterminer les volumes d’activation." } },
    { cat: "mec", img: "", title: { es: "PIP", en: "PIP", fr: "PIP" },
      text: { es: "Ensayos PIP (Profilometry-based Indentation Plastometry) a temperatura ambiente y alta temperatura: curvas tensión–deformación a partir de una indentación.", en: "PIP testing (Profilometry-based Indentation Plastometry) at room and high temperature: stress–strain curves from an indentation.", fr: "Essais PIP (Profilometry-based Indentation Plastometry) à température ambiante et à haute température : courbes contrainte–déformation à partir d’une indentation." } },
    { cat: "mec", img: "", title: { es: "Extensometría y DIC", en: "Extensometry and DIC", fr: "Extensométrie et DIC" },
      text: { es: "Extensometría de contacto y óptica, incluida la correlación digital de imágenes (DIC).", en: "Contact and optical extensometry, including digital image correlation (DIC).", fr: "Extensométrie de contact et optique, y compris la corrélation d’images numériques (DIC)." } },
    { cat: "mec", img: "", title: { es: "Dureza y nanoindentación", en: "Hardness and nanoindentation", fr: "Dureté et nanoindentation" },
      text: { es: "Ensayos de dureza; nanoindentación a distintas temperaturas, incluida alta temperatura, en intermetálicos γ-TiAl.", en: "Hardness testing; nanoindentation at different temperatures, including high temperature, on γ-TiAl intermetallics.", fr: "Essais de dureté ; nanoindentation à différentes températures, y compris à haute température, sur intermétalliques γ-TiAl." } },
    { cat: "mec", img: "img/photos/img_5265.jpg", title: { es: "Procedimientos de ensayo", en: "Test procedures", fr: "Procédures d’essai" },
      text: { es: "Desarrollo de procedimientos para ensayos criogénicos y para polímeros de cable envejecidos (CARE).", en: "Development of procedures for cryogenic testing and for aged cable polymers (CARE).", fr: "Développement de procédures pour les essais cryogéniques et les polymères de câbles vieillis (CARE)." } },
    { cat: "mic", img: "", title: { es: "Microscopía óptica", en: "Optical microscopy", fr: "Microscopie optique" },
      text: { es: "Preparación metalográfica y caracterización microestructural.", en: "Metallographic preparation and microstructural characterisation.", fr: "Préparation métallographique et caractérisation microstructurale." } },
    { cat: "mic", img: "", title: { es: "SEM + EDS", en: "SEM + EDS", fr: "MEB + EDS" },
      text: { es: "Microestructuras, superficies de fractura y análisis químico local.", en: "Microstructures, fracture surfaces and local chemical analysis.", fr: "Microstructures, faciès de rupture et analyse chimique locale." } },
    { cat: "mic", img: "", title: { es: "EBSD", en: "EBSD", fr: "EBSD" },
      text: { es: "Mapas de orientación, tamaño de grano y fases.", en: "Orientation maps, grain size and phases.", fr: "Cartes d’orientation, taille de grain et phases." } },
    { cat: "mic", img: "", title: { es: "TEM", en: "TEM", fr: "MET" },
      text: { es: "Caracterización de aceros austeníticos e intermetálicos γ-TiAl.", en: "Characterisation of austenitic steels and γ-TiAl intermetallics.", fr: "Caractérisation d’aciers austénitiques et d’intermétalliques γ-TiAl." } },
    { cat: "mic", img: "", title: { es: "AFM", en: "AFM", fr: "AFM" },
      text: { es: "Combinado con EBSD para detectar islas de austenita retenida en aceros de temple y partición.", en: "Combined with EBSD to detect retained austenite islands in quenching and partitioning steels.", fr: "Combinée à l’EBSD pour détecter des îlots d’austénite résiduelle dans des aciers trempés et partitionnés." } },
    { cat: "mic", img: "", title: { es: "Análisis FIB", en: "FIB analysis", fr: "Analyse FIB" },
      text: { es: "Análisis de cortes FIB: profundidad de defectos y espesor de capas de óxido por corrosión.", en: "Analysis of FIB cross-sections: defect depth and corrosion oxide layer thickness.", fr: "Analyse de coupes FIB : profondeur des défauts et épaisseur des couches d’oxyde de corrosion." } },
    { cat: "mic", img: "", title: { es: "XRD", en: "XRD", fr: "DRX" },
      text: { es: "Identificación de fases.", en: "Phase identification.", fr: "Identification des phases." } },
    { cat: "mic", img: "img/photos/img_45562.jpg", title: { es: "Análisis térmico y químico · DSC (OIT) · FTIR", en: "Thermal and chemical analysis · DSC (OIT) · FTIR", fr: "Analyse thermique et chimique · DSC (OIT) · FTIR" },
      text: { es: "Calorimetría diferencial de barrido (DSC), determinación del tiempo de inducción a la oxidación (OIT) y espectroscopía FTIR para la caracterización de polímeros.", en: "Differential scanning calorimetry (DSC), oxidation induction time (OIT) determination and FTIR spectroscopy for polymer characterisation.", fr: "Calorimétrie différentielle à balayage (DSC), détermination du temps d’induction à l’oxydation (OIT) et spectroscopie FTIR pour la caractérisation des polymères." } },
    { cat: "mic", img: "", title: { es: "Análisis de imagen", en: "Image analysis", fr: "Analyse d’images" },
      text: { es: "Análisis automatizado: tamaño de partícula de polvo pulvimetalúrgico y porosidad en uniones por brazing.", en: "Automated analysis: powder particle size statistics and porosity in brazed joints.", fr: "Analyse automatisée : taille de particules de poudres et porosité des assemblages brasés." } },
    { cat: "end", img: "", title: { es: "VT · RT · PT · CT · UT", en: "VT · RT · PT · CT · UT", fr: "VT · RT · PT · CT · UT" },
      text: { es: "Especificación e interpretación de inspecciones visuales (VT), radiográficas (RT), por líquidos penetrantes (PT), por ultrasonidos (UT) y por tomografía computarizada (CT) para evaluar la integridad del material. Para cualificación de soldaduras, brazing, porosidad interna, defectos de procesado y llenado de piezas de inyección.", en: "Specification and interpretation of visual (VT), radiographic (RT), penetrant (PT), ultrasonic (UT) and computed tomography (CT) inspections to assess material soundness. For weld qualification, brazing, internal porosity, processing defects and filling of injection-moulded parts.", fr: "Spécification et interprétation de contrôles visuels (VT), radiographiques (RT), par ressuage (PT), par ultrasons (UT) et par tomographie (CT) pour évaluer la santé matière. Pour la qualification de soudures, le brasage, la porosité interne, les défauts d’élaboration et le remplissage de pièces injectées." } },
    { cat: "end", img: "", title: { es: "Precarga en tornillos por ultrasonidos (TRAXX)", en: "Ultrasonic bolt preload measurement (TRAXX)", fr: "Mesure de précharge des boulons par ultrasons (TRAXX)" },
      text: { es: "Medida por ultrasonidos de la carga axial en tornillos con el sistema TRAXX: calibración y verificación de que un par de apriete dado aplica la fuerza axial prevista.", en: "Ultrasonic measurement of the axial load in bolts with the TRAXX system: calibration and verification that a given tightening torque applies the intended axial force.", fr: "Mesure par ultrasons de l’effort axial dans les boulons avec le système TRAXX : étalonnage et vérification qu’un couple de serrage donné applique l’effort axial prévu." } },
    { cat: "fa", img: "", title: { es: "Análisis de fallo", en: "Failure analysis", fr: "Analyse de défaillance" },
      text: { es: "Combinando resultados microestructurales, mecánicos y de END para encontrar la causa raíz. Pensamiento analítico y resolución eficaz de problemas.", en: "Combining microstructural, mechanical and NDT results to find the root cause. Analytical thinking and effective problem-solving.", fr: "En combinant résultats microstructuraux, mécaniques et CND pour trouver la cause racine. Esprit d’analyse et résolution efficace de problèmes." } },
    { cat: "fa", img: "", title: { es: "Cualificación de soldaduras y brazing", en: "Weld and brazing qualification", fr: "Qualification de soudures et de brasures" },
      text: { es: "Evaluación de defectos y de la integridad del material en uniones soldadas y por brazing.", en: "Defect assessment and material soundness of welded and brazed joints.", fr: "Évaluation des défauts et de la santé matière des assemblages soudés et brasés." } },
    { cat: "sim", img: "", title: { es: "Diseño · CATIA · SolidWorks · Solid Edge", en: "Design · CATIA · SolidWorks · Solid Edge", fr: "Conception · CATIA · SolidWorks · Solid Edge" },
      text: { es: "Diseño de probetas, utillajes y herramientas de ensayo con CATIA, SolidWorks y Solid Edge.", en: "Design of test specimens, fixtures and tooling with CATIA, SolidWorks and Solid Edge.", fr: "Conception d’éprouvettes, d’outillages et de montages d’essai avec CATIA, SolidWorks et Solid Edge." } },
    { cat: "sim", img: "", title: { es: "Abaqus · Thermo-Calc", en: "Abaqus · Thermo-Calc", fr: "Abaqus · Thermo-Calc" },
      text: { es: "Elementos finitos y termodinámica computacional.", en: "Finite elements and computational thermodynamics.", fr: "Éléments finis et thermodynamique numérique." } },
    { cat: "org", img: "img/photos/img_06532.jpg", title: { es: "Campañas de ensayo e irradiación", en: "Test and irradiation campaigns", fr: "Campagnes d’essais et d’irradiation" },
      text: { es: "Planificación, preparación y ejecución, diseño de muestreo y de montajes, y externalización de contratos de ensayo.", en: "Planning, preparation and execution, design of sampling and set-ups, and outsourcing of testing contracts.", fr: "Planification, préparation et exécution, conception de l’échantillonnage et des montages, et externalisation de contrats d’essais." } },
    { cat: "org", img: "img/photos/forja-foto.jpg", title: { es: "Colaboraciones", en: "Collaborations", fr: "Collaborations" },
      text: { es: "Con socios, instalaciones de ensayo e industria: ITER, F4E y forjadores de metales.", en: "With partners, test facilities and industry: ITER, F4E and metal forging suppliers.", fr: "Avec des partenaires, des installations d’essai et l’industrie : ITER, F4E et des forgerons." } },
    { cat: "org", img: "", title: { es: "Cualificación de proveedores", en: "Supplier qualification", fr: "Qualification de fournisseurs" },
      text: { es: "Cualificación de proveedores y de procesos de fabricación.", en: "Qualification of suppliers and manufacturing processes.", fr: "Qualification de fournisseurs et de procédés de fabrication." } },
    { cat: "com", img: "", title: { es: "Informes y comunicación", en: "Reporting and communication", fr: "Rapports et communication" },
      text: { es: "Redacción de informes técnicos y adaptación de resultados experimentales a equipos de proyecto, socios industriales y comunidad científica.", en: "Technical reporting and translation of experimental results for project teams, industrial partners and the scientific community.", fr: "Rédaction de rapports techniques et adaptation des résultats expérimentaux aux équipes projet, partenaires industriels et à la communauté scientifique." } },
    { cat: "prog", img: "", title: { es: "Planificación experimental y análisis de datos · Python", en: "Experimental planning and data analysis · Python", fr: "Planification expérimentale et analyse de données · Python" },
      text: { es: "Planificación de ensayos y desarrollo de protocolos; procesado, análisis e interpretación de datos experimentales con Python.", en: "Test planning and protocol development; processing, analysis and interpretation of experimental data using Python.", fr: "Planification des essais et développement de protocoles ; traitement, analyse et interprétation des données expérimentales avec Python." } },
    { cat: "prog", img: "", title: { es: "Python · pandas · NumPy · Matplotlib · seaborn", en: "Python · pandas · NumPy · Matplotlib · seaborn", fr: "Python · pandas · NumPy · Matplotlib · seaborn" },
      text: { es: "Análisis y visualización de datos.", en: "Data analysis and visualisation.", fr: "Analyse et visualisation de données." } },
    { cat: "prog", img: "", title: { es: "C · Visual Basic", en: "C · Visual Basic", fr: "C · Visual Basic" },
      text: { es: "C; nociones de Visual Basic.", en: "C; basic Visual Basic.", fr: "C ; notions de Visual Basic." } },
    { cat: "prog", img: "", title: { es: "IA generativa", en: "Generative AI tools", fr: "IA générative" },
      text: { es: "Herramientas de IA generativa como apoyo a la programación y al análisis de datos.", en: "Generative AI tools for coding support and data analysis.", fr: "Outils d’IA générative en appui à la programmation et à l’analyse de données." } },
    { cat: "prog", img: "", title: { es: "Desarrollo web · HTML · CSS · JavaScript", en: "Web development · HTML · CSS · JavaScript", fr: "Développement web · HTML · CSS · JavaScript" },
      text: { es: "Bootcamp full-stack de 18 semanas.", en: "18-week full-stack bootcamp.", fr: "Bootcamp full-stack de 18 semaines." } }
  ],

  /* ---------- Casos de estudio ----------
     Cada caso tiene su propia página con Contexto · Cómo lo abordé · Resultado */
  cases: [
    {
      tag: { es: "Failure analysis", en: "Failure analysis", fr: "Analyse de défaillance" },
      title: { es: "[Título del caso]", en: "[Case title]", fr: "[Titre du cas]" },
      context: { es: "[Qué pieza falló, en qué condiciones y por qué importaba]", en: "[Which part failed, under what conditions and why it mattered]", fr: "[Quelle pièce a cédé, dans quelles conditions et pourquoi c’était important]" },
      approach: { es: "[Qué técnicas usaste: inspección visual, fractografía SEM, EDS, metalografía…]", en: "[Which techniques you used: visual inspection, SEM fractography, EDS, metallography…]", fr: "[Quelles techniques : inspection visuelle, fractographie MEB, EDS, métallographie…]" },
      result: { es: "[Causa raíz y recomendación]", en: "[Root cause and recommendation]", fr: "[Cause racine et recommandation]" },
      photos: [
        { img: "", cap: { es: "Pieza recibida", en: "Part as received", fr: "Pièce reçue" } },
        { img: "", cap: { es: "Superficie de fractura (SEM)", en: "Fracture surface (SEM)", fr: "Faciès de rupture (MEB)" } }
      ]
    },
    {
      tag: { es: "Materiales", en: "Materials", fr: "Matériaux" },
      title: { es: "Acero FXM-19 forjado a 4.2 K para imanes de fusión", en: "Forged FXM-19 steel at 4.2 K for fusion magnets", fr: "Acier FXM-19 forgé à 4,2 K pour aimants de fusion" },
      context: {
        es: "Los tokamaks compactos con imanes superconductores de alta temperatura necesitan materiales estructurales que aguanten tensiones mucho mayores a temperatura criogénica. El acero austenítico FXM-19 es un candidato.",
        en: "Compact tokamaks with high-temperature superconducting magnets need structural materials that withstand much higher stresses at cryogenic temperature. FXM-19 austenitic steel is a candidate.",
        fr: "Les tokamaks compacts à aimants supraconducteurs haute température ont besoin de matériaux structurels supportant des contraintes bien plus élevées à température cryogénique. L’acier austénitique FXM-19 est un candidat."
      },
      approach: { es: "[Qué ensayos y caracterización hiciste]", en: "[What tests and characterisation you did]", fr: "[Quels essais et caractérisations tu as réalisés]" },
      result: { es: "[Resultados clave]\nPresentado en ICMC 2024.", en: "[Key results]\nPresented at ICMC 2024.", fr: "[Résultats clés]\nPrésenté à l’ICMC 2024." },
      photos: [
        { img: "img/videos/forja.webp", cap: { es: "Forja", en: "Forging", fr: "Forgeage" } },
        { img: "img/photos/img_5128.jpg", cap: { es: "Probetas de tenacidad a la fractura", en: "Fracture toughness specimens", fr: "Éprouvettes de ténacité à la rupture" } },
        { img: "img/photos/img_5514.jpg", cap: { es: "Probeta en nitrógeno líquido", en: "Specimen in liquid nitrogen", fr: "Éprouvette dans l’azote liquide" } }
      ]
    },
    {
      tag: { es: "Conformado", en: "Forming", fr: "Formage" },
      title: { es: "Diagrama límite de conformado del cobre OFE para cavidades SRF", en: "Forming limit diagram of Cu-OFE for SRF cavities", fr: "Courbe limite de formage du cuivre OFE pour cavités SRF" },
      context: {
        es: "Las cavidades superconductoras recubiertas previstas para el FCC necesitan sustratos de cobre sin soldaduras. El hidroconformado de tubos es una opción, pero apenas se había aplicado a chapa gruesa de cobre OFE.",
        en: "The coated superconducting cavities planned for the FCC need seamless copper substrates. Tube hydroforming is an option, but had barely been applied to thick Cu-OFE products.",
        fr: "Les cavités supraconductrices revêtues prévues pour le FCC nécessitent des substrats en cuivre sans soudure. L’hydroformage de tubes est une option, mais avait peu été appliqué au cuivre OFE épais."
      },
      approach: {
        es: "Determinación del diagrama límite de conformado en chapas de 4 mm y 2 mm y comparación con el modelo de material.",
        en: "Determination of the forming limit diagram on 4 mm and 2 mm sheets and benchmark of the material model.",
        fr: "Détermination de la courbe limite de formage sur tôles de 4 mm et 2 mm et comparaison avec le modèle matériau."
      },
      result: { es: "[Tu aportación y resultado]\nPublicado en Materials & Design (2024).", en: "[Your contribution and result]\nPublished in Materials & Design (2024).", fr: "[Ta contribution et le résultat]\nPublié dans Materials & Design (2024)." },
      photos: [{ img: "", cap: { es: "Diagrama límite de conformado", en: "Forming limit diagram", fr: "Courbe limite de formage" } }]
    }
  ],

  /* ---------- Publicaciones ----------
     type: "art" (artículo), "conf" (congreso), "chap" (capítulo)
     link: enlace al DOI (opcional)                                       */
  publications: [
    { year: 2026, type: "art", link: "https://doi.org/10.3390/cryo2040009",
      title: "Mechanical testing of austenitic stainless steels at 4 K: a novel approach for characterizing unstable crack propagation in cryogenic applications",
      authors: "E. Rodriguez Castro, I. Aviles Santillana, B. Ruiz-Palenzuela, S. Sgobba, E. Ruiz Navas, M. Kind",
      venue: "Cryo 2(4) (2026) 9" },
    { year: 2025, type: "art", link: "https://doi.org/10.1016/j.fusengdes.2025.114869",
      title: "Lessons learnt from manufacturing — Forging of tokamak components",
      authors: "S. Sgobba, I. Aviles Santillana, B. Ruiz-Palenzuela, E. Rodriguez Castro, J. Knaster, T. Schild, S. Han, G. Rossano, P. Libeyre, C. Beemsterboer",
      venue: "Fusion Engineering and Design 212 (2025) 114869" },
    { year: 2025, type: "conf", link: "https://doi.org/10.1088/1757-899x/1327/1/012206",
      title: "Characterization at 4 K of FXM-19 forged products for their use in fusion energy",
      authors: "E. Rodriguez Castro, I. Aviles Santillana, S. Sgobba, B. Ruiz-Palenzuela, A. Cuartero Mondoño, C. A. Dennett, D. V. Yuryev, D. Tammana, M. Kind, R. Kind, M. Stan, E. Ruiz Navas",
      venue: "IOP Conf. Ser.: Mater. Sci. Eng. 1327 (2025) 012206 · ICMC 2024" },
    { year: 2025, type: "conf", link: "https://doi.org/10.1088/1757-899x/1327/1/012130",
      title: "Study of the thermo-mechanical properties of a lead–stainless steel composite at 298 K and 77 K",
      authors: "F. Aretio-Zárate, M. Chalifour, M. Aleksa, J. Bremer, I. Avilés Santillana, B. Ruiz-Palenzuela, E. Rodríguez Castro",
      venue: "IOP Conf. Ser.: Mater. Sci. Eng. 1327 (2025) 012130 · ICMC 2024" },
    { year: 2025, type: "art", link: "https://doi.org/10.4028/p-ga8wdg",
      title: "Powder metallurgy and heat treatment effects on microstructure in a γ-TiAl Ti-4522XD alloy",
      authors: "B. Ruiz-Palenzuela, I. Sabirov, E. M. Ruiz-Navas",
      venue: "Materials Science Forum 1146 (2025) 3–11" },
    { year: 2025, type: "conf", link: "",
      title: "Ensayos criogénicos: superando desafíos en la caracterización de materiales compuestos irradiados para fusión nuclear",
      authors: "A. Carpio Rovira, B. Ruiz-Palenzuela, I. Aviles Santillana, F. Ortona",
      venue: "MATCOMP 2025" },
    { year: 2024, type: "art", link: "https://doi.org/10.1016/j.matdes.2024.113191",
      title: "Forming limit diagram of annealed copper OFE thick sheets for optimized hydroforming of superconducting RF cavities",
      authors: "A. Gallifa-Terricabras, J. S. Swieszek, D. Smakulska, B. Ruiz-Palenzuela, M. Garlaschè",
      venue: "Materials & Design 244 (2024) 113191" },
    { year: 2024, type: "conf", link: "https://doi.org/10.1109/icd59037.2024.10613225",
      title: "Characterization of polymeric components of a cable for applications in a radiation environment",
      authors: "F. Bortoletto, J. Gascon, T. Kramer, M. Kranjcevic, J. Herrero, B. Ruiz-Palenzuela, T. Stadlbauer",
      venue: "2024 IEEE 5th International Conference on Dielectrics (ICD), pp. 1–5" },
    { year: 2023, type: "conf", link: "",
      title: "Mechanical and chemical degradation assessment of polymeric cable components subjected to different accelerated ageing methods",
      authors: "F. Bortoletto, A. Danyliuk, J. Gascon, M. Kranjcevic, B. Ruiz-Palenzuela",
      venue: "JICABLE 2023" },
    { year: 2022, type: "chap", link: "https://doi.org/10.1016/b978-0-12-819726-4.00114-9",
      title: "Sintering of aluminum alloys. Processing and properties",
      authors: "E. M. Ruiz-Navas, B. Ruiz-Palenzuela",
      venue: "Encyclopedia of Materials: Metals and Alloys (Elsevier)" },
    { year: 2021, type: "art", link: "https://doi.org/10.1016/j.matchar.2020.110856",
      title: "The effect of microstructure and strain rate on the 25 °C and 700 °C compression deformation behavior of powder metallurgy processed Ti-45Al-2Nb-2Mn (at.%)-0.8 TiB2 (vol.%) alloy",
      authors: "C. J. Boehlert, D. Hernandez-Escobar, B. Ruiz-Palenzuela, I. Sabirov, J. Cornide, E. M. Ruiz-Navas",
      venue: "Materials Characterization 172 (2021) 110856" },
    { year: 2021, type: "art", link: "https://doi.org/10.1016/j.jallcom.2020.156870",
      title: "A comparison of field assisted hot pressing and hot isostatic pressing for gas atomized Ti–22Al–26Nb (at.%) and Ti–22Al–26Nb–5B (at.%) powders",
      authors: "C. J. Boehlert, I. Sabirov, B. Ruiz-Palenzuela, J. Cornide, E. M. Ruiz-Navas",
      venue: "Journal of Alloys and Compounds 852 (2021) 156870" }
  ]
};
