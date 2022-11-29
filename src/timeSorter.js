export default function timeSorter(object) {
    const dates = [];
    object.arrayOfToDos.forEach(element => {
        if (!dates.includes(element.date)) {
            const dateArray = [];
            // create a date array that will hold objects related to that date
            dates.push(dateArray);
            // to display dates and priority dots - no description
            const dateToDo = {
                date: element.date,
                priority: element.priority,
            };
            dateArray.push(dateToDo);
            console.log(dates);
        } else if (dates.includes(element.date)) {
            let index = dates.findIndex(date => date.date === element.date);
            const dateToDo = {
                date: element.date,
                priority: element.priority,
            };
            dateArray[index].push(dateToDo);
            console.log(dateArray);
        }
    });
    return dates;
}; 

// This function generates only one array - fix!!

// generacja nowego obiektu/array z datami? wtedy możnaby dodawać toDoObjects do daty, data byłaby generowana codziennie wraz z arrayem, do którego można wciskać wydarzenia

// a moze niech to dziaja z niszego poziomu? toDoObject?