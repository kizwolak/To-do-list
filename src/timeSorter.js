export default function timeSorter(object) {
    object.arrayOfToDos.forEach(element => {
        if (!dates.include(element.date)) {
            const dateToDo = {
                date: element.date,
                priority: element.priority,
            }
            dates.push(dateToDO);
        } else if (arrayOfToDos.includes(element.date)) {

        }
    });
}

// generacja nowego obiektu/array z datami? wtedy możnaby dodawać toDoObjects do daty, data byłaby generowana codziennie wraz z arrayem, do którego można wciskać wydarzenia

// a moze niech to dziaja z niszego poziomu? toDoObject?