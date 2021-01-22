let learningData = [
    {
        startedAt: new Date("2021.01.20 13:00"),
        finishedAt: new Date("2021.01.20 19:00"),
        tasksGiven: 10,
        tasksFinished: 4,
        topic: "JavaScript"
    },
    {
        startedAt: new Date("2021.01.19 14:00"),
        finishedAt: new Date("2021.01.19 22:00"),
        tasksGiven: 21,
        tasksFinished: 21,
        topic: "HTML"
    },
    {
        startedAt: new Date("2021.01.20 12:00"),
        finishedAt: new Date("2021.01.20 18:30"),
        tasksGiven: 19,
        tasksFinished: 17,
        topic: "CSS"
    },
    {
        startedAt: new Date("2021.01.20 13:00"),
        finishedAt: new Date("2021.01.20 19:00"),
        tasksGiven: 111,
        tasksFinished: 45,
        topic: "JavaScript"
    },
    {
        startedAt: new Date("2021.01.01 17:00"),
        finishedAt: new Date("2021.01.02 02:00"),
        tasksGiven: 32,
        tasksFinished: 20,
        topic: "GitHub"
    },
    {
        startedAt: new Date("2021.01.03 15:00"),
        finishedAt: new Date("2021.01.03 23:30"),
        tasksGiven: 53,
        tasksFinished: 53,
        topic: "Loops"
    },
    {
        startedAt: new Date("2021.01.09 13:50"),
        finishedAt: new Date("2021.01.09 23:50"),
        tasksGiven: 62,
        tasksFinished: 43,
        topic: "Conditions"
    },
    {
        startedAt: new Date("2021.01.11 10:30"),
        finishedAt: new Date("2021.01.12 16:00"),
        tasksGiven: 45,
        tasksFinished: 4,
        topic: "Array"
    },
    {
        startedAt: new Date("2021.01.13 11:00"),
        finishedAt: new Date("2021.01.13 21:30"),
        tasksGiven: 90,
        tasksFinished: 82,
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

//console.log((learningData[0].finishedAt - learningData[0].startedAt)/3600000); //check if insert for loop works
//console.log(learningData[3].tasksFinishedPercent);

document.open();

document.write(`<table class='table'>`);
document.write(`<tr>`);
document.write(`<th>Started At</th>`);
document.write(`<th>Finished At</th>`);
document.write(`<th>Total Time Spent</th>`);
document.write(`<th>Tasks Given</th>`);
document.write(`<th>Tasks Finished</th>`);
document.write(`<th>Tasks Finished %</th>`);
document.write(`<th>Topic</th>`);
document.write(`</tr>`);

for (let r of learningData) {
    document.write(`<tr>`);
    document.write(`<td>${r.startedAt.toLocaleTimeString()}</td>`);
    document.write(`<td>${r.finishedAt.toLocaleTimeString()}</td>`);
    document.write(`<td class=${totalTimeColor(r.totalTime)}>${r.totalTime}</td>`);
    document.write(`<td>${r.tasksGiven}</td>`);
    document.write(`<td>${r.tasksFinished}</td>`);
    document.write(`<td class=${taskFinishedPrecentColor(r.tasksFinishedPercent)}>${r.tasksFinishedPercent}%</td>`);
    document.write(`<td>${r.topic}</td>`);
    /*document.write('<tr>');
        for(let c in r){
            document.write('<td>' + r[c] + '</td>');
        }*/
    document.write(`</tr>`);
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

document.write(`</table>`);


//document.write(myTable);
document.close();