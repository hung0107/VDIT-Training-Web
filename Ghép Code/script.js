var input = document.querySelector('input')
var form = document.querySelector('form')
var todos = document.querySelector('.task-list')
var completion = document.querySelector('.completion')

form.addEventListener('submit', function(event) {
    event.preventDefault()
    console.log("ok")
    let val = input.value.trim()
    if(val){
        addTodoElement({
            text: val,
            status: 'completed',
        })
    }

    input.value = '' 
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function addTodoElement(todo){
    // {
    //     text:
    //     status:
    // }

    // <li>
    //                     <span>Test</span>
    //                     <i class="fas fa-trash-alt"></i>
    //                     <i class="fas fa-check"></i>
    //                 </li>

    var li = document.createElement('li')
    li.innerHTML = 
        `<span class ="task-content">${todo.text}</span>
        <span class= "icons"> 
            <i class="fas fa-check"></i>
            <i class="fas fa-trash-alt"></i>
        </span>`

    if(todo.status == 'completed'){
        li.setAttribute('class', 'completed')
    }

    li.querySelector('.fa-trash-alt').addEventListener('click', function(event) {
        event.stopPropagation()
        li.classList.add("animate-fade-out")
        sleep(750).then(() => { li.parentNode.removeChild(li) });
        
    })

    li.querySelector('.fa-check').addEventListener('click', function(event) {
        li.classList.toggle('completed')
        li.classList.add("animate-fade-out")
        sleep(750).then(() => { li.parentNode.removeChild(li) });

        var compli = document.createElement('li')
        compli.innerHTML = 
            `<span class ="task-content">${todo.text}</span>
            <i class="fas fa-trash-alt"></i>`
        
        completion.appendChild(compli)
        compli.classList.add("animate-fade-in")



        sleep(700).then(() => { 
            compli.classList.remove("animate-fade-in");
        });
        compli.querySelector('.fa-trash-alt').addEventListener('click', function(event) {
            event.stopPropagation()
            compli.classList.add("animate-fade-out")
            sleep(750).then(() => { compli.parentNode.removeChild(compli) });
        })
    })

    todos.appendChild(li)
}


// saveTodolist(){
//     let todoList = document.querySelectorAll('li')
//     todoList.forEach(function(item){
//         let text = item.querySelector('span').innerText
//         let status = item.querySelector('span').getA
//         // save to local storage
//     })
//     localStorage.setItem('todolist', )
// }