# Web technologies

## Synopsis
Homeworks for school subject Web technologies.
Every single homework is in own directory.
##Licence
MIT license
## Homework#1 HTML+CSS

Vytvorte si osobnú web stránku. Je potrebné, aby zadanie spĺňalo nasledovné požiadavky:
1.	Dokument zostavte podľa odporúčaní HTML 5 (nesmie chýbať DOCTYPE).

2.	Stránku validujte podľa HTML5 a CSS3. Pokiaľ pri tvorbe CSS chcete použiť vlastnosti, ktoré ešte nie sú štandardizované, t.j. využívajú predpony výrobcu prehliadačov (vendor prefix) je to možné. Takéto pravidlá nemusia byť validné. Všetky ostatné však áno.
3.	Celá osobná web stránka sa bude skladať z 3 podstránok - "O mne", "Môj rozvrh", "Kontakt". Bude napísaná v slovenskom jazyku a s použitím diakritiky.
4.	Používajte len značky s atribútami, ktoré povoľuje HTML 5. Pri definovaní štruktúry stránky maximálne využili sémantické značky, ktoré so sebou prináša HTML5 (header, footer, nav, section, article, address, ...). Príklad štruktúry stránky bez formátovania môžete vidieť na obrázkoch pod zadaním.Podľa potreby doplňte do štruktúry stránok identifikátory a triedy. Rozlišujte medzi nimi a používajte ich správne.
5.	Každá podstránka bude obsahovať nadpisy dvoch úrovní.
6.	Navigáciu riešte pomocou nečíselného zoznamu. Všetky linky budú funkčné a budú umožňovať prepínanie medzi vytvorenými podstránkami. Pomocou CSS upravte navigáciu medzi podstránkami tak, aby ste vytvorili horizontálne menu pod hlavičkou dokumentu.
7.	Podstránka "O mne" bude obsahovať 1-2 odstavce, ktoré vás budú charakterizovať. Je jedno, či sa zameráte na osobné koníčky alebo na prácu v škole. Do tejto časti vložte aj svoju fotografiu. Pri obrázku nezabudnite na atribút "alt", "height" a "width". 
Stránka bude okrem toho obsahovať jeden nečíslovaný zoznam podľa vašeho výberu, ktorého položky sa budú zobrazovať vertikálne. Ak vás nenapadne nič iné, tak tam uveďte "V súčasnosti študujem na FEI STU v Bratislave a tento semester mám tieto predmety ...". 
Do podstránky zároveň doplňte prvok <aside>, vo vnútri ktorého uvediete nejaký citát, porekadlo, heslo alebo motto, ktoré vás inšpiruje.
Pri formátovaní podstránky "O mne" nechajte vašu fotografiu obtekať textom, pričom fotografia bude na ľavej strane webstránky a text bude obtekať z pravej strany. Doplnené heslo (motto, porekadlo, citát) zvýraznite (minimálne veľkosťou písma - viď obrázky nižšie) a vsaďte ho do textu tak, aby do neho prirodzene zapadal. Aby vyniklo obtekanie textu je potrebné, aby ste textu mali dostatočné množstvo. V prípade potreby preto chýbajúci text doplňte do stránky.
8.	Podstránka "Môj rozvrh" bude obsahovať váš osobný rozvrh na fakulte vrátane telesnej kultúry. Rozvrh bude vyzerať podobne ako na školských web stránkach od 7:00 do 21:00 s tým, že bunky, kde nemáte vyučovanie, budú spojené a prázdne. Ak sa pozriete na nižšie uvedený obrázok, tak to znamená, že v riadku pondelok bude len 6 buniek: 1.hodina, 2-3. hodina, 4-5. hodina, 6-8. hodina, 9-10. hodina a 11-14. hodina. Predpokladá sa využitie  atribútov "colspan" alebo "rowspan". 
Pri formátování podstránky "Môj rozvrh" odlíšte graficky prednášky, cvičenia a telesnú kultúru.
9.	Podstránka "Kontakt" bude obsahovať vaše kontaktné informácie s dôrazom na elektronickú možnosť kontaktovania.
10.	Nezabudnite na názov celej stránky.

