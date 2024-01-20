//11
const NextElement = document.getElementById('Next')
const output = document.getElementById('output')
let mode = 'full'

NextElement.onclick = function () {
    localStorage.setItem('title',document.getElementById('title').value)
    localStorage.setItem('title1',document.getElementById('title1').value)
    localStorage.setItem('title2',document.getElementById('output').innerHTML)
    
    window.location.href = 'List1.html'
    return false;


}

update()
setInterval(update,1000)

function update() {
    output.textContent = format(mode)
}

function format(formatMode) {
    const now = new Date()
    switch (formatMode) {
        case 'time':
            return now.toLocaleTimeString()
            case 'date':
                return now.toLocaleDateString()
                case 'full':
                     return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
                     default:
                        return now.toLocaleTimeString()
    }
    
}