
const NextElement = document.getElementById('Next')
const BtmDanger = document.getElementById('start')

NextElement.onclick = function () {
    localStorage.setItem('Grid',document.getElementById('Grid').innerHTML) 
    localStorage.setItem('test1timer',document.getElementById('timer').innerHTML)
    window.location.href = 'List2.html'
}

var table = document.getElementsByTagName("table")[0];
var cells = table.getElementsByTagName("td"); // 

for(var i = 1; i < cells.length; i++){
    // Cell Object
    var cell = cells[i];
    // Track with onclick
    cell.onclick = function(){
        var cellIndex  = this.cellIndex + 1;  

        var rowIndex = this.parentNode.rowIndex + 1;
       
        table.rows[rowIndex-1].cells[cellIndex-1].setAttribute('class', 'table-active')
    }
}



BtmDanger.onclick = function () {
    var count=15
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

    table.style.visibility = "visible"
    NextElement.style.visibility = "visible"
    setTimeout(function() {
        localStorage.setItem('Grid',document.getElementById('Grid').innerHTML) 
        localStorage.setItem('test1timer',document.getElementById('timer').innerHTML)
         window.location.href = 'List2.html'
     },15000) //функция вызова через определённое время 15000 = 15 секунды
}