import { getRawYearData } from "./Dataset1_Global_Emissions";
import { getRawData } from "./Dataset2_Global_Temp";

const multiples = [0.2, 0.4, 0.6, 0.8, 1.2, 1.5, 2, 2.5, 3, 5]

const LOW_YEAR = 1880;
const HIGH_YEAR = 2010;

const questions = [
]


export function makeQuestion(correct, text) {
   
    let tmpMultiples = [(multiples[Math.floor(Math.random() * multiples.length)]).toFixed(2)];
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
    const data = getRawYearData();
    const year = data[Math.floor(Math.random() * (data.length))]
    let text;
    const tmpIndex = Math.floor(Math.random() * 7)
    switch (tmpIndex) {
        case 0:
            text = `Hur stort var koldioxidutsläppen från tillverkning av cement år ${year.Year} i miljoner ton?`;
            return makeQuestion(year.Cement, text)
        case 1:
            text = `Hur stort var koldioxidutsläppen från tillverkning av cement år ${year.Year} i miljoner ton?`;
            return makeQuestion(year.Cement, text)
            case 0:
            text = `Hur stort var koldioxidutsläppen från tillverkning av cement år ${year.Year} i miljoner ton?`;
            return makeQuestion(year.Cement, text)
            case 0:
            text = `Hur stort var koldioxidutsläppen från tillverkning av cement år ${year.Year} i miljoner ton?`;
            return makeQuestion(year.Cement, text)
            case 0:
            text = `Hur stort var koldioxidutsläppen från tillverkning av cement år ${year.Year} i miljoner ton?`;
            return makeQuestion(year.Cement, text)
            case 0:
            text = `Hur stort var koldioxidutsläppen från tillverkning av cement år ${year.Year} i miljoner ton?`;
            return makeQuestion(year.Cement, text)
            case 0:
            text = `Hur stort var koldioxidutsläppen från tillverkning av cement år ${year.Year} i miljoner ton?`;
            return makeQuestion(year.Cement, text)
    }

}


// const tmp =Math.floor(Math.random() * ((data.length + LOW_YEAR) / 2 - LOW_YEAR + 1) + LOW_YEAR)