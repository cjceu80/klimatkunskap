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
]