![alt tag](http://showcase.stranovsky.sk/webtech/homework1/preview.jpg)
http://showcase.stranovsky.sk/webtech/homework1

##Homework#2 HTML+CSS
1.	Vytvorte validné web stránky (HTML 5), na ktorých zobrazíte vybrané geografické údaje.
2.	Na Internete si vyhľadajte čo najjednoduchšiu voľne dostupnú mapu Slovenska. Nezabudnite neskôr na Vašej stránke uviesť klikateľný odkaz na stránku, odkiaľ ste ju prevzali.
3.	Vytvorte web stránku s mapou, kde budú zvýraznené 4 vybrané mestá. Z mapy alebo zo stránky musí byť jasné, ktoré 4 mestá sú aktívne (najlepšie pomocou markerov). Štruktúra vytvorenej webstránky by mala byť v súlade so špecifikáciou HTML5 (treba používať sémantické značky).
4.	Po nabehnutí myšou nad aktívnu oblasť zobrazte vedľa markera zvolené geografické údaje ako je napríklad počet obyvateľov, rozloha, priemysel, resp. vysoké školy v danej oblasti, atď. Na dosiahnutie požadovanej funkcionality používajte kaskádne štýly, t.j. nie klikaciu mapu.
5.	Informácie na stránke musia byť v kódovaní UTF-8.
6.	Zadanie formátujte len pomocou CSS (žiadne fyzické HTML štýly).
7.	Validitu vytvoreného dokumentu skontrolujte pomocou validátora (HTML aj CSS).


##Homework#3 Formuláre
Vytvorte váš vlastný zmysluplný formulár. Zameranie formuláru si môžete určiť sami, musia však byť splnené nasledovné požiadavky:

1.	formulár musí obsahovať minimálne:
o	2x jednoriadkové textové pole,
o	viacriadkové textové pole (textarea),
o	zaškrtávacie pole (checkbox),
o	prepínač (radio button) s prednastavenou hodnotou,
o	rozbaľovací zoznam (combobox),
o	skryté textové pole, do ktorého vložíte svoje meno.
2.	vo formulári bude potrebné odosielať položky dátum narodenia, pohlavie, vek a rodné číslo vrátane lomítka. Zabezpečte, aby sa po vyplnení rodného čísla (zadané rodné číslo musí spĺňať požiadavky na rodné číslo) položky dátum narodenia, pohlavie a vek predvyplnili údajmi, ktoré je možné z neho odvodiť. Zároveň zabezpečte, aby v prípade, že sú údaje neplatné, formulár nebolo možné odoslať. T.j. skontrolujte, či zadané pohlavie, vek a dátum narodenia zodpovedajú uvedenému rodnému číslu, keďže tieto položky musia pre účely zadania ostať prepisovateľné. 
Pozn.: pri vypĺňaní formuláru nemusíte zadávať vlastné rodné číslo, môžete si vygenerovať náhodné číslo.
3.	vo formulári budú minimálne 2 položky vzájomne prepojené, t.j. napr. obsah druhého rozbaľovacieho zoznamu bude závisieť od výberu položky v prvom rozbaľovacom zozname alebo časť formuláru sa zobrazí až po zaškrtnutí prepínača alebo zaškrtávacieho poľa a pod.
4.	v jednom jednoriadkovom textovom poli musí byť mailová adresa, ktorá bude obsahovať zavináč, minimálne 2 domény, pričom vrcholová doména bude mať 2-4 znaky. Pred zavináčom musia byť minimálne 3 znaky.
5.	minimálne štyri povinné položky formulára musia byť vyznačené. 
6.	pri jednotlivých položkách formulára poskytnite užívateľovi nápovedu, ako má danú položku vyplniť. Pri zlom vyplnení položky je treba dať užívateľovi hneď po jej opustení vedieť (t.j. nie až pri odosielaní formulára), v čom presne spočíva chyba, pre ktorú sa formulár nedá odoslať (aj v prípade previazanosti položiek). 

Formulár musí mať prijateľný vzhľad (t.j. jednotlivé položky v ňom nemôžu byť len "nahádzané", ale musia byť pekne sformátované a zarovnané). Hodnotí sa aj grafický dojem.
Odovzdanie zadania bude spočívať v troch bodoch (všetky tri budú súčasťou bodovania):

##Homework#4 CSS a fotogaléria

Pomocou JavaScriptu vytvorte galériu obrázkov, ktoré sú uložené v adresári “images”. Do adresára si vložte minimálne 5 vlastných obrázkov. 

Na titulnej stránke sa vám zobrazia ako náhlady zmenšené kópie obrázkov. 

Po kliknutí na náhľad sa vybraný obrázok v plnej veľkosti (treba ju však obmedziť rozmermi okna) zobrazí vo vrstve nad stránkou, kde sa zároveň zobrazí aj názov obrázku a jeho opis (podobná funkcionalita je implementovaná na Facebook-u, pozrite obrázok nižšie). Vo vrstve sa zobrazia tiež šipky na posúvanie sa doprava a doľava a tlačidlo na spustenie slideshow. 

Informácie o mene súboru s obrázkom, názve obrázku a popise obrázku čerpajte z xml dokumentu alebo z json štruktúry (jedno z toho). Na tento účel využite priložené súbory (xml, json), v ktorých si údaje (nie štruktúru) aktualizujte na základe vami použitých obrázkov.

Vzor funkcionality zobrazovania obrázkov vo vrstve nad stránkou nájdete na adrese http://lokeshdhakar.com/projects/lightbox2/#example, kde kliknite na niektorý z obrázkov pod textom EXAMPLES (Four image set).

Stránku validujte podľa HTML5 a CSS3. 

V zadaní nie je možné použiť žiadne externé css a javascriptové knižnice.

Znova si dajte záležať na vzhľade. 

##Homework#5 Web Workers

Úlohou je vytvoriť web stránku, na ktorej sa budú pre zadaný interval vypočítavať  prvočísla, ktoré sa nachádzajú vo vnútri zadaného intervalu. Zadanie je potrebné realizovať pomocou web workerov.

Vytvorená web stránka bude obsahovať :

2 textové polia na zadanie uvažovaného intervalu.  Treba ošetriť, aby do vstupných polí bolo možné zadávať len numerické hodnoty.
ďalší prvok (napr. tlačidlo), ktorým sa po kliknutí zobrazia vypočítané prvočísla.
algoritmus na výpočet si nájdite na Internete a na stránke uveďte adresu, z ktorej ste ten algoritmus čerpali (aj v prípade, že budete preberať časť kódu).
výpočet prvočísiel realizujte pomocou web workerov, pričom na vhodnom mieste informujte užívateľa o celkovom stave výpočtu (t.j. koľko percent z výpočtu je už realizovaných).
Poznámky:

JS knižnice (napr. jQuery) je už možné používať.
Estetika je zasa len a len na Vás... ale pamätajte, že pekné sa predáva lepšie.

##Homework#6 Google Maps

1.	Na stránke si zobrazte mapu pomocou Google maps, na ktorej bude blízke okolie FEI STU. Budovu fakulty označte markerom a vedľa neho uveďte, k čomu to označenie patrí (príklad označenia je na nižšie uvedenom obrázku). Ak niekedy neskôr užívateľ klikne na zobrazený marker, tak sa mu v popup okne zobrazia GPS súradnice tohto miesta.
2.	Na stránke umiestnite formulár, ktorý umožní pomocou textového poľa zadať miesto, odkiaľ chcete prísť na fakultu a či chcete prist pešo alebo autom. Na mape sa potom zobrazí vyznačená odporučená najrýchlejšia trasa a pod mapou bude uvedený údaj, o akú vzdialenosť ide.
3.	Po získaní odpovede z Google serveru zobrazte na mape zastávky MHD, ktoré sa nachádzajú v okolí FEI STU (dá sa to realizovať ako vyhľadávanie vyznamných objektov daného typu).
4.	Vedľa mapy zobrazte využitím Google maps reálny pohľad na fakultu („Street View“) tak, aby zobrazoval pohľad na fakultu v mieste, ktoré je vyznačené markerom (t.j., ak marker bude umiestnený na budovu bloku A, tak pohľad na fakultu bude zobrazovať blok A, napr. vchod). 


##Homework#7 Grafy

Úlohou zadania je na základe údajov generovaných na stránke http://vmzakova.fei.stuba.sk/sse  vykresľovať postupne graf až do momentu, pokiaľ nestlačíte na vašej stránke tlačidlo "Koniec". V tomto okamihu je potrebné, aby sa graf zobrazil celý, t.j. od začiatku jeho vykresľovania až po jeho koniec.

V obrázku vykresľujte 2 farebne odlíšené grafické závislosti - zodpovedajúce dvom meraniam (zašumený sínus a kosínus). 

Pri obrázku zobrazte 2 checkboxy, pomocou ktorých bude možné ovplyvňovať, ktorý graf má byť v obrázku zobrazený (prvý alebo druhý, obidva naraz, žiadny). 

Po ukončení merania v obrázku umožnite robiť aj "zoomovanie" časti grafov.

Poznámky:

JS knižnice (napr. jQuery) je už možné používať.
Na vykresľovanie grafov je možné použiť ľubovolnú JS knižnicu, napr. Flot, jqplot, atď.
Estetika je zasa len a len na Vás... ale pamätajte, že pekné sa predáva lepšie.