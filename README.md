# Web technologies

## Synopsis
Homeworks for school subject Web technologies.
Every single homework is in own directory.
##Licence
MIT license
## Homework#1

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


##Homework#2
1.	Vytvorte validné web stránky (HTML 5), na ktorých zobrazíte vybrané geografické údaje.
2.	Na Internete si vyhľadajte čo najjednoduchšiu voľne dostupnú mapu Slovenska. Nezabudnite neskôr na Vašej stránke uviesť klikateľný odkaz na stránku, odkiaľ ste ju prevzali.
3.	Vytvorte web stránku s mapou, kde budú zvýraznené 4 vybrané mestá. Z mapy alebo zo stránky musí byť jasné, ktoré 4 mestá sú aktívne (najlepšie pomocou markerov). Štruktúra vytvorenej webstránky by mala byť v súlade so špecifikáciou HTML5 (treba používať sémantické značky).
4.	Po nabehnutí myšou nad aktívnu oblasť zobrazte vedľa markera zvolené geografické údaje ako je napríklad počet obyvateľov, rozloha, priemysel, resp. vysoké školy v danej oblasti, atď. Na dosiahnutie požadovanej funkcionality používajte kaskádne štýly, t.j. nie klikaciu mapu.
5.	Informácie na stránke musia byť v kódovaní UTF-8.
6.	Zadanie formátujte len pomocou CSS (žiadne fyzické HTML štýly).
7.	Validitu vytvoreného dokumentu skontrolujte pomocou validátora (HTML aj CSS).
##Homework#3
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
1.	Vytvorený formulár vyplníte (nezabudnite vyplniť a vyznačiť všetky položky) a odošlete na mail jedným z nasledujúcich spôsobov:
a.	pomocou metódy mailto.
b.	pomocou niektorej z voľne dostupných služieb na Internete. Môžete využiť službu spomenutú na prednáške, resp. môžete využiť našu službu, ktorá je momentálne k dispozícii na adrese http://vmzakova.fei.stuba.sk/form2mail/.

