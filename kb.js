// ════════════════════════════════════════════════════════════════
// SECURITY NAVIGATOR — KENNISBANK v2.0
// Thema's: leveranciers, incident, toegang, OT, governance,
//          kwetsbaarheid, continuity, risicoanalyse, awareness
// Frameworks: NIS2, ISO27001/35/36/22301, IEC62443,
//             DNB, DORA, NIST CSF, CISM
// ════════════════════════════════════════════════════════════════

const KB = { nl: [], en: [] };

KB.nl = [

// ── 1. LEVERANCIERSRISICO ─────────────────────────────────────────────────────
{
  id: 'leveranciers',
  name: 'Leveranciersrisico',
  meta: 'NIS2 · ISO 27036 · DORA · CISM',
  frameworks: ['NIS2','ISO27036','DORA','CISM'],
  summary: 'NIS2 verplicht energiebedrijven om security-risico\'s in de toeleveringsketen structureel te beoordelen en te beheersen. Dit gaat verder dan een eenmalige check: je moet kunnen aantonen dat je leveranciers continu monitort en dat er proportionele contractuele eisen zijn gesteld. De energiesector loopt achter op finance en telecom, die al jaren werken met risicoklassen per leverancier en formele exit-plannen. Die aanpak is direct toepasbaar.',
  details: [
    {
      framework: 'NIS2', cls: 'fw-nis2',
      required: 'Artikel 21 lid 2d verplicht essentiële entiteiten tot beveiliging van de toeleveringsketen, inclusief security-gerelateerde aspecten van de relaties met directe leveranciers. Leveranciers met toegang tot netwerk- en informatiesystemen vallen expliciet in scope. Toezichthouder (ACM of RDI) kan hierover vragen stellen bij een audit.',
      crossSector: 'Finance (DORA art. 28-30): alle ICT-leveranciers worden ingedeeld op kritikaliteit. Kritieke leveranciers vereisen auditrecht, exitplan en jaarlijkse beoordeling. Telecom: leveranciersscorecard per kwartaal, automatische escalatie bij score onder de drempel.',
      tips: 'Vergeet OT-leveranciers niet — ook kleine leveranciers met toegang tot SCADA of ICS vallen onder de verplichting. Begin met een inventarisatie: welke leveranciers hebben toegang tot kritieke systemen? Dat is stap één.'
    },
    {
      framework: 'ISO 27036', cls: 'fw-iso',
      required: 'ISO/IEC 27036 is de vierdelige standaard voor informatiebeveiliging in leveranciersrelaties. Kernvereisten: risicogebaseerde classificatie van leveranciers, contractuele securityvereisten, monitoring en right-to-audit. Deel 3 focust specifiek op ICT-supply chain security.',
      crossSector: 'Finance combineert ISO 27036 met DORA voor een compleet leverancierskader: een leveranciersregister met risicoklasse (hoog/midden/laag), bijbehorende contractuele minimumeisen per klasse, en een jaarlijkse review-cyclus.',
      tips: 'ISO 27036 is niet verplicht maar biedt uitstekende structuur om NIS2-compliancy op leveranciersgebied aan te tonen. Gebruik het als onderbouwing bij audits. Begin met een eenvoudig leveranciersregister in een spreadsheet.'
    },
    {
      framework: 'DORA', cls: 'fw-cross',
      required: 'DORA (EU 2022/2554) is formeel verplicht voor financiële entiteiten maar geldt als de meest uitgewerkte Europese standaard voor ICT-leveranciersrisicobeheer. De aanpak is direct bruikbaar als best practice: kritieke ICT-leveranciers identificeren, contractuele minimumeisen stellen, exitstrategieën documenteren.',
      crossSector: 'Banken en verzekeraars implementeren DORA via een drielaags model: strategische leveranciers (exitplan + auditrecht), tactische leveranciers (jaarlijkse beoordeling), operationele leveranciers (standaard contractvereisten). Dit model werkt ook in de energiesector.',
      tips: 'Gebruik DORA-sjablonen voor leverancierscontracten — die zijn publiek beschikbaar via de ESAs (Europese toezichthouders) en besparen veel tijd.'
    },
    {
      framework: 'CISM', cls: 'fw-cism',
      required: 'CISM (ISACA) behandelt leveranciersrisico als onderdeel van Information Risk Management (domein 2). Kernprincipe: leveranciersrisico is een subset van operationeel risico en moet worden beoordeeld op impact (wat als deze leverancier uitvalt of gecompromitteerd raakt?) en waarschijnlijkheid.',
      crossSector: 'CISM-praktijk: gebruik een vereenvoudigd risicoraamwerk — impact × kans = risicoklasse. Koppel aan de risicobereidheid van de organisatie. Bespreek dit expliciet met het bestuur: welk leveranciersrisico accepteren we?',
      tips: 'CISM benadrukt dat leveranciersrisicobeheer een doorlopend proces is, geen jaarlijkse exercitie. Rapporteer de top-5 leveranciersrisico\'s periodiek aan management en integreer beoordeling in je reguliere risicoreview-cyclus.'
    }
  ]
},

// ── 2. INCIDENT RESPONSE & MELDPLICHT ────────────────────────────────────────
{
  id: 'incident',
  name: 'Incident response & meldplicht',
  meta: 'NIS2 · ISO 27035 · DNB · CISM',
  frameworks: ['NIS2','ISO27035','DNB','CISM'],
  summary: 'NIS2 introduceert strikte meldtermijnen voor significante incidenten: 24 uur eerste melding aan het CSIRT, 72 uur gedetailleerde melding, en één maand eindrapport. Voor de energiesector geldt ACM of RDI als bevoegde autoriteit. De financiële sector werkt al jaren met vergelijkbare of strengere regimes — hun gestructureerde aanpak van incident classification en escalatieprocedures is een bruikbaar model. Het grootste risico is vertraging door onduidelijke besluitvorming: leg vooraf vast wie wat beslist.',
  details: [
    {
      framework: 'NIS2', cls: 'fw-nis2',
      required: 'Artikel 23 NIS2: significante incidenten moeten worden gemeld. Een incident is significant als het ernstige operationele verstoringen of financiële verliezen veroorzaakt. Termijnen: (1) vroege waarschuwing binnen 24 uur, (2) incidentmelding binnen 72 uur, (3) eindrapport binnen één maand. Meldpunt: nationaal CSIRT (NCSC in NL). Bestuurders zijn persoonlijk aansprakelijk (art. 20).',
      crossSector: 'DNB-meldregime (financieel): ernstige incidenten binnen 4 uur melden. Banken werken met een escalatiematrix die bepaalt wie op welk moment wordt geïnformeerd: operationeel team → CISO → bestuur → toezichthouder. Dit voorkomt vertraging in een crisissituatie.',
      tips: 'Definieer vooraf wat een "significant incident" is in jouw context. Maak een beslisboom: welke verstoringen triggeren de meldplicht? Oefen dit jaarlijks in een tabletop exercise. Zorg dat de CEO weet dat hij/zij persoonlijk verantwoordelijk is onder NIS2 art. 20.'
    },
    {
      framework: 'ISO 27035', cls: 'fw-iso',
      required: 'ISO/IEC 27035 beschrijft een vijffasig incident response proces: (1) plannen en voorbereiden, (2) detecteren en rapporteren, (3) beoordelen en besluiten, (4) reageren, (5) leren. De standaard benadrukt het belang van een vooraf vastgesteld incident response plan en getraind team.',
      crossSector: 'Best practice uit telecom en finance: een SOC met 24/7 detectiecapaciteit, gekoppeld aan een incident response playbook per incidenttype (ransomware, DDoS, datalek, OT-verstoring). Energiebedrijven beginnen vaak met een hybride model: eigen on-call team plus uitbesteed SOC.',
      tips: 'Maak een beknopt IR-playbook van maximaal twee A4\'s per incidenttype. Meer detail leidt tot verwarring in een crisissituatie. Test het playbook minimaal één keer per jaar.'
    },
    {
      framework: 'DNB Good Practice', cls: 'fw-dnb',
      required: 'DNB verwacht een gedocumenteerd crisis management framework inclusief communicatieprotocollen naar toezichthouder, bestuur en externe partijen. Dit gaat verder dan NIS2: DNB kijkt ook naar de kwaliteit van het herstel en de lessons learned.',
      crossSector: 'Financiële sector standaard: elke incident response eindigt met een post-incident review binnen twee weken. Bevindingen worden gedeeld met het bestuur en verwerkt in het risicoregister. Structurele kwetsbaarheden worden opgevolgd via een verbeterplan met eigenaar en deadline.',
      tips: 'Adopteer de post-incident review als standaard — ook na kleine incidenten. Het leervermogen van een organisatie op security-gebied is direct zichtbaar in hoe systematisch zij incidenten evalueert. Dit is ook een positief signaal naar toezichthouders.'
    },
    {
      framework: 'CISM', cls: 'fw-cism',
      required: 'CISM domein 4 (Incident Management) benadrukt dat incident response een bedrijfsbrede verantwoordelijkheid is, niet alleen van IT. Het bestuur moet vooraf het incident response plan goedkeuren. CISM onderscheidt incident response (technisch) van crisis management (strategisch/communicatie).',
      crossSector: 'CISM-praktijk: stel een incident response committee in met vertegenwoordiging van IT, legal, communicatie en bestuur. Definieer escalatieniveaus (P1-P4) met bijbehorende response tijden en escalatiepaden. Train het management op hun rol tijdens een P1-incident.',
      tips: 'Leg vooraf vast wie welke beslissingen mag nemen zonder verdere escalatie. Een CISO moet een P1-incident kunnen managen zonder elke stap te hoeven goedkeuren. Onduidelijkheid in besluitvorming is de grootste veroorzaker van vertraging tijdens een crisis.'
    }
  ]
},

// ── 3. TOEGANGSBEHEER & IAM ───────────────────────────────────────────────────
{
  id: 'toegang',
  name: 'Toegangsbeheer & IAM',
  meta: 'NIS2 · ISO 27001 · NIST CSF · CISM',
  frameworks: ['NIS2','ISO27001','NIST_CSF','CISM'],
  summary: 'Toegangsbeheer is één van de meest fundamentele en direct toetsbare maatregelen onder NIS2. Het principe van least privilege — gebruikers krijgen alleen de toegang die ze nodig hebben — is de kern. Privileged Access Management voor beheeraccounts is in de energiesector vaak het zwakste punt. Finance en telecom werken al jaren met zero-trust architecturen waarbij toegang continu wordt geverifieerd. Begin met een toegangsreview van alle beheer- en serviceaccounts — dat is waar de grootste risico\'s zitten.',
  details: [
    {
      framework: 'NIS2', cls: 'fw-nis2',
      required: 'Artikel 21 lid 2i verplicht beleid inzake toegangsbeveiliging. Specifiek vereist: multi-factor authenticatie (MFA) voor alle kritieke systemen, rolgebaseerd toegangsbeheer (RBAC), periodieke toegangsreviews, en onmiddellijke intrekking van toegang bij vertrek medewerkers.',
      crossSector: 'Financiële sector standaard: zero-trust model waarbij elke toegangsaanvraag wordt geauthenticeerd ongeacht netwerklokatie. Privileged Access Workstations (PAW) voor beheerders van kritieke systemen. Telecom: automatische provisioning en deprovisioning gekoppeld aan HR-systeem.',
      tips: 'Start met een review van alle beheeraccounts en serviceaccounts — dit zijn de grootste risico\'s. Serviceaccounts hebben vaak te ruime rechten die nooit worden gereviewed. MFA voor externe toegang is het minimum; voor interne kritieke systemen is het ook vereist.'
    },
    {
      framework: 'ISO 27001', cls: 'fw-iso',
      required: 'Annex A.5.15 (Access control), A.5.16 (Identity management), A.5.17 (Authentication), A.5.18 (Access rights). Vereist: een formeel toegangsbeheerbeleid, access request en approval proces, periodieke toegangsreviews (minimaal jaarlijks), en privileged access management voor beheeraccounts.',
      crossSector: 'ISO 27001 gecertificeerde organisaties in finance gebruiken identity governance platforms (bijv. SailPoint, Saviynt) voor geautomatiseerde toegangsreviews. Energiebedrijven beginnen vaak met handmatige reviews in Excel — dat is een acceptabel startpunt mits systematisch gedaan.',
      tips: 'Een toegangsreview hoeft niet duur of complex te zijn. Begin met een kwartaallijkse review van privileged accounts en een jaarlijkse review van alle accounts. Documenteer de review en acties — dat is wat een auditor wil zien.'
    },
    {
      framework: 'NIST CSF', cls: 'fw-cross',
      required: 'NIST CSF 2.0 Protect functie: Identity Management, Authentication and Access Control (PR.AA). Kernprincipes: identiteiten worden beheerd en geverifieerd, toegang wordt verleend op basis van least privilege, en toegang tot assets wordt continu beschermd.',
      crossSector: 'NIST CSF wordt breed toegepast in kritieke infrastructuur in de VS. De maturity-indeling (Tier 1-4) maakt het eenvoudig om je huidige situatie te beoordelen en een roadmap te maken richting het bestuur. Tier 2 (Risk-Informed) is een realistisch doel voor de korte termijn.',
      tips: 'Gebruik de NIST CSF Identity & Access Management quick-start guide als praktische checklist. Deze is gratis beschikbaar via nist.gov en geeft direct inzicht in hiaten.'
    },
    {
      framework: 'CISM', cls: 'fw-cism',
      required: 'CISM benadrukt dat toegangsbeheer een risicobeslissing is: elke toegangsverlenging introduceert een risico dat moet worden afgewogen tegen de bedrijfsnoodzaak. Access governance — wie heeft het recht om toegang te verlenen en te reviewen — moet expliciet zijn belegd.',
      crossSector: 'CISM-praktijk: stel een data owner model in waarbij business owners verantwoordelijk zijn voor toegangsreviews van hun systemen, niet IT. IT faciliteert, de business beslist. Dit verhoogt de kwaliteit van reviews aanzienlijk.',
      tips: 'Het data owner model lost een veelvoorkomend probleem op: IT-teams keuren toegang goed voor systemen die ze inhoudelijk niet kennen. Wijs per kritiek systeem een business owner aan en maak hen verantwoordelijk voor de jaarlijkse toegangsreview.'
    }
  ]
},

// ── 4. OT / ICS-SECURITY ─────────────────────────────────────────────────────
{
  id: 'ot',
  name: 'OT / ICS-security',
  meta: 'IEC 62443 · NIS2 · NIST CSF · CISM',
  frameworks: ['IEC62443','NIS2','NIST_CSF','CISM'],
  summary: 'OT-security is het meest specifieke en complexe onderdeel van security in de energiesector. SCADA-systemen en industriële controlesystemen hebben andere eigenschappen dan IT: beschikbaarheid gaat boven vertrouwelijkheid, patchcycli zijn extreem lang, en systemen zijn soms decennia oud. IEC 62443 is de leidende standaard. NIS2 vereist expliciet dat OT-systemen in scope zijn. De luchtvaart en watersector zijn verder in OT-security maturity — hun aanpak van netwerksegmentatie is direct toepasbaar. Begin met een OT-asset inventarisatie: zonder die basis is security onmogelijk.',
  details: [
    {
      framework: 'IEC 62443', cls: 'fw-ot',
      required: 'IEC 62443 is een serie standaarden voor cybersecurity in industriële automatisering. Kernconcepten: (1) Security Levels (SL 1-4) per zone op basis van risico, (2) zones en conduits model voor netwerksegmentatie, (3) Security Management System voor OT. IEC 62443-3-3 beschrijft systeemvereisten, 62443-2-1 het security management programma.',
      crossSector: 'Luchtvaart en offshore-industrie: strict gescheiden OT-netwerken met eenrichtingsverkeer (data diodes) naar IT. Geen directe koppeling tussen OT en internet. Patching via gecontroleerde testomgeving vóór productie-uitrol, met goedkeuring van de fabrikant.',
      tips: 'Begin met een OT-asset inventarisatie — veel energiebedrijven weten niet exact wat er op hun OT-netwerk hangt. Stap twee: netwerksegmentatie via de Purdue-modelstructuur. Dit zijn de twee meest impactvolle eerste stappen.'
    },
    {
      framework: 'NIS2', cls: 'fw-nis2',
      required: 'NIS2 maakt geen onderscheid tussen IT en OT: alle netwerk- en informatiesystemen van essentiële entiteiten vallen onder de verplichting. Dit betekent dat risicoanalyse, beveiligingsmaatregelen én de meldplicht ook van toepassing zijn op SCADA, DCS en andere OT-systemen.',
      crossSector: 'Watersector (vergelijkbaar gereguleerd): sectorspecifieke OT-security baseline per type systeem. Categorisering van assets op kritikaliteit — uitval leidt tot directe maatschappelijke impact vs. operationele verstoring. Proportionele maatregelen per categorie.',
      tips: 'Zorg dat OT-systemen expliciet in scope zijn bij je NIS2-risicoanalyse. In de praktijk worden ze vaak overgeslagen omdat de OT-afdeling een eigen wereld is. Breng de OT-verantwoordelijke expliciet in de NIS2-werkgroep.'
    },
    {
      framework: 'NIST CSF', cls: 'fw-cross',
      required: 'NIST SP 800-82 (Guide to OT Security) beschrijft de specifieke kenmerken van OT-omgevingen en hoe het CSF daarop van toepassing is. Bijzonder relevant: de Identify-functie (OT-asset inventarisatie) en de Protect-functie (netwerksegmentatie, toegangsbeheer OT).',
      crossSector: 'Amerikaanse energiebedrijven gebruiken NIST CSF als basisraamwerk voor OT-security roadmaps. De maturity-indeling maakt het eenvoudig te communiceren naar bestuur: "we zitten op Tier 1, doel is Tier 3 over twee jaar, dit zijn de stappen en kosten."',
      tips: 'NIST SP 800-82 is gratis beschikbaar en zeer praktisch. Gebruik de bijlagen met voorbeeldmaatregelen per OT-systeemtype als startpunt voor je eigen baseline.'
    },
    {
      framework: 'CISM', cls: 'fw-cism',
      required: 'CISM benadrukt de safety-security convergentie in OT-omgevingen: een cyberaanval op OT-systemen in de energiesector kan leiden tot fysieke schade en gevaar voor personen. De risicobeoordeling moet ook fysieke gevolgen meenemen — dit maakt OT-security fundamenteel anders dan IT-security.',
      crossSector: 'In de chemische industrie en luchtvaart is samenwerking tussen safety en security al standaard. Voor energiebedrijven is dit vaak nieuw terrein. Een gezamenlijk risk assessment (IT/OT/safety) geeft het meest complete beeld.',
      tips: 'Organiseer een gezamenlijke sessie tussen de security-afdeling en de OT/operations-afdeling. Operations-mensen kennen de systemen het beste; security-mensen kennen de dreigingen. Combineer die kennis — dat is de basis voor effectieve OT-security.'
    }
  ]
},

// ── 5. SECURITY GOVERNANCE ───────────────────────────────────────────────────
{
  id: 'governance',
  name: 'Security governance',
  meta: 'NIS2 · DNB · NIST CSF · CISM · ISO 27001',
  frameworks: ['NIS2','DNB','NIST_CSF','CISM','ISO27001'],
  summary: 'NIS2 legt de verantwoordelijkheid voor cybersecurity expliciet bij het bestuur: bestuurders zijn persoonlijk aansprakelijk voor tekortkomingen. Dit is een fundamentele verschuiving. Security governance gaat over hoe je cybersecurity inbedt in de organisatiestructuur, besluitvorming en rapportage. De financiële sector is hierop het verst: CISO met directe boardlijn, periodieke security rapportage aan RvB en RvC zijn daar al jaren standaard. Als de CISO rapporteert aan de CIO is er een potentieel belangenconflict.',
  details: [
    {
      framework: 'NIS2', cls: 'fw-nis2',
      required: 'Artikel 20 NIS2: het leidinggevend orgaan keurt de cybersecuritymaatregelen goed, houdt toezicht op de uitvoering en is aansprakelijk bij overtredingen. Bestuurders moeten cybersecurity-training volgen. De CISO of verantwoordelijke voor security moet rapporteren aan het bestuur, niet alleen aan de IT-directeur.',
      crossSector: 'Financiële sector: CISO rapporteert direct aan de CEO of CRO, niet aan de CIO. Kwartaallijkse security rapportage aan de RvB met KPI\'s: security incidents, patch-compliance, awareness-scores, open vulnerabilities. RvC ontvangt jaarlijks een security assessment.',
      tips: 'Als de CISO rapporteert aan de CIO, is er een potentieel belangenconflict: de CIO is verantwoordelijk voor IT-levering én IT-security. NIS2 verwacht feitelijk een onafhankelijke rapportagelijn. Dit is een governance-vraag die je expliciet moet adresseren.'
    },
    {
      framework: 'DNB Good Practice', cls: 'fw-dnb',
      required: 'DNB Good Practice (gebaseerd op COBIT): het bestuur stelt het informatiebeveiligingsbeleid vast, beoordeelt periodiek de effectiviteit en is aantoonbaar betrokken bij materiële security-beslissingen. DNB verwacht dat bestuurders in staat zijn om security-risico\'s te begrijpen en te beoordelen.',
      crossSector: 'Financiële sector standaard: security is een vast agendapunt bij RvB-vergaderingen. Bestuurders worden jaarlijks getraind op cyberdreigingen. Bij een significant incident informeert de CISO het bestuur binnen 24 uur, ongeacht tijdstip.',
      tips: 'Maak een "security briefing" voor het bestuur van maximaal twee pagina\'s, vier keer per jaar. Focus op: wat zijn de grootste risico\'s, status van top-3 verbeterinitiatieven, en welke beslissingen vraag je van het bestuur? Geen technische details — risico\'s in businesstermen.'
    },
    {
      framework: 'NIST CSF', cls: 'fw-cross',
      required: 'NIST CSF 2.0 heeft Govern als nieuwe zesde functie toegevoegd. Govern omvat: security strategie, beleid, rollen en verantwoordelijkheden, risk management en toezicht. Dit onderstreept dat governance de basis is van alle andere security-activiteiten.',
      crossSector: 'Amerikaanse kritieke infrastructuurbedrijven gebruiken het NIST CSF Tier-model om governance-volwassenheid te communiceren naar toezichthouders. Tier 3 (Repeatable) = governance processen zijn gedocumenteerd, goedgekeurd door bestuur en worden consistent uitgevoerd.',
      tips: 'Gebruik de NIST CSF Govern-functie als checklist voor governance-hiaten. Stel jezelf de vraag: zijn onze security-rollen en -verantwoordelijkheden gedocumenteerd en goedgekeurd door het bestuur? Is er een vastgesteld informatiebeveiligingsbeleid? Zo nee — dat zijn de eerste stappen.'
    },
    {
      framework: 'CISM', cls: 'fw-cism',
      required: 'CISM domein 1 (Security Governance) is het fundament van het hele CISM-raamwerk. Kernprincipes: security governance is een subset van corporate governance, security strategie is afgeleid van de bedrijfsstrategie, en de CISO heeft een adviserende én toezichthoudende rol.',
      crossSector: 'CISM-praktijk: de CISO stelt jaarlijks een Information Security Strategy op, goedgekeurd door het bestuur. De strategie bevat: dreigingslandschap, risk appetite, meerjarige roadmap en benodigde investering. Dit geeft het bestuur de context om weloverwogen beslissingen te nemen.',
      tips: 'Een security strategie hoeft niet complex te zijn. Eén pagina met: (1) waar staan we nu, (2) wat zijn de top-3 risico\'s, (3) wat willen we bereiken in 3 jaar, (4) wat kost dat, is al enorm waardevol voor het bestuur.'
    },
    {
      framework: 'ISO 27001', cls: 'fw-iso',
      required: 'ISO 27001 sectie 5 (Leadership): topmanagement moet blijk geven van betrokkenheid bij het ISMS, een informatiebeveiligingsbeleid vaststellen en rollen toewijzen. Sectie 9.3: management review van het ISMS minimaal jaarlijks.',
      crossSector: 'ISO 27001 gecertificeerde organisaties hebben een formele management review als vereiste voor certificaat-behoud. Auditors kijken expliciet naar bewijs van betrokkenheid van topmanagement: vergadernotulen, goedgekeurde beleidsdocumenten, beslissingen over security-investeringen.',
      tips: 'Als je ISO 27001-certificering overweegt, is de management review een goed startpunt — ook zonder certificering. Een jaarlijkse gestructureerde review van je security-programma met het bestuur legt de basis voor alles wat daarna komt.'
    }
  ]
},

// ── 6. KWETSBAARHEIDSBEHEER ───────────────────────────────────────────────────
{
  id: 'kwetsbaarheid',
  name: 'Kwetsbaarheidsbeheer',
  meta: 'NIS2 · ISO 27001 · NIST CSF · CISM',
  frameworks: ['NIS2','ISO27001','NIST_CSF','CISM'],
  summary: 'Kwetsbaarheidsbeheer — het structureel identificeren, beoordelen en verhelpen van beveiligingslekken — is een kernverplichting onder NIS2. Het gaat verder dan alleen patchen: je hebt een proces nodig voor continu monitoren van kwetsbaarheden, prioritering op basis van risico, en aantoonbare opvolging. In de praktijk is dit bij veel energiebedrijven nog reactief. Finance en telecom werken al jaren met geautomatiseerde vulnerability management platformen en SLA\'s per risicoklasse. Gebruik de CISA Known Exploited Vulnerabilities catalog als prioriteringstool.',
  details: [
    {
      framework: 'NIS2', cls: 'fw-nis2',
      required: 'Artikel 21 lid 2j: beheer van kwetsbaarheden en patching. Artikel 21 lid 2e: beveiliging bij het verwerven, ontwikkelen en onderhouden van netwerk- en informatiesystemen, inclusief het omgaan met kwetsbaarheden. Toezichthouder kan vragen naar je patchbeleid en de SLA\'s die je hanteert.',
      crossSector: 'Telecom-sector standaard: geautomatiseerd vulnerability scanning (dagelijks voor kritieke systemen), risk-based prioritering (CVSS-score + asset-kritikaliteit = patchprioriteit). SLA\'s: kritieke kwetsbaarheden gepatcht binnen 48 uur, hoog binnen twee weken, midden binnen 30 dagen.',
      tips: 'Start met een scope-afbakening: welke systemen zijn het meest kritiek? Doe daar als eerste een vulnerability scan. Documenteer je patchbeleid — welke SLA hanteer je per risicoklasse? Dat is wat een toezichthouder wil zien.'
    },
    {
      framework: 'ISO 27001', cls: 'fw-iso',
      required: 'Annex A.8.8 (Management of technical vulnerabilities): organisaties moeten tijdig informatie verkrijgen over technische kwetsbaarheden, de blootstelling evalueren en passende maatregelen nemen. Annex A.8.19 (Installation of software): beheerde installatie om kwetsbaarheden te voorkomen.',
      crossSector: 'ISO 27001 gecertificeerde organisaties in finance gebruiken een vulnerability management tool (Tenable, Qualys) gekoppeld aan hun ITSM-systeem voor automatische ticket-aanmaak. De patchcyclus is geïntegreerd in de reguliere change management procedure.',
      tips: 'Als je nog geen vulnerability scanner hebt: begin met de gratis versie van Greenbone/OpenVAS voor een eerste scan van je netwerk. OT-systemen: wees voorzichtig met actief scannen — dit kan systemen destabiliseren. Gebruik passieve monitoring of leveranciersinformatie.'
    },
    {
      framework: 'NIST CSF', cls: 'fw-cross',
      required: 'NIST CSF Identify functie: Risk Assessment (ID.RA) omvat het identificeren van kwetsbaarheden als kern-activiteit. NIST CISA publiceert de Known Exploited Vulnerabilities (KEV) catalog — kwetsbaarheden die actief worden misbruikt. Dit is de meest praktische prioriteringstool beschikbaar.',
      crossSector: 'De KEV catalog wordt gratis gepubliceerd en wekelijks bijgewerkt. Als een kwetsbaarheid op de KEV staat, moet je die zo snel mogelijk patchen ongeacht de CVSS-score. Dit is de aanpak die in de VS verplicht is voor overheidsorganisaties en als best practice geldt voor kritieke infrastructuur.',
      tips: 'Abonneer je op de CISA KEV catalog (gratis e-mail alert beschikbaar). Dit is je wekelijkse prioriteringslijst voor patching. Effectiever dan de CVSS-score alleen, omdat het gebaseerd is op daadwerkelijk misbruik in de praktijk.'
    },
    {
      framework: 'CISM', cls: 'fw-cism',
      required: 'CISM domein 2 (Information Risk Management): kwetsbaarheidsbeheer is een technische uitvoering van risicobeheer. Het doel is niet nul kwetsbaarheden — dat is onhaalbaar — maar het managen van kwetsbaarheden tot een aanvaardbaar risiconiveau conform de risk appetite.',
      crossSector: 'CISM-praktijk: rapporteer kwetsbaarheidsstatus aan management als risicomaatstaf, niet als technische lijst. Voorbeeld: "20% van onze kritieke systemen heeft een open hoog-risico kwetsbaarheid; dit is boven onze risicodrempel; we vragen goedkeuring voor extra patchcapaciteit."',
      tips: 'Vermijd het presenteren van een lijst van honderden kwetsbaarheden aan management — dat leidt tot besluitverlamming. Aggregeer naar risicoscore: hoeveel kritieke systemen hebben een open hoog-risico kwetsbaarheid? Dat is de maatstaf die telt.'
    }
  ]
},

// ── 7. BUSINESS CONTINUITY & VEERKRACHT ──────────────────────────────────────
{
  id: 'continuity',
  name: 'Business continuity & veerkracht',
  meta: 'NIS2 · ISO 22301 · NIST CSF · CISM',
  frameworks: ['NIS2','ISO22301','NIST_CSF','CISM'],
  summary: 'NIS2 vereist dat essentiële entiteiten beschikken over bedrijfscontinuïteitsplannen die rekening houden met cybersecurity-incidenten. Voor de energiesector — waar uitval directe maatschappelijke impact heeft — is dit bijzonder relevant. Het onderscheid tussen een BCP (business continuity plan) en een DRP (disaster recovery plan) is in de praktijk cruciaal: BCP gaat over het draaiend houden van kritieke processen, DRP over het herstellen van IT-systemen. Definieer RTO en RPO per kritiek systeem — dat zijn businessbeslissingen, geen IT-beslissingen.',
  details: [
    {
      framework: 'NIS2', cls: 'fw-nis2',
      required: 'Artikel 21 lid 2c: bedrijfscontinuïteit, zoals back-upbeheer en herstel na een ramp, en crisisbeheer. Essentiële entiteiten moeten beschikken over gedocumenteerde BCP\'s die rekening houden met cyberincidenten, geteste back-up en herstelprocedures, en een crisismanagementplan inclusief communicatieprocedures.',
      crossSector: 'Financiële sector (DNB): Recovery Time Objective (RTO) en Recovery Point Objective (RPO) zijn vastgesteld per kritiek systeem en goedgekeurd door het bestuur. Jaarlijkse BCP-test is verplicht. Telecom: actief-actief architecturen voor kritieke systemen zodat uitval van één systeem geen impact heeft.',
      tips: 'Definieer RTO en RPO per kritiek systeem — hoeveel downtime is acceptabel en hoeveel dataverlies? Betrek operations en management bij deze beslissing. Zonder deze definities kun je geen zinvol BCP schrijven.'
    },
    {
      framework: 'ISO 22301', cls: 'fw-iso',
      required: 'ISO 22301 beschrijft een Business Continuity Management System (BCMS). Kernstappen: (1) Business Impact Analysis (BIA) — welke processen zijn kritiek, (2) Risk Assessment — dreigingen voor continuïteit, (3) BCM Strategy — hoe houd je kritieke processen draaiende, (4) BCP documentatie en training, (5) testen en verbeteren.',
      crossSector: 'ISO 22301 gecertificeerde organisaties testen hun BCP minimaal jaarlijks. Finance: jaarlijkse DR-test waarbij kritieke systemen daadwerkelijk worden gefailover naar het uitwijkcentrum. Energiebedrijven: begin met een tabletop exercise voor het meest waarschijnlijke scenario (ransomware op IT).',
      tips: 'Een Business Impact Analysis hoeft niet maanden te duren. Interview de vijf meest kritieke procesowners: wat is hun kritieke proces, wat hebben ze nodig om te kunnen werken, en wat is de maximale uitvaltijd? Dat geeft 80% van de benodigde informatie.'
    },
    {
      framework: 'NIST CSF', cls: 'fw-cross',
      required: 'NIST CSF Recover functie: Recovery Planning (RC.RP), Improvements (RC.IM), Communications (RC.CO). De Recover-functie gaat over het herstellen van normale operaties na een incident én het leren van het incident. Herstelplanning moet vooraf gebeuren, niet tijdens een incident.',
      crossSector: 'NERC CIP-009 (Amerikaans, voor elektriciteitsnet) specifiek over recovery plans voor kritieke cyber systemen. Hoewel formeel niet van toepassing in Europa, biedt het nuttige technische richtlijnen die ook relevant zijn voor Nederlandse energiebedrijven.',
      tips: 'Test je back-ups regelmatig door daadwerkelijk te herstellen — niet door te controleren of de back-up is gemaakt. Veel organisaties ontdekken pas tijdens een incident dat hun back-ups niet werken of dat het herstelproces te lang duurt.'
    },
    {
      framework: 'CISM', cls: 'fw-cism',
      required: 'CISM domein 4 omvat Business Continuity en Disaster Recovery als onderdeel van incident management. De BCP moet zijn gebaseerd op de uitkomsten van de risicoanalyse: de meest waarschijnlijke en impactvolle dreigingen bepalen de prioriteit van continuïteitsmaatregelen.',
      crossSector: 'CISM-praktijk: integreer de BCP-test in het bredere security exercitieprogramma. Een tabletop exercise waarbij het management beslissingen neemt tijdens een gesimuleerde ransomware-aanval levert meer op dan een technische DR-test alleen — het onthult besluitvormingsgaten.',
      tips: 'Voer jaarlijks een tabletop exercise uit met het management: "het is maandag 09:00, we worden getroffen door ransomware — wat doen we?" Leg de beslissingen en vragen vast. Dit is de meest effectieve manier om de BCP te testen én het management bewust te maken.'
    }
  ]
},

// ── 8. RISICOANALYSE & -BEHEER ────────────────────────────────────────────────
{
  id: 'risicoanalyse',
  name: 'Risicoanalyse & -beheer',
  meta: 'NIS2 · ISO 27001 · NIST CSF · CISM · DNB',
  frameworks: ['NIS2','ISO27001','NIST_CSF','CISM','DNB'],
  summary: 'Risicoanalyse is het fundament van alle security-maatregelen onder NIS2: maatregelen moeten proportioneel zijn aan de vastgestelde risico\'s. Een goede risicoanalyse is geen doel op zich maar een middel om de juiste prioriteiten te stellen en investeringen te rechtvaardigen. De energiesector moet specifiek rekening houden met OT-risico\'s naast traditionele IT-risico\'s. Stel de risk appetite eerst vast met het bestuur — zonder die basis weet je niet welke risico\'s je moet behandelen en welke je kunt accepteren.',
  details: [
    {
      framework: 'NIS2', cls: 'fw-nis2',
      required: 'Artikel 21 lid 1: maatregelen moeten passend en evenredig zijn en gebaseerd op een risicobeoordeling. Artikel 21 lid 2a: beleid inzake risicoanalyse en beveiliging van informatiesystemen. NIS2 vereist een gedocumenteerde risicoanalyse die de basis vormt voor alle genomen maatregelen. Toezichthouders verwachten dit als eerste document bij een audit.',
      crossSector: 'Financiële sector standaard: jaarlijkse formele risicoanalyse, vastgesteld door het bestuur. Risico\'s worden beoordeeld op inherent risico (voor maatregelen), control effectiveness (kwaliteit van bestaande maatregelen) en residueel risico (na maatregelen). Residueel risico wordt vergeleken met de risk appetite.',
      tips: 'Gebruik een sectorthreat intelligence rapport als startpunt (ENISA publiceert jaarlijks een dreigingsoverzicht voor energie, gratis beschikbaar). Identificeer de top-10 dreigingen voor jouw organisatie, beoordeel impact en kans, en je hebt een bruikbare eerste risicoanalyse.'
    },
    {
      framework: 'ISO 27001', cls: 'fw-iso',
      required: 'ISO 27001 sectie 6.1.2: de organisatie voert een informatiebeveiligingsrisicoanalyse uit. Vereisten: risico-eigenaren identificeren, risico\'s beoordelen op vertrouwelijkheid/integriteit/beschikbaarheid, risico\'s evalueren ten opzichte van acceptatiecriteria, risicobehandelingsplan opstellen.',
      crossSector: 'Veelgebruikte methode: kwalitatieve analyse (hoog/midden/laag) voor snelheid, aangevuld met kwantitatieve analyse voor de meest kritieke risico\'s. Tools: een eenvoudige risicoheatmap in PowerPoint werkt goed voor bestuurspresentaties en is voor iedereen begrijpelijk.',
      tips: 'Gebruik een risicoheatmap (3x3 matrix van impact vs. kans) als communicatiemiddel naar het bestuur. Iedereen begrijpt "hoog risico = rood". Beperk de heatmap tot de top-10 risico\'s — een lijst van 100 risico\'s is niet actionable.'
    },
    {
      framework: 'NIST CSF', cls: 'fw-cross',
      required: 'NIST CSF Identify functie, Risk Assessment (ID.RA): de organisatie begrijpt de cybersecurityrisico\'s voor systemen, mensen, assets, data en capabilities. NIST FAIR methode maakt risico\'s kwantificeerbaar in financiële termen: verwacht verlies per jaar.',
      crossSector: 'NIST FAIR is beschikbaar als gratis framework. De basisversie — schat de jaarlijkse kans op een incident in en de gemiddelde impact — is al waardevol. "Ransomware heeft 30% kans per jaar, gemiddelde impact €2M, verwacht verlies €600K per jaar" is een concreet getal om investeringen tegen af te wegen.',
      tips: 'Een kwantitatieve risicobenadering (in euro\'s) maakt security-investeringen vergelijkbaar met andere bedrijfsinvesteringen. Dit is een krachtig instrument voor boardroom-discussies: "investering van €200K vermindert verwacht verlies met €600K per jaar."'
    },
    {
      framework: 'CISM', cls: 'fw-cism',
      required: 'CISM domein 2 (Information Risk Management): kernconcepten zijn risk appetite (hoeveel risico accepteert de organisatie), risk tolerance (de bandbreedte rondom de risk appetite), en risk treatment (accepteren, mitigeren, overdragen, vermijden). Alle beslissingen moeten worden gerelateerd aan de risk appetite.',
      crossSector: 'CISM-praktijk: stel de risk appetite vast met het bestuur vóórdat je de risicoanalyse uitvoert. Typische formulering: "We accepteren geen risico\'s die de continuïteit van de energielevering bedreigen." Dit geeft je als HoE/CISO mandaat om beslissingen te nemen.',
      tips: 'Organiseer een 90-minuten sessie met de RvB waarbij je vijf scenario\'s presenteert (van laag naar hoog risico) en vraagt: accepteren we dit of niet? Het antwoord geeft je de risk appetite — en mandaat voor je security-programma.'
    },
    {
      framework: 'DNB Good Practice', cls: 'fw-dnb',
      required: 'DNB benadrukt dat risicoanalyse een cyclisch proces moet zijn: risico\'s veranderen en de analyse moet regelmatig worden bijgewerkt. DNB verwacht dat de uitkomsten van de risicoanalyse direct zijn gekoppeld aan het informatiebeveiligingsbeleid en de beveiligingsmaatregelen.',
      crossSector: 'Financiële sector: de CISO rapporteert kwartaallijks over significante risicowijzigingen aan het bestuur. Bij een nieuw significant risico (nieuwe dreiging of kwetsbaarheid) wordt het bestuur ad-hoc geïnformeerd zonder te wachten op de volgende kwartaalrapportage.',
      tips: 'Koppel je risicoanalyse expliciet aan je beveiligingsmaatregelen in je documentatie: "Maatregel X is ingevoerd om risico Y te mitigeren." Dit is niet alleen goed governance — het maakt je NIS2-audit veel eenvoudiger.'
    }
  ]
},

// ── 9. SECURITY AWARENESS & TRAINING ─────────────────────────────────────────
{
  id: 'awareness',
  name: 'Security awareness & training',
  meta: 'NIS2 · ISO 27001 · CISM',
  frameworks: ['NIS2','ISO27001','CISM'],
  summary: 'Menselijk gedrag is de grootste security-risicofactor en tegelijkertijd de meest kosteneffectieve plek om te investeren. NIS2 vereist expliciete security awareness training voor medewerkers én training voor bestuurders. Een effectief awareness-programma gaat verder dan eenmalige e-learning: het is een doorlopend programma met meetbare gedragsverandering. Phishing-simulaties zijn de meest effectieve maatregel. Segmenteer per doelgroep — bestuurders hebben ander bewustzijn nodig dan operators.',
  details: [
    {
      framework: 'NIS2', cls: 'fw-nis2',
      required: 'Artikel 20 lid 2: het leidinggevend orgaan moet regelmatig specifieke training ontvangen om cybersecurityrisico\'s te kunnen beoordelen. Artikel 21 lid 2g: basistraining voor alle medewerkers op het gebied van cyberhygiëne. Beide zijn verplicht en toetsbaar bij een audit.',
      crossSector: 'Finance (DNB-verwachting): jaarlijkse verplichte security awareness training voor alle medewerkers, aanvullende training voor risicogroepen. Phishing-simulaties minimaal twee keer per jaar. KPI: klikratio onder 5% bij een phishing-simulatie is het standaard streefcijfer.',
      tips: 'Phishing-simulaties zijn de meest effectieve maatregel voor bewustwording. Start met een nul-meting (hoeveel procent klikt?), doe vervolgens training, en herhaal de simulatie. De verbetering is je aantoonbare ROI naar het bestuur.'
    },
    {
      framework: 'ISO 27001', cls: 'fw-iso',
      required: 'ISO 27001 sectie 7.2 (Competence) en 7.3 (Awareness): medewerkers moeten bewust zijn van het informatiebeveiligingsbeleid en de gevolgen van het niet naleven ervan. Annex A.6.3: bewustwording, opleiding en training op het gebied van informatiebeveiliging.',
      crossSector: 'Effectieve programma\'s combineren: jaarlijkse e-learning (basis), maandelijkse phishing-simulaties, kwartaallijkse nieuwsbrief met actuele dreigingen, en jaarlijkse live training voor risicogroepen (finance, HR, management). ISO 27001 auditors kijken naar deelnamepercentages als bewijs.',
      tips: 'Meet de effectiviteit: deelnamepercentage, quizscores, phishing klikratio. Rapporteer deze cijfers aan het management. Bewustwording zonder meting is geen programma — het is hopen dat het werkt.'
    },
    {
      framework: 'CISM', cls: 'fw-cism',
      required: 'CISM benadrukt dat security awareness een gedragsveranderingsprogramma is, geen compliance-exercitie. Effectieve awareness richt zich op specifieke risicogroepen met relevante content: de CFO krijgt training over CEO-fraude, de OT-operator over phishing via USB-sticks, de HR-medewerker over social engineering.',
      crossSector: 'CISM-praktijk: segmenteer per doelgroep. Bestuur: kwartaallijkse briefing over actuele dreigingen (30 minuten, C-suite taal). Management: jaarlijkse tabletop exercise. Medewerkers: maandelijkse micro-learning (3-5 minuten). Technisch personeel: gerichte training op hun specifieke risico\'s.',
      tips: 'Organiseer jaarlijks een "cyber briefing" voor het bestuur: 45 minuten, actuele dreigingen voor de energiesector, twee of drie praktijkcases van andere energiebedrijven, en de vraag: zijn wij hiertegen bestand? Dit verhoogt betrokkenheid en mandaat significant.'
    }
  ]
}

]; // end KB.nl

// ── ENGELSTALIGE VERSIE (zelfde data, vertaalde topic-namen) ─────────────────
const nameMap = {
  'Leveranciersrisico': 'Supplier risk',
  'Incident response & meldplicht': 'Incident response & reporting',
  'Toegangsbeheer & IAM': 'Access management & IAM',
  'OT / ICS-security': 'OT / ICS security',
  'Security governance': 'Security governance',
  'Kwetsbaarheidsbeheer': 'Vulnerability management',
  'Business continuity & veerkracht': 'Business continuity & resilience',
  'Risicoanalyse & -beheer': 'Risk analysis & management',
  'Security awareness & training': 'Security awareness & training'
};

KB.en = KB.nl.map(topic => ({ ...topic, name: nameMap[topic.name] || topic.name }));
