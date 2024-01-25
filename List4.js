const endTest = document.getElementById('endTest')
const BtmDanger = document.getElementById('start')
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')







p1.onmouseup = function () {
    p1.innerHTML = p1.innerHTML.replace(get_selected_text(),`<span class="d-inline text-bg-warning">${get_selected_text()}</span>`)
}
p2.onmouseup = function () {
    p2.innerHTML = p2.innerHTML.replace(get_selected_text(),`<span class="d-inline text-bg-warning">${get_selected_text()}</span>`)
}

function get_selected_text() {
    if (window.getSelection()) {
        var select = window.getSelection()
        return select.toString()
    }
}

endTest.onclick = function () {
    // window.location.href = 'index.html'
    localStorage.setItem('p1',document.getElementById('p1').innerHTML)
    localStorage.setItem('p2',document.getElementById('p2').innerHTML)
    localStorage.setItem('test4timer',document.getElementById('timer').innerHTML)
    window.location.href = 'List5.html'
   // <button onclick="location.href='result.html?'+txt1.value+'&'+txt2.value+'&'+txt3.value"> отправить в result.html </button>
}



BtmDanger.onclick = function () {
    // p1.innerHTML = p1.innerHTML.split(`<span class="d-inline text-bg-warning">`).join("")
    // p2.innerHTML = p2.innerHTML.split(`<span class="d-inline text-bg-warning">`).join("")
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
    p2.style.visibility = "visible"
    endTest.style.visibility = "visible"
    setTimeout(function() {
        localStorage.setItem('p1',document.getElementById('p1').innerHTML)
        localStorage.setItem('p2',document.getElementById('p2').innerHTML)
        localStorage.setItem('test4Timer',document.getElementById('timer').innerHTML)
        window.location.href = 'List5.html'
    },150000) //функция вызова через определённое время 150000 = 150 секунды

}

