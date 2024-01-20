
const NextElement = document.getElementById('Next')
const BtmDanger = document.getElementById('start')
const container = document.getElementById('container')

NextElement.onclick = function () {
    localStorage.setItem('flexRadioDefault1',document.getElementById("flexRadioDefault1").checked)
    localStorage.setItem('flexRadioDefault2',document.getElementById("flexRadioDefault2").checked)
    localStorage.setItem('flexRadioDefault3',document.getElementById("flexRadioDefault3").checked)
    localStorage.setItem('flexRadioDefault4',document.getElementById("flexRadioDefault4").checked)
    localStorage.setItem('flexRadioDefault5',document.getElementById("flexRadioDefault5").checked)
    window.location.href = 'List3.html'
}



BtmDanger.onclick = function () {
    // p1.innerHTML = p1.innerHTML.split(`<span class="d-inline text-bg-warning">`).join("")
    var count=30
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
    container.style.visibility = "visible"
   
    setTimeout(function() {
        localStorage.setItem('flexRadioDefault1',document.getElementById("flexRadioDefault1").checked)
        localStorage.setItem('flexRadioDefault2',document.getElementById("flexRadioDefault2").checked)
        localStorage.setItem('flexRadioDefault3',document.getElementById("flexRadioDefault3").checked)
        localStorage.setItem('flexRadioDefault4',document.getElementById("flexRadioDefault4").checked)
        localStorage.setItem('flexRadioDefault5',document.getElementById("flexRadioDefault5").checked)
    
        window.location.href = 'List3.html'
    },30000) //функция вызова через определённое время 30000 = 30 секунды
}


