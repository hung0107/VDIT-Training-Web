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
    }

    input.value = '' 
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
        li.parentNode.removeChild(li)
    })

    li.querySelector('.fa-check').addEventListener('click', function(event) {
        
    })

    todos.appendChild(li)
}