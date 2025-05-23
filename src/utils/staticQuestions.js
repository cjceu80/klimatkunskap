//Retrive questions with the correct and up to two incorrect answers.
export function getQuestions(count) {
  //Get array of count number of unique questions.
  let resultQuestions = getUniques(questions, count);

  let newResultQuestions = JSON.parse(JSON.stringify(resultQuestions));
  //Return null if no questions was returned for some reason.
  if (!newResultQuestions) return;

  newResultQuestions.forEach((element) => {
    //Get two unique questions
    element.alt = getUniques(element.alt, 2);
    //Return null if no answer was found.
    if (!element.alt) return;
    element.correctIndex = Math.floor(Math.random() * (element.alt.length + 1));
    element.alt.splice(element.correctIndex, 0, element.correct);
  });

  return newResultQuestions;
}

//Takes array and an amount and return that number of random elements in an array.
export function getUniques(dataArray, count) {
  //Check for valid array.
  if (!Array.isArray(dataArray)) return console.log("not array");
  //Return full array of no need for trimming
  if (dataArray.length <= count) count = dataArray.length;

  //Shallow copy of array
  let workData = dataArray.slice(0);

  //Loop untill count is reached.
  let result = [];
  while (result.length < count) {
    const rndInt = Math.floor(Math.random() * workData.length);
    result.push(workData[rndInt]);
    workData.splice(rndInt, 1);
  }

  return result;
}

const questions = [

  //Havsnivån 
  {
    text: "Varför blir havsnivån högre?",
    correct: "Isarna smälter och vattnet i haven stiger",
    alt: [
      " Havet stiger när isarna blir kallare och sjunker",
      "Fiskarnas bajs i havet värmer vattnet",
    ],
  },
  {
    text: "Hur påverkar global uppvärmning havsnivån?",
    correct: "När det blir varmare, smälter isarna och vattnet i haven höjs",
    alt: [
      "Global uppvärmning gör havsnivån lägre",
      "Global uppvärmning påverkar inte havsnivån alls",
    ],
  },
  {
    text: "Vem har information om höjningar i havsnivån för Sverige?",
    correct: "SMHI (Sveriges meteorologiska och hydrologiska institut)a",
    alt: [
      "NOAA (National Oceanic and Atmospheric Administration)",
      "Naturvårdsverket",
    ],
  },
  {
    text: "Hur mycket har havsnivån stigit mellan 1980 och 2008 enligt diagrammet",
    correct: "Havsnivån har ökat med 2 cm under den perioden",
    alt: [
      "Havsnivån har minskat med 10 mm under den perioden",
      "Ingen förändring har skett",
      "Havsnivån har ökat med 15 mm under den perioden",
      "Havsnivån har ökat med 1 cm under den perioden",
    ],
  },

  //glaciär

  {
    text: "Vad är en glaciär?",
    correct: "En stor massa av is som rör sig väldigt långsamt",
    alt: [
      " En stor massa av sten som rör sig fram och tillbaka",
      "Små isbitar som rör sig fort och smälter långsamt",
    ],
  },
  {
    text: "Var finns glaciärer?",
    correct: "På varje kontinent, till och med i Afrika",
    alt: [
      "Endast i antarktis",
      "Glaciärerna har smält så idag finns inga glaciärer",
    ],
  },
  {
    text: "Vilka är de två huvudsakliga konsekvenserna av smältande glaciärer?",
    correct: "Ökning av havsnivån och översvämningar i kustområden",
    alt: [
      "Minskning av havsnivån och torka uppstår på nordpolen",
      "Världen tvingas bygga fler badplatser och båttrafiken kommer att ersätta biltrafiken",
    ],
  },

  //Temperatur
 
  {
    text: "Har temperaturen förändrats på vår planet?",
    correct:
      "Ja, global medeltemperatur har ökat snabbare sedan 1970 än under de senaste 2 000 åren och är idag på en nivå som antagligen inte setts på 125 000 år.",
    alt: [
      "Nej, temperaturen på jorden förändras aldrig. ",
      "Temperaturen har minskat stadigt de senaste decennierna.",
    ],
  },
  {
    text: "Hur länge har koncentrationen av koldioxid varit på dagens nivå?",
    correct:
      " Koncentrationen har ökat till nivåer utan motsvarighet på minst 800 000 år.",
    alt: [
      "Koncentrationen har varit konstant de senaste 100 åren.",
      "Koncentrationen har ökat under de senaste 100 åren.",
    ],
  },
  {
    text: "Varför kan skyfallen förväntas bli kraftigare i framtiden?",
    correct:
      "Extremväder, som kraftiga skyfall, förväntas öka i framtiden.",
    alt: [
      "Skyfallen kommer att minska på grund av klimatförändringar.",
      "Extremväder påverkar inte nederbörden.",
    ],
  },
  {
    text: "Vilken effekt har utsläppsändringarna haft på temperaturen mellan 1900 och 1980?",
      
    correct:
      "En koppling mellan utsläppsändringar och temperaturförändringar har orsakat oerhört mycket värmeeffekt på jorden under denna tidsperiod.",
    alt: [
      " Det visas endast väderförhållanden mellan 1980 och 2000.",
      "Det finns ingen påverkan av utsläpp på temperaturen.",
    ],
  },

  //Fossil
  {
    text: "Vad bildades fossila bränslen från?",
    correct: "Från växter och djur som levde för miljontals år sen",
    alt: ["Från plast och syntetiska material", "Metaller och mineraler"],
  },

  {
    text: "Vad har användningen av fossila bränslen för konsekvenser?",
    correct: "Det kan leda till mark- och vattenföroreningar.",
    alt: [
      "Det kan orsaka ökad syrehalt i atmosfären",
      "Det kan förbättrad luftkvalitet",
    ],
  },

  {
    text: "Vad för sorts gas släpper man ut i luften vid förbränning av fossila bränslen?",
    correct: "Koldioxid",
    alt: ["Vätegas", "Rent syre"],
  },

  {
    text: "Vad bidrar användningen av fossila bränslen till?",
    correct: "Växthuseffekten",
    alt: ["Minskad luftförorening", "Minskad koldioxidhalt i atmosfären"],
  },
];
