


export function getPageData(category){
 const data = pageData.find((val) => val.id === category);
    if (!data)
        return null;
    return data;
}

const pageData = [
    {
        id: "havsniva",
        name: "Havsnivå",
        cards: [
            {
                image: "../src/images/havsniva/VattenVagor.png",
                imageWidth: 3,
                caption: "Varför blir havsnivån högre?",
                paragraphs: ["Havet blir högre på grund av varmare klimat. Isar smälter och vattnet i haven blir större.","I Stockholm höjs landet fortfarande mer än havet, så det känns som om havet sjunker jämfört med landet."]
            },
            {
                image: "/src/images/havsniva/jordglobTempVarning.png",
                imageWidth: 3,
                caption: "Påverkar global uppvärmning?",
                paragraphs: ["Global uppvärmning påverkar havet genom att höja vattennivån när det blir varmare. Smältande isar från Grönland och Antarktis bidrar också till detta.","Geografiska skillnader och landhöjd skapar variationer i havsnivån över olika regioner i världen."]
            },
            {
                image: "/src/images/havsniva/questionMark.png",
                imageWidth: 2,
                caption: "Vem har koll?",
                paragraphs: ["SMHI har information om hur högre hav kan påverka Sverige. Det handlar om framtida vattenstånd och extrema vattennivåer. De beräknar för alla kuststäder i Sverige och ger även information om höjningar efter år 2150."]
            },
            {
                image: "/src/images/havsniva/ruler.png",
                imageWidth: 3,
                caption: "Hur mycket stiger havet?",
                paragraphs: ["Havet stiger redan nu. Mellan 2006 och 2018 ökade havsnivån i genomsnitt med 3,7 mm per år.", "I Stockholm höjs landet med över 5 mm varje år, så det känns som om havsnivån sjunker här."]
            },
            {
                image: "/src/images/havsniva/DiagramPilUppat.png",
                imageWidth: 3,
                caption: "Nämen se här!",
                paragraphs: ["Nedan ser du ett diagram på hur havsnivån varit sedan 1880-talet fram tills idag. Till vänster ser du stapeln för havsnivån och nere i liggande axeln ser du åren."]
            },
            {
                image: "/src/images/havsniva/DiagramPilUppat.png",
                imageWidth: 3,
                caption: "Diagram!",
                graphdata: ""
            },
            {
                image: "/src/images/havsniva/ideLampa.png",
                imageWidth: 2,
                caption: "Såg du?",
                paragraphs: ["I diagrammet kan man se hur mycket havsnivån stigit. Mellan 1980 och 2020 så har havsnivån stigit med t.ex. ????mm. Det är sedan dina föräldrar var född tills idag, galet va?"]
            },
            {
                caption: "Vill du veta mer?",
                paragraphs: ["Länklista"],
                links: {},
            }
        ]        
    }
]