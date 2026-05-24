let DATA = JSON.parse(localStorage.getItem('historia_data_v2') || 'null') || {
  sections: [
    {
      id: 1, name: "1800-talet — Romantiken & Konst", cat: "red",
      subs: [
        { title: "Romantiken", content: "Tre nyckelord: Tillbaka till naturen, Känsla, Fantasi.\n\nEn reaktion mot upplysningens förnuft — nu betonades känslor och natur.\n\nKänd konstnär: Caspar David Friedrich – "Wanderer Above the Sea of Fog" (1818)" },
        { title: "Impressionismen", content: "Intryck är centralt — inte realism utan att fånga en ögonblicksbild.\nGrova penseldrag för att fånga exv. rörelse.\n\nKänd konstnär: Eduard Monet – "Hirondilles" (1873)\nÄven: Vincent Van Gogh, Camille Pissarro" },
        { title: "Expressionismen", content: "Huvudsyftet: uttrycka och förmedla starka känslor.\nKopplad till romantiken.\n\nKänd konstnär: Edward Munch – "Skriet" (1893)" },
        { title: "Musik under 1800-talet", content: "Bizet – "Carmen"\nTjajkovskij – "År 1812"\nGrieg – "Bergakungens sal"\nWagner – "Valkyrieritten"\n\nExpressionism: Igor Stravinskij – "Våroffer"\nImpressionism: Ravel – "Bolero"" },
        { title: "Kända författare", content: "Edgar Allan Poe\nCharles Dickens\nFjodor Dostojevskij\nJane Austen\nGoethe\nAugust Strindberg" }
      ]
    },
    {
      id: 2, name: "Nationalismen", cat: "red",
      subs: [
        { title: "Vad är nationalism?", content: "Centralt:\n• Ett språk\n• En religion\n• Gemensamma seder\n• Gemensam historia\n\nAllt detta inom en nationsgräns.\n\nTvå slag av rörelser:\n• Frihetsrörelser – frigöra nationer\n• Enhetsrörelser – föra samman splittrade folk till en stat" },
        { title: "Napoleonkrigen & Wienkongressen", content: "Nationalismen sprids i och med Napoleonkrigen.\n\nWienkongressen 1815: Syfte att skapa maktbalans i Europa efter Napoleonkrigen.\nStormakterna försökte stoppa frihetssträvanden för att undvika att maktbalansen rubbades.\nMen det gick inte att stoppa — ex. lösgjordes Sydamerika från Spanien/Portugal." },
        { title: "Bismarcks Tysklands enande", content: "Otto von Bismarck: Från löst sammanhängande stater till en nation.\n\nTyskland var splittrat i små stater i början av 1800-t.\nWienkongressen → det tyska förbundet med 38 stater (Preussen & Österrike störst).\nTullunionen 1834 – alla stater utom Österrike.\n\n1862: Bismarck utses till rikskansler, för krig mot Danmark och Frankrike.\n1871: De tyska staterna enas under Kejsar Wilhelm av Preussen.\n\nGemensamt efter enandet: regering, krigsmakt, utrikeshandel, utrikespolitik, tullar, riksdag med lagstiftande makt och allmän rösträtt för män.\n\nBismarck var mot nya ideologier men var den förste att införa sociala reformer." }
      ]
    },
    {
      id: 3, name: "Ideologierna", cat: "red",
      subs: [
        { title: "Liberalismen", content: "Föregångare: Adam Smith, John Stuart Mill\n\nVäxer fram ur upplysningen och franska/amerikanska revolutionen.\n• Står för individens frihet\n• Positiv till franska revolutionen\n• Medelklassen\n• Alla ska ha friheter och rättigheter" },
        { title: "Konservatismen", content: "Föregångare: Edmund Burke\n\nUppkommer som en reaktion MOT den franska revolutionen.\n• Tar avstånd från franska revolutionen\n• Bygga vidare genomtänkt, bevara traditioner\n• Kritisk även mot industriella revolutionen" },
        { title: "Socialismen", content: "Föregångare: Karl Marx, Friedrich Engels\n\nUppstår som en reaktion mot de dåliga förhållandena för arbetare i städerna.\n• Vill ha ett rättvisare samhälle\n• Arbetarklassen\n• Ta bort klassamhället" }
      ]
    },
    {
      id: 4, name: "Imperialismen & Slavhandeln", cat: "red",
      subs: [
        { title: "Imperialismen", content: "The Scramble for Africa – Berlinkongressen 1886.\n\nFler länder industrialiserades → ökad konkurrens om råvaror och marknader.\nRåvaror från Afrika, Asien, Latinamerika → europeiska stormakter tävlar om inflytande → stora imperier skapas." },
        { title: "Triangelhandeln", content: "Världen knöts samman av handelsrutter under 1600–1700-talet.\n\nTriangelhandeln:\n1. Europa exporterade vapen, metall, tyger till Västafrika\n2. Byttes mot slavar i Västafrika\n3. Slavar fördes till Amerika\n4. Tobak och socker såldes tillbaka till Europa" },
        { title: "Slavhandeln & Slaveriet", content: "Konsekvenser: förtryck, rasism, lokal krigsföring.\nPlantageekonomin skapades till stor del pga slavhandeln.\n\nSlaveriet avskaffas efter Amerikanska inbördeskriget 1861–1865.\nMen: vissa länder behöll systemet. Engelsmännen höll sig med slavar i Indien långt in på 1900-t.\n\nOBS: Dubbelmoralen hos europeiska länder var slående." },
        { title: "Opiumkriget – Kina", content: "1839–1842: Engelsmännen smugglade in opium från Indien till Kina.\nDen kinesiske kejsaren förbjöd handeln, beslagtog opium och dumpade det.\nEngland förklarar krig → Opiumkriget.\n\nKina förlorar → tvingas öppna fem handelsstäder inkl. Hong Kong som blev brittiskt protektorat (fram till 1997)." }
      ]
    },
    {
      id: 5, name: "Upptäckter & Uppfinningar (1700–1800-tal)", cat: "green",
      subs: [
        { title: "Vetenskap & biologi", content: "1735: Carl von Linné – klassificering av växter och djur\nCa 1755: Evolutionskritik – Buffon: människor och apor gemensamt ursprung, Jorden 75 000 år\n1803: Daltons Atomteori – ämnena är uppbyggda av atomer och molekyler\n1831: Cellkärnan och kloroform upptäcks\n1858: Cellpatologi – Neanderthalmänniskan upptäcks\n1859: Darwin – "Om arternas uppkomst" (konflikt mot bibeln)\n1871: Darwin – kopplingen människa/apa" },
        { title: "Fysik & kemi", content: "1762: Galvani – elektricitet får grodlår att röra sig\nCa 1780: Alessandro Volta – det första batteriet\n1770: Lavoisier – upptäcker syret (avrättas med giljotin 1794)\n1848: Kelvin – absoluta nollpunkten\n1861: Maxwell – elektromagnetisk strålning\n1869: Mendelejev – Periodiska systemet\n1895: Röntgen – röntgenstrålning (Nobelpris 1901)\n1898: Marie Curie – radioaktiviteten (Nobelpris 1903 fysik, 1911 kemi)" },
        { title: "Astronomi", content: "1781: Herschel – upptäcker Uranus (första 'nya' planeten)\n1802: Herschel – dubbelstjärnor är gravitationsbundna\n1838: Bessel – bestämmer första gången avståndet till en stjärna\n1846: Galle & d'Arrest – hittar Neptunus" },
        { title: "Teknik & uppfinningar", content: "1804: Ångloket – Richard Trevithick (Newcomen & Watt före)\n1825: Ånglok i trafik Shildon–Stockton, Storbritannien\n1807: Ångbåten – Fulton & Livingstone\n1810: Konservering – Nickolas Appert\n1826: Första fotografiet – Joseph Nicéphore Niépce (8 timmars exponering!)\n1837: Telegrafen – Morse" }
      ]
    },
    {
      id: 6, name: "Första Världskriget (1914–1918)", cat: "red",
      subs: [
        { title: "Bakgrund & orsaker", content: "Efter Tysklands enande 1871 sökte Bismarck bevara freden genom allianser.\n1882: Trippelalliansen – Tyskland, Österrike, Italien.\n\nOrsaker till kriget:\n• Nationalism i Balkan → Osmanska riket sönderfaller\n• Nationalism hotade Österrike-Ungern\n• Serbien ville skapa stor-serbiskt rike och sökte stöd hos Ryssland" },
        { title: "Händelseförlopp mot kriget", content: "1878: Ny Wienkongress – Österrike-Ungern fick ockupera Bosnien-Herzegovina\n1903: Nationalism växer i Serbien, öppen fientlighet mot Österrike-Ungern\n1904–1905: Rysk-japanska kriget – Ryssland förlorar, kan ej stödja Serbien\n1908: Österrike erövrar Bosnien som buffert mot Ryssland\n1912: Första Balkankriget – Serbien mot Ottomanska riket\n1913: Andra Balkankriget – Österrike blandar sig i, Serbien tvingas ge upp Albanien\n\n28 juni 1914: Tronarvinge Frans Ferdinand mördas i Sarajevo av serbiska nationalister (Gavrilo Princip).\n23 juli: Österrike-Ungern ger Serbien ultimatum → Serbien vägrar.\n28 juli 1914: Österrike-Ungern förklarar krig mot Serbien → kriget startar." },
        { title: "Allianserna", content: "Triple Entente: Frankrike, Ryssland, England\nCentralmakterna: Tyskland, Österrike-Ungern (+ Ottomanska riket)\n\nTyskland anföll Frankrike GENOM neutrala Belgien.\nEngland gav stöd åt Belgien → förklarar krig mot Tyskland 4 augusti 1914.\n\n1917: USA går in på Ententens sida (efter att Tyskland sänkt civila fartyg inkl. Lusitania – 139 amerikaner dog)." },
        { title: "Skyttegravskriget", content: "Båda sidor grävde skyttegravar. Under hela 1915 tog Frankrike/England bara 3 mil skyttegravar.\n\nLivet i skyttegravarna:\n• Kemiska vapen: tårgas, senapsgasen, klor, fosgen\n• Skyttegravsfot: fötter konstant i fukt/kyla → syrebrist, kallbrand\n• Löss och råttor – dysenteri, tyfus, kolera\n• Julen 1914: Tyskar och engelsmän klev ur skyttegravarna och firade jul tillsammans" },
        { title: "Versaillesfreden", content: "Tyskland ensamt ansvarigt för kriget → stora skadestånd.\nTyskland fick lämna kolonier och europeiska landområden.\nTyskland förbjöds hålla krigsmakt.\nHabsburgska väldet delas upp: Österrike, Ungern, Tjeckoslovakien, Jugoslavien.\n\nWoodrow Wilson (USA) ville skapa Nationernas Förbund (föregångaren till FN).\nNF bildades 1920 – men USA stod utanför!" }
      ]
    },
    {
      id: 7, name: "Ryska Revolutionen", cat: "red",
      subs: [
        { title: "Bakgrund", content: "Rysk-japanska kriget 1904–1905: Ryssland förlorar → inre oroligheter.\nEfter 1905: Duman (ryska parlamentet) skapades.\nMen: Tsar Nikolai II behöll makten över byråkrati och militär – ville ej dela makt.\n\n1915: Progressivt block bildas i Duman (konservativa till radikala socialister).\nNikolai avsätter Duman." },
        { title: "Rasputin", content: "Nikolai beger sig ut i fält under 1:a VK.\nTsarinnan Alexandra hade Rasputin som närmaste rådgivare – kallades 'den galne munken'.\n\nRasputin mördas 1916 → regeringen mot revolution." },
        { title: "Februarirevolutionen 1917", content: "Matbrist under kriget → oroligheter i S:t Petersburg.\nTsaren ger order om militärt ingripande – men soldaterna slöt sig till revolutionärerna.\n\nDuman tillsätter provisorisk regering (mars 1917).\nKadettpartiet dominerar, men Kerenskij (socialistrevolutionär) fick plats.\nKerenskij blir premiärminister.\nTsaren abdikerar utan protester." },
        { title: "Oktoberrevolutionen 1917", content: "Lenin anländer till Petrograd april 1917 – kräver all makt åt sovjeterna och fred.\nBolsjevikerna försöker ta makten i juni – misslyckas, Lenin flyr.\n\nNatten 6–7 november: Bolsjevikerna tar över telefonstationer, järnvägsstationer, elverket i S:t Petersburg.\nEtt krigsfartyg riktar kanoner mot Vinterpalatset.\nProvisoriska regeringen avskaffad.\nLenin ordförande i 'folkkommissariernas råd'.\nTrotsky = Lenins högra hand." },
        { title: "Efterspelet", content: "Tsarfamiljen avrättas 17 juli 1918.\n\nNyckelorsaker till Bolsjevikmakt:\n• 1917 då demokratin föll och anarki bröt ut\n• Lenin & Trotsky tog ledarskapet\n• Lenin vände sig till soldater och arbetare utmattade av krig\n\nBolsjevikerna vann bara ¼ av rösterna i fria val → förbjöd den konstituerade församlingen.\nProletariatets diktatur genomförs.\n\nInbördeskrig: Vita (mot bolsjevism) vs Röda 1918–1921.\nDe röda vann." }
      ]
    },
    {
      id: 8, name: "Konst & Musik 1900–1920-tal", cat: "green",
      subs: [
        { title: "Modernismen i musik", content: "Arnold Schönberg: Tolvtonstekniken – alla 12 toner i kromatiska skalan ingår en gång.\nEx: Pierrot lunaire (1912)\nModernism = bryta normer och konventioner.\n\nMaurice Ravel: Bolero (1928) – impressionism/modernism.\n\nIgor Stravinskij: 'Våroffer' (1913) – skandalföreställning, expressionism." },
        { title: "Jazz, Blues & Gospel (USA)", content: "Modern musik bygger i grunden på slaverisånger.\n\nJazz: The Original Dixieland Jazz Band – 'Tiger Rag' (1917)\nBlues: Mamie Smith – 'Crazy Blues' (1920)" }
      ]
    },
    {
      id: 9, name: "Rasbiologiska Institutet", cat: "yellow",
      subs: [
        { title: "Herman Lundborg", content: "Chef för Rasbiologiska institutet i Uppsala.\n\n1924: Bjöd in nazisten Eugen Fischer till Uppsala.\nHärifrån hämtade nazisterna idéer och inspiration till sin rasideologi." },
        { title: "Hyckleri & Ironi", content: "Lundborg var yrkesrasist – men fick barn med Maria Isaksson, en kvinna av 'östbaltisk ras' och 'lapsk blandtyp'.\nDetta var exakt den blandning han ansåg var 'gift för samhällskroppen'.\n\n1936: Gifte sig med Maria (han 68, hon 43).\nTycks ha låtit sterilisera sin egen son för att det 'rasmässigt dåliga arvet' inte skulle föras vidare." }
      ]
    }
  ],
  cards: [
    // IDEOLOGIER
    { id: 1, type: "flash", topic: "Ideologier", q: "Vad stod liberalismen för och vilka var föregångarna?", a: "Föregångare: Adam Smith, John Stuart Mill.\nIndividens frihet, positiv till franska revolutionen, medelklassen. Alla ska ha friheter och rättigheter." },
    { id: 2, type: "flash", topic: "Ideologier", q: "Vad stod konservatismen för och vem var föregångare?", a: "Föregångare: Edmund Burke.\nReaktion MOT franska revolutionen. Bevara traditioner, bygga vidare genomtänkt, kritisk mot industriella revolutionen." },
    { id: 3, type: "flash", topic: "Ideologier", q: "Vad stod socialismen för och vilka var föregångarna?", a: "Föregångare: Karl Marx, Friedrich Engels.\nReaktion mot dåliga arbetsförhållanden i städerna. Rättvisare samhälle, ta bort klassamhället, arbetarklassen." },
    // NATIONALISM
    { id: 4, type: "flash", topic: "Nationalismen", q: "Vad är skillnaden mellan frihetsrörelser och enhetsrörelser?", a: "Frihetsrörelser: Syfte att frigöra nationer.\nEnhetsrörelser: Syfte att föra samman folk som var splittrade i små stater till en nation." },
    { id: 5, type: "flash", topic: "Nationalismen", q: "Vad var Wienkongressen 1815 och vad var syftet?", a: "En kongress som sammankallades efter Napoleonkrigen. Syftet var att skapa maktbalans i Europa." },
    { id: 6, type: "flash", topic: "Nationalismen", q: "Hur enades Tyskland och vem ledde processen?", a: "Otto von Bismarck blev rikskansler 1862 och förde krig mot Danmark och Frankrike. 1871 enades de tyska staterna under Kejsar Wilhelm av Preussen." },
    // 1:A VK
    { id: 7, type: "flash", topic: "Första Världskriget", q: "Vad startade 1:a världskriget och när?", a: "28 juni 1914: Österrike-Ungerns tronarvinge Frans Ferdinand mördades i Sarajevo av den serbiske nationalisten Gavrilo Princip. 28 juli 1914 förklarade Österrike-Ungern krig mot Serbien." },
    { id: 8, type: "flash", topic: "Första Världskriget", q: "Vilka länder tillhörde Triple Entente respektive Centralmaterna?", a: "Triple Entente: Frankrike, Ryssland, England.\nCentralmakterna: Tyskland, Österrike-Ungern (+ Ottomanska riket)." },
    { id: 9, type: "flash", topic: "Första Världskriget", q: "Vad innebar Versaillesfreden för Tyskland?", a: "Tyskland blev ensamt ansvarigt för kriget, fick betala stora skadestånd, lämna kolonier och europeiska landområden, och förbjöds hålla krigsmakt." },
    { id: 10, type: "flash", topic: "Första Världskriget", q: "Varför gick USA in i kriget 1917?", a: "Framförallt som protest mot att Tyskland sänkte civila fartyg – bl.a. Lusitania där 139 amerikaner dog." },
    // RYSKA REV
    { id: 11, type: "flash", topic: "Ryska Revolutionen", q: "Vad var Februarirevolutionen 1917?", a: "Matbrist ledde till oroligheter i S:t Petersburg. Soldater slöt sig till revolutionärerna. Duman tillsatte en provisorisk regering. Tsaren abdikerade." },
    { id: 12, type: "flash", topic: "Ryska Revolutionen", q: "Vad hände natten 6–7 november 1917?", a: "Oktoberrevolutionen: Bolsjevikerna tog över telefonstationer, järnvägsstationer och elverket. Vinterpalatset omringades. Den provisoriska regeringen avskaffades. Lenin blev ordförande." },
    { id: 13, type: "flash", topic: "Ryska Revolutionen", q: "Varför lyckades bolsjevikerna ta makten?", a: "1. Demokratin föll och anarki bröt ut 1917.\n2. Lenin & Trotsky tog ledarskapet.\n3. Lenin vände sig till soldater och arbetare utmattade av krig." },
    { id: 14, type: "flash", topic: "Ryska Revolutionen", q: "Vad hände med tsarfamiljen?", a: "17 juli 1918 avrättades hela tsarfamiljen. Rykten om att dottern Anastasia överlevde motbevisades när kropparna hittades 2007." },
    // UPPFINNINGAR
    { id: 15, type: "flash", topic: "Uppfinningar", q: "Vad upptäckte Marie Curie och vilka Nobelpris fick hon?", a: "Radioaktiviteten (tillsammans med maken). Nobelpris 1903 i fysik och 1911 i kemi." },
    { id: 16, type: "flash", topic: "Uppfinningar", q: "Vem skapade det första fotografiet och när?", a: "Joseph Nicéphore Niépce 1826. Bilden krävde 8 timmars exponering." },
    { id: 17, type: "flash", topic: "Uppfinningar", q: "Vem skapade det periodiska systemet?", a: "Dmitri Mendelejev publicerade det 1869 (Lothar Mayer kom till ungefär samma slutsats samtidigt)." },
    // RASBIOLOGI
    { id: 18, type: "flash", topic: "Rasbiologiska institutet", q: "Vad var Herman Lundborgs roll och vad var ironin med hans liv?", a: "Chef för Rasbiologiska institutet i Uppsala. 1924 bjöd han in nazisten Eugen Fischer.\nIronin: Han var yrkesrasist men fick barn med en kvinna av 'östbaltisk/lapsk' härkomst – exakt det han ansåg vara 'gift för samhällskroppen'." },
    // ÖVNINGSFRÅGOR
    { id: 19, type: "q", topic: "Ideologier", q: "Förklara skillnaderna mellan liberalism, konservatism och socialism. Vem representerar varje ideologi?", a: "Liberalism: Individens frihet, positiv till franska rev., medelklassen. (Smith, Mill)\nKonservatism: Bevara traditioner, mot franska rev., kritisk mot industrin. (Burke)\nSocialism: Rättvisa för arbetarna, ta bort klassamhället. (Marx, Engels)", hint1: "Tänk: vem var de riktade mot/till? Medelklass, adel eller arbetare?", hint2: "Liberalism = frihet. Konservatism = bevara. Socialism = jämlikhet för arbetarna." },
    { id: 20, type: "q", topic: "Första Världskriget", q: "Förklara steg för steg hur mordet i Sarajevo ledde till ett världskrig.", a: "1. Frans Ferdinand mördas 28 juni 1914 av Gavrilo Princip.\n2. Österrike-Ungern ger Serbien ultimatum.\n3. Serbien vägrar, Ryssland stödjer Serbien.\n4. Österrike-Ungern (stött av Tyskland) förklarar krig 28 juli.\n5. Ryssland mobiliserar → krigar mot Österrike/Tyskland.\n6. Frankrike (i allians med Ryssland) dras in.\n7. Tyskland angriper Frankrike via neutrala Belgien.\n8. England stödjer Belgien → förklarar krig mot Tyskland 4 aug.", hint1: "Följ allianserna: Triple Entente vs Centralmaterna. Vem drog in vem?", hint2: "Mordet → ultimatum → Serbien vägrar → Österrike krigar → Ryssland in → Frankrike in → Belgien invaderas → England in." },
    { id: 21, type: "q", topic: "Ryska Revolutionen", q: "Vad var skillnaden mellan Februarirevolutionen och Oktoberrevolutionen?", a: "Februarirevolutionen (mars 1917): Folklig revolt pga matbrist, soldater slöt sig till folket, tsaren abdikerade, provisorisk regering tillsattes.\n\nOktoberrevolutionen (nov 1917): Lenin & bolsjevikerna organiserade ett statskupp, tog kontrollen över nyckelinfrastruktur och avsatte den provisoriska regeringen.", hint1: "Februari = spontan folklig revolution. Oktober = organiserat kupp av bolsjevikerna.", hint2: "Feb: Tsar avsätts, provisorisk regering in. Okt: Lenin tar över, kommunistiskt styre börjar." },
    { id: 22, type: "q", topic: "Nationalismen", q: "Hur gick Tysklands enande till och vilken roll spelade Bismarck?", a: "Bismarck utsågs till rikskansler 1862. Han förde krig mot Danmark och Frankrike för att ena de tyska staterna.\n1871 enades de under Kejsar Wilhelm av Preussen.\nGemensamt fick de: regering, krigsmakt, utrikeshandel, riksdag med allmän rösträtt för män.", hint1: "Tänk: vad hände 1862 och 1871?", hint2: "1862: Bismarck rikskansler. Krig mot Danmark & Frankrike. 1871: Kejsar Wilhelm → enat Tyskland." }
  ]
};

