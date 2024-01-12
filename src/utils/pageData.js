import { Link } from "react-router-dom";

export function getPageData(category) {
  const data = pageData.find((val) => val.id === category);
  if (!data) return null;
  return data;
}

// Database for contentpage contents
const pageData = [
  // HAVSNIVÅ

  {
    id: "havsniva",
    name: "Havsnivå",
    bakground: [
      {
        image: "/src/images/bakgrunder/havsniva.jpg",
      },
    ],
    cards: [
      {
        image: "/src/images/havsniva/VattenVagor.png",
        imageWidth: 3,
        caption: "Varför blir havsnivån högre?",
        paragraphs: [
          "Havet blir högre på grund av varmare klimat. Isar smälter och vattnet i haven blir större.",
          "I Stockholm höjs landet fortfarande mer än havet, så det känns som om havet sjunker jämfört med landet.",
        ],
      },
      {
        image: "/src/images/havsniva/jordglobTempVarning.png",
        imageWidth: 3,
        caption: "Påverkar global uppvärmning?",
        paragraphs: [
          "Global uppvärmning påverkar havet genom att höja vattennivån när det blir varmare. Smältande isar från Grönland och Antarktis bidrar också till detta.",
          "Geografiska skillnader och landhöjd skapar variationer i havsnivån över olika regioner i världen.",
        ],
      },
      {
        image: "/src/images/havsniva/questionMark.png",
        imageWidth: 2,
        caption: "Vem har koll?",
        paragraphs: [
          "SMHI har information om hur högre hav kan påverka Sverige. Det handlar om framtida vattenstånd och extrema vattennivåer. De beräknar för alla kuststäder i Sverige och ger även information om höjningar efter år 2150.",
        ],
      },
      {
        image: "/src/images/havsniva/ruler.png",
        imageWidth: 3,
        caption: "Hur mycket stiger havet?",
        paragraphs: [
          "Havet stiger redan nu. Mellan 2006 och 2018 ökade havsnivån i genomsnitt med 3,7 mm per år.",
          "I Stockholm höjs landet med över 5 mm varje år, så det känns som om havsnivån sjunker här.",
        ],
      },
      {
        image: "/src/images/havsniva/DiagramPilUppat.png",
        imageWidth: 3,
        caption: "Nämen se här!",
        paragraphs: [
          "Nedan ser du ett diagram på hur havsnivån varit sedan 1880-talet fram tills idag.",
          "Havsnivåförändringen(mörkröda linjen) visas i skalan till vänster i decimeter.",
          "Temperaturförändringen (den orangea linjen) visas i skalan till höger.",
          "Nere i x-axeln så ser du alla år.",
          "Du kan klicka i diagrammet för att se värden för ett speciellt år.",
        ],
      },
      {
        imageWidth: 3,
        caption: "Diagram!",
        graph: true,
        paragraphs: [],
      },
      {
        image: "/src/images/havsniva/ideLampa.png",
        imageWidth: 2,
        caption: "Såg du?",
        paragraphs: [
          "I diagrammet kan man se hur mycket havsnivån stigit. Mellan 1980 och 2010 så har havsnivån stigit med t.ex. 0,8dm. Det är sedan dina föräldrar var född tills idag, galet va?",
        ],
      },
      {
        caption: "Vill du veta mer?",
        paragraphs: ["Källor: SMHI, Stockholms Stad", "Länklista"],
        links: [
          {
            label: "Framtida medelvattenstånd - SMHI",
            url: "https://www.smhi.se/klimat/stigande-havsnivaer/framtida-medelvattenstand-1.165493",
          },
          {
            label: "Landhöjning och vattenstånd - SMHI",
            url: "https://www.smhi.se/kunskapsbanken/oceanografi/vattenstand-och-klimat/landhojning-och-havsvatttenstand-1.3437",
          },
        ],
      },
    ],
  },

  // TEMPERATUR

  {
    id: "temperatur",
    name: "Temperaturförändring",
    bakground: [
      {
        image: "/src/images/bakgrunder/temp.jpg",
      },
    ],
    cards: [
      {
        caption: "Förändras temperaturen?",
        paragraphs: [
          "Har du någonsin undrat om temperaturen förändras på vår planet? Låt oss utforska detta tillsammans!",
          "Global medeltemperatur har ökat snabbare sedan 1970 än under de senaste 2 000 åren och är idag på en nivå som antagligen inte setts på 125 000 år.",
        ],
        image: "/src/images/temp/tempWarning.png",
        imageWidth: 5,
      },
      {
        caption: "Tydliga budskap från temperaturforskningen",
        paragraphs: [
          "Koncentrationen av växthusgaser, särskilt koldioxid, har ökat till nivåer utan motsvarighet på minst 800 000 år, med en ökning på cirka 50 procent jämfört med förindustriell tid, huvudsakligen på grund av fossila bränslen och förändrad markanvändning.",
        ],
        image: "/src/images/temp/tempHighHeat.png",
        imageWidth: 5,
      },
      {
        caption: "Extremväder",
        paragraphs: [
          "Mycket talar för att till exempel skyfallen kommer att bli kraftigare i framtiden. Extrem nederbörd som faller under en kort tid kan ge problem med översvämningar.",
        ],
        image: "/src/images/temp/extremVader.png",
        imageWidth: 6,
      },
      {
        imageWidth: 3,
        caption: "Nämen se här!",
        paragraphs: [
          " Diagrammet visar en lilafärgad kurvig linje, som representerar temperaturökningen i grader i förhållande till året, och en rödfärgad kurvig linje som visar utsläpp.",
          
    
        ],
        image: "/src/images/havsniva/DiagramPilUppat.png",
      },

      {
        imageWidth: 3,
        caption: "Diagram!",
        graph: true,
      },
      {
        image: "/src/images/havsniva/ideLampa.png",
        imageWidth: 2,
        caption: "Såg du?",
        paragraphs: ["I diagrammet kan man se "],
      },
      {
        caption: "Vill du veta mer?",
        paragraphs: ["Länklista..."],
        links: [
          {
            label: "",
            url: "",
          },
          {
            label: "",
            url: "",
          },
        ],
      },
    ],
  },

  // FOSSILT BRÄNSLE

  {
    id: "fossilt",
    name: "Fossilt bränsle",
    background: [
      {
        image: "/src/images/fossil/fossil.jpg",
      },
    ],
    cards: [
      {
        image: "/src/images/fossil/fabrik.png",
        imageWidth: 4,
        caption: "Välkommen till Fossiltbränsle-sidan",
        paragraphs: [
          "Vet du vad fossila bränslen är och varför de är viktiga för vår planet och samtidigt skadliga? Låt oss dyka in i denna spännande värld!",
        ],
      },
      {
        image: "/src/images/fossil/oljefat.png",
        imageWidth: 7,
        caption: "Vad är Fossila Bränslen?",
        paragraphs: [
          "Fossila bränslen är energikällor som kol, olja och naturgas. De bildades från växter och djur som levde för miljontals år sedan. Idag använder vi dem för att driva bilar, producera elektricitet och mycket mer!",
        ],
      },

      {
        image: "/src/images/fossil/miljoskydd.png",
        imageWidth: 5,
        caption: "Vad kan fossila bränslen orsaka?",
        paragraphs: [
          "Förutom att orsaka klimatförändringar har användningen av fossila bränslen även andra negativa konsekvenser för miljön.",
          "Utvinningen och förbränningen av dessa bränslen kan leda till mark- och vattenföroreningar.",
          "Oljeutsläpp i havet och kolgruvdrift är exempel på verksamheter som kan ha förstörande effekter på ekosystem och djurliv.",
        ],
      },

      {
        image: "/src/images/fossil/globaluppvarmning.png",
        imageWidth: 4,
        caption: "Varför pratar vi om fossila bränslen?",
        paragraphs: [
          "När vi bränner fossila bränslen, släpper vi ut gaser som koldioxid (CO2) i luften. Dessa gaser bidrar till växthuseffekten, som höjer temperaturen på vår planet. Detta kan leda till klimatförändringar, som smältande glaciärer och stigande havsnivåer.",
        ],
      },

      {
        image: "/src/images/havsniva/DiagramPilUppat.png",
        imageWidth: 3,
        caption: "Nämen se här!",
        paragraphs: [
          "Nedan i diagrammet kan du se hur användandet av total mängd fossilt bränsle har förändrats historiskt från 1800-talet till 2000-talet. Du kan ändra och se skillnaden själv genom att röra på den blåa pricken längst ner i diagrammet vänster till höger!",
        ],
      },
      {
        image: "",
        imageWidth: 3,
        caption: "Total mängd fossilt bränsle",
        graph: true,
      },
      {
        image: "/src/images/havsniva/ideLampa.png",
        imageWidth: 2,
        caption: "Såg du?",
        paragraphs: [
          "I diagrammet kan man se statistik på totalt koldioxidutsläpp i ton mellan år 1880 till år 2010.",
        ],
      },
      {
        caption:
          "Vill du veta mer om hur fossila bränslen orsakar klimatförändringar?",
        paragraphs: [""],
        links: [
          {
            label: "Klimatförändringar orsakade av människan - SMHI",
            url: "https://www.smhi.se/kunskapsbanken/klimat/klimatpaverkan/klimatforandringar-orsakade-av-manniskan-1.3833",
          },
          {
            label: "",
            url: "",
          },
        ],
      },
    ],
  },

  // Glaciär

  {
    id: "glaciar",
    name: "Glaciär",
    bakground: [
      {
        image: "/src/images/bakgrunder/glaciar.jpg",
      },
    ],
    cards: [
      {
        image: "/src/images/Glaciar/natural-disaster-5545300_1280.png",
        imageWidth: 3,
        caption: "Välkommen till Glaciärernas Värld!",
        paragraphs: [
          "Har du någonsin undrat varför glaciärer är så viktiga för vår planet? Och varför pratar alla om att de smälter?",
          "Låt oss utforska detta tillsammans!",
        ],
      },
      {
        image: "/src/images/Glaciar/polar-bear-6733146_1280.jpg",
        imageWidth: 3,
        caption: "Vad är en glaciär?",
        paragraphs: [
          "En glaciär är en stor massa av is som rör sig väldigt långsamt. Tänk på det som en frusen flod! Glaciärer finns på varje kontinent, till och med i Afrika.",
        ],
      },
      {
        image: "/src/images/Glaciar/earth-5545293_1280.png",
        imageWidth: 2,
        caption: "Varför smälter glaciärerna? ",
        paragraphs: [
          "Glaciärer smälter när temperaturen på jorden ökar. Detta händer på grund av något som kallas för växthuseffekten, där gaser från fossila bränslen (som bensin och kol) fångar värme i vår atmosfär.",
        ],
      },
      {
        image: "/src/images/Glaciar/natural-disaster-5545297_1280.png",
        imageWidth: 3,
        caption: "Varför är detta ett problem?",
        paragraphs: [
          "När glaciärer smälter, ökar havsnivån eftersom allt det smälta vattnet hamnar i havet. Detta kan leda till översvämningar i kustområden. Dessutom är glaciärer som jordens kylskåp, de hjälper till att hålla vår planet sval.",
        ],
      },
      {
        image: "/src/images/havsniva/DiagramPilUppat.png",
        imageWidth: 3,
        caption: "Nämen se här!",
        paragraphs: [
          "Nedan ser du ett diagram på hur glaciärernas massa succesivt sjunker med tiden.",
        ],
      },
      {
        imageWidth: 3,
        caption: "Diagram!",
        graph: true,
        paragraphs: [],
      },
      {
        image: "/src/images/havsniva/ideLampa.png",
        imageWidth: 2,
        caption: "Såg du?",
        paragraphs: [
          "I diagrammet kan man se hur glaciärernas storlek minskar. Mellan 1945 och 2010 så har glaciärernas storlek minskat samtidigt som temperaturen har ökat. Det är sedan dina föräldrars föräldrar var födda tills idag, galet va?",
        ],
      },
      {
        caption: "Vill du veta mer om vad som händer när glaciärer smälter?",
        paragraphs: ["Glaciärerna smälter pga. temperaturskillnader"],
        links: [
          {
            label: "Läs mer om temperaturskillnader",
            to: "/kunskapsportalen/?kategori=temperatur",
          },
          {
            label: "Landhöjning och vattenstånd - SMHI",
            url: "https://www.smhi.se/kunskapsbanken/oceanografi/vattenstand-och-klimat/landhojning-och-havsvatttenstand-1.3437",
          },
        ],
      },
    ],
  },
];
