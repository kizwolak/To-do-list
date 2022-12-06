import toDoModal from "./toDoModal";
import addNew from "./addNew.js";
import compareAsc from 'date-fns/compareAsc';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import { parse } from "date-fns";
import createNewProject from "./formProcessor.js";
import createProject from "./createProject.js";


const today = new Date();




export default function generateProjects(project, array) {
    const projectsDiv = document.querySelector(".projects");
    const projectContainer = document.createElement('div');
    const projectTitle = document.createElement('h2');
    const projectArray = array;
    const addNewToDoForm = document.querySelector('.addNewToDoForm')
    const testSubmit = document.createElement('button');
    testSubmit.classList = 'testSubmit';
    const modal = document.querySelector("#addNewToDoModal");
    testSubmit.textContent = 'Add new task';
    let title = document.querySelector("#title1").value;
    let description = document.querySelector("#description1").value;
    let date = document.querySelector("#date1").value;
    const main = document.querySelector('.main');
    let mainLocalStorage;

    if (localStorage.getItem(`${project.title}`) == null) {

    }



    mainLocalStorage = localStorage.getItem(`${project.title}`, JSON.stringify(project));

    projectTitle.textContent = project.title;
    projectContainer.appendChild(projectTitle);
    projectsDiv.appendChild(projectContainer);
    
    let projectButtons = document.createElement('div');
    projectContainer.appendChild(projectButtons);

    let newButton = document.createElement('button');
    newButton.textContent = "New item";

    function pushNewToDo(e) {
        e.preventDefault();
        const newItem = addNew(project);
        projectArray.push(newItem);
        e.target.remove();
        modal.style.display = "none";
        addNewToDoForm.reset();
        const toDoContainer = document.createElement('div');
        toDoContainer.classList = "toDoContainer";
        const titleDOM = document.createElement('h2');
        titleDOM.innerHTML = newItem.title;
        const descDOM = document.createElement('h4');
        descDOM.innerHTML = newItem.desc;
        const dateDOM = document.createElement('h4');
        dateDOM.innerHTML = newItem.date;
        const priorityDOM = document.createElement('h4');
        priorityDOM.innerHTML = newItem.priority;
        main.appendChild(toDoContainer);
        toDoContainer.appendChild(titleDOM);
        toDoContainer.appendChild(descDOM);
        toDoContainer.appendChild(dateDOM);
        toDoContainer.appendChild(priorityDOM);
        if (compareAsc(new Date(today), new Date(newItem.date)) == 1) {
            toDoContainer.style.backgroundColor = 'red';
        };
        let object = localStorage.getItem(`${project.title}`);
        let parsedObject = JSON.parse(object);
        parsedObject.arrayOfToDos.push(newItem);
        return mainLocalStorage = localStorage.setItem(`${project.title}`, JSON.stringify(parsedObject));


    };

    newButton.addEventListener('click', (e) => {
        const span = document.querySelector(".close");
        const alreadyAddedSubmit = document.querySelector('.testSubmit');
        modal.style.display = "block";
        window.addEventListener('click', (e) => {
            if (e.target == modal) {
                modal.style.display = "none";
            }
        });
        testSubmit.addEventListener('click', pushNewToDo);
        if (addNewToDoForm.contains(alreadyAddedSubmit)) {
            alreadyAddedSubmit.remove()
            addNewToDoForm.appendChild(testSubmit);
        } else {
            addNewToDoForm.appendChild(testSubmit);
        }
    });

    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click', (e) => {
        const parent = e.target.parentNode;
        parent.parentNode.remove();
        project = undefined;
        console.log(project);
    });

    let editButton = document.createElement('button');
    editButton.textContent = "Edit title";
    editButton.addEventListener('click', () => {    
        const newTitle = prompt("What do you want the title to be?");
        localStorage.removeItem(`${project.title}`);
        // const description = document.querySelector("#description").value;
        // const date = document.querySelector("#date").value;
        // const priority = document.querySelector('input[name = "prio"]:checked').value;
    
        // console.log(title + " " + description + " " + date + " " + priority);
        projectContainer.remove();
        const newProject = createProject(newTitle);
        modal.style.display = "none";
        console.log(newProject);
        const newProjectArray = newProject.arrayOfToDos;
        localStorage.setItem(`${newProject.title}`, JSON.stringify(newProject));
        return generateProjects(newProject, newProjectArray);    
    });

    projectButtons.classList = "projectButtons";

    projectContainer.addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON') return
        main.innerHTML = '';

        exit_loops: for (const child of projectArray) {
            const allToDoContainer = document.querySelectorAll('.toDoContainer');
            const toDoContainer = document.createElement('div');
            toDoContainer.classList = "toDoContainer";
            const titleDOM = document.createElement('h2');
            titleDOM.innerHTML = child.title;
            for (let i = 0; i < allToDoContainer.length; i++) {
                let iterTitle = allToDoContainer[i].querySelector('h2');
                if (iterTitle.innerHTML == child.title) {
                    continue exit_loops;
                }
            }
            const descDOM = document.createElement('h4');
            descDOM.innerHTML = child.desc;
            const dateDOM = document.createElement('h4');
            dateDOM.innerHTML = child.date;
            const priorityDOM = document.createElement('h4');
            priorityDOM.innerHTML = child.priority;
            main.appendChild(toDoContainer);
            toDoContainer.appendChild(titleDOM);
            toDoContainer.appendChild(descDOM);
            toDoContainer.appendChild(dateDOM);
            toDoContainer.appendChild(priorityDOM);
            if (compareAsc(new Date(today), new Date(child.date)) == 1) {
                toDoContainer.style.backgroundColor = 'red';
            };
        }
    });
    
    projectButtons.appendChild(newButton);
    projectButtons.appendChild(deleteButton);
    projectButtons.appendChild(editButton);
    projectContainer.appendChild(projectButtons);

}