let nextSecId = Math.max(...DATA.sections.map(s => s.id), 0) + 1;
let nextCardId = Math.max(...DATA.cards.map(c => c.id), 0) + 1;

function save() { localStorage.setItem('historia_data_v2', JSON.stringify(DATA)); }

function goTo(page, tab) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  tab.classList.add('active');
  if (page === 'flash') renderFlash();
  if (page === 'ovning') renderOvning();
}

function renderSections() {
  const list = document.getElementById('sections-list');
  list.innerHTML = DATA.sections.map(sec => `
    <div class="section">
      <div class="section-header" onclick="toggleSec(this)" data-id="${sec.id}">
        <div class="section-label">
          <span class="section-pill ${sec.cat === 'green' ? 'green' : sec.cat === 'yellow' ? 'yellow' : ''}">
            ${sec.cat === 'red' ? 'Viktigt' : sec.cat === 'green' ? 'Lär dig' : 'Extra'}
          </span>
          <span class="section-title-text">${sec.name}</span>
        </div>
        <span class="section-arrow">▾</span>
      </div>
      <div class="section-body">
        ${sec.subs.map(sub => `
          <div class="subsection">
            <h3>${sub.title}</h3>
            <pre style="white-space:pre-wrap;font-family:'DM Sans',sans-serif;font-size:0.92rem;line-height:1.7">${sub.content}</pre>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function toggleSec(header) {
  const body = header.nextElementSibling;
  header.classList.toggle('open');
  body.classList.toggle('open');
}

function openModal() {
  document.getElementById('sec-name').value = '';
  document.getElementById('sec-cat').value = 'red';
  document.getElementById('subsections-inputs').innerHTML = `
    <label>Underavsnitt 1 — titel</label>
    <input type="text" class="sub-title" placeholder="t.ex. Orsaker">
    <label>Underavsnitt 1 — innehåll</label>
    <textarea class="sub-content" placeholder="Skriv fakta här..."></textarea>
  `;
  document.getElementById('modal-section').classList.add('open');
}
function addSubInput() {
  const wrap = document.getElementById('subsections-inputs');
  const n = wrap.querySelectorAll('.sub-title').length + 1;
  wrap.insertAdjacentHTML('beforeend', `
    <label>Underavsnitt ${n} — titel</label>
    <input type="text" class="sub-title" placeholder="t.ex. Konsekvenser">
    <label>Underavsnitt ${n} — innehåll</label>
    <textarea class="sub-content" placeholder="Skriv fakta här..."></textarea>
  `);
}
function saveSection() {
  const name = document.getElementById('sec-name').value.trim();
  if (!name) return alert('Skriv ett ämnesnamn!');
  const cat = document.getElementById('sec-cat').value;
  const titles = [...document.querySelectorAll('.sub-title')].map(i => i.value.trim());
  const contents = [...document.querySelectorAll('.sub-content')].map(i => i.value.trim());
  const subs = titles.map((t, i) => ({ title: t || 'Avsnitt', content: contents[i] || '' }));
  DATA.sections.push({ id: nextSecId++, name, cat, subs });
  save(); renderSections(); closeModal('modal-section');
}

function openCardModal() {
  document.getElementById('card-type').value = 'flash';
  document.getElementById('card-topic').value = '';
  document.getElementById('card-q').value = '';
  document.getElementById('card-a').value = '';
  document.getElementById('card-hint1').value = '';
  document.getElementById('card-hint2').value = '';
  document.getElementById('card-hints-wrap').style.display = 'none';
  document.getElementById('card-type').onchange = function () {
    document.getElementById('card-hints-wrap').style.display = this.value === 'q' ? 'block' : 'none';
  };
  document.getElementById('modal-card').classList.add('open');
}
function saveCard() {
  const type = document.getElementById('card-type').value;
  const topic = document.getElementById('card-topic').value.trim();
  const q = document.getElementById('card-q').value.trim();
  const a = document.getElementById('card-a').value.trim();
  if (!q || !a) return alert('Fyll i fråga och svar!');
  const card = { id: nextCardId++, type, topic: topic || 'Övrigt', q, a };
  if (type === 'q') {
    card.hint1 = document.getElementById('card-hint1').value.trim();
    card.hint2 = document.getElementById('card-hint2').value.trim();
  }
  DATA.cards.push(card);
  save(); updateFcFilter(); closeModal('modal-card');
}
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

let fcCards = [], fcIdx = 0, fcCorrect = 0, fcTotal = 0;

function updateFcFilter() {
  const sel = document.getElementById('fc-filter');
  const cur = sel.value;
  const topics = [...new Set(DATA.cards.filter(c => c.type === 'flash').map(c => c.topic))];
  sel.innerHTML = '<option value="all">Alla ämnen</option>' +
    topics.map(t => `<option value="${t}" ${t === cur ? 'selected' : ''}>${t}</option>`).join('');
}

function renderFlash() { updateFcFilter(); initFlash(); }

function initFlash() {
  const filter = document.getElementById('fc-filter').value;
  let pool = DATA.cards.filter(c => c.type === 'flash');
  if (filter !== 'all') pool = pool.filter(c => c.topic === filter);
  fcCards = pool.sort(() => Math.random() - 0.5);
  fcIdx = 0; fcCorrect = 0; fcTotal = 0;
  renderFcScore(); showFcCard();
}

function showFcCard() {
  const inner = document.getElementById('fc-inner');
  inner.classList.remove('flipped');
  const empty = document.getElementById('fc-empty');
  if (fcCards.length === 0) {
    empty.style.display = 'block';
    document.querySelector('.fc-wrap').style.display = 'none';
    document.querySelector('.fc-nav').style.display = 'none';
    return;
  }
  empty.style.display = 'none';
  document.querySelector('.fc-wrap').style.display = 'block';
  document.querySelector('.fc-nav').style.display = 'flex';
  const c = fcCards[fcIdx];
  document.getElementById('fc-q').textContent = c.q;
  document.getElementById('fc-a').textContent = c.a;
  document.getElementById('fc-progress').textContent = `Kort ${fcIdx + 1} av ${fcCards.length}`;
}

function flipCard() { document.getElementById('fc-inner').classList.toggle('flipped'); }
function fcNav(dir) { fcIdx = (fcIdx + dir + fcCards.length) % fcCards.length; showFcCard(); }
function markCorrect(yes) { fcTotal++; if (yes) fcCorrect++; renderFcScore(); fcNav(1); }
function renderFcScore() {
  const pct = fcTotal > 0 ? Math.round(fcCorrect / fcTotal * 100) : 0;
  document.getElementById('fc-fill').style.width = pct + '%';
  const txt = document.getElementById('fc-score-txt');
  txt.textContent = fcTotal > 0 ? pct + '%' : '–';
  txt.className = 'score-num ' + (pct >= 80 ? 'good' : fcTotal > 0 ? 'bad' : '');
}

let qCards = [], qIdx = 0, qCorrect = 0, qTotal = 0;

function renderOvning() {
  qCards = DATA.cards.filter(c => c.type === 'q').sort(() => Math.random() - 0.5);
  qIdx = 0; qCorrect = 0; qTotal = 0;
  renderQScore(); showQ();
}

function showQ() {
  const wrap = document.getElementById('q-area-wrap');
  const empty = document.getElementById('q-empty');
  if (qCards.length === 0) { empty.style.display = 'block'; wrap.innerHTML = ''; return; }
  empty.style.display = 'none';
  const c = qCards[qIdx];
  wrap.innerHTML = `
    <div class="q-area">
      <div class="q-meta">Fråga ${qIdx + 1} av ${qCards.length} — ${c.topic}</div>
      <div class="q-text">${c.q}</div>
    </div>
    <div class="hint-btns">
      ${c.hint1 ? `<button class="hint-btn little" onclick="showHint('small')">💡 Liten ledtråd</button>` : ''}
      ${c.hint2 ? `<button class="hint-btn much" onclick="showHint('big')">🔦 Stor ledtråd</button>` : ''}
    </div>
    <div class="hint-box" id="hint-box">${c.hint1 || ''}</div>
    <div class="hint-box big" id="hint-box-big">${c.hint2 || ''}</div>
    <div class="answer-area">
      <textarea id="ans-input" placeholder="Skriv ditt svar här..."></textarea>
    </div>
    <div class="feedback" id="q-feedback"></div>
    <div class="q-actions">
      <button class="check-btn" onclick="checkAnswer()">Kolla svaret</button>
      <button class="next-btn" onclick="nextQ()">Nästa fråga →</button>
    </div>
  `;
}

function showHint(size) {
  const c = qCards[qIdx];
  if (size === 'small') {
    const b = document.getElementById('hint-box');
    b.textContent = c.hint1;
    b.classList.toggle('show');
  } else {
    const b = document.getElementById('hint-box-big');
    b.textContent = c.hint2;
    b.classList.toggle('show');
  }
}

function checkAnswer() {
  const ans = document.getElementById('ans-input').value.trim();
  if (!ans) return;
  const c = qCards[qIdx];
  const fb = document.getElementById('q-feedback');
  fb.innerHTML = `<strong>Facit:</strong><br><pre style="white-space:pre-wrap;font-family:'DM Sans',sans-serif;font-size:0.88rem;margin-top:0.4rem">${c.a}</pre>`;
  fb.className = 'feedback show incorrect';
}

function nextQ() {
  const ansEl = document.getElementById('ans-input');
  const ans = ansEl ? ansEl.value.trim() : '';
  const fb = document.getElementById('q-feedback');
  if (fb && fb.classList.contains('show') && ans) {
    if (confirm('Räkna det som rätt?')) { qCorrect++; }
    qTotal++;
  }
  qIdx = (qIdx + 1) % qCards.length;
  renderQScore(); showQ();
}

function renderQScore() {
  const pct = qTotal > 0 ? Math.round(qCorrect / qTotal * 100) : 0;
  document.getElementById('q-fill').style.width = pct + '%';
  const txt = document.getElementById('q-score-txt');
  txt.textContent = qTotal > 0 ? `${qCorrect}/${qTotal} (${pct}%)` : '–';
  txt.className = 'score-num ' + (pct >= 80 ? 'good' : qTotal > 0 ? 'bad' : '');
}

renderSections();
updateFcFilter();
initFlash();
