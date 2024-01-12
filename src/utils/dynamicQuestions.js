import { getTotalRawData} from "./Dataset1_Global_Emissions";
import { getRawData } from "./Dataset2_Global_Temp";
import { getFormatedData } from "./Dataset4_Sea_Level";

const multiples = [0.2, 0.4, 0.6, 0.8, 1.2, 1.5, 2, 2.5, 3, 5]


export function getDynamicQuestions(count){
    let questions = [];
    for (let i=0; i<count; i++){
        const rndQuestion = Math.floor(Math.random() * 3);
        switch (rndQuestion) {
            case 0:
                questions.push(tempDiff())
                break;
            case 1:
                questions.push(resource())
                break;
            case 2:
                questions.push(seaDiff())
                break;
        }
    }
    return questions;
}


export function makeQuestion(correct, text) {
   
    let tmpMultiples = [(multiples[Math.floor(Math.random() * multiples.length)]*correct).toFixed(2)];
    console.log(tmpMultiples);
    while (tmpMultiples.length < 2) {
        let tmpIndex = Math.floor(Math.random() * multiples.length);
        if (tmpMultiples.indexOf(multiples[tmpIndex]) < 0){
            tmpMultiples.push((multiples[tmpIndex] * correct).toFixed(2))}
    }

    console.log(tmpMultiples)
    
    const correctIndex=Math.floor(Math.random() * (tmpMultiples.length + 1))
    tmpMultiples.splice(correctIndex, 0, (correct).toFixed(2))

    return{
        correctIndex: correctIndex,
        text: text,
        alt: tmpMultiples,
    }
}

export function tempDiff() {
    const data = getRawData()
    let firstYear = data[Math.floor(Math.random() * (data.length / 2) + data.length / 2 )];
    let secondYear = data[Math.floor(Math.random() * (data.length / 2))]
    
    const text = `Hur stor var jordens temperaturskillnad i genomsnitt mellan år ${firstYear.Year} och ${secondYear.Year} i grader Celsius?`
    
    const correct = Math.abs(firstYear.Mean-secondYear.Mean) ;

    return makeQuestion (correct, text);
}

export function resource(){
    const data = getTotalRawData();
    console.log(data)
    
    function getNonZero(key){

        let tmpYear = data[Math.floor(Math.random() * (data.length))];
        while (tmpYear[key] == 0)
        {
            tmpYear = data[Math.floor(Math.random() * (data.length))];
            console.log(`tmpYear: ${tmpYear}`)
            console.log(`key: ${key}`)
        }
        return tmpYear;
    }

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

export function seaDiff(){
    const data = getFormatedData().data;

    const yearIndex = Math.floor(Math.random() * (data.length / 2 -10) + data.length / 2 -10);
    const year = data[yearIndex]
    const text = `Hur stor var jordens temperaturskillnad i genomsnitt mellan år ${year.x} och ${year.x + 10} i grader Celsius?`

    return makeQuestion(year.y - data[yearIndex + 10].y, text);
}



    //let secondYear = data[Math.floor(Math.random() * (data.length / 2))]
    
    //const text = `Hur stor var jordens temperaturskillnad i genomsnitt mellan år ${firstYear.Year} och ${secondYear.Year} i grader Celsius?`
    
   // const correct = Math.abs(firstYear.Mean-secondYear.Mean) ;

    //return makeQuestion (correct, text);



// const tmp =Math.floor(Math.random() * ((data.length + LOW_YEAR) / 2 - LOW_YEAR + 1) + LOW_YEAR)