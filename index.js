//fix to dom-manipulation branch

let learningData = [
    {
        startedAt: new Date("2021.01.20 13:00"),
        finishedAt: new Date("2021.01.20 19:00"),
        tasksGiven: 23,
        tasksFinished: 2,
        topic: "JavaScript"
    },
    {
        startedAt: new Date("2021.01.19 14:00"),
        finishedAt: new Date("2021.01.19 22:00"),
        tasksGiven: 45,
        tasksFinished: 32,
        topic: "HTML"
    },
    {
        startedAt: new Date("2021.01.20 12:00"),
        finishedAt: new Date("2021.01.20 18:30"),
        tasksGiven: 20,
        tasksFinished: 20,
        topic: "CSS"
    },
    {
        startedAt: new Date("2021.01.20 13:00"),
        finishedAt: new Date("2021.01.20 19:00"),
        tasksGiven: 200,
        tasksFinished: 150,
        topic: "JavaScript"
    },
    {
        startedAt: new Date("2021.01.01 17:00"),
        finishedAt: new Date("2021.01.02 02:00"),
        tasksGiven: 32,
        tasksFinished: 30,
        topic: "GitHub"
    },
    {
        startedAt: new Date("2021.01.03 15:00"),
        finishedAt: new Date("2021.01.03 23:30"),
        tasksGiven: 16,
        tasksFinished: 9,
        topic: "Loops"
    },
    {
        startedAt: new Date("2021.01.09 13:50"),
        finishedAt: new Date("2021.01.09 23:50"),
        tasksGiven: 70,
        tasksFinished: 50,
        topic: "Conditions"
    },
    {
        startedAt: new Date("2021.01.11 10:30"),
        finishedAt: new Date("2021.01.12 16:00"),
        tasksGiven: 66,
        tasksFinished: 45,
        topic: "Array"
    },
    {
        startedAt: new Date("2021.01.13 11:00"),
        finishedAt: new Date("2021.01.13 21:30"),
        tasksGiven: 80,
        tasksFinished: 31,
        topic: "Objects"
    },
    {
        startedAt: new Date("2021.01.15 14:00"),
        finishedAt: new Date("2021.01.15 22:00"),
        tasksGiven: 70,
        tasksFinished: 70,
        topic: "Classes"
    }
];

for(const subject of learningData) {  //insert to the array total learning time and finished tasks precent for every object
    subject.totalTime = (subject.finishedAt - subject.startedAt) / 3600000; 
    subject.tasksFinishedPercent = Math.floor(100*subject.tasksFinished/subject.tasksGiven);
}

 let myTable = document.createElement("table");
 let titlesArr = ["Started At", "Finished At", "Total Time","Tasks Given", "Tasks Finished", "Tasks Finished Percent", "Topic"];
 
 function creatFirstRow(){
    let firstRow = document.createElement("tr");
    myTable.appendChild(firstRow);
    for(let x = 0; x < titlesArr.length; x++){
       let cell = document.createElement("th");  
       cell.innerText = titlesArr[x];
       firstRow.appendChild(cell);
    }
 }
 
 const orderTopics = ["startedAt", "finishedAt", "totalTime", "tasksGiven", "tasksFinished", "tasksFinishedPercent", "topic"];
 
 function creatTableRows(){
    for(let obj of learningData){
        let row = document.createElement("tr");
        for(let i = 0; i < 7; i++){
            let cell = document.createElement("td");
            let cellText
            if( i === 0 || i === 1){
                cellText = document.createTextNode((obj[orderTopics[i]]).toLocaleTimeString());
            } else if(i === 5){
                cellText = document.createTextNode(obj[orderTopics[i]] + "%");
                cell.className = taskFinishedPrecentColor(obj[orderTopics[i]]);
            } else{
                cellText = document.createTextNode(obj[orderTopics[i]]);
            }
            if( i === 2){
                cell.className = totalTimeColor(obj[orderTopics[i]]);
            }
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        myTable.append(row);
    }
 }
 
 function totalTimeColor(tTime){
    if(tTime <= 8){
        return 'tTimeGreen';
    } else if(tTime <= 15){
        return 'tTimeOrange';
    } else{
        return 'tTimeRed';
    }
}

function taskFinishedPrecentColor(tFP){
    if(tFP <= 50){
        return 'tasksFinishedPrecentColor1';
    } else if(tFP <= 75){
        return 'tasksFinishedPrecentColor2';
    } else{
        return 'tasksFinishedPrecentColor3';
    }
}


 creatFirstRow();
 creatTableRows();
 document.body.appendChild(myTable);


 