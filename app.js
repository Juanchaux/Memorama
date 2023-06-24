var seleccion = []

function eventot(numeroCarta) {
    let evento = document.getElementById(`carta${numeroCarta}`)
    if (evento.style.transform != 'rotateY(180deg)'){
        evento.style.transform = 'rotateY(180deg)'
        seleccion.push(numeroCarta)
    }
    if (seleccion.length == 2) {
        comparacion()
    }
}


function comparacion() {
    setTimeout(() => {
    let carta1 = document.getElementById(`carta${seleccion[0]}`)
    let carta2 = document.getElementById(`carta${seleccion[1]}`)
    if (carta1.innerHTML == carta2.innerHTML) {
        carta1.style.visibility = 'hidden'
        carta2.style.visibility = 'hidden'
        seleccion = []
    } else {
        carta1.style.transform = 'rotateY(0deg)'
        carta2.style.transform = 'rotateY(0deg)'
        seleccion = []
    }
}, 1000)

}


let Arreglo = [
    '<img src="/img/parejas-001.png" alt="pareja001"></img>',
     '<img src="/img/parejas-001.png" alt="pareja001"></img>',
     '<img src="/img/parejas-002.png" alt="pareja002"></img>',
     '<img src="/img/parejas-002.png" alt="pareja002"></img>',
     '<img src="/img/parejas-003.png" alt="pareja003"></img>',
     '<img src="/img/parejas-003.png" alt="pareja003"></img>',
     '<img src="/img/parejas-004.png" alt="pareja004"></img>',
     '<img src="/img/parejas-004.png" alt="pareja004"></img>',
     '<img src="/img/parejas-005.png" alt="pareja005"></img>',
     '<img src="/img/parejas-005.png" alt="pareja005"></img>',
     '<img src="/img/parejas-006.png" alt="pareja006"></img>',
     '<img src="/img/parejas-006.png" alt="pareja006"></img>',
     '<img src="/img/parejas-007.png" alt="pareja007"></img>',
     '<img src="/img/parejas-007.png" alt="pareja007"></img>',
     '<img src="/img/parejas-008.png" alt="pareja008"></img>',
     '<img src="/img/parejas-008.png" alt="pareja008"></img>'
    ];

function barajar() {
    return Arreglo.sort(function() {
        return Math.random() - 0.5
    })
}

function repartir() {
    let cartas = barajar()
    let html = ''
    for (let i = 0; i < 4; i++) {
        html = document.getElementById(`row${i}`)
        let guarda = []
        for (let j = 0; j < 4; j++) {
            guarda.push(`
            <div class="card"  onclick="eventot(${ i * 4 + j})">
                <div class="tarjeta" id="carta${i * 4 + j}">
                    <div class="cara inferior">
                    ${cartas[0]}
                    </div>
                    <div class="cara superior">
                        <img src="/img/tarjeta_cubierta.png" alt="card">
                    </div>
                </div>
           </div>`)

            cartas.shift()
        }
        html.innerHTML = guarda.join('')
        guarda = []
    }
    
}
repartir()

function inicio(){
    let inicio = document.getElementById('modal-intro');
    inicio.classList.add('none');
}