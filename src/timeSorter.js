export default function timeSorter(object) {

    const dates = [{name: "Tue Jun 28 2022 00:00:00 GMT+0200 (Central European Summer Time)", array: []}];
    
    object.arrayOfToDos.forEach(element => {
        if (!(dates.some(dateArray => dateArray.name == element.date))) {
            console.log("if");
            console.log("newArrayName" + element.date);
            class dateArray {
                constructor(name) {
                    this.name = name;
                    this.array = [];
                }
            };
            const newDate = new dateArray(element.date);
            const dateToDo = {
                date: element.date,
                priority: element.priority,
            };
            newDate.array.push(dateToDo);
            dates.push(newDate);
            console.log("Dates array: " + dates);
        } else if (dates.some(date => date.name == element.date)) {
            console.log("else");
            const dateToDo = {
                date: element.date,
                priority: element.priority,
            };
            let datesIndex = dates.findIndex(date => date.name == element.date);
            console.log("datesIndex =  " + datesIndex);
            let datesReference = dates[datesIndex];
            console.log(datesReference);
            datesReference.array.push(dateToDo);
        }
    });
    console.log(dates);
    return dates;
}

// The below is code by Biff#4541 on The Odin Project's Discord channel. This code is a future reference.
// This code will be used to group toDos by dates so that they can be displayed in a kind of a calendar that would show dots corresponding to the amount of toDos and dots for each date. I have decided to skip this for now, as I still have a long way to go before I finish the course. I will come back to this eventually... I promise!!

// let groupedDates = {};
// //Dummy todo object constructor
// const Todo = (_date, _name) => {
//   const date = _date;
//   const name = _name;
//   return { date, name };
// };

// //Create some dummy todo objects
// const t1 = Todo('01/01/2015', 'T1');
// const t2 = Todo('01/01/2015', 'T2');
// const t3 = Todo('01/02/2015', 'T3');
// const t4 = Todo('01/03/2015', 'T4');
// const t5 = Todo('01/03/2015', 'T5');
// const t6 = Todo('01/04/2015', 'T6');

// //Important bit
// function generateTodoCluster(todoArray) {

//   [...todoArray].forEach((todoItem) => {
//     //If groupedDates doesn't have a key with this date, create one
//     if (groupedDates[todoItem.date] == undefined) {
//       groupedDates[todoItem.date] = [];
//     }
//     //Push this todo item to the key of this items date
//     groupedDates[todoItem.date].push(todoItem);
//   });
// }

// // Some logging and the results

// generateTodoCluster([t1, t2, t3, t4, t5, t6]);

// console.log(groupedDates);
// /*
//   groupedDates: {
//     '01/01/2015': [ [Object], [Object] ],
//     '01/02/2015': [ [Object] ],
//     '01/03/2015': [ [Object], [Object] ],
//     '01/04/2015': [ [Object] ]
//   }

// Clearer version of the above
//   groupedDates: {
//     '01/01/2015': [ { date: '01/01/2015', name: 'T1' }, { date: '01/01/2015', name: 'T2' } ],
//     '01/02/2015': [ { date: '01/02/2015', name: 'T3' } ],
//     '01/03/2015': [ { date: '01/03/2015', name: 'T4' }, { date: '01/03/2015', name: 'T5' } ],
//     '01/04/2015': [ { date: '01/04/2015', name: 'T6' } ]
//   }
// */


// for (let todoArray in groupedDates) {
//   console.log(groupedDates[todoArray]); // { date: '01/01/2015', name: 'T1' },{ date: '01/01/2015', name: 'T2' }
// }