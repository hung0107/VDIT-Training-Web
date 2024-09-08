var input = document.querySelector('input')
var form = document.querySelector('form')
var todos = document.querySelector('.task-list')


form.addEventListener('submit', function(event) {
    event.preventDefault()
    console.log("ok")
    let val = input.value.trim()
    if(val){
        addTodoElement({
            text: val,
            status: 'completed',
        })
        addTodoElement({
            text: val,
            // status: 'completed',
        })
    }
})

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
        `<span>${todo.text}</span>
        <i class="fas fa-trash-alt"></i>
        <i class="fas fa-check"></i>`

    if(todo.status == 'completed'){
        li.setAttribute('class', 'completed')
    }

    todos.appendChild(li)
}
