
const NextElement = document.getElementById('Next')
const BtmDanger = document.getElementById('start')
const p1 = document.getElementById('p1')
// const output = document.getElementById('output')

const time = document.getElementById('time')
let mode = 'full'

NextElement.onclick = function () {
    localStorage.setItem('L3p1',document.getElementById('p1').innerHTML)
    localStorage.setItem('test3timer',document.getElementById('timer').innerHTML)
     window.location.href = 'List4.html'
}
p1.onmouseup = function () {
    p1.innerHTML = p1.innerHTML.replace(get_selected_text(),`<span class="d-inline text-bg-warning">${get_selected_text()}</span>`)
}
function get_selected_text() {
    if (window.getSelection()) {
        var select = window.getSelection()
        return select.toString()
    }
}

BtmDanger.onclick = function () {
    var count=150
    var counter=setInterval(timer, 1000)
    function timer()
    {
     count=count-1
     if (count <= 0)   
     {
       clearInterval(counter)
        return
     }
  document.getElementById("timer").innerHTML=count + " сек"
    }

    p1.style.visibility = "visible"
    NextElement.style.visibility = "visible"
    setTimeout(function() {
        localStorage.setItem('L3p1',document.getElementById('p1').innerHTML)
        localStorage.setItem('test3timer',document.getElementById('timer').innerHTML)
        window.location.href = 'List4.html'
    },150000) //функция вызова через определённое время 150000 = 150 секунды
}







