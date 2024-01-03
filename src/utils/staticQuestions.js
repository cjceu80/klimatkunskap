//Retrive questions with the correct and up to two incorrect answers.
export function getQuestions(count){
    //Get array of count number of unique questions.
    let resultQuestions = getUniques(questions, count);

    let newResultQuestions = JSON.parse(JSON.stringify(resultQuestions));
    //Return null if no questions was returned for some reason.
    if (!newResultQuestions)
        return;

    newResultQuestions.forEach(element => {
        //Get two unique questions
        element.alt = getUniques(element.alt,2);
        //Return null if no answer was found.
        if (!element.alt)
            return;
        element.correctIndex = Math.floor(Math.random() * (element.alt.length + 1));
        element.alt.splice(element.correctIndex, 0, element.correct);
    });
    
    return newResultQuestions;
}

//Takes array and an amount and return that number of random elements in an array.
export function getUniques(dataArray, count){
    //Check for valid array.
    if (!Array.isArray(dataArray))
        return console.log("not array");
    //Return full array of no need for trimming
    if (dataArray.length <= count)
        count = dataArray.length;

    //Shallow copy of array
    let workData = dataArray.slice(0);
    
    //Loop untill count is reached.
    let result = []
    while (result.length < count){
        const rndInt = Math.floor(Math.random() * workData.length);
        result.push(workData[rndInt]);
        workData.splice(rndInt, 1);
    }

    return result;
}

const questions = [
    {text: "Varför blir havsnivån högre?",
    correct: "Isarna smälter och vattnet i haven stiger",
    alt: [
        " Havet stiger när isarna blir kallare och sjunker",
        "Fiskarnas bajs i havet värmer vattnet"
    ]},
    {text: "Hur påverkar global uppvärmning havsnivån?",
    correct: "När det blir varmare, smälter isarna och vattnet i haven höjs",
    alt: [
        "Global uppvärmning gör havsnivån lägre",
        "Global uppvärmning påverkar inte havsnivån alls",
    ]},
    {text: "Vem har information om höjningar i havsnivån för Sverige?",
    correct: "SMHI (Sveriges meteorologiska och hydrologiska institut)a",
    alt: [
        "NOAA (National Oceanic and Atmospheric Administration)",
        "Naturvårdsverket",
    ]},
    {text: "Hur mycket har havsnivån stigit mellan 1980 och 2020 enligt diagrammet",
    correct: "Havsnivån har ökat med ?? mm under den perioden",
    alt: [
        "Havsnivån har minskat med ?? mm under den perioden",
        "Ingen förändring har skett",
        "Havsnivån har ökat med ?? mm under den perioden",
        "Havsnivån har ökat med ?? mm under den perioden",
    ]},
    {text: "Varför är kol viktigt för jordens temperatur?",
    correct: "Kol finns i koldioxid, en växthusgas som fångar värme nära jorden.",
    alt: [
        " Kol har ingen påverkan på jordens temperatur.",
        "Kol gör att jorden blir kallare."
    ]},
    {text: "Vad är skillnaden mellan vädret och klimatet?",
    correct: "Vädret är kortvariga händelser, medan klimatet är genomsnittet över lång tid, 30 år eller mer.",
    alt: [
        "Det finns ingen skillnad mellan vädret och klimatet.",
        "Vädret och klimatet är samma sak och kan användas utbytbart.",
    ]},
    {text: "Var kommer luftföroreningar ifrån?",
    correct: "Luftföroreningar orsakas av fasta och flytande partiklar samt vissa gaser från källor som bil- och lastbilsavgaser, fabriker, damm, pollen, mögelsporer, vulkaner och skogsbränder.",
    alt: [
        "Luftföroreningar är naturliga och har ingen mänsklig påverkan.",
        "Luftföroreningar uppstår endast från fabriker och inte andra källor.",
    ]},
    {text: "Vilken temperatur krävs för att marken ska anses som permafrost?",
    correct: "Marken måste vara helt frusen vid 32°F (0°C) eller kallare i minst två år i sträck för att betraktas som permafrost.",
    alt: [
        " Permafrost kan uppstå vid varma temperaturer över 50°F (10°C).",
        "Marken behöver bara vara frusen i en månad för att vara permafrost.",     
    ]},

]    