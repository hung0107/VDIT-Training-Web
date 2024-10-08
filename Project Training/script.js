
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
            <div class ='con-tro'>
                <i class="fas fa-trash-alt"></i>
            </div>`
            
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

var aboutbtn = document.querySelector('#about-btn')
var about = document.querySelector('.about')
var xbtn = document.querySelector('.fa-x')
var modal = document.querySelector('.modal')
aboutbtn.addEventListener('click',function(event) {
    about.classList.remove('hide')
    modal.classList.remove('hide')
})
xbtn.addEventListener('click',function(event){
    about.classList.add('hide')
    modal.classList.add('hide')
} )


function bubbles() {
    var bub = document.createElement('div')
    bub.className = "bubbles"
    bub.style.left = Math.floor(Math.random()*window.innerWidth) + "px"
    bub.style.animationDelay = Math.floor(Math.random()*20) + "s"
    bub.style.width = Math.floor(Math.random()*70) + "px"
    bub.style.height = bub.style.width
    if(parseInt(bub.style.width) < 25) {
      bub.style.zIndex = "-1"
      bub.style.filter = "blur(1px)"
    }
    document.body.appendChild(bub)
   
    bub.addEventListener('click', function(e) {
        e.target.remove();
    })
    
    if(document.getElementsByClassName('bubbles').length > 50) {
      clearInterval(bubbles)
    }
  }
  
  var bubbles = setInterval(bubbles,10)


function seaweed() {
  var seaweed = document.createElement('div')
  seaweed.className = "seaweed"
  seaweed.style.left = Math.floor(Math.random()*window.innerWidth) + "px"
  seaweed.style.animationDelay = Math.floor(Math.random()*5) + "s"
  seaweed.style.height = Math.floor(Math.random()*150) + 50 + "px"
  document.body.appendChild(seaweed)
  if(document.getElementsByClassName('seaweed').length > (window.innerWidth/5)) {
    clearInterval(seaweedy)
  }
}

var seaweedy = setInterval(seaweed,10)

//eyes
var pupils = document.querySelectorAll(".pupil");

for (var i = 0; i < pupils.length; i++) {
    var offset = pupils[i].getBoundingClientRect();
    pupils[i]['centerX'] = offset.left + offset.width/2,
    pupils[i]['centerY'] = offset.bottom;
}

function goGoogly(e) {
	var pointerEvent = e;
    if (e.targetTouches && e.targetTouches[0]) {
    	e.preventDefault(); 
        pointerEvent = e.targetTouches[0];
        mouseX = pointerEvent.pageX;
        mouseY = pointerEvent.pageY;
    } else {
        mouseX = e.clientX + window.pageXOffset,
        mouseY = e.clientY + window.pageYOffset;
    }
for (var i = 0; i < pupils.length; i++) {
	    pupils[i]['radians'] = Math.atan2(mouseX - pupils[i]['centerX'], mouseY - pupils[i]['centerY']),
	    pupils[i]['degree'] = (pupils[i]['radians'] * (180 / Math.PI) * -1); 
	    pupils[i].style.transform = 'rotate('+ (pupils[i]['degree'] + 180) + 'deg)';
	}
}

window.addEventListener('mousemove', goGoogly);
window.addEventListener('touchstart', goGoogly);
window.addEventListener('touchmove', goGoogly);

// TIME COUNTER 

var check = true;
if (check == true) {
    var tc_status = "pause";
    var distance = 0 
    check = false;
}

var playbtn = document.querySelector('.fa-circle-play')
var pausebtn = document.querySelector('.fa-circle-pause')
playbtn.addEventListener('click',function(){
    // playbtn.classList.add('hide')
    // pausebtn.classList.remove('hide')
    playbtn.setAttribute("id", "hide1")
    pausebtn.removeAttribute("id", "hide1")
    tc_status = "play";
})

pausebtn.addEventListener('click',function(){
    pausebtn.setAttribute("id", "hide1")
    playbtn.removeAttribute("id", "hide1")
    tc_status = "pause";
})
var x = setInterval(function() {
    
    if (tc_status == "play") {
        distance = distance + 1000;
    }

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (hours < 10) {
        var hours_display = "0" + hours
    } else {
        var hours_display = hours
    }

    if (mins < 10) {
        var munites_display = "0" + mins
    } else {
        var munites_display = mins
    }
    
    if (seconds < 10) {
        var seconds_display = "0" + seconds
    } else {
        var seconds_display = seconds
    }
    document.getElementById("time-counter").innerHTML = hours_display + "h "
    + munites_display + "m " + seconds_display + "s ";
}, 1000);

/*QUOTES*/  
const quotes = ["It is never too late to be what you might have been.", "Ideation without execution is delusion.", "Opportunities don’t happen, you create them.", "It always seems impossible until it's done.", "Do the best you can. No one can do more than that."]
var quotes_index = 0;
var length = 0 
var y = setInterval(function() {
    if (quotes_index < 4) {
        quotes_index = quotes_index + 1;
    } else {
        quotes_index = 0;
    }
    var quote_content = document.getElementById("wrapper");
    var text = quotes[quotes_index];
    console.log(text)

    length = text.length;
    var root = document.documentElement;
    root.style.setProperty('--length', length);
    root.style.setProperty('--width', length + "ch");
    root.style.setProperty('--time', length/10 + "s");
    quote_content.innerHTML = 
    `<div id ="wrapper"> <div class ="typing-demo"> ${text}</div> </div>`;

}, 10000);