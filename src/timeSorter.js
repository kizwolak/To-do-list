export default function timeSorter(object) {

    const dates = [];

    object.arrayOfToDos.forEach(element => {
        if (!(dates.includes(element.date))) {
            let newArrayName = element.date;
            class dateArray {
                constructor(name) {
                    this.name = name;
                    this.array = [];
                }
            };
            const newDate = new dateArray(newArrayName);
            const dateToDo = {
                date: element.date,
                priority: element.priority,
            };
            newDate.array.push(dateToDo);
            dates.push(newDate);
        }
    });
    console.log(dates);
    return dates;
}
    // const dates = [''];

    // object.arrayOfToDos.forEach(element => {
    //     dates.forEach(date => {
    //         if (!(date.name == element.date)) {
    //             let newArrayName = element.date;
    //             class dateArray {
    //                 constructor(name) {
    //                     this.name = name;
    //                     this.array = [];
    //                 }
    //             };
    //             const newDate = new dateArray(newArrayName);
    //             const dateToDo = {
    //                 date: element.date,
    //                 priority: element.priority,
    //             };
    //             newDate.array.push(dateToDo);
    //             dates.push(newDate);
    //         }
    //     })
    // }) 
    // console.log(dates);
    // return dates;


            // } else if (element1.name === element.date){
            //     const dateArray = {
            //         constructor() {
            //             this.name = element.date;
            //             this.array = [];
            //         }
            //     };
            //     console.log(newDate.name); 
            //     // create a date array that will hold objects related to that date
            //     // to display dates and priority dots - no description
            //     const dateToDo = {
            //         date: element.date,
            //         priority: element.priority,
            //     };
            //     dates.element1.array.push(dateToDo);
            // }

    //     if (!dates.includes(element.date)) {
    //         console.log(element.date);
    //         const dateArray = {
    //             constructor() {
    //                 this.
    //             }
    //         };
    //         // create a date array that will hold objects related to that date
    //         dates.push(dateArray);
    //         // to display dates and priority dots - no description
    //         const dateToDo = {
    //             date: element.date,
    //             priority: element.priority,
    //         };
    //         dateArray.push(dateToDo);
    //         console.log(dates);
    //     } else if (dates.includes(element.date)) {
    //         let index = dates.findIndex(date => date.date === element.date);
    //         const dateToDo = {
    //             date: element.date,
    //             priority: element.priority,
    //         };
    //         dateArray[index].push(dateToDo);
    //         console.log(dateArray);
    //     }
    // });
  

// This function generates only one array - fix!!

// generacja nowego obiektu/array z datami? wtedy możnaby dodawać toDoObjects do daty, data byłaby generowana codziennie wraz z arrayem, do którego można wciskać wydarzenia

// a moze niech to dziaja z niszego poziomu? toDoObject?