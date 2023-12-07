export function getQuestions(count ){
    let resultQuestions = getUniques(questions, count);
    resultQuestions.forEach(element => {
        element.alt = getUniques(element.alt,2);
    });
    return resultQuestions;
}

export function getUniques(dataArray, count){
    if (!Array.isArray(dataArray))
        return;
    if (dataArray.length <= count)
        return dataArray;

    let workData = dataArray.slice(0);
    
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