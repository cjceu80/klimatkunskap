import { getTotalRawData} from "./Dataset1_Global_Emissions";
import { getRawData } from "./Dataset2_Global_Temp";
import { getFormatedData } from "./Dataset4_Sea_Level";

//The multiples used for random answers. Correct answer as a multiple of 1
const multiples = [0.2, 0.5, 0.7, 1.2, 1.5, 2, 2.5, 3, 5]

//Provide array of random generated questions
export function getDynamicQuestions(count){
    
    //Loops count times and switch random question function
    let questions = [];
    for (let i=0; i<count; i++){
        const rndQuestion = Math.floor(Math.random() * 3);
        switch (rndQuestion) {
            case 0:
                questions.push(tempDiff());
                break;
            case 1:
                questions.push(resource());
                break;
            case 2:
                questions.push(seaDiff());
                break;
        }
    }
    return questions;
}

//Create a quiestion object by provided text and correct answer
function makeQuestion(correct, text) {
   //Set up variable and first multiple
    let tmpAnswers = [multiples[Math.floor(Math.random() * multiples.length)]];
    console.log(correct);       
    //Loops untill there are two multiples
    while (tmpAnswers.length < 2) {
        let tmpIndex = Math.floor(Math.random() * multiples.length);

        //If the randomly generated is unique its added
        if (tmpAnswers.indexOf(multiples[tmpIndex]) < 0){
            tmpAnswers.push(multiples[tmpIndex])}
    }

    //Do the multiplication to get the propper wrong values
    let answers = [];
    tmpAnswers.forEach((val, index) => {
        answers[index] =formatNumbers(val * correct)});
    
    //Adds the correct value randomly
    const correctIndex=Math.floor(Math.random() * (tmpAnswers.length + 1))
    answers.splice(correctIndex, 0, formatNumbers(correct))

    //Return a question object
    return{
        correctIndex: correctIndex,
        text: text,
        alt: answers,
    }
}

function formatNumbers(number){
    if (number > 1000)
        return Math.round(number / 1000) * 1000;
    else if (number > 100)
        return Math.round(number / 100) * 100;
    else if (number > 10)
        return Math.round(number);
    else if (number > 1)
        return Math.round(number * 10) / 10;
/*    else if (number > 0.1)
        return Math.round(number * 100) / 100;
    else if (number > 0.01)
        return Math.round(number * 1000) / 1000;
    else if (number > 0.001)
        return Math.round(number * 10000) / 10000;*/
    else 
        return (number).toFixed(2);
}


//Creates a question about temperature changes through the ages
function tempDiff() {
    const data = getRawData()

    //Randomize the years, early is first half of interval and second is later half
    let firstYear = data[Math.floor(Math.random() * (data.length / 2) + data.length / 2 )];
    let secondYear = data[Math.floor(Math.random() * (data.length / 2))]
    
    //Text for the question
    const text = `Hur stor var jordens temperaturskillnad i genomsnitt mellan år ${firstYear.Year} och ${secondYear.Year} i grader Celsius?`
    
    //Absolute value of difference
    const correct = Math.abs(firstYear.Mean-secondYear.Mean) ;
    console.log(`first: ${firstYear.Mean}, second: ${secondYear.Mean}, Diff: ${correct}`)

    return makeQuestion (correct, text);
}

//Creates a question about a source of CO2
function resource(){
    const data = getTotalRawData();
    
    //As the data contain 0 values this function discard those untill a non zero is found
    //They key variable is what kind of source.
    function getNonZero(key){

        let tmpYear = data[Math.floor(Math.random() * (data.length))];
        //while the selected value is 0 it loops new values
        while (tmpYear[key] == 0)
        {
            tmpYear = data[Math.floor(Math.random() * (data.length))];
        }
        return tmpYear;
    }

    //Randomly select one of the sources, get a non zero and return a makeQuestion with appropriate text and correct value
    const tmpIndex = Math.floor(Math.random() * 5)
    let text;
    let year = {};
    switch (tmpIndex) {
        case 0:
            year = getNonZero("Cement")
            text = `Hur stort var koldioxidutsläppen från tillverkning av cement år ${year.Year} i miljoner ton?`;
            return makeQuestion(year["Cement"], text);
        case 1:
            year = getNonZero("Gas Fuel")
            text = `Hur stort var koldioxidutsläppen gasanvändning år ${year.Year} i miljoner ton?`;
            return makeQuestion(year["Gas Fuel"], text);
        case 2:
            year = getNonZero("Liquid Fuel")
            text = `Hur stort var koldioxidutsläppen från användning av flytande bränslen (bensin, disel och fotogen) år ${year.Year} i miljoner ton?`;
            return makeQuestion(year["Liquid Fuel"], text);
        case 3:
            year = getNonZero("Solid Fuel")
            text = `Hur stort var koldioxidutsläppen från användning av fasta fosila bränslen år ${year.Year} i miljoner ton?`;
            return makeQuestion(year["Solid Fuel"], text);
        case 4:
            year = getNonZero("Total")
            text = `Hur stort var totala koldioxidutsläppen mänsklighetens användning av fosila bränslen år ${year.Year} i miljoner ton?`;
            return makeQuestion(year["Total"], text);
    }

}

//Creates a random question about sea level differance over a short period
function seaDiff(){
    const data = getFormatedData().data;

    //first year upp to 10 from the last year of data (each year contain 2 entries hence 20)
    const yearIndex = Math.floor(Math.random() * (data.length / 2 -20) + data.length / 2 -20);
    const year = data[yearIndex]
    const text = `Var skillnaden i genomsnittlig vattennivå år ${year.x} jämfört med ${year.x + 10} i millimeter (mm)?`

    return makeQuestion(year.y - data[yearIndex + 10].y, text);
}
