//Retrive questions with the correct and up to two incorrect answers.
export function getQuestions(count){
    //Get array of count number of unique questions.
    let resultQuestions = getUniques(questions, count);
    //Return null if no questions was returned for some reason.
    if (!resultQuestions)
        return;

    resultQuestions.forEach(element => {
        //Get two unique questions
        element.alt = getUniques(element.alt,2);
        //Return null if no answer was found.
        if (!element.alt)
            return;
    });

    return resultQuestions;
}

//Takes array and an amount and return that number of random elements in an array.
export function getUniques(dataArray, count){
    //Check for valid array.
    if (!Array.isArray(dataArray))
        return;
    //Return full array of no need for trimming
    if (dataArray.length <= count)
        return dataArray;

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
    {text: "Hur många skruvar är det i ölandsbron?",
    correct: "för många",
    alt: [
        "mer än 25000",
        "mindre än 2000"
    ]},
    {text: "Klimatförändringarna är...?",
    correct: "katastrofala",
    alt: [
        "störande",
        "överskattade",
        "coola"
    ]},
    {text: "Klimatförändringarna är INTE...?",
    correct: "katastrofala",
    alt: [
        "störande",
        "överskattade",
        "coola"
    ]},
    {text: "Om 100 år är jorden hur gammal?",
    correct: "5 miljarder årish",
    alt: [
        "gammal som gatan",
        "drygt gammal",
        "som min lärare",
        "2 miljoner år",
        "6 tusen år"
    ]},
]