export function getPageData(category) {
  const data = pageData.find((val) => val.id === category);
  if (!data) return null;
  return data;
}

const pageData = [
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
        paragraphs: [

        ],
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
        paragraphs: ["Länklista"],
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
        ],
        image: "/src/images/Temperatur_fara_bild_4.jpg",
        imageWidth: 3,
      },
      {
        caption: "Tydliga budskap från temperaturforskningen",
        paragraphs: [
          "Global medeltemperatur har ökat snabbare sedan 1970 än under de senaste 2 000 åren och är idag på en nivå som antagligen inte setts på 125 000 år.",
          "Koncentrationen av växthusgaser, särskilt koldioxid, har ökat till nivåer utan motsvarighet på minst 800 000 år, med en ökning på cirka 50 procent jämfört med förindustriell tid, huvudsakligen på grund av fossila bränslen och förändrad markanvändning.",
        ],
        image: "/src/images/climate-change-Bild_1.png",
        imageWidth: 5,
      },
      {
        caption: "Extremväder",
        paragraphs: [
          "Mycket talar för att till exempel skyfallen kommer att bli kraftigare i framtiden. Extrem nederbörd som faller under en kort tid kan ge problem med översvämningar.",
        ],
        image: "/src/images/Extrem_väder_bild_3.jpg",
        imageWidth: 4,
      },
      {
        imageWidth: 3,
        caption: "Nämen se här!",
        paragraphs: [
          "Diagrammet visar avvikelser i förhållande till temperaturgenomsnittet för perioden 1850-1900.",
          "Global genomsnittlig yttemperatur i förhållande till genomsnittet 1850-1900 (Celisius)",
        ],
        image: "/src/images/havsniva/DiagramPilUppat.png",
      },

      {
        image: "/src/images/havsniva/DiagramPilUppat.png",
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
        links: {},
      },
    ],
  },

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
          "Vet du vad fossila bränslen är och varför de är viktiga för vår planet och samtidigt skadliga? Låt oss dyka in i denna spännande värld!.",
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
        paragraphs: ["Nedan ser du hur det har förändrats historiskt"],
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
        paragraphs: ["I diagrammet kan man se"],
      },
      {
        caption: "Vill du veta mer?",
        paragraphs: ["Länklista"],
        links: {},
      },
    ],
  },
];
