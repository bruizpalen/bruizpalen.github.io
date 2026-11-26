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
  heroImage: "img/perfil/portada.jpg",            // foto de fondo de la portada, p. ej. "img/portada.jpg"
  portrait: "img/perfil/berta-lab.jpg",   // tu foto para "Sobre mí" (pantalla, notas y pizarra difuminadas)
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
    { name: { es: "Inglés", en: "English", fr: "Anglais" }, level: { es: "C1", en: "C1", fr: "C1" } },
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
      photos: [
        { img: "img/proyectos/01-doctorado/probetas-tenacidad.jpg", cap: { es: "Probetas de tenacidad a la fractura pulidas", en: "Polished fracture toughness specimens", fr: "Éprouvettes de ténacité à la rupture polies" } },
        { img: "img/proyectos/01-doctorado/traccion-criostato.jpg", cap: { es: "Probeta de tracción con extensómetro en el criostato", en: "Tensile specimen with extensometer in the cryostat", fr: "Éprouvette de traction avec extensomètre dans le cryostat" } },
        { img: "img/proyectos/01-doctorado/criostato.mov", cap: { es: "Criostato tras un ensayo a temperatura criogénica", en: "Cryostat after a cryogenic test", fr: "Cryostat après un essai cryogénique" } },
        { img: "img/proyectos/01-doctorado/forja.webp", cap: { es: "Forja en un proveedor de piezas forjadas", en: "Forging at a forging supplier", fr: "Forgeage chez un fournisseur" } },
        { img: "img/proyectos/01-doctorado/ebsd-p506.jpg", cap: { es: "Mapa EBSD", en: "EBSD map", fr: "Carte EBSD" } }

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
      photos: [
        { img: "img/proyectos/02-care/traccion-polimero.jpg", cap: { es: "Tracción de polímero de cable envejecido", en: "Tensile test of an aged cable polymer", fr: "Traction d’un polymère de câble vieilli" } },
        { img: "img/proyectos/02-care/traccion-aislante.mov", cap: { es: "Ensayo de tracción de aislante de cable", en: "Tensile test of cable insulation", fr: "Essai de traction d’isolant de câble" } },
        { img: "img/proyectos/02-care/muestras-irradiacion.jpg", cap: { es: "Muestras preparadas para irradiación", en: "Samples prepared for irradiation", fr: "Échantillons préparés pour l’irradiation" } },
        { img: "img/proyectos/02-care/ftir-oxidacion.jpg", cap: { es: "Espectros FTIR antes y después del envejecimiento (2 MGy): bandas de oxidación O–H y C=O", en: "FTIR spectra before and after ageing (2 MGy): O–H and C=O oxidation bands", fr: "Spectres FTIR avant et après vieillissement (2 MGy) : bandes d’oxydation O–H et C=O" } },
        { img: "img/proyectos/02-care/depositos-superficie.jpg", cap: { es: "Depósitos en la superficie de la cubierta tras la irradiación", en: "Deposits on the sheath surface after irradiation", fr: "Dépôts à la surface de la gaine après irradiation" } },
        { img: "img/proyectos/02-care/alargamiento-dosis.jpg", cap: { es: "Alargamiento a rotura frente a dosis para las distintas condiciones de envejecimiento", en: "Elongation at break vs dose for the different ageing conditions", fr: "Allongement à la rupture en fonction de la dose pour les différentes conditions de vieillissement" } },
        { img: "img/proyectos/02-care/oit-dosis.jpg", cap: { es: "Tiempo de inducción a la oxidación (OIT, DSC) antes y después de irradiar a 100 kGy", en: "Oxidation induction time (OIT, DSC) before and after irradiation to 100 kGy", fr: "Temps d’induction à l’oxydation (OIT, DSC) avant et après irradiation à 100 kGy" } },
        { img: "img/proyectos/02-care/oit-alargamiento.jpg", cap: { es: "Correlación entre OIT y alargamiento a rotura", en: "Correlation between OIT and elongation at break", fr: "Corrélation entre OIT et allongement à la rupture" } },
        { img: "img/proyectos/02-care/ensayo-mancuerna.jpg", cap: { es: "Ensayo de tracción de una probeta de aislante con extensómetro de brazos", en: "Tensile test of an insulation specimen with a clip-on arm extensometer", fr: "Essai de traction d’une éprouvette d’isolant avec extensomètre à bras" } },
        { img: "img/proyectos/02-care/probeta-mancuerna.jpg", cap: { es: "Probeta halterio preparada para el ensayo", en: "Dumbbell specimen prepared for testing", fr: "Éprouvette haltère préparée pour l’essai" } },
        { img: "img/proyectos/02-care/traccion-dosis.jpg", cap: { es: "Curvas tensión-deformación de una cubierta a dosis crecientes (0 Gy – 2 MGy)", en: "Stress–strain curves of a sheath at increasing doses (0 Gy – 2 MGy)", fr: "Courbes contrainte-déformation d’une gaine à doses croissantes (0 Gy – 2 MGy)" } },
        { img: "img/proyectos/02-care/muestra-crisol.jpg", cap: { es: "Muestra de polímero en su crisol para la medida de OIT por DSC", en: "Polymer sample in its crucible for OIT measurement by DSC", fr: "Échantillon de polymère dans son creuset pour la mesure d’OIT par DSC" } },
        { img: "img/proyectos/02-care/oit-metodo-tangente.jpg", cap: { es: "Cálculo del OIT por el método de la tangente", en: "OIT calculation by the tangent method", fr: "Calcul de l’OIT par la méthode de la tangente" } }
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
      photos: [
        { img: "img/proyectos/03-practicas-cern/hidroconformado.jpg", cap: { es: "Tubo de Cu-OFE y pieza hidroconformada", en: "Cu-OFE tube and hydroformed part", fr: "Tube de Cu-OFE et pièce hydroformée" } },
        { img: "img/proyectos/03-practicas-cern/microestructura.jpg", cap: { es: "Microestructura del Cu-OFE (microscopía óptica)", en: "Cu-OFE microstructure (optical microscopy)", fr: "Microstructure du Cu-OFE (microscopie optique)" } },
        { img: "img/proyectos/03-practicas-cern/fractura-traccion.jpg", cap: { es: "Fractura de una probeta de tracción de Cu-OFE", en: "Fracture of a Cu-OFE tensile specimen", fr: "Rupture d’une éprouvette de traction en Cu-OFE" } }
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
      photos: [
        { img: "img/proyectos/04-tfm-tial/nanoindentacion-colonia.jpg", cap: { es: "Matriz de nanoindentaciones sobre una colonia laminar (SEM)", en: "Nanoindentation array across a lamellar colony (SEM)", fr: "Matrice de nanoindentations sur une colonie lamellaire (MEB)" } },
        { img: "img/proyectos/04-tfm-tial/nanoindentacion-laminas-350c.jpg", cap: { es: "Nanoindentaciones a 350 °C sobre láminas γ/α₂ (SEM)", en: "Nanoindentations at 350 °C on γ/α₂ lamellae (SEM)", fr: "Nanoindentations à 350 °C sur des lamelles γ/α₂ (MEB)" } },
        { img: "img/proyectos/04-tfm-tial/nanoindentacion-granos-350c.jpg", cap: { es: "Nanoindentaciones a 350 °C sobre granos γ y colonias laminares (SEM)", en: "Nanoindentations at 350 °C on γ grains and lamellar colonies (SEM)", fr: "Nanoindentations à 350 °C sur des grains γ et des colonies lamellaires (MEB)" } },
        { img: "img/proyectos/04-tfm-tial/tem-laminas.jpg", cap: { es: "Láminas γ/α₂ en γ-TiAl (TEM, campo claro)", en: "γ/α₂ lamellae in γ-TiAl (TEM, bright field)", fr: "Lamelles γ/α₂ dans γ-TiAl (MET, champ clair)" } },
        { img: "img/proyectos/04-tfm-tial/tem-colonias.jpg", cap: { es: "Colonias laminares en γ-TiAl (TEM, campo claro)", en: "Lamellar colonies in γ-TiAl (TEM, bright field)", fr: "Colonies lamellaires dans γ-TiAl (MET, champ clair)" } },
        { img: "img/proyectos/04-tfm-tial/tem-difraccion.jpg", cap: { es: "Patrón de difracción de electrones (TEM)", en: "Electron diffraction pattern (TEM)", fr: "Cliché de diffraction électronique (MET)" } },
        { img: "img/proyectos/04-tfm-tial/grieta-relajacion.jpg", cap: { es: "Grieta tras un ensayo de relajación de tensiones en compresión (SEM)", en: "Crack after a compressive stress-relaxation test (SEM)", fr: "Fissure après un essai de relaxation de contraintes en compression (MEB)" } },
        { img: "img/proyectos/04-tfm-tial/probetas-encapsuladas.jpg", cap: { es: "Probetas encapsuladas en cuarzo antes del tratamiento térmico", en: "Specimens sealed in quartz before heat treatment", fr: "Éprouvettes encapsulées sous quartz avant traitement thermique" } }
      ]
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
        es: ["Identificación de islas de austenita retenida en aceros inoxidables martensíticos de temple y partición combinando AFM y EBSD.", "Matrices de nanoindentación para medir la respuesta mecánica local de la martensita y la austenita retenida."],
        en: ["Identified retained austenite islands in quenching and partitioning martensitic stainless steels by combining AFM and EBSD.", "Nanoindentation arrays to measure the local mechanical response of martensite and retained austenite."],
        fr: ["Identification d’îlots d’austénite résiduelle dans des aciers inoxydables martensitiques trempés et partitionnés en combinant AFM et EBSD.", "Matrices de nanoindentation pour mesurer la réponse mécanique locale de la martensite et de l’austénite résiduelle."]
      },
      photos: [
        { img: "img/proyectos/05-qp-aceros/ebsd-austenita-1.jpg", cap: { es: "Mapa de fases EBSD: austenita retenida en verde", en: "EBSD phase map: retained austenite in green", fr: "Carte de phases EBSD : austénite résiduelle en vert" } },
        { img: "img/proyectos/05-qp-aceros/ebsd-austenita-2.jpg", cap: { es: "Austenita retenida en otra zona de la misma muestra (EBSD)", en: "Retained austenite in another area of the same sample (EBSD)", fr: "Austénite résiduelle dans une autre zone du même échantillon (EBSD)" } },
        { img: "img/proyectos/05-qp-aceros/nanoindentacion.jpg", cap: { es: "Matriz de nanoindentaciones vista por AFM", en: "Nanoindentation array imaged by AFM", fr: "Matrice de nanoindentations observée par AFM" } }
      ]
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
        es: ["Ensayos de compresión a distintas temperaturas y velocidades de deformación, y selección de tratamientos térmicos, técnicas de caracterización y entornos de procesado.", "Caracterización por SEM, TEM y dureza Vickers de las probetas ensayadas para relacionar el agrietamiento con la microestructura."],
        en: ["Performed compression tests at different temperatures and strain rates, and selected heat treatments, characterisation techniques and processing environments.", "SEM, TEM and Vickers hardness characterisation of the tested specimens to relate cracking to the microstructure."],
        fr: ["Essais de compression à différentes températures et vitesses de déformation, et choix des traitements thermiques, des techniques de caractérisation et des environnements d’élaboration.", "Caractérisation MEB, MET et dureté Vickers des éprouvettes testées pour relier la fissuration à la microstructure."]
      },
      photos: [
        { img: "img/proyectos/06-beca-tial/grieta-probeta-rt.jpg", cap: { es: "Grieta que atraviesa una probeta comprimida a temperatura ambiente (SEM, BSE)", en: "Crack running through a specimen compressed at room temperature (SEM, BSE)", fr: "Fissure traversant une éprouvette comprimée à température ambiante (MEB, BSE)" } },
        { img: "img/proyectos/06-beca-tial/grieta-laminas-rt.jpg", cap: { es: "Grietas en colonias laminares tras compresión a temperatura ambiente (SEM)", en: "Cracks in lamellar colonies after compression at room temperature (SEM)", fr: "Fissures dans des colonies lamellaires après compression à température ambiante (MEB)" } },
        { img: "img/proyectos/06-beca-tial/microestructura-laminar.jpg", cap: { es: "Microestructura laminar tras 1300 °C/2 h, temple y envejecimiento a 700 °C (SEM)", en: "Lamellar microstructure after 1300 °C/2 h, quenching and ageing at 700 °C (SEM)", fr: "Microstructure lamellaire après 1300 °C/2 h, trempe et vieillissement à 700 °C (MEB)" } },
        { img: "img/proyectos/06-beca-tial/espaciado-laminar.jpg", cap: { es: "Medida del espaciado laminar (SEM, ×8000)", en: "Lamellar spacing measurement (SEM, ×8000)", fr: "Mesure de l’espacement lamellaire (MEB, ×8000)" } },
        { img: "img/proyectos/06-beca-tial/laminas-700c-5000x.jpg", cap: { es: "Láminas γ/α₂ tras compresión a 700 °C (SEM, ×5000)", en: "γ/α₂ lamellae after compression at 700 °C (SEM, ×5000)", fr: "Lamelles γ/α₂ après compression à 700 °C (MEB, ×5000)" } },
        { img: "img/proyectos/06-beca-tial/tem-haadf-laminas.jpg", cap: { es: "Láminas γ/α₂ en una probeta comprimida (TEM, HAADF)", en: "γ/α₂ lamellae in a compressed specimen (TEM, HAADF)", fr: "Lamelles γ/α₂ dans une éprouvette comprimée (MET, HAADF)" } },
        { img: "img/proyectos/06-beca-tial/tem-haadf-detalle.jpg", cap: { es: "Detalle de las láminas a mayor aumento (TEM, HAADF)", en: "Lamellae at higher magnification (TEM, HAADF)", fr: "Lamelles à plus fort grossissement (MET, HAADF)" } }
      ]
    }
  ],

  /* ---------- Competencias (antes «Técnicas») ----------
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
    { cat: "mec", img: "img/tecnicas/ensayos-mecanicos/criogenicos.jpg", title: { es: "Ensayos criogénicos", en: "Cryogenic testing", fr: "Essais cryogéniques" },
      text: { es: "Tenacidad a la fractura y velocidad de crecimiento de grieta por fatiga desde temperatura ambiente hasta temperatura criogénica; tracción en helio líquido (4.2 K) y nitrógeno líquido (77 K).", en: "Fracture toughness and fatigue crack growth rate testing from room to cryogenic temperatures; tensile testing in liquid helium (4.2 K) and liquid nitrogen (77 K).", fr: "Ténacité à la rupture et vitesse de propagation de fissure en fatigue de la température ambiante aux températures cryogéniques ; traction dans l’hélium liquide (4,2 K) et l’azote liquide (77 K)." } },
    { cat: "mec", img: "img/tecnicas/ensayos-mecanicos/traccion-compresion.jpg", title: { es: "Tracción, compresión, cortadura y flexión", en: "Tensile, compression, shear and bending", fr: "Traction, compression, cisaillement et flexion" },
      text: { es: "Desde temperatura criogénica en helio líquido (4.2 K) y nitrógeno líquido (77 K), pasando por temperatura ambiente, hasta alta temperatura.", en: "From cryogenic temperatures in liquid helium (4.2 K) and liquid nitrogen (77 K) through room temperature to high temperatures.", fr: "Des températures cryogéniques dans l’hélium liquide (4,2 K) et l’azote liquide (77 K), en passant par la température ambiante, jusqu’aux hautes températures." } },
    { cat: "mec", img: "img/tecnicas/ensayos-mecanicos/relajacion-tensiones.jpg", title: { es: "Relajación de tensiones", en: "Stress relaxation", fr: "Relaxation de contraintes" },
      text: { es: "Compresión y relajación de tensiones a alta temperatura en simulador termomecánico Gleeble, para obtener volúmenes de activación.", en: "High-temperature compression and stress-relaxation testing on a Gleeble thermomechanical simulator, to derive activation volumes.", fr: "Compression et relaxation de contraintes à haute température sur simulateur thermomécanique Gleeble, pour déterminer les volumes d’activation." } },
    { cat: "mec", img: "img/tecnicas/ensayos-mecanicos/pip.jpg", title: { es: "PIP", en: "PIP", fr: "PIP" },
      text: { es: "Ensayos PIP (Profilometry-based Indentation Plastometry) a temperatura ambiente y alta temperatura: curvas tensión–deformación a partir de una indentación.", en: "PIP testing (Profilometry-based Indentation Plastometry) at room and high temperature: stress–strain curves from an indentation.", fr: "Essais PIP (Profilometry-based Indentation Plastometry) à température ambiante et à haute température : courbes contrainte–déformation à partir d’une indentation." } },
    { cat: "mec", img: "img/tecnicas/ensayos-mecanicos/extensometria.jpg", title: { es: "Extensometría y DIC", en: "Extensometry and DIC", fr: "Extensométrie et DIC" },
      text: { es: "Extensometría de contacto y óptica, incluida la correlación digital de imágenes (DIC).", en: "Contact and optical extensometry, including digital image correlation (DIC).", fr: "Extensométrie de contact et optique, y compris la corrélation d’images numériques (DIC)." } },
    { cat: "mec", img: "img/tecnicas/ensayos-mecanicos/nanoindentacion.jpg", title: { es: "Dureza y nanoindentación", en: "Hardness and nanoindentation", fr: "Dureté et nanoindentation" },
      text: { es: "Ensayos de dureza; nanoindentación a distintas temperaturas, incluida alta temperatura, en intermetálicos γ-TiAl.", en: "Hardness testing; nanoindentation at different temperatures, including high temperature, on γ-TiAl intermetallics.", fr: "Essais de dureté ; nanoindentation à différentes températures, y compris à haute température, sur intermétalliques γ-TiAl." } },
    { cat: "mec", img: "img/tecnicas/ensayos-mecanicos/procedimientos.jpg", title: { es: "Procedimientos de ensayo", en: "Test procedures", fr: "Procédures d’essai" },
      text: { es: "Desarrollo de procedimientos para ensayos criogénicos y para polímeros de cable envejecidos (CARE).", en: "Development of procedures for cryogenic testing and for aged cable polymers (CARE).", fr: "Développement de procédures pour les essais cryogéniques et les polymères de câbles vieillis (CARE)." } },
    { cat: "mic", img: "img/tecnicas/microscopia/optica.jpg", title: { es: "Microscopía óptica", en: "Optical microscopy", fr: "Microscopie optique" },
      text: { es: "Preparación metalográfica y caracterización microestructural.", en: "Metallographic preparation and microstructural characterisation.", fr: "Préparation métallographique et caractérisation microstructurale." } },
    { cat: "mic", img: "img/tecnicas/microscopia/sem-eds.jpg", title: { es: "SEM + EDS", en: "SEM + EDS", fr: "MEB + EDS" },
      text: { es: "Microestructuras, superficies de fractura y análisis químico local.", en: "Microstructures, fracture surfaces and local chemical analysis.", fr: "Microstructures, faciès de rupture et analyse chimique locale." } },
    { cat: "mic", img: "img/tecnicas/microscopia/ebsd.jpg", title: { es: "EBSD", en: "EBSD", fr: "EBSD" },
      text: { es: "Mapas de orientación, tamaño de grano y fases.", en: "Orientation maps, grain size and phases.", fr: "Cartes d’orientation, taille de grain et phases." } },
    { cat: "mic", img: "img/tecnicas/microscopia/tem.jpg", title: { es: "TEM", en: "TEM", fr: "MET" },
      text: { es: "Caracterización de aceros austeníticos e intermetálicos γ-TiAl.", en: "Characterisation of austenitic steels and γ-TiAl intermetallics.", fr: "Caractérisation d’aciers austénitiques et d’intermétalliques γ-TiAl." } },
    { cat: "mic", img: "img/tecnicas/microscopia/afm.jpg", title: { es: "AFM", en: "AFM", fr: "AFM" },
      text: { es: "Combinado con EBSD para detectar islas de austenita retenida en aceros de temple y partición.", en: "Combined with EBSD to detect retained austenite islands in quenching and partitioning steels.", fr: "Combinée à l’EBSD pour détecter des îlots d’austénite résiduelle dans des aciers trempés et partitionnés." } },
    { cat: "mic", img: "img/tecnicas/microscopia/fib.jpg", title: { es: "Análisis FIB", en: "FIB analysis", fr: "Analyse FIB" },
      text: { es: "Análisis de cortes FIB: profundidad de defectos y espesor de capas de óxido por corrosión.", en: "Analysis of FIB cross-sections: defect depth and corrosion oxide layer thickness.", fr: "Analyse de coupes FIB : profondeur des défauts et épaisseur des couches d’oxyde de corrosion." } },
    { cat: "mic", img: "img/tecnicas/microscopia/xrd.jpg", title: { es: "XRD", en: "XRD", fr: "DRX" },
      text: { es: "Identificación de fases.", en: "Phase identification.", fr: "Identification des phases." } },
    { cat: "mic", img: "img/tecnicas/microscopia/dsc-ftir.jpg", title: { es: "Análisis térmico y químico · DSC (OIT) · FTIR", en: "Thermal and chemical analysis · DSC (OIT) · FTIR", fr: "Analyse thermique et chimique · DSC (OIT) · FTIR" },
      text: { es: "Calorimetría diferencial de barrido (DSC), determinación del tiempo de inducción a la oxidación (OIT) y espectroscopía FTIR para la caracterización de polímeros.", en: "Differential scanning calorimetry (DSC), oxidation induction time (OIT) determination and FTIR spectroscopy for polymer characterisation.", fr: "Calorimétrie différentielle à balayage (DSC), détermination du temps d’induction à l’oxydation (OIT) et spectroscopie FTIR pour la caractérisation des polymères." } },
    { cat: "mic", img: "img/tecnicas/microscopia/analisis-imagen.jpg", title: { es: "Análisis de imagen", en: "Image analysis", fr: "Analyse d’images" },
      text: { es: "Análisis automatizado: tamaño de partícula de polvo pulvimetalúrgico y porosidad en uniones por brazing.", en: "Automated analysis: powder particle size statistics and porosity in brazed joints.", fr: "Analyse automatisée : taille de particules de poudres et porosité des assemblages brasés." } },
    { cat: "end", img: "img/tecnicas/end/inspeccion-visual.jpg", title: { es: "VT · RT · PT · CT · UT", en: "VT · RT · PT · CT · UT", fr: "VT · RT · PT · CT · UT" },
      text: { es: "Especificación e interpretación de inspecciones visuales (VT), radiográficas (RT), por líquidos penetrantes (PT), por ultrasonidos (UT) y por tomografía computarizada (CT) para evaluar la integridad del material. Para cualificación de soldaduras, brazing, porosidad interna, defectos de procesado y llenado de piezas de inyección.", en: "Specification and interpretation of visual (VT), radiographic (RT), penetrant (PT), ultrasonic (UT) and computed tomography (CT) inspections to assess material soundness. For weld qualification, brazing, internal porosity, processing defects and filling of injection-moulded parts.", fr: "Spécification et interprétation de contrôles visuels (VT), radiographiques (RT), par ressuage (PT), par ultrasons (UT) et par tomographie (CT) pour évaluer la santé matière. Pour la qualification de soudures, le brasage, la porosité interne, les défauts d’élaboration et le remplissage de pièces injectées." } },
    { cat: "end", img: "img/tecnicas/end/traxx.jpg", title: { es: "Precarga en tornillos por ultrasonidos (TRAXX)", en: "Ultrasonic bolt preload measurement (TRAXX)", fr: "Mesure de précharge des boulons par ultrasons (TRAXX)" },
      text: { es: "Medida por ultrasonidos de la carga axial en tornillos con el sistema TRAXX: calibración y verificación de que un par de apriete dado aplica la fuerza axial prevista.", en: "Ultrasonic measurement of the axial load in bolts with the TRAXX system: calibration and verification that a given tightening torque applies the intended axial force.", fr: "Mesure par ultrasons de l’effort axial dans les boulons avec le système TRAXX : étalonnage et vérification qu’un couple de serrage donné applique l’effort axial prévu." } },
    { cat: "fa", img: "img/tecnicas/analisis-fallo/analisis-fallo.jpg", title: { es: "Análisis de fallo", en: "Failure analysis", fr: "Analyse de défaillance" },
      text: { es: "Combinando resultados microestructurales, mecánicos y de END para encontrar la causa raíz. Pensamiento analítico y resolución eficaz de problemas.", en: "Combining microstructural, mechanical and NDT results to find the root cause. Analytical thinking and effective problem-solving.", fr: "En combinant résultats microstructuraux, mécaniques et CND pour trouver la cause racine. Esprit d’analyse et résolution efficace de problèmes." } },
    { cat: "fa", img: "img/tecnicas/analisis-fallo/soldaduras-brazing.jpg", title: { es: "Cualificación de soldaduras y brazing", en: "Weld and brazing qualification", fr: "Qualification de soudures et de brasures" },
      text: { es: "Evaluación de defectos y de la integridad del material en uniones soldadas y por brazing.", en: "Defect assessment and material soundness of welded and brazed joints.", fr: "Évaluation des défauts et de la santé matière des assemblages soudés et brasés." } },
    { cat: "sim", img: "img/tecnicas/diseno-simulacion/catia-adaptador.jpg", title: { es: "Diseño · CATIA · SolidWorks · Solid Edge", en: "Design · CATIA · SolidWorks · Solid Edge", fr: "Conception · CATIA · SolidWorks · Solid Edge" },
      text: { es: "Diseño de probetas, utillajes y herramientas de ensayo con CATIA, SolidWorks y Solid Edge.", en: "Design of test specimens, fixtures and tooling with CATIA, SolidWorks and Solid Edge.", fr: "Conception d’éprouvettes, d’outillages et de montages d’essai avec CATIA, SolidWorks et Solid Edge." } },
    { cat: "sim", img: "img/tecnicas/diseno-simulacion/thermocalc.jpg", title: { es: "Abaqus · Thermo-Calc", en: "Abaqus · Thermo-Calc", fr: "Abaqus · Thermo-Calc" },
      text: { es: "Elementos finitos y termodinámica computacional.", en: "Finite elements and computational thermodynamics.", fr: "Éléments finis et thermodynamique numérique." } },
    { cat: "org", img: "img/tecnicas/campanas/irradiacion.jpg", title: { es: "Campañas de ensayo e irradiación", en: "Test and irradiation campaigns", fr: "Campagnes d’essais et d’irradiation" },
      text: { es: "Planificación, preparación y ejecución, diseño de muestreo y de montajes, y externalización de contratos de ensayo.", en: "Planning, preparation and execution, design of sampling and set-ups, and outsourcing of testing contracts.", fr: "Planification, préparation et exécution, conception de l’échantillonnage et des montages, et externalisation de contrats d’essais." } },
    { cat: "org", img: "img/tecnicas/campanas/colaboraciones.jpg", title: { es: "Colaboraciones", en: "Collaborations", fr: "Collaborations" },
      text: { es: "Con socios, instalaciones de ensayo e industria: ITER, F4E y forjadores de metales.", en: "With partners, test facilities and industry: ITER, F4E and metal forging suppliers.", fr: "Avec des partenaires, des installations d’essai et l’industrie : ITER, F4E et des forgerons." } },
    { cat: "org", img: "", title: { es: "Cualificación de proveedores", en: "Supplier qualification", fr: "Qualification de fournisseurs" },
      text: { es: "Cualificación de proveedores y de procesos de fabricación.", en: "Qualification of suppliers and manufacturing processes.", fr: "Qualification de fournisseurs et de procédés de fabrication." } },
    { cat: "com", img: "img/tecnicas/comunicacion/presentacion-icmc2026.jpg", title: { es: "Informes y comunicación", en: "Reporting and communication", fr: "Rapports et communication" },
      text: { es: "Redacción de informes técnicos y adaptación de resultados experimentales a equipos de proyecto, socios industriales y comunidad científica.", en: "Technical reporting and translation of experimental results for project teams, industrial partners and the scientific community.", fr: "Rédaction de rapports techniques et adaptation des résultats expérimentaux aux équipes projet, partenaires industriels et à la communauté scientifique." } },
    { cat: "prog", img: "img/tecnicas/software/tensile-viewer.jpg", title: { es: "Planificación experimental y análisis de datos · Python", en: "Experimental planning and data analysis · Python", fr: "Planification expérimentale et analyse de données · Python" },
      text: { es: "Planificación de ensayos y desarrollo de protocolos; procesado, análisis e interpretación de datos experimentales con Python.", en: "Test planning and protocol development; processing, analysis and interpretation of experimental data using Python.", fr: "Planification des essais et développement de protocoles ; traitement, analyse et interprétation des données expérimentales avec Python." } },
    { cat: "prog", img: "img/tecnicas/software/pip-viewer.jpg", title: { es: "Python · pandas · NumPy · Matplotlib · seaborn", en: "Python · pandas · NumPy · Matplotlib · seaborn", fr: "Python · pandas · NumPy · Matplotlib · seaborn" },
      text: { es: "Análisis y visualización de datos.", en: "Data analysis and visualisation.", fr: "Analyse et visualisation de données." } },
    { cat: "prog", img: "img/tecnicas/software/excel-registro.jpg", title: { es: "C · Visual Basic", en: "C · Visual Basic", fr: "C · Visual Basic" },
      text: { es: "C; nociones de Visual Basic.", en: "C; basic Visual Basic.", fr: "C ; notions de Visual Basic." } },
    { cat: "prog", img: "img/tecnicas/software/ia-generativa.jpg", title: { es: "IA generativa", en: "Generative AI tools", fr: "IA générative" },
      text: { es: "Herramientas de IA generativa como apoyo a la programación y al análisis de datos.", en: "Generative AI tools for coding support and data analysis.", fr: "Outils d’IA générative en appui à la programmation et à l’analyse de données." } },
    { cat: "prog", img: "img/tecnicas/software/desarrollo-web.jpg", title: { es: "Desarrollo web · HTML · CSS · JavaScript", en: "Web development · HTML · CSS · JavaScript", fr: "Développement web · HTML · CSS · JavaScript" },
      text: { es: "Bootcamp full-stack de 18 semanas.", en: "18-week full-stack bootcamp.", fr: "Bootcamp full-stack de 18 semaines." } }
  ],

  /* ---------- Casos de estudio ----------
     Cada caso tiene su propia página con Contexto · Cómo lo abordé · Resultado */
  cases: [
    {
      title: { es: "Superaleación 718 a 4 K: el tratamiento térmico decide la tenacidad", en: "Superalloy 718 at 4 K: heat treatment decides toughness", fr: "Superalliage 718 à 4 K : le traitement thermique décide de la ténacité" },
      context: {
        es: "Los imanes de alto campo para fusión y física de partículas necesitan materiales estructurales más resistentes que el 316LN a temperatura criogénica. La superaleación de níquel 718 es candidata, pero sus tratamientos térmicos se diseñaron para aeronáutica y alta temperatura, no para 4 K.",
        en: "High-field magnets for fusion and particle physics need structural materials stronger than 316LN at cryogenic temperature. Nickel superalloy 718 is a candidate, but its heat treatments were designed for aeronautics and high temperature, not for 4 K.",
        fr: "Les aimants à haut champ pour la fusion et la physique des particules ont besoin de matériaux structurels plus résistants que le 316LN à température cryogénique. Le superalliage de nickel 718 est candidat, mais ses traitements thermiques ont été conçus pour l’aéronautique et la haute température, pas pour 4 K."
      },
      approach: {
        es: "Comparé dos barras forjadas de 718 con composición similar y dos tratamientos térmicos distintos: ASTM B637 (aeronáutica) y API 6A CRA (petróleo y gas).\n• Ensayos de tracción a 293 K, 77 K y 4 K, y de tenacidad a la fractura a 293 K y 4 K.\n• Caracterización por SEM/EDS, XRD y tamaño de grano para identificar la fase δ (Ni₃Nb) y los carbonitruros de Nb/Ti.",
        en: "I compared two forged 718 bars with similar composition and two different heat treatments: ASTM B637 (aerospace) and API 6A CRA (oil and gas).\n• Tensile tests at 293 K, 77 K and 4 K, and fracture toughness tests at 293 K and 4 K.\n• SEM/EDS, XRD and grain size characterisation to identify δ-phase (Ni₃Nb) and Nb/Ti carbonitrides.",
        fr: "J’ai comparé deux barres forgées en 718 de composition similaire avec deux traitements thermiques différents : ASTM B637 (aéronautique) et API 6A CRA (pétrole et gaz).\n• Essais de traction à 293 K, 77 K et 4 K, et de ténacité à la rupture à 293 K et 4 K.\n• Caractérisation MEB/EDS, DRX et taille de grain pour identifier la phase δ (Ni₃Nb) et les carbonitrures de Nb/Ti."
      },
      result: {
        es: "Ambas condiciones dan una resistencia muy alta a 4 K (Rp0.2 de 1165–1300 MPa) con más del 25 % de alargamiento.\nLa diferencia está en la tenacidad: en la condición ASTM cae de 166 a 58 MPa·√m entre 293 K y 4 K, por una red continua de fase δ en los bordes de grano. La condición API alcanza 172 MPa·√m a 4 K, casi el triple.\nAhora se está optimizando el tratamiento de la composición ASTM tomando la microestructura API como referencia.\nPresentado en ICEC30/ICMC 2026.",
        en: "Both conditions give very high strength at 4 K (Rp0.2 of 1165–1300 MPa) with more than 25 % elongation.\nThe difference is toughness: in the ASTM condition it drops from 166 to 58 MPa·√m between 293 K and 4 K, due to a continuous δ-phase network on the grain boundaries. The API condition reaches 172 MPa·√m at 4 K, almost three times higher.\nThe ASTM heat treatment is now being optimised using the API microstructure as a reference.\nPresented at ICEC30/ICMC 2026.",
        fr: "Les deux conditions donnent une résistance très élevée à 4 K (Rp0.2 de 1165–1300 MPa) avec plus de 25 % d’allongement.\nLa différence tient à la ténacité : dans la condition ASTM, elle chute de 166 à 58 MPa·√m entre 293 K et 4 K, à cause d’un réseau continu de phase δ aux joints de grains. La condition API atteint 172 MPa·√m à 4 K, presque trois fois plus.\nLe traitement de la composition ASTM est en cours d’optimisation en prenant la microstructure API comme référence.\nPrésenté à ICEC30/ICMC 2026."
      },
      photos: [
        { img: "img/casos/superaleacion-718/fase-delta.jpg", cap: { es: "Fase δ en agujas en los bordes de grano (SEM, condición ASTM)", en: "Needle-like δ-phase on grain boundaries (SEM, ASTM condition)", fr: "Phase δ aciculaire aux joints de grains (MEB, condition ASTM)" } },
        { img: "img/casos/superaleacion-718/carburos-delta-astm.jpg", cap: { es: "Carbonitruros de Nb/Ti y fase δ en un borde de grano (SEM, condición ASTM)", en: "Nb/Ti carbonitrides and δ-phase at a grain boundary (SEM, ASTM condition)", fr: "Carbonitrures de Nb/Ti et phase δ à un joint de grains (MEB, condition ASTM)" } },
        { img: "img/casos/superaleacion-718/granos-astm.jpg", cap: { es: "Estructura de grano de la condición ASTM (SEM)", en: "Grain structure of the ASTM condition (SEM)", fr: "Structure de grains de la condition ASTM (MEB)" } },
        { img: "img/casos/superaleacion-718/carbonitruros-astm.jpg", cap: { es: "Carbonitruros alineados en la barra forjada (SEM, condición ASTM)", en: "Aligned carbonitrides in the forged bar (SEM, ASTM condition)", fr: "Carbonitrures alignés dans la barre forgée (MEB, condition ASTM)" } },
        { img: "img/casos/superaleacion-718/microestructura-api.jpg", cap: { es: "Microestructura de la condición API (SEM)", en: "Microstructure of the API condition (SEM)", fr: "Microstructure de la condition API (MEB)" } }
      ]
    },
    {
      title: { es: "Acero P506 de alto Mn y alto N como material estructural criogénico", en: "High-Mn, high-N P506 steel as a cryogenic structural material", fr: "Acier P506 à haut Mn et haut N comme matériau structurel cryogénique" },
      context: {
        es: "El P506 (aprox. 19Cr-11Ni-12Mn-0,33N) se desarrolló para las pantallas de haz del LHC por su baja permeabilidad magnética, y se había usado sobre todo en tubos y chapas. La pregunta era si sirve como forja grande para estructuras criogénicas, como alternativa al 316LN.",
        en: "P506 (approx. 19Cr-11Ni-12Mn-0.33N) was developed for the LHC beam screens because of its low magnetic permeability, and had mainly been used as pipes and strips. The question was whether it works as a large forging for cryogenic structures, as an alternative to 316LN.",
        fr: "Le P506 (env. 19Cr-11Ni-12Mn-0,33N) a été développé pour les écrans de faisceau du LHC pour sa faible perméabilité magnétique, et a surtout été utilisé en tubes et en feuillards. La question était de savoir s’il convient en grosse pièce forgée pour des structures cryogéniques, comme alternative au 316LN."
      },
      approach: {
        es: "Caracterización completa de dos barras de 84 mm de diámetro:\n• Ultrasonidos, composición (OES), tamaño de grano (ASTM E112), SEM, EBSD, EDS y XRD en distintas posiciones de la barra.\n• Dureza Vickers y nanoindentación.\n• Tracción a temperatura ambiente, 77 K y 4 K (ISO 6892-4) y tenacidad a la fractura a 4 K (ASTM E1820 y JETT).",
        en: "Full characterisation of two 84 mm diameter bars:\n• Ultrasonic testing, composition (OES), grain size (ASTM E112), SEM, EBSD, EDS and XRD at different positions in the bar.\n• Vickers hardness and nanoindentation.\n• Tensile tests at room temperature, 77 K and 4 K (ISO 6892-4) and fracture toughness at 4 K (ASTM E1820 and JETT).",
        fr: "Caractérisation complète de deux barres de 84 mm de diamètre :\n• Ultrasons, composition (OES), taille de grain (ASTM E112), MEB, EBSD, EDS et DRX à différentes positions dans la barre.\n• Dureté Vickers et nanoindentation.\n• Traction à température ambiante, 77 K et 4 K (ISO 6892-4) et ténacité à la rupture à 4 K (ASTM E1820 et JETT)."
      },
      result: {
        es: "Límite elástico de 1400 MPa a 4 K (380 MPa a temperatura ambiente) y tenacidad KIC de 100–200 MPa·√m, con buena ductilidad a todas las temperaturas.\nLa propagación de grieta es inestable, y la microestructura dual (granos de 30 a 150 µm con agrupaciones de grano fino) parece contribuir. Una barra nueva, forjada y recocida, ya muestra una microestructura homogénea de unos 20 µm.\nPresentado en EUCAS 2025.",
        en: "Yield strength of 1400 MPa at 4 K (380 MPa at room temperature) and KIC fracture toughness of 100–200 MPa·√m, with good ductility at all temperatures.\nCrack propagation is unstable, and the dual microstructure (30 to 150 µm grains with clusters of fine grains) seems to contribute. A new forged and solution-annealed bar already shows a homogeneous microstructure of about 20 µm.\nPresented at EUCAS 2025.",
        fr: "Limite d’élasticité de 1400 MPa à 4 K (380 MPa à température ambiante) et ténacité KIC de 100–200 MPa·√m, avec une bonne ductilité à toutes les températures.\nLa propagation de fissure est instable, et la microstructure duale (grains de 30 à 150 µm avec des amas de grains fins) semble y contribuer. Une nouvelle barre forgée et recuite présente déjà une microstructure homogène d’environ 20 µm.\nPrésenté à EUCAS 2025."
      },
      photos: [
        { img: "img/casos/p506/beam-screen-lhc.jpg", cap: { es: "Pantallas de haz (beam screens) del LHC, la aplicación original del P506", en: "LHC beam screens, the original application of P506", fr: "Écrans de faisceau du LHC, l’application d’origine du P506" } },
        { img: "img/casos/p506/ebsd.jpg", cap: { es: "Mapa EBSD de la barra", en: "EBSD map of the bar", fr: "Carte EBSD de la barre" } },
        { img: "img/casos/p506/traccion-4k.jpg", cap: { es: "Curvas de tracción con serraciones a 4 K", en: "Tensile curves with serrations at 4 K", fr: "Courbes de traction avec serrations à 4 K" } },
        { img: "img/casos/p506/fractografia.jpg", cap: { es: "Superficie de fractura (SEM)", en: "Fracture surface (SEM)", fr: "Faciès de rupture (MEB)" } }
      ]
    },
    {
      title: { es: "Composites irradiados ensayados a 77 K", en: "Irradiated composites tested at 77 K", fr: "Composites irradiés testés à 77 K" },
      context: {
        es: "Tres laminados de fibra de vidrio (un G11 y dos laminados comerciales) se seleccionaron como aislamiento eléctrico de un componente de un reactor de fusión. Había que medir sus propiedades a tracción a 77 K después de irradiarlos, y los materiales rígidos e irradiados son difíciles de sujetar a temperatura criogénica.",
        en: "Three glass-fibre laminates (a G11 and two commercial laminates) were selected as electrical insulation for a fusion reactor component. Their tensile properties had to be measured at 77 K after irradiation, and stiff irradiated materials are hard to grip at cryogenic temperature.",
        fr: "Trois stratifiés en fibre de verre (un G11 et deux stratifiés commerciaux) ont été sélectionnés comme isolation électrique d’un composant de réacteur de fusion. Il fallait mesurer leurs propriétés en traction à 77 K après irradiation, et les matériaux rigides et irradiés sont difficiles à serrer à température cryogénique."
      },
      approach: {
        es: "Ensayos de tracción a 77 K en el criostato del CERN, con material irradiado a varias dosis.\n• Una solución de amarre para cada material: tacones del mismo material para el G11, tacones metálicos con adhesivo criogénico para el segundo laminado y mecanizado integrado para el tercero.\n• Las probetas de G11 deslizaban en las mordazas, así que esos ensayos se llevaron a Applus Laboratories, que tiene un método patentado para usar mordazas hidráulicas a temperatura criogénica.",
        en: "Tensile tests at 77 K in the CERN cryostat, on material irradiated to several doses.\n• A gripping solution for each material: tabs of the same material for G11, metal tabs with cryogenic adhesive for the second laminate, and integral machining for the third.\n• G11 specimens slipped in the grips, so those tests were moved to Applus Laboratories, which has a patented method for using hydraulic grips at cryogenic temperature.",
        fr: "Essais de traction à 77 K dans le cryostat du CERN, sur du matériau irradié à plusieurs doses.\n• Une solution de serrage par matériau : talons du même matériau pour le G11, talons métalliques avec adhésif cryogénique pour le deuxième stratifié et usinage intégré pour le troisième.\n• Les éprouvettes de G11 glissaient dans les mors, ces essais ont donc été transférés chez Applus Laboratories, qui dispose d’une méthode brevetée pour utiliser des mors hydrauliques à température cryogénique."
      },
      result: {
        es: "La mayoría de los materiales se ensayaron con éxito en el CERN, y el método de Applus resolvió el deslizamiento del G11. La campaña dio los datos necesarios para el diseño, gracias a la colaboración entre el CERN y Applus.\nPresentado en MATCOMP 2025.",
        en: "Most materials were tested successfully at CERN, and the Applus method solved the G11 slippage. The campaign delivered the data needed for design, through the collaboration between CERN and Applus.\nPresented at MATCOMP 2025.",
        fr: "La plupart des matériaux ont été testés avec succès au CERN, et la méthode d’Applus a résolu le glissement du G11. La campagne a fourni les données nécessaires à la conception, grâce à la collaboration entre le CERN et Applus.\nPrésenté à MATCOMP 2025."
      },
      photos: [
        { img: "img/casos/composites-irradiados/probetas-ensayadas.jpg", cap: { es: "Probetas de los tres laminados tras el ensayo, a distintas dosis", en: "Specimens of the three laminates after testing, at different doses", fr: "Éprouvettes des trois stratifiés après essai, à différentes doses" } },
        { img: "img/casos/composites-irradiados/amarre-criostato.jpg", cap: { es: "Probeta amarrada para el ensayo criogénico", en: "Specimen gripped for the cryogenic test", fr: "Éprouvette serrée pour l’essai cryogénique" } },
        { img: "img/casos/composites-irradiados/fractura.jpg", cap: { es: "Rotura de una probeta de composite", en: "Fracture of a composite specimen", fr: "Rupture d’une éprouvette composite" } }
      ]
    },
    {
      title: { es: "Defectos en un anillo nitrurado: ¿material base o recubrimiento?", en: "Defects on a nitrided ring: base material or coating?", fr: "Défauts sur un anneau nitruré : matériau de base ou revêtement ?" },
      context: {
        es: "En una pieza de un anillo nitrurado aparecieron defectos en la superficie superior; otra pieza del mismo lote estaba sana. Había que saber si los defectos venían del material base o de la capa nitrurada. La pieza llegó con la zona ya pulida y solo dos defectos se veían a simple vista.",
        en: "Defects appeared on the top surface of one piece of a nitrided ring; another piece from the same batch was sound. The question was whether the defects came from the base material or from the nitrided layer. The piece arrived with the area already polished and only two defects were visible to the naked eye.",
        fr: "Des défauts sont apparus sur la face supérieure d’une pièce d’un anneau nitruré ; une autre pièce du même lot était saine. Il fallait savoir si les défauts venaient du matériau de base ou de la couche nitrurée. La pièce est arrivée avec la zone déjà polie et seuls deux défauts étaient visibles à l’œil nu."
      },
      approach: {
        es: "• Ensayos no destructivos: inspección visual, líquidos penetrantes y metrología. Confirmaron los dos defectos y su posición, pero no su profundidad.\n• Extracción de una probeta por defecto mediante electroerosión (EDM).\n• Cortes con FIB y observación en SEM con EDS sobre el corte, y un pulido ligero de la segunda probeta para ver la capa nitrurada alrededor del defecto.",
        en: "• Non-destructive testing: visual inspection, penetrant testing and metrology. They confirmed both defects and their location, but not their depth.\n• One specimen extracted per defect by electrical discharge machining (EDM).\n• FIB cross-sections with SEM observation and EDS on the cut, plus light polishing of the second specimen to see the nitrided layer around the defect.",
        fr: "• Contrôles non destructifs : examen visuel, ressuage et métrologie. Ils ont confirmé les deux défauts et leur position, mais pas leur profondeur.\n• Prélèvement d’une éprouvette par défaut par électroérosion (EDM).\n• Coupes FIB avec observation MEB et EDS sur la coupe, et polissage léger de la seconde éprouvette pour voir la couche nitrurée autour du défaut."
      },
      result: {
        es: "Los defectos no son más profundos de lo que se ve en superficie. La capa nitrurada está intacta fuera del defecto y falta justo en él, sin señales de haberse eliminado mecánicamente. La zona del defecto no muestra deformación plástica sino un aspecto de solidificación «poroso», con Cl y S detectados por EDS.\nConclusión: eran defectos previos, probablemente con forma de grieta, que ya existían antes del nitrurado.",
        en: "The defects are no deeper than what is visible on the surface. The nitrided layer is intact away from the defect and missing right at it, with no sign of mechanical removal. The defect area shows no plastic deformation but a “porous”, solidification-like texture, with Cl and S detected by EDS.\nConclusion: they were pre-existing defects, probably crack-shaped, that were already there before nitriding.",
        fr: "Les défauts ne sont pas plus profonds que ce qui est visible en surface. La couche nitrurée est intacte hors du défaut et absente juste à son emplacement, sans signe d’enlèvement mécanique. La zone du défaut ne montre pas de déformation plastique mais un aspect de solidification « poreux », avec du Cl et du S détectés par EDS.\nConclusion : il s’agissait de défauts préexistants, probablement en forme de fissure, présents avant la nitruration."
      },
      photos: [
        { img: "img/casos/nitrurado/corte-fib.jpg", cap: { es: "Corte FIB bajo el defecto (SEM)", en: "FIB cross-section under the defect (SEM)", fr: "Coupe FIB sous le défaut (MEB)" } },
        { img: "img/casos/nitrurado/pieza-recibida.jpg", cap: { es: "Pieza recibida con los defectos marcados", en: "Part as received, defects marked", fr: "Pièce reçue, défauts repérés" } },
        { img: "img/casos/nitrurado/probetas-edm.jpg", cap: { es: "Probetas extraídas por electroerosión", en: "Specimens extracted by EDM", fr: "Éprouvettes prélevées par électroérosion" } },
        { img: "img/casos/nitrurado/defecto-fib.jpg", cap: { es: "Zona del defecto antes del corte FIB", en: "Defect area before the FIB cut", fr: "Zone du défaut avant la coupe FIB" } },
        { img: "img/casos/nitrurado/defecto-sem.jpg", cap: { es: "Defecto tras un pulido ligero (SEM)", en: "Defect after light polishing (SEM)", fr: "Défaut après polissage léger (MEB)" } }
      ]
    },
    {
      title: { es: "Fuga en una unión por brazing: fragilización por metal líquido", en: "Leak in a brazed joint: liquid metal embrittlement", fr: "Fuite dans un assemblage brasé : fragilisation par métal liquide" },
      context: {
        es: "Un componente criogénico, un bloque de cobre con un tubo de acero inoxidable (1.4404) niquelado unido por brazing en vacío con un eutéctico CuAg, presentó una fuga. Se recibieron dos tramos cortados: uno con la fuga y otro en principio sano. Había que encontrar la causa raíz.",
        en: "A cryogenic component, a copper block with a nickel-plated stainless-steel (1.4404) pipe joined by vacuum brazing with a CuAg eutectic, developed a leak. Two cut portions were received: one containing the leak and one a priori sound. The root cause had to be found.",
        fr: "Un composant cryogénique, un bloc de cuivre avec un tube en acier inoxydable (1.4404) nickelé assemblé par brasage sous vide avec un eutectique CuAg, a présenté une fuite. Deux tronçons découpés ont été reçus : l’un avec la fuite, l’autre a priori sain. Il fallait trouver la cause racine."
      },
      approach: {
        es: "• Extracción de la zona de la fuga con hilo de diamante en seco, para no contaminarla, y observación SEM desde la superficie exterior del tubo.\n• Corte transversal por la grieta, embutición y pulido a espejo; observación SEM (SE y BSE) y análisis EDX puntuales y mapas.\n• El mismo procedimiento en el tramo sano, como referencia.",
        en: "• Extraction of the leak area by dry diamond-wire cutting, to avoid contamination, and SEM observation from the outer surface of the pipe.\n• Cross-section through the crack, mounted and mirror-polished; SEM observation (SE and BSE) with EDX point analyses and maps.\n• The same procedure on the sound portion, as a reference.",
        fr: "• Prélèvement de la zone de fuite au fil diamanté à sec, pour éviter toute contamination, et observation MEB depuis la surface extérieure du tube.\n• Coupe transversale à travers la fissure, enrobage et polissage miroir ; observation MEB (SE et BSE) avec analyses EDX ponctuelles et cartographies.\n• La même procédure sur le tronçon sain, comme référence."
      },
      result: {
        es: "Grietas frágiles intergranulares con Cu y Ag en los bordes de grano del acero: fragilización por metal líquido (LME).\nEl origen eran dos cordones de soldadura no documentados, muy cerca del brazing y solo en un lado del tubo, probablemente una reparación local. El calor de la soldadura refundió el metal de aporte, que penetró por los bordes de grano; después, un esfuerzo mecánico o térmico abrió la grieta.\nEn el tramo de referencia no había LME, solo una ligera sobrepenetración del aporte en el cobre, atribuible a un ciclo de brazing demasiado largo o a un enfriamiento lento.",
        en: "Brittle intergranular cracks with Cu and Ag on the steel grain boundaries: liquid metal embrittlement (LME).\nThe origin was two undocumented weld seams, very close to the brazing and only on one side of the pipe, probably a local repair. The welding heat remelted the filler metal, which penetrated along the grain boundaries; a mechanical or thermal load then opened the crack.\nThe reference portion showed no LME, only a slight over-penetration of the filler into the copper, attributable to a too-long brazing cycle or slow cooling.",
        fr: "Fissures fragiles intergranulaires avec Cu et Ag aux joints de grains de l’acier : fragilisation par métal liquide (LME).\nL’origine : deux cordons de soudure non documentés, très proches de la brasure et d’un seul côté du tube, probablement une réparation locale. La chaleur du soudage a refondu le métal d’apport, qui a pénétré le long des joints de grains ; un effort mécanique ou thermique a ensuite ouvert la fissure.\nLe tronçon de référence ne présentait pas de LME, seulement une légère surpénétration de l’apport dans le cuivre, attribuable à un cycle de brasage trop long ou à un refroidissement lent."
      },
      photos: [
        { img: "img/casos/fuga-brazing/bordes-grano-cuag.jpg", cap: { es: "Metal de aporte CuAg en los bordes de grano del acero inoxidable (SEM-BSE)", en: "CuAg filler metal on the stainless-steel grain boundaries (SEM-BSE)", fr: "Métal d’apport CuAg aux joints de grains de l’acier inoxydable (MEB-BSE)" } },
        { img: "img/casos/fuga-brazing/piezas-recibidas.jpg", cap: { es: "Tramos recibidos para el análisis", en: "Portions received for analysis", fr: "Tronçons reçus pour l’analyse" } },
        { img: "img/casos/fuga-brazing/grieta-pared.jpg", cap: { es: "Grieta que atraviesa la pared del tubo junto al brazing (SEM)", en: "Crack through the pipe wall next to the brazing (SEM)", fr: "Fissure traversant la paroi du tube près de la brasure (MEB)" } },
        { img: "img/casos/fuga-brazing/cordon-soldadura.jpg", cap: { es: "Cordón de soldadura en la superficie del tubo y penetración intergranular del aporte (SEM-BSE)", en: "Weld seam on the pipe surface and intergranular penetration of the filler (SEM-BSE)", fr: "Cordon de soudure en surface du tube et pénétration intergranulaire de l’apport (MEB-BSE)" } },
        { img: "img/casos/fuga-brazing/referencia-sana.jpg", cap: { es: "Tramo de referencia: unión sana, con ligera sobrepenetración del aporte en el cobre (SEM)", en: "Reference portion: sound joint, with slight filler over-penetration into the copper (SEM)", fr: "Tronçon de référence : assemblage sain, légère surpénétration de l’apport dans le cuivre (MEB)" } }
      ]
    },
    {
      title: { es: "Diagrama límite de conformado del cobre OFE para cavidades SRF", en: "Forming limit diagram of Cu-OFE for SRF cavities", fr: "Courbe limite de formage du cuivre OFE pour cavités SRF" },
      context: {
        es: "Las cavidades superconductoras recubiertas previstas para el FCC necesitan sustratos de cobre sin soldaduras. El hidroconformado de tubos es una opción, pero apenas se había aplicado a productos gruesos de Cu-OFE.",
        en: "The coated superconducting cavities planned for the FCC need seamless copper substrates. Tube hydroforming is an option, but had barely been applied to thick Cu-OFE products.",
        fr: "Les cavités supraconductrices revêtues prévues pour le FCC nécessitent des substrats en cuivre sans soudure. L’hydroformage de tubes est une option, mais avait peu été appliqué aux produits épais en Cu-OFE."
      },
      approach: {
        es: "Determinación del diagrama límite de conformado en chapas de 4 mm y 2 mm.\n• Ensayos de tracción con distintas geometrías de probeta para recorrer diferentes caminos de deformación.\n• Correlación digital de imágenes (DIC) para medir los campos de deformación.\n• Comparación con el modelo de material.",
        en: "Determination of the forming limit diagram on 4 mm and 2 mm sheets.\n• Tensile tests with different specimen geometries to cover different strain paths.\n• Digital image correlation (DIC) to measure strain fields.\n• Benchmark against the material model.",
        fr: "Détermination de la courbe limite de formage sur tôles de 4 mm et 2 mm.\n• Essais de traction avec différentes géométries d’éprouvette pour couvrir différents chemins de déformation.\n• Corrélation d’images numériques (DIC) pour mesurer les champs de déformation.\n• Comparaison avec le modèle matériau."
      },
      result: {
        es: "El diagrama límite de conformado sirve de base para el análisis de viabilidad del hidroconformado de cavidades sin soldadura.\nPublicado en Materials & Design (2024).",
        en: "The forming limit diagram provides the basis for the feasibility analysis of hydroforming seamless cavities.\nPublished in Materials & Design (2024).",
        fr: "La courbe limite de formage sert de base à l’analyse de faisabilité de l’hydroformage de cavités sans soudure.\nPublié dans Materials & Design (2024)."
      },
      photos: [
        { img: "img/casos/cuofe-fld/hidroconformado.jpg", cap: { es: "Tubo de Cu-OFE y pieza hidroconformada", en: "Cu-OFE tube and hydroformed part", fr: "Tube de Cu-OFE et pièce hydroformée" } },
        { img: "img/casos/cuofe-fld/fractura-traccion.jpg", cap: { es: "Fractura de una probeta de tracción", en: "Fracture of a tensile specimen", fr: "Rupture d’une éprouvette de traction" } },
        { img: "img/casos/cuofe-fld/microestructura.jpg", cap: { es: "Microestructura del Cu-OFE", en: "Cu-OFE microstructure", fr: "Microstructure du Cu-OFE" } }
      ]
    },
    {
      title: { es: "Tratamientos térmicos de un γ-TiAl pulvimetalúrgico", en: "Heat treatments of a powder metallurgy γ-TiAl", fr: "Traitements thermiques d’un γ-TiAl élaboré par métallurgie des poudres" },
      context: {
        es: "Los intermetálicos γ-TiAl son ligeros y resistentes a alta temperatura. En la aleación Ti-45Al-2Nb-2Mn + 0,8 % TiB₂ (Ti4522XD), fabricada con polvo atomizado (EIGA) y compactada por HIP, el estado de partida es una microestructura casi-γ que hay que refinar.",
        en: "γ-TiAl intermetallics are light and strong at high temperature. In the Ti-45Al-2Nb-2Mn + 0.8 % TiB₂ alloy (Ti4522XD), made from atomised powder (EIGA) and consolidated by HIP, the starting point is a near-γ microstructure that needs refining.",
        fr: "Les intermétalliques γ-TiAl sont légers et résistants à haute température. Dans l’alliage Ti-45Al-2Nb-2Mn + 0,8 % TiB₂ (Ti4522XD), élaboré à partir de poudre atomisée (EIGA) et consolidé par HIP, le point de départ est une microstructure quasi-γ à affiner."
      },
      approach: {
        es: "Tres tratamientos térmicos a 1300 °C durante 2 h: enfriamiento en horno, o temple en agua seguido de envejecimiento a 850 °C o a 700 °C durante 8 h.\n• XRD para las fases, SEM para la morfología y TEM para medir el espaciado laminar real.",
        en: "Three heat treatments at 1300 °C for 2 h: furnace cooling, or water quenching followed by ageing at 850 °C or 700 °C for 8 h.\n• XRD for phases, SEM for morphology and TEM to measure the actual lamellar spacing.",
        fr: "Trois traitements thermiques à 1300 °C pendant 2 h : refroidissement au four, ou trempe à l’eau suivie d’un vieillissement à 850 °C ou 700 °C pendant 8 h.\n• DRX pour les phases, MEB pour la morphologie et MET pour mesurer l’espacement lamellaire réel."
      },
      result: {
        es: "El enfriamiento en horno da una microestructura dúplex, y los dos envejecimientos dan microestructuras casi totalmente laminares con distinto espaciado. Antes de cualquier ensayo mecánico ya aparecían microgrietas de distintas morfologías.\nSegundo premio al mejor póster de jóvenes investigadores en PMTi 2024. Publicado en Materials Science Forum (2025).",
        en: "Furnace cooling gives a duplex microstructure, and both ageing treatments give near fully lamellar microstructures with different spacing. Microcracks of different morphologies were already present before any mechanical testing.\nSecond best poster award for young scientists at PMTi 2024. Published in Materials Science Forum (2025).",
        fr: "Le refroidissement au four donne une microstructure duplex, et les deux vieillissements donnent des microstructures quasi entièrement lamellaires avec des espacements différents. Des microfissures de différentes morphologies étaient déjà présentes avant tout essai mécanique.\nDeuxième prix du meilleur poster jeunes chercheurs à PMTi 2024. Publié dans Materials Science Forum (2025)."
      },
      photos: [
        { img: "img/casos/tial-pm/poster-pmti2024.jpg", cap: { es: "Póster premiado en PMTi 2024", en: "Award-winning poster at PMTi 2024", fr: "Poster primé à PMTi 2024" } },
        { img: "img/casos/tial-pm/tem-laminas.jpg", cap: { es: "Láminas γ/α₂ (TEM, campo claro)", en: "γ/α₂ lamellae (TEM, bright field)", fr: "Lamelles γ/α₂ (MET, champ clair)" } }
      ]
    }
  ],

  /* ---------- Publicaciones ----------
     type: "art" (artículo), "conf" (congreso), "chap" (capítulo)
     link: enlace al DOI (opcional)                                       */
  publications: [
    { year: 2026, type: "talk", link: "",
      title: "Strength–toughness challenges of Ni-based superalloy 718 for cryogenic applications",
      authors: "B. Ruiz-Palenzuela, I. Avilés, S. Sgobba, E. M. Ruiz-Navas",
      venue: "ICEC30/ICMC 2026, Daejeon" },
    { year: 2026, type: "art", link: "https://doi.org/10.3390/cryo2040009",
      title: "Mechanical testing of austenitic stainless steels at 4 K: a novel approach for characterizing unstable crack propagation in cryogenic applications",
      authors: "E. Rodriguez Castro, I. Aviles Santillana, B. Ruiz-Palenzuela, S. Sgobba, E. Ruiz Navas, M. Kind",
      venue: "Cryo 2(4) (2026) 9" },
    { year: 2025, type: "talk", link: "",
      title: "Assessment of a high Mn–high N austenitic stainless steel as a structural material for cryogenic applications in fusion and high energy physics devices",
      authors: "B. Ruiz-Palenzuela, I. Avilés, E. Rodríguez Castro, S. Sgobba, E. M. Ruiz-Navas",
      venue: "EUCAS 2025" },
    { year: 2024, type: "poster", link: "",
      title: "Characterization and thermal treatment of γ-TiAl intermetallic alloy for enhanced microstructural properties",
      authors: "B. Ruiz-Palenzuela, I. Sabirov, E. M. Ruiz-Navas",
      venue: "PMTi 2024",
      note: { es: "Segundo premio al mejor póster de jóvenes investigadores", en: "Second best poster award for young scientists", fr: "Deuxième prix du meilleur poster jeunes chercheurs" } },
